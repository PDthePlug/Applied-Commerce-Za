"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLearningStore } from "@/lib/learning-store";
import { zimbabweCurriculum } from "@/lib/zimbabwe-curriculum";
import type { ZimbabweFormIndex } from "@/lib/zimbabwe-curriculum";

export function ProgressDashboard(){
 const [forms,setForms]=useState<ZimbabweFormIndex[]>([]);
 const {state}=useLearningStore();

 useEffect(()=>{
   zimbabweCurriculum.allForms().then(setForms);
 },[]);

 const allLessonIds=new Set(
   forms.flatMap(form=>form.terms.flatMap(term=>term.units))
     .filter(unit=>unit.type==="lesson")
     .map(unit=>unit.id)
 );
 const total=forms.reduce((sum,form)=>sum+form.unitCount,0);
 const done=Object.keys(state.completed).filter(id=>allLessonIds.has(id)).length;
 const pct=total?Math.round(done/total*100):0;

 return <div className="page progress-page">
  <section className="page-intro">
   <p className="eyebrow">Progress</p>
   <h1>See the work accumulating.</h1>
   <p>Completion is tracked across the four-year Zimbabwe O-Level journey on this device.</p>
  </section>

  <section className="progress-overview">
   <div><strong>{pct}%</strong><span>of the complete Forms 1–4 learning map</span></div>
   <div className="progress-track"><i style={{width:`${pct}%`}}/></div>
   <p>{done} of {total} lessons complete</p>
  </section>

  <div className="progress-grade-list">
   {forms.map(form=>{
     const ids=new Set(form.terms.flatMap(term=>term.units).filter(unit=>unit.type==="lesson").map(unit=>unit.id));
     const completed=Object.keys(state.completed).filter(id=>ids.has(id)).length;
     const formPct=form.unitCount?Math.round(completed/form.unitCount*100):0;
     return <Link href={`/learn/form/${form.form}`} key={form.form}>
      <span className="progress-grade-number">F{form.form}</span>
      <div>
       <p>{form.title}</p>
       <strong>Form {form.form}{form.form===4?" · Launch Year":""}</strong>
       <small>{completed} of {form.unitCount} completed</small>
      </div>
      <div className="progress-track"><i style={{width:`${formPct}%`}}/></div>
      {formPct===100?<CheckCircle2/>:<ArrowRight/>}
     </Link>;
   })}
  </div>
 </div>;
}
