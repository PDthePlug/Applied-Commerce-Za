"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { LearnerProfile, LearningState } from "./types";

const KEY = "applied-commerce-learning-state-v1";
const EVENT = "applied-commerce-learning-state-change";
let activeStorageScope: string | null = null;

function storageKey(scope?: string | null) {
  const resolved = scope === undefined ? activeStorageScope : scope;
  return resolved ? `${KEY}:${resolved}` : KEY;
}

export function setLearningStorageScope(userId: string | null) {
  activeStorageScope = userId;
  if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT));
}
const emptyState: LearningState = { version: 1, completed: {}, responses: {}, promptResponses: {} };
const emptyRaw = JSON.stringify(emptyState);

export function readLocalLearningState(scope?: string | null): LearningState { return parse(readRaw(scope)); }

function readRaw(scope?: string | null): string {
  if (typeof window === "undefined") return emptyRaw;
  return localStorage.getItem(storageKey(scope)) ?? emptyRaw;
}

function parse(raw: string): LearningState {
  try {
    const value = JSON.parse(raw) as Partial<LearningState>;
    if (value.version !== 1) return emptyState;
    return {
      version: 1,
      activeGrade: value.activeGrade,
      activeForm: value.activeForm,
      completed: value.completed ?? {},
      responses: value.responses ?? {},
      promptResponses: value.promptResponses ?? {},
      profile: value.profile ?? {},
      lastOpened: value.lastOpened,
    };
  } catch {
    return emptyState;
  }
}

export function replaceLearningState(state: LearningState, scope?: string | null) {
  localStorage.setItem(storageKey(scope), JSON.stringify(state));
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT, onStoreChange);
  };
}

const subscribeHydration = () => () => {};

export function useLearningStore() {
  const raw = useSyncExternalStore(subscribe, readRaw, () => emptyRaw);
  const hydrated = useSyncExternalStore(subscribeHydration, () => true, () => false);
  const state = useMemo(() => parse(raw), [raw]);

  const update = useCallback((fn: (current: LearningState) => LearningState) => {
    replaceLearningState(fn(parse(readRaw())));
  }, []);

  const markComplete = useCallback((unitId: string, complete=true) => update(current => {
    const completed={...current.completed};
    if (complete) completed[unitId]=new Date().toISOString(); else delete completed[unitId];
    return {...current, completed};
  }), [update]);

  const saveResponse = useCallback((unitId:string, value:string) => update(current => ({
    ...current, responses:{...current.responses,[unitId]:value}
  })), [update]);

  const savePromptResponse = useCallback((promptId:string, value:string) => update(current => ({
    ...current, promptResponses:{...current.promptResponses,[promptId]:value}
  })), [update]);

  const setProfile = useCallback((patch:Partial<LearnerProfile>) => update(current => {
    const profile={...(current.profile ?? {}),...patch};
    return {
      ...current,
      profile,
      activeGrade:profile.grade ?? current.activeGrade,
      activeForm:profile.form ?? current.activeForm,
    };
  }), [update]);

  const setLastOpened = useCallback((grade:number, term:number, unitId:string, form?:1|2|3|4) => update(current => ({
    ...current,
    activeGrade:grade,
    activeForm:form ?? current.activeForm,
    lastOpened:{grade,term,unitId,at:new Date().toISOString()}
  })), [update]);

  const completedIds = useMemo(() => new Set(Object.keys(state.completed)), [state.completed]);
  return {state, hydrated, completedIds, markComplete, saveResponse, savePromptResponse, setProfile, setLastOpened};
}
