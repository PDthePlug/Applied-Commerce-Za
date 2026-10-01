"use client";
import { useEffect, useState } from "react";
import { curriculum } from "@/lib/curriculum";
import type { CurriculumIndex } from "@/lib/types";
import { GradeCard } from "./grade-card";
import { useLearningStore } from "@/lib/learning-store";

export function LearnLibrary(){
 const [index,setIndex]=useState<CurriculumIndex|null>(null); const {state}=useLearningStore();
 useEffect(()=>{curriculum.index().then(setIndex)},[]);
 return <div className="page library-page"><section className="page-intro"><p className="eyebrow">Zimbabwe secondary pathway</p><h1>Four O-Level years. One launch journey.</h1><p>The five authored source stages are being re-sequenced across Forms 1–4. Source-stage cards remain visible during migration so no content is lost while the 12-term Zimbabwe delivery layer is built.</p></section><div className="grade-grid compact">{index?.grades.map(g=><GradeCard key={g.grade} grade={g} completed={Object.keys(state.completed).filter(id=>id.startsWith(`g${g.grade}-`)).length}/>)}</div></div>
}
