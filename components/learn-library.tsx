"use client";
import { useEffect, useState } from "react";
import { curriculum } from "@/lib/curriculum";
import type { CurriculumIndex } from "@/lib/types";
import { GradeCard } from "./grade-card";
import { useLearningStore } from "@/lib/learning-store";

export function LearnLibrary(){
 const [index,setIndex]=useState<CurriculumIndex|null>(null); const {state}=useLearningStore();
 useEffect(()=>{curriculum.index().then(setIndex)},[]);
 return <div className="page library-page"><section className="page-intro"><p className="eyebrow">Zimbabwe secondary pathway</p><h1>Five stages. One journey through secondary school.</h1><p>Select a stage to open its learning map. The authored sequence is preserved while the Zimbabwe edition is mapped across Forms 1–6.</p></section><div className="grade-grid compact">{index?.grades.map(g=><GradeCard key={g.grade} grade={g} completed={Object.keys(state.completed).filter(id=>id.startsWith(`g${g.grade}-`)).length}/>)}</div></div>
}
