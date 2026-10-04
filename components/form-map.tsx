"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, FileText, LockOpen } from "lucide-react";
import { zimbabweCurriculum } from "@/lib/zimbabwe-curriculum";
import type { ZimbabweFormIndex } from "@/lib/zimbabwe-curriculum";
import { useLearningStore } from "@/lib/learning-store";
import { hbcCompetencyLabels } from "@/lib/zimbabwe";

export function FormMap({form}:{form:number}){
  const [data,setData]=useState<ZimbabweFormIndex|null>(null);
  const {completedIds}=useLearningStore();

  useEffect(()=>{zimbabweCurriculum.form(form).then(setData)},[form]);

  const completed=useMemo(
    ()=>data?data.terms.flatMap(term=>term.units).filter(unit=>unit.type==="lesson"&&completedIds.has(unit.id)).length:0,
    [data,completedIds]
  );
  const pct=data?.unitCount?Math.round(completed/data.unitCount*100):0;

  if(!data) return <div className="page loading-page">Opening Form {form}…</div>;

  return <div className="page grade-map-page">
    <Link className="back-link" href="/learn"><ArrowLeft/> All forms</Link>

    <section className="grade-hero">
      <div>
        <p className="eyebrow">Zimbabwe O-Level · Form {form}{form===4?" · Launch Year":""}</p>
        <h1>{data.title}</h1>
        <p>{data.purpose}</p>
      </div>
      <div className="grade-progress">
        <strong>{pct}%</strong>
        <span>{completed} of {data.unitCount} lessons complete</span>
        <div className="progress-track"><i style={{width:`${pct}%`}}/></div>
      </div>
    </section>

    <div className="term-grid">
      {data.terms.map(term=>{
        const lessons=term.units.filter(unit=>unit.type==="lesson");
        const tc=lessons.filter(unit=>completedIds.has(unit.id)).length;
        const tp=lessons.length?Math.round(tc/lessons.length*100):0;
        const first=term.units[0];

        return <section className="term-card" key={term.term}>
          <header>
            <span>0{term.term}</span>
            <div><p>Term {term.term}</p><h2>{term.title}</h2></div>
          </header>
          <div className="term-stats">
            <span>{lessons.length} lessons</span>
            {term.assessmentCount>0&&<span>{term.assessmentCount} assessment{term.assessmentCount>1?"s":""}</span>}
          </div>
          <div className="term-hbc-focus">
            <small>HBC competency focus</small>
            <div>{term.competencies.map(id=><span key={id}>{hbcCompetencyLabels[id]}</span>)}</div>
            <p><strong>Applied context:</strong> {term.applicationContext}</p>
            <p><strong>Project focus:</strong> {term.projectFocus}</p>
            <div className="term-evidence-list">
              <small>Expected learner evidence</small>
              <ul>{term.learnerEvidence.map(item=><li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <div className="progress-track small"><i style={{width:`${tp}%`}}/></div>
          <div className="term-preview">
            {lessons.slice(0,4).map(unit=><div key={unit.id} className="term-preview-row">
              {completedIds.has(unit.id)?<Check/>:<LockOpen/>}
              <span>{unit.label}</span><strong>{unit.title}</strong>
            </div>)}
            {lessons.length>4&&<small>+ {lessons.length-4} more lessons</small>}
          </div>
          {first
            ? <Link className="term-open" href={first.href}>Open Term {term.term}<ArrowRight/></Link>
            : <span className="term-empty"><FileText/> No lessons available for this term</span>}
        </section>;
      })}
    </div>
  </div>;
}
