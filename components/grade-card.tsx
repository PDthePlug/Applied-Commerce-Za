"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { GradeSummary } from "@/lib/types";
import { gradeThemes } from "@/lib/curriculum";
import { zimbabweStage } from "@/lib/zimbabwe";

export function GradeCard({grade,completed}:{grade:GradeSummary;completed:number}) {
  const pct=grade.unitCount ? Math.round(completed/grade.unitCount*100):0;
  const stage=zimbabweStage(grade.grade);
  return <Link href={`/learn/${grade.grade}`} className={`grade-card grade-${grade.grade}`}>
    <div className="grade-card-top"><span>{stage.stage}</span><strong>{stage.shortPlacement}</strong><ArrowUpRight/></div>
    <div>
      <p className="eyebrow">{stage.schoolPlacement} · {gradeThemes[grade.grade]}</p>
      <h2>{grade.title.replace(/^APPLIED COMMERCE\s*[—-]\s*/i,"")}</h2>
    </div>
    <div className="grade-card-bottom">
      <div><strong>{grade.unitCount}</strong><span>lessons</span></div>
      <div><strong>4</strong><span>learning cycles</span></div>
      <div><strong>{pct}%</strong><span>complete</span></div>
    </div>
    <div className="mini-progress"><span style={{width:`${pct}%`}}/></div>
  </Link>;
}
