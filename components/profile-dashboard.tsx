"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Archive, BookOpenCheck, Database, NotebookPen } from "lucide-react";
import { useLearningStore } from "@/lib/learning-store";
import { useAuth } from "@/lib/auth-context";
import { defaultZimbabweFormForSourceGrade, zimbabweCurriculum } from "@/lib/zimbabwe-curriculum";
import type { ZimbabweFormIndex } from "@/lib/zimbabwe-curriculum";

export function ProfileDashboard(){
  const {state,setProfile}=useLearningStore();
  const {user,loading}=useAuth();
  const form=(state.profile?.form ?? state.activeForm ?? defaultZimbabweFormForSourceGrade(state.activeGrade)) as 1|2|3|4;
  const [formData,setFormData]=useState<ZimbabweFormIndex|null>(null);

  useEffect(()=>{
    zimbabweCurriculum.form(form).then(setFormData);
  },[form]);

  const lessonIds=new Set(
    formData?.terms.flatMap(term=>term.units).filter(unit=>unit.type==="lesson").map(unit=>unit.id) ?? []
  );
  const completed=Object.keys(state.completed).filter(id=>lessonIds.has(id)).length;
  const responseCount=Object.values(state.promptResponses).filter(value=>value.trim()).length;
  const noteCount=Object.values(state.responses).filter(value=>value.trim()).length;
  const pct=formData?.unitCount?Math.round(completed/formData.unitCount*100):0;
  const continueHref=state.lastOpened
    ? `/learn/${state.lastOpened.grade}/term/${state.lastOpened.term}/${state.lastOpened.unitId}`
    : `/learn/form/${form}`;

  const name=state.profile?.displayName?.trim() || "Learner";

  return <div className="profile-page">
    <section className="profile-hero">
      <div>
        <p className="eyebrow">Profile</p>
        <h1>{name}</h1>
        <p>Your Applied Commerce Zimbabwe learning record, current Form and evidence at a glance.</p>
      </div>
      <div className="profile-identity">
        <label>Name
          <input value={state.profile?.displayName ?? ""} onChange={event=>setProfile({displayName:event.target.value})} placeholder="Add your name"/>
        </label>
        <label>Current Form
          <select value={form} onChange={event=>setProfile({form:Number(event.target.value) as 1|2|3|4})}>
            {[1,2,3,4].map(value=><option key={value} value={value}>Form {value}{value===4?" · Launch Year":""}</option>)}
          </select>
        </label>
      </div>
    </section>

    <section className="profile-grid">
      <article className="profile-card">
        <div className="profile-card-icon"><BookOpenCheck aria-hidden="true"/></div>
        <div><p className="eyebrow">Learning progress</p><h2>Form {form}{form===4?" · Launch Year":""}</h2></div>
        <strong className="metric">{pct}%</strong>
        <p>{completed} of {formData?.unitCount ?? 0} lessons complete.</p>
        <Link href={continueHref}>Continue learning <ArrowRight/></Link>
      </article>

      <article className="profile-card">
        <div className="profile-card-icon"><Archive aria-hidden="true"/></div>
        <div><p className="eyebrow">Learning evidence</p><h2>Responses captured</h2></div>
        <strong className="metric">{responseCount}</strong>
        <p>Responses completed inside activities, reflections, tables, choices and portfolio work.</p>
        <Link href="/portfolio">Open portfolio <ArrowRight/></Link>
      </article>

      <article className="profile-card">
        <div className="profile-card-icon"><NotebookPen aria-hidden="true"/></div>
        <div><p className="eyebrow">Personal notes</p><h2>Lesson notes</h2></div>
        <strong className="metric">{noteCount}</strong>
        <p>Extra notes you chose to keep while learning.</p>
        <Link href="/portfolio">Review notes <ArrowRight/></Link>
      </article>

      <aside className="profile-record-note">
        <Database aria-hidden="true"/>
        <div><strong>{loading ? "Checking account sync…" : user ? "Your learning record is linked to this account." : "Your learning record is saved on this device."}</strong><p>{user ? "Progress, lesson notes and activity responses sync to the signed-in account when the connection is available. This device copy is retained so local work is not discarded." : "Sign in to bring this device’s existing progress, lesson notes and activity responses into an account and continue learning on another device."}</p></div>
      </aside>
    </section>
  </div>;
}
