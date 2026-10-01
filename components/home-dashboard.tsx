"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Archive, BookOpenCheck } from "lucide-react";
import { curriculum } from "@/lib/curriculum";
import { useLearningStore } from "@/lib/learning-store";
import { defaultZimbabweFormForSourceGrade, zimbabweCurriculum, zimbabwePlacementForSource } from "@/lib/zimbabwe-curriculum";
import type { ZimbabweFormIndex } from "@/lib/zimbabwe-curriculum";

type ActiveLesson = {
  label:string;
  title:string;
  form:1|2|3|4;
  term:1|2|3;
};

export function HomeDashboard(){
  const [formData,setFormData]=useState<ZimbabweFormIndex|null>(null);
  const [activeLesson,setActiveLesson]=useState<ActiveLesson|null>(null);
  const {state,hydrated}=useLearningStore();

  const currentForm=state.profile?.form ?? state.activeForm ?? defaultZimbabweFormForSourceGrade(state.activeGrade);

  useEffect(()=>{
    zimbabweCurriculum.form(currentForm).then(setFormData).catch(()=>setFormData(null));
  },[currentForm]);

  useEffect(()=>{
    const last=state.lastOpened;
    if(!last) return;
    let cancelled=false;
    curriculum.unit(last.grade,last.term,last.unitId)
      .then(unit=>{
        const placement=zimbabwePlacementForSource(last.grade,last.term,unit.startLesson,unit.type);
        if(!cancelled) setActiveLesson({
          label:unit.label,
          title:unit.title,
          form:placement.form,
          term:placement.term,
        });
      })
      .catch(()=>{ if(!cancelled) setActiveLesson(null); });
    return ()=>{ cancelled=true; };
  },[state.lastOpened]);

  const formLessonIds=new Set(
    formData?.terms
      .flatMap(term=>term.units)
      .filter(unit=>unit.type==="lesson")
      .map(unit=>unit.id) ?? []
  );
  const completed=Object.keys(state.completed).filter(id=>formLessonIds.has(id)).length;
  const progress=formData?.unitCount?Math.round(completed/formData.unitCount*100):0;
  const captured=Object.values(state.promptResponses).filter(value=>value.trim()).length;
  const displayName=state.profile?.displayName?.trim();
  const firstName=displayName?.split(/\s+/)[0];

  const lesson=state.lastOpened?activeLesson:null;
  const continueHref=state.lastOpened
    ? `/learn/${state.lastOpened.grade}/term/${state.lastOpened.term}/${state.lastOpened.unitId}`
    : `/learn/form/${currentForm}`;

  const greeting=state.lastOpened
    ? `Good to see you${firstName?`, ${firstName}`:""}.`
    : firstName
      ? `Welcome, ${firstName}.`
      : "Welcome to Applied Commerce.";

  return <div className="page home-page bis-home">
    <section className="home-today-hero">
      <div className="home-welcome-copy">
        <p className="eyebrow">{state.lastOpened?"Today · Applied Commerce Zimbabwe":"Applied Commerce Zimbabwe · Your learning starts here"}</p>
        <h1>{greeting}</h1>
        <p className="home-principle">Commerce is not something you memorise. It is something you learn to use.</p>
        <p className="home-lede">
          {state.lastOpened
            ? "Pick up where you left off. Your learning, responses and portfolio evidence are ready when you are."
            : "Learn how money, work, value and opportunity connect to everyday life — then put what you learn into practice."}
        </p>
      </div>

      <aside className="home-today-status" aria-label="Current Form progress">
        <span>Form {currentForm}{currentForm===4?" · Launch Year":""}</span>
        <strong>{hydrated?`${progress}% complete`:"Loading progress"}</strong>
        <div className="home-progress-track" aria-hidden="true"><i style={{width:`${progress}%`}}/></div>
        <small>{hydrated?`${completed} of ${formData?.unitCount ?? 0} lessons complete`:"Preparing your learning record"}</small>
      </aside>
    </section>

    <section className="home-dashboard-grid" aria-label="Your learning today">
      <article className="home-dashboard-card home-continue-card">
        <p className="eyebrow">{state.lastOpened?"Continue your learning":"Start your learning"}</p>
        <h2>{lesson?lesson.title:`Form ${currentForm} · ${formData?.title ?? "Applied Commerce"}`}</h2>
        <p>
          {lesson
            ? `Form ${lesson.form} · Term ${lesson.term} · ${lesson.label}. Pick up exactly where you left off.`
            : `Your Form ${currentForm} Applied Commerce journey is ready.`}
        </p>
        <small><BookOpenCheck/> {captured} responses captured so far</small>
        <Link className="home-primary-action" href={continueHref}>
          {state.lastOpened?"Continue learning":`Start Form ${currentForm}`} <ArrowRight/>
        </Link>
      </article>

      <article className="home-dashboard-card home-portfolio-card">
        <Archive aria-hidden="true"/>
        <p className="eyebrow">Your portfolio</p>
        <h3>{captured} responses captured.</h3>
        <p>Your portfolio grows as you complete activities, reflections and evidence across the curriculum.</p>
        <Link className="home-secondary-action" href="/portfolio">Open portfolio <ArrowRight/></Link>
      </article>
    </section>

    <Link className="home-curriculum-link" href="/learn">View the full curriculum <ArrowRight/></Link>
  </div>;
}
