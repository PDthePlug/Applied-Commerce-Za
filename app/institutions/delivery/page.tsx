import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarRange, CheckCircle2, Clock3, Layers3 } from "lucide-react";
import { zimbabweDeliveryModes, zimbabweTermDeliveryPlans } from "@/lib/zimbabwe-delivery";

export const metadata: Metadata = {
  title:"Zimbabwe School Delivery Model",
  description:"Flexible school delivery patterns and term pacing for Applied Commerce Zimbabwe Forms 1–4.",
};

export default function DeliveryPage(){
  return <div className="institutional-page delivery-page">
    <Link className="institutional-back" href="/institutions/deploy"><ArrowLeft/> Zimbabwe school deployment</Link>

    <section className="institutional-detail-hero delivery-hero">
      <p className="eyebrow">Implementation · Forms 1–4</p>
      <h1>One curriculum architecture. More than one workable timetable.</h1>
      <p>
        Applied Commerce is organised into Zimbabwe Forms and Terms, but its source lesson units are not treated as
        one-period lessons. Schools can group related material into facilitated learning sequences while protecting
        project time, learner action and evidence.
      </p>
      <div className="delivery-principle">
        <Clock3/>
        <span>These are recommended operating patterns, not Ministry timetable prescriptions. The school decides the final timetable.</span>
      </div>
    </section>

    <section className="institutional-intro delivery-intro">
      <p className="eyebrow">Three operating patterns</p>
      <h2>Choose the delivery rhythm that fits the school.</h2>
      <p>Every mode protects the same curriculum intent, learner evidence and project milestones.</p>
    </section>

    <section className="delivery-mode-grid">
      {zimbabweDeliveryModes.map(mode=><article key={mode.id}>
        <div className="delivery-mode-icon">{mode.id==="school-periods"?<CalendarRange/>:mode.id==="weekly-workshop"?<Clock3/>:<Layers3/>}</div>
        <p className="eyebrow">{mode.label}</p>
        <h3>{mode.rhythm}</h3>
        <span>{mode.bestFor}</span>
        <p>{mode.guidance}</p>
      </article>)}
    </section>

    <section className="delivery-sequence-section">
      <div className="institutional-section-heading">
        <p className="eyebrow">Twelve-term pacing map</p>
        <h2>Plan by learning sequence and evidence—not raw lesson count.</h2>
        <p>
          Recommended sequence counts are planning anchors. A sequence may combine several related source units and can
          span more than one classroom period when the learning requires observation, tracking, interviews or project work.
        </p>
      </div>

      <div className="delivery-form-stack">
        {[1,2,3,4].map(form=><section className="delivery-form" key={form}>
          <header><span>F{form}</span><h3>Form {form}{form===4?" · Launch Year":""}</h3></header>
          <div>
            {zimbabweTermDeliveryPlans.filter(plan=>plan.form===form).map(plan=><article key={plan.term} className="delivery-term">
              <div className="delivery-term-head">
                <span>Term {plan.term}</span>
                <h4>{plan.title}</h4>
                <small>{plan.sourceLessonUnits} source units → {plan.recommendedSequences} recommended learning sequences</small>
              </div>
              <p className="delivery-sequence-size">{plan.sequenceSize}</p>
              <div className="delivery-phases">
                {plan.phases.map(phase=><div key={phase.id}>
                  <strong>{phase.share}%</strong>
                  <span>{phase.label}</span>
                  <small>{phase.purpose}</small>
                </div>)}
              </div>
              <div className="delivery-term-evidence">
                <div><p>Project focus</p><strong>{plan.projectFocus}</strong></div>
                <div>
                  <p>Evidence to protect</p>
                  <ul>{plan.learnerEvidence.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul>
                </div>
              </div>
            </article>)}
          </div>
        </section>)}
      </div>
    </section>

    <section className="institutional-final-cta compact-cta">
      <p className="eyebrow">School implementation principle</p>
      <h2>Compress facilitation if needed. Do not compress the evidence out of the programme.</h2>
      <p>
        Observation, behaviour tracking, interviews, budgeting, project execution and reflection often happen between
        facilitated sessions. The timetable can flex; the applied evidence must remain.
      </p>
      <Link className="institutional-primary" href="/institutions/alignment">Review HBC alignment <ArrowRight/></Link>
    </section>
  </div>;
}
