import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, School, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Deploy Applied Commerce Zimbabwe",
  description: "Institutional deployment options for Applied Commerce in Zimbabwean secondary schools.",
};

const included = [
  "Applied Commerce Zimbabwe Forms 1–4 O-Level pathway",
  "Heritage-Based Curriculum competency mapping",
  "Guided digital learner experience",
  "Activities, reflection, projects and assessments",
  "Automatic portfolio evidence capture",
  "Learner progress and completion records",
  "Teacher and institutional visibility",
];

export default function DeployAppliedCommercePage() {
  return <div className="institutional-page institutional-detail-page">
    <Link className="institutional-back" href="/institutions"><ArrowLeft/> For institutions</Link>

    <section className="institutional-detail-hero">
      <p className="eyebrow">Offer 01 · Applied Commerce Zimbabwe</p>
      <h1>Financial capability, enterprise and adult readiness for Zimbabwean secondary learners.</h1>
      <p>
        Applied Commerce is a structured learning journey that helps learners understand money, work, value, enterprise and
        opportunity by applying what they learn to real decisions, projects and economic life around them.
      </p>
      <div className="institutional-actions">
        <Link className="institutional-primary" href="/institutions/demo">View institutional demo <ArrowRight/></Link>
        <Link className="institutional-text-link" href="/institutions/delivery">View school delivery model <ArrowRight/></Link>
      </div>
    </section>

    <section className="institutional-detail-grid">
      <article>
        <p className="eyebrow">What schools receive</p>
        <h2>More than access to content.</h2>
        <div className="institutional-check-list">
          {included.map(item=><span key={item}><Check/> {item}</span>)}
        </div>
      </article>
      <aside className="institutional-grade-journey">
        <span><strong>F1</strong><small>Money, beliefs & observation</small></span>
        <span><strong>F2</strong><small>Work, value & enterprise</small></span>
        <span><strong>F3</strong><small>Assets, systems, leverage & leadership</small></span>
        <span><strong>F4</strong><small>Wealth, adult systems & Life Launch</small></span>
      </aside>
    </section>

    <section className="institutional-pricing-section">
      <div className="institutional-section-heading">
        <p className="eyebrow">A plan for your school</p>
        <h2>Explore the fit, then agree the scope.</h2>
        <p>Explore the demonstration first. If it looks useful, we can discuss your learner numbers, delivery timetable, device access and support needs before preparing a tailored proposal.</p>
      </div>
      <div className="institutional-pricing-grid">
        <article><School/><span>Start with one cohort</span><strong>School introduction</strong><p>Agree a manageable starting point, onboarding and teacher support around your school timetable.</p></article>
        <article><Users/><span>Plan wider use</span><strong>School deployment</strong><p>Define the Forms, learner numbers, access arrangements and ongoing support your school needs.</p></article>
        <article><Users/><span>Discuss your needs</span><strong>Tailored proposal</strong><p>Costs follow the agreed scope, with setup and ongoing services explained separately.</p><a className="institutional-text-link dark-link" href="mailto:pdmpofu@gmail.com?subject=Applied%20Commerce%20Zimbabwe%20school%20enquiry">Discuss school fit <ArrowRight/></a></article>
      </div>
    </section>

    <section className="institutional-final-cta compact-cta">
      <p className="eyebrow">Pilot principle</p>
      <h2>Proof before a national-scale commitment.</h2>
      <p>Start with one school or cohort, measure participation and learner evidence, then use the results to decide what should scale.</p>
      <div className="institutional-actions final-actions">
        <Link className="institutional-primary" href="/institutions/demo">Open the demo <ArrowRight/></Link>
        <Link className="institutional-text-link dark-link" href="/institutions/delivery">Inspect delivery pacing <ArrowRight/></Link>
      </div>
    </section>
  </div>;
}
