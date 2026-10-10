"use client";

import { useEffect, useRef, useState } from "react";
import { useAuth, isSupabaseConfigured } from "@/lib/auth-context";
import { curriculum } from "@/lib/curriculum";
import { buildPortfolioDefinitions, responsesForPortfolio } from "@/lib/portfolio-model";
import type { UnitContent } from "@/lib/types";
import { readLocalLearningState, replaceLearningState, useLearningStore } from "@/lib/learning-store";
import type { LearningState } from "@/lib/types";

type Position = { grade: number; term: number };
type ProgressRow = { unitId: string; grade: number; term: number; completedAt?: string; lastOpenedAt?: string };
type NoteRow = { unitId: string; grade: number; term: number; note: string };
type PromptRow = { key: string; unitId: string; grade: number; term: number; value: string };
type ArtifactRow = { unitId: string; grade: number; term: number; markerKey: string; title: string; evidence: Array<{ key: string; label: string; position: number }> };
type SyncSnapshot = LearningState & { progressRows: ProgressRow[]; noteRows: NoteRow[]; promptRows: PromptRow[]; artifactRows: ArtifactRow[] };

let metadataPromise: Promise<Map<string, Position>> | null = null;
const unitCache = new Map<string, Promise<UnitContent>>();
function cachedUnit(grade: number, term: number, unitId: string) {
  const key = `${grade}/${term}/${unitId}`;
  let promise = unitCache.get(key);
  if (!promise) { promise = curriculum.unit(grade, term, unitId); unitCache.set(key, promise); }
  return promise;
}
function unitMetadata() {
  return metadataPromise ??= (async () => {
    const index = await curriculum.index();
    const grades = await Promise.all(index.grades.map(item => curriculum.grade(item.grade)));
    const map = new Map<string, Position>();
    for (const grade of grades) {
      for (const term of grade.terms) {
        for (const unit of [...term.units, ...term.assessments]) map.set(unit.id, { grade: grade.grade, term: term.term });
      }
    }
    return map;
  })();
}

function mergeState(local: LearningState, remote: Partial<LearningState>): LearningState {
  return {
    version: 1,
    activeGrade: local.activeGrade ?? remote.activeGrade,
    activeForm: local.activeForm ?? remote.activeForm,
    completed: { ...(remote.completed ?? {}), ...local.completed },
    responses: { ...(remote.responses ?? {}), ...local.responses },
    promptResponses: { ...(remote.promptResponses ?? {}), ...local.promptResponses },
    profile: { ...(remote.profile ?? {}), ...(local.profile ?? {}) },
    lastOpened: local.lastOpened ?? remote.lastOpened,
  };
}

async function buildSnapshot(state: LearningState): Promise<SyncSnapshot> {
  const metadata = await unitMetadata();
  const progressIds = new Set([...Object.keys(state.completed), ...(state.lastOpened ? [state.lastOpened.unitId] : [])]);
  const progressRows: ProgressRow[] = [];
  for (const unitId of progressIds) {
    const position = metadata.get(unitId) ?? (state.lastOpened?.unitId === unitId ? state.lastOpened : undefined);
    if (!position) continue;
    const row: ProgressRow = { unitId, grade: position.grade, term: position.term };
    if (state.completed[unitId]) row.completedAt = state.completed[unitId];
    if (state.lastOpened?.unitId === unitId) row.lastOpenedAt = state.lastOpened.at;
    progressRows.push(row);
  }
  const noteRows: NoteRow[] = [];
  for (const [unitId, note] of Object.entries(state.responses)) {
    const position = metadata.get(unitId);
    if (position) noteRows.push({ unitId, ...position, note });
  }
  const promptRows: PromptRow[] = [];
  for (const [key, value] of Object.entries(state.promptResponses)) {
    const unitId = key.split("::")[0];
    const position = metadata.get(unitId);
    if (position) promptRows.push({ key, unitId, ...position, value });
  }
  const artifactRows: ArtifactRow[] = [];
  const unitIds = [...new Set(Object.keys(state.promptResponses).map(key => key.split("::")[0]))];
  for (const unitId of unitIds) {
    const position = metadata.get(unitId);
    if (!position) continue;
    const unit = await cachedUnit(position.grade, position.term, unitId);
    for (const definition of buildPortfolioDefinitions(unit)) {
      const evidence = responsesForPortfolio(unit, definition, state.promptResponses).map((item, index) => ({ key: item.key, label: item.label, position: index }));
      artifactRows.push({ unitId, ...position, markerKey: definition.id, title: definition.title, evidence });
    }
  }
  return { ...state, progressRows, noteRows, promptRows, artifactRows };
}

async function requestSnapshot(method: "GET" | "POST", userId: string, snapshot?: SyncSnapshot) {
  const response = await fetch("/api/learning-state", {
    method,
    headers: {
      ...(method === "POST" ? { "content-type": "application/json" } : {}),
      "x-ac-expected-user-id": userId,
    },
    ...(snapshot ? { body: JSON.stringify(snapshot) } : {}),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Learning sync returned ${response.status}`);
  return response.json() as Promise<{ state?: Partial<LearningState>; ok?: boolean }>;
}

export function LearningPersistenceBridge() {
  const { user, loading } = useAuth();
  const { state, hydrated } = useLearningStore();
  const [readyUser, setReadyUser] = useState<string | null>(null);
  const activeUser = useRef<string | null>(null);
  const latestState = useRef(state);
  const bootstrappedUser = useRef<string | null>(null);

  useEffect(() => { latestState.current = state; }, [state]);

  useEffect(() => {
    if (loading) return;
    if (!isSupabaseConfigured() || !user) {
      activeUser.current = null;
      bootstrappedUser.current = null;
      return;
    }
    let cancelled = false;
    activeUser.current = user.id;
    bootstrappedUser.current = null;
    (async () => {
      try {
        const remote = await requestSnapshot("GET", user.id);
        if (cancelled || activeUser.current !== user.id) return;
        const local = readLocalLearningState();
        const merged = mergeState(local, remote.state ?? {});
        replaceLearningState(merged);
        bootstrappedUser.current = user.id;
        setReadyUser(user.id);
        const snapshot = await buildSnapshot(merged);
        if (!cancelled && activeUser.current === user.id) await requestSnapshot("POST", user.id, snapshot);
      } catch (error) {
        console.error("Learning sync bootstrap failed; local learning data was preserved.", error);
      }
    })();
    return () => { cancelled = true; };
  }, [user, loading]);

  useEffect(() => {
    if (!hydrated || !user || readyUser !== user.id || activeUser.current !== user.id || bootstrappedUser.current !== user.id) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      void buildSnapshot(latestState.current)
        .then(snapshot => {
          if (!cancelled && activeUser.current === user.id) return requestSnapshot("POST", user.id, snapshot);
          return undefined;
        })
        .catch(error => console.error("Learning sync failed; the local copy was preserved.", error));
    }, 700);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [state, hydrated, user, readyUser]);

  return null;
}
