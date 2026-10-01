import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Building2, ChartBar, FileCheck2, Layers3, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Applied Commerce Zimbabwe · For Institutions",
  description: "A practical financial capability, enterprise and life-readiness platform for Zimbabwean secondary schools and youth programmes.",
};

const evidenceFlow = [
  ["01", "Learn", "Structured content connects economic ideas to Zimbabwean life and work."],
  ["02", "Act", "Projects and activities move the learner from reading into doing."],
  ["03", "Evidence", "Relevant responses and artefacts are captured as learning happens."],
  ["04", "Portfolio", "Evidence accumulates into a longitudinal learner record."],
  ["05", "Report", "Facilitators and institutions can see participation, progress and proof."],
];

export default function InstitutionsPage() {
  return <div className="institutional-page">
    <section className="institutional-hero">
      <div className="institutional-hero-copy">
        <p className="eyebrow">Applied Commerce Zimbabwe · For institutions</p>
        <h1>Financial capability should become <em>visible behaviour.</em></h1>
        <p className="institutional-hero-lede">
          Applied Commerce turns financial literacy, enterprise, work-readiness and life skills into a guided learning journey
          where learners act, reflect, produce evidence and build a record of what they can actually do.
        </p>
        <div className="institutional-actions">
          <Link className="institutional-primary" href="/institutions/demo">View the Zimbabwe school demo <ArrowRight/></Link>
          <a className="institutional-text-link" href="#offers">Explore the two offers <ArrowRight/></a>
        </div>
      </div>
      <aside className="institutional-proof-card">
        <span>Zimbabwe edition · Forms 1–6</span>
        <strong>HBC competencies → action → evidence → portfolio → reporting</strong>
        <p>Designed around the practical-learning and competency ambitions of the Heritage-Based Curriculum 2024–2030.</p>
        <div>
          <small><BookOpenCheck/> Financial & enterprise capability</small>
          <small><FileCheck2/> Project evidence</small>
          <small><ChartBar/> School visibility</small>
        </div>
      </aside>
    </section>

    <section className="institutional-intro">
      <p className="eyebrow">Two commercial paths</p>
      <h2>Deploy Applied Commerce, or digitise an existing programme.</h2>
      <p>
        Applied Commerce Zimbabwe is the flagship school product. The same learning architecture can also turn an
        organisation&apos;s existing programme, workbook or curriculum into a persistent digital experience.
      </p>
    </section>

    <section className="institutional-offers" id="offers">
      <article className="institutional-offer-card deploy-card">
        <div className="institutional-offer-icon"><BookOpenCheck/></div>
        <p className="eyebrow">Offer 01</p>
        <h2>Deploy Applied Commerce® Zimbabwe</h2>
        <p>Bring practical financial capability, enterprise and adult-readiness learning to secondary learners.</p>
        <ul>
          <li>Forms 1–6 school-placement pathway</li>
          <li>HBC competency and project-learning alignment</li>
          <li>Digital activities, projects and reflection</li>
          <li>Automatic learner portfolio evidence</li>
          <li>School progress and evidence reporting</li>
        </ul>
        <div className="institutional-fit">
          <span>Built for</span>
          <p>Independent schools · school groups · foundations · banks · youth-development programmes</p>
        </div>
        <Link href="/institutions/deploy">Explore Zimbabwe school deployment <ArrowRight/></Link>
      </article>

      <article className="institutional-offer-card digitise-card">
        <div className="institutional-offer-icon"><Layers3/></div>
        <p className="eyebrow">Offer 02</p>
        <h2>Digitise Your Programme</h2>
        <p>You already have the methodology. We turn it into a measurable, guided digital learning journey.</p>
        <ul>
          <li>Your curriculum, programme and brand</li>
          <li>Guided learner progression</li>
          <li>Evidence capture and portfolios</li>
          <li>Facilitator, cohort and programme visibility</li>
        </ul>
        <div className="institutional-fit">
          <span>Built for</span>
          <p>Youth programmes · NGOs · foundations · training organisations · education initiatives</p>
        </div>
        <Link href="/institutions/digitise">Explore programme digitisation <ArrowRight/></Link>
      </article>
    </section>

    <section className="institutional-evidence-section">
      <div className="institutional-section-heading">
        <p className="eyebrow">The difference</p>
        <h2>A completed lesson says a learner reached the end. Evidence shows what the learner did.</h2>
      </div>
      <div className="institutional-evidence-flow">
        {evidenceFlow.map(([number,title,detail])=><article key={number}>
          <span>{number}</span><h3>{title}</h3><p>{detail}</p>
        </article>)}
      </div>
    </section>

    <section className="institutional-operating-model">
      <div>
        <p className="eyebrow">From learning material to school infrastructure</p>
        <h2>The learner experience is only one layer.</h2>
        <p>
          The institutional product is designed around the full delivery chain: learner, facilitator, class or cohort,
          school leadership and sponsor visibility.
        </p>
      </div>
      <div className="institutional-layer-stack">
        <span><Sparkles/> Learner journey</span>
        <span><Building2/> Teacher & cohort operations</span>
        <span><ChartBar/> School & sponsor reporting</span>
      </div>
    </section>

    <section className="institutional-final-cta">
      <p className="eyebrow">Alignment note</p>
      <h2>Designed to support HBC competencies without claiming Ministry approval.</h2>
      <p>The Zimbabwe edition is being localised for the three-term school calendar, Forms 1–6 and Zimbabwean economic life. Formal prescribed-textbook approval is a separate process.</p>
      <Link className="institutional-primary" href="/institutions/demo">Open the institutional demo <ArrowRight/></Link>
    </section>
  </div>;
}
