"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Menu, NotebookPen, X } from "lucide-react";
import { curriculum } from "@/lib/curriculum";
import type { UnitContent } from "@/lib/types";
import { applyZimbabweUnitOverlay } from "@/lib/zimbabwe-content";
import { ContentBlocks } from "./content-blocks";
import { useLearningStore } from "@/lib/learning-store";
import {
  zimbabweCurriculum,
  zimbabwePlacementForSource,
} from "@/lib/zimbabwe-curriculum";
import { hbcCompetencyLabels } from "@/lib/zimbabwe";
import type {
  ZimbabweFormIndex,
  ZimbabwePlacement,
  ZimbabweUnitRef,
} from "@/lib/zimbabwe-curriculum";

export function LessonReader({grade,term,unitId}:{grade:number;term:number;unitId:string}){
 const [formData,setFormData]=useState<ZimbabweFormIndex|null>(null);
 const [placement,setPlacement]=useState<ZimbabwePlacement|null>(null);
 const [unit,setUnit]=useState<UnitContent|null>(null);
 const [menu,setMenu]=useState(false);
 const {state,completedIds,markComplete,saveResponse,savePromptResponse,setLastOpened}=useLearningStore();

 useEffect(()=>{
   let cancelled=false;
   (async()=>{
     const loaded=applyZimbabweUnitOverlay(await curriculum.unit(grade,term,unitId));
     const mapped=zimbabwePlacementForSource(grade,term,loaded.startLesson,loaded.type);
     const form=await zimbabweCurriculum.form(mapped.form);
     if(cancelled) return;
     setUnit(loaded);
     setPlacement(mapped);
     setFormData(form);
     setLastOpened(grade,term,unitId,mapped.form);
     window.scrollTo(0,0);
   })();
   return ()=>{cancelled=true;};
 },[grade,term,unitId,setLastOpened]);

 const targetTerm=placement&&formData
   ? formData.terms.find(item=>item.term===placement.term) ?? null
   : null;
 const sequence=useMemo<ZimbabweUnitRef[]>(()=>targetTerm?.units ?? [],[targetTerm]);
 const pos=sequence.findIndex(item=>item.id===unitId);
 const prev=pos>0?sequence[pos-1]:null;
 const next=pos>=0&&pos<sequence.length-1?sequence[pos+1]:null;
 const currentRef=pos>=0?sequence[pos]:null;
 const hbc=currentRef?.hbc ?? null;
 const response=state.responses[unitId]??"";
 const complete=completedIds.has(unitId);
 const pct=sequence.length?Math.round((Math.max(pos,0)+1)/sequence.length*100):0;

 if(!unit||!formData||!placement||!targetTerm) return <div className="reader-loading">Opening lesson…</div>;

 return <div className="reader-shell">
  <header className="reader-topbar">
   <Link href={`/learn/form/${placement.form}`} className="reader-brand">
    <span>AC</span>
    <div><strong>Form {placement.form}</strong><small>Term {placement.term}</small></div>
   </Link>
   <div className="reader-progress">
    <span>{unit.label}</span>
    <div className="progress-track"><i style={{width:`${pct}%`}}/></div>
    <strong>{pos+1}/{sequence.length}</strong>
   </div>
   <button className="reader-menu-button" onClick={()=>setMenu(true)} aria-label="Open term map"><Menu/></button>
  </header>

  <aside className={`reader-rail ${menu?"open":""}`}>
   <div className="rail-head">
    <div><p>Form {placement.form}</p><strong>Term {placement.term} · {targetTerm.title}</strong></div>
    <button onClick={()=>setMenu(false)} aria-label="Close"><X/></button>
   </div>
   <Link className="rail-back" href={`/learn/form/${placement.form}`}><ArrowLeft/> Form map</Link>
   <nav>
    {sequence.map((item,index)=><Link
      onClick={()=>setMenu(false)}
      className={`${item.id===unitId?"current":""} ${completedIds.has(item.id)?"complete":""}`}
      href={item.href}
      key={item.id}
    >
      <span>{completedIds.has(item.id)?<Check/>:index+1}</span>
      <div><small>{item.label}</small><strong>{item.title}</strong></div>
    </Link>)}
   </nav>
  </aside>

  {menu&&<button className="reader-scrim" onClick={()=>setMenu(false)} aria-label="Close menu"/>}

  <main className="reader-stage">
    <article className="lesson-document">
      <header className="lesson-heading">
       <p className="eyebrow">Form {placement.form} · Term {placement.term} · {unit.label}</p>
       <h1>{unit.title}</h1>
      </header>
      {hbc&&<section className="hbc-evidence" aria-label="Heritage-Based Curriculum learning evidence">
        <div className="hbc-evidence-copy">
          <small>HBC learning evidence</small>
          <strong>{hbc.evidenceMode==="assessment"?"Assessment":hbc.evidenceMode[0].toUpperCase()+hbc.evidenceMode.slice(1)}</strong>
          <p>
            {hbc.communityApplication
              ?"This lesson applies learning to household, community or local economic life."
              :"This lesson builds capability that feeds into the term's applied evidence."}
            {hbc.heritageApplication
              ?" It also connects learning to community knowledge, relationships or locally rooted practice."
              :""}
          </p>
        </div>
        <div className="hbc-evidence-tags">
          {hbc.competencies.slice(0,6).map(id=><span key={id}>{hbcCompetencyLabels[id]}</span>)}
        </div>
      </section>}
      <ContentBlocks
        blocks={unit.blocks}
        unitId={unitId}
        promptResponses={state.promptResponses}
        onSavePromptResponse={savePromptResponse}
      />
    </article>

    <section className="workbook-panel">
      <div className="workbook-title"><NotebookPen/><div><p className="eyebrow">Lesson notes</p><h2>Anything you want to remember</h2></div></div>
      <p>Your responses are captured beside each activity, reflection, table and workbook field. Use this separate space only for extra notes you want to keep about the lesson.</p>
      <textarea value={response} onChange={event=>saveResponse(unitId,event.target.value)} placeholder="Add a note about this lesson…" rows={6}/>
      <div className="workbook-actions">
       <span>{response?"Note kept on this device":"No lesson note yet"}</span>
       <button className={complete?"completed":""} onClick={()=>markComplete(unitId,!complete)}>
        {complete?<><CheckCircle2/>Completed</>:<><Check/>Mark lesson complete</>}
       </button>
      </div>
    </section>

    <footer className="reader-footer">
      {prev
       ? <Link href={prev.href}><ArrowLeft/><span><small>Previous</small><strong>{prev.title}</strong></span></Link>
       : <span/>}
      {next
       ? <Link className="next" href={next.href}><span><small>Next</small><strong>{next.title}</strong></span><ArrowRight/></Link>
       : <Link className="next" href={`/learn/form/${placement.form}`}>
          <span><small>Term complete</small><strong>Return to Form {placement.form}</strong></span><ArrowRight/>
         </Link>}
    </footer>
  </main>
 </div>;
}
