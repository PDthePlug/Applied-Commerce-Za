import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileCheck2, MapPinned, ShieldCheck } from "lucide-react";
import { hbcCompetencyLabels, zimbabweEdition, zimbabweOLevelPlan, zimbabweTargetTerms } from "@/lib/zimbabwe";

export const metadata: Metadata = {
  title: "HBC Alignment Matrix",
  description: "Applied Commerce Zimbabwe alignment across Forms 1–4, HBC competency focus, local application and learner evidence.",
};

export default function HbcAlignmentPage(){
  return <div className="institutional-page hbc-alignment-page">
    <Link className="institutional-back" href="/institutions"><ArrowLeft/> For institutions</Link>

    <section className="institutional-detail-hero hbc-alignment-hero">
      <p className="eyebrow">Zimbabwe Edition · Curriculum alignment</p>
      <h1>See exactly how the four-year pathway turns HBC intent into learner evidence.</h1>
      <p>
        Applied Commerce Zimbabwe maps Forms 1–4 into twelve delivery terms. Each term declares the competencies
        it develops, the Zimbabwean context where learners apply them, and the evidence learners are expected to produce.
      </p>
      <div className="hbc-alignment-notice">
        <ShieldCheck/>
        <span>{zimbabweEdition.alignmentNotice}</span>
      </div>
    </section>

    <section className="hbc-alignment-summary">
      <article><strong>4</strong><span>O-Level forms</span></article>
      <article><strong>12</strong><span>Zimbabwe school terms</span></article>
      <article><strong>382</strong><span>reviewed source lessons</span></article>
      <article><strong>11</strong><span>internal HBC competency tags</span></article>
    </section>

    <section className="hbc-alignment-intro">
      <div>
        <p className="eyebrow">How to read the matrix</p>
        <h2>Competency → local application → project focus → evidence.</h2>
      </div>
      <p>
        The alignment is designed to support practical, learner-centred delivery. It does not turn every Applied Commerce
        project into an official School-Based Project automatically; schools remain responsible for applying current
        Ministry and ZIMSEC assessment requirements.
      </p>
    </section>

    <div className="hbc-form-stack">
      {zimbabweOLevelPlan.map(plan=>{
        const terms=zimbabweTargetTerms.filter(item=>item.form===plan.form);
        return <section className="hbc-form-section" key={plan.form}>
          <header className="hbc-form-heading">
            <div className="hbc-form-number">F{plan.form}</div>
            <div>
              <p>Form {plan.form}{plan.form===4?" · Launch Year":""}</p>
              <h2>{plan.title}</h2>
              <span>{plan.purpose}</span>
            </div>
          </header>

          <div className="hbc-term-matrix">
            {terms.map(term=><article className="hbc-term-row" key={term.term}>
              <div className="hbc-term-title">
                <span>Term {term.term}</span>
                <h3>{term.title}</h3>
                <small>Zimbabwe O-Level · Form {term.form} · Term {term.term}</small>
              </div>

              <div className="hbc-term-column">
                <p><MapPinned/> Applied context</p>
                <span>{term.applicationContext}</span>
              </div>

              <div className="hbc-term-column">
                <p><FileCheck2/> Applied evidence</p>
                <strong>{term.projectFocus}</strong>
                <ul>{term.learnerEvidence.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul>
              </div>

              <div className="hbc-term-column hbc-term-competencies">
                <p>HBC competency focus</p>
                <div>{term.competencies.map(id=><span key={id}>{hbcCompetencyLabels[id]}</span>)}</div>
              </div>
            </article>)}
          </div>
        </section>;
      })}
    </div>

    <section className="institutional-final-cta compact-cta">
      <p className="eyebrow">From matrix to delivery</p>
      <h2>The next layer is what schools can see after learners start.</h2>
      <p>
        Applied Commerce captures responses, project artefacts and completion evidence so the programme can move from
        curriculum intent into facilitator, school and sponsor visibility.
      </p>
      <Link className="institutional-primary" href="/institutions/demo">View the institutional demo <ArrowRight/></Link>
    </section>
  </div>;
}
