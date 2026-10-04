"use client";

import { useEffect, useState } from "react";
import { zimbabweCurriculum } from "@/lib/zimbabwe-curriculum";
import type { ZimbabweFormIndex } from "@/lib/zimbabwe-curriculum";
import { FormCard } from "./form-card";
import { useLearningStore } from "@/lib/learning-store";

export function LearnLibrary(){
  const [forms,setForms]=useState<ZimbabweFormIndex[]>([]);
  const {state}=useLearningStore();

  useEffect(()=>{
    zimbabweCurriculum.allForms().then(setForms);
  },[]);

  const completedFor=(form:ZimbabweFormIndex)=>{
    const ids=new Set(
      form.terms
        .flatMap(term=>term.units)
        .filter(unit=>unit.type==="lesson")
        .map(unit=>unit.id)
    );
    return Object.keys(state.completed).filter(id=>ids.has(id)).length;
  };

  return <div className="page library-page">
    <section className="page-intro">
      <p className="eyebrow">Zimbabwe O-Level pathway</p>
      <h1>Four Forms. Three terms each. One launch journey.</h1>
      <p>Applied Commerce follows a four-year O-Level pathway across twelve Zimbabwe school terms, building from money foundations to enterprise, systems, leadership and the Form 4 Life Launch.</p>
    </section>
    <div className="grade-grid compact">
      {forms.map(form=><FormCard key={form.form} form={form} completed={completedFor(form)}/>)}
    </div>
  </div>;
}
