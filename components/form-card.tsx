"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ZimbabweFormIndex } from "@/lib/zimbabwe-curriculum";

export function FormCard({form,completed}:{form:ZimbabweFormIndex;completed:number}){
  const pct=form.unitCount?Math.round(completed/form.unitCount*100):0;
  const styleGrade=7+form.form;
  return <Link href={`/learn/form/${form.form}`} className={`grade-card grade-${styleGrade}`}>
    <div className="grade-card-top"><span>Form</span><strong>{form.form}</strong><ArrowUpRight/></div>
    <div>
      <p className="eyebrow">{form.form===4?"Launch Year":"O-Level pathway"}</p>
      <h2>{form.title}</h2>
      <p>{form.purpose}</p>
    </div>
    <div className="grade-card-bottom">
      <div><strong>{form.unitCount}</strong><span>lessons</span></div>
      <div><strong>3</strong><span>terms</span></div>
      <div><strong>{pct}%</strong><span>complete</span></div>
    </div>
    <div className="mini-progress"><span style={{width:`${pct}%`}}/></div>
  </Link>;
}
