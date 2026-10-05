import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonReader } from "@/components/lesson-reader";
import { zimbabwePlacementForSource } from "@/lib/zimbabwe-curriculum";

export async function generateMetadata({params}:{params:Promise<{grade:string;term:string;unit:string}>}):Promise<Metadata>{
  const p=await params;
  const grade=Number(p.grade);
  const sourceTerm=Number(p.term);
  const lessonMatch=p.unit.match(/-l(\d+)-/);
  const startLesson=lessonMatch?Number(lessonMatch[1]):undefined;
  const placement=zimbabwePlacementForSource(grade,sourceTerm,startLesson,p.unit.includes("-assessment-")?"assessment":"lesson");
  return {title:`Form ${placement.form} · Term ${placement.term}`};
}

export default async function UnitPage({params}:{params:Promise<{grade:string;term:string;unit:string}>}){
  const p=await params;
  const grade=Number(p.grade),term=Number(p.term);
  if(![8,9,10,11,12].includes(grade)||![1,2,3,4].includes(term)) notFound();
  return <LessonReader grade={grade} term={term} unitId={p.unit}/>;
}
