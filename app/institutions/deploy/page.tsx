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
        <p className="eyebrow">Indicative Zimbabwe launch model</p>
        <h2>Start with one defined pilot, prove the learning, then scale.</h2>
        <p>USD figures are reference prices. Where applicable, schools can be quoted an equivalent ZiG amount at the prevailing official rate.</p>
      </div>
      <div className="institutional-pricing-grid">
        <article><School/><span>One-term school pilot</span><strong>US$2,500</strong><p>One defined school cohort with onboarding, delivery support and outcome reporting.</p></article>
        <article><Users/><span>School licence</span><strong>US$8,500 / year</strong><p>Forms 1–4 access within an agreed learner and implementation scope.</p></article>
        <article><Users/><span>Sponsored deployment</span><strong>US$18 / learner</strong><p>For funded school networks, foundations and youth programmes.</p></article>
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
