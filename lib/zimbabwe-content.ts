import type { ContentBlock, UnitContent, UnitSummary } from "./types";

export type ZimbabweBlockOverride =
  | {index:number; kind:"text"; text:string}
  | {index:number; kind:"table"; rows:string[][]}
  | {index:number; kind:"remove"};

export type ZimbabweUnitOverride = {
  title?: string;
  label?: string;
  blocks?: ZimbabweBlockOverride[];
};

/**
 * Zimbabwe localisation is deliberately explicit and unit-scoped.
 *
 * Do not use this table for bulk country-name or currency replacement.
 * Every entry should represent an editorially reviewed Zimbabwe adaptation.
 * Source unit IDs remain unchanged so learner evidence and provenance survive.
 */
export const zimbabweContentOverrides: Record<string,ZimbabweUnitOverride> = {
  "g8-t4-l78-077": {
    title: "LOOKING BACK AT FORM 1",
    blocks: [
      {index:2,kind:"text",text:"See your entire Form 1 journey in one view."},
      {index:6,kind:"text",text:"This year, you travelled through three Applied Commerce terms:"},
      {index:7,kind:"table",rows:[
        ["Term","Theme","Big Question"],
        ["1","Identity, Beliefs, Saving & First Income","Who am I with money, and what can I begin to do with what I have?"],
        ["2","Earning, Spending, Budgeting & Habit Formation","How do money choices and repeated actions shape my direction?"],
        ["3","Financial Identity, Agency & First Capstone","Who am I becoming, and what evidence can I carry forward?"],
      ]},
      {index:23,kind:"text",text:"Mama Rose — who proves that business is people (you will meet her properly in Form 2)"},
      {index:38,kind:"text",text:"Look through your portfolio — all three terms. List the pieces of evidence that prove your growth."},
      {index:39,kind:"text",text:"Evidence from Term 1 (identity, beliefs, saving, first income):"},
      {index:40,kind:"text",text:"Evidence from Term 2 (earning, spending, budgeting, habit formation):"},
      {index:41,kind:"text",text:"Evidence from Term 3 (financial identity, agency, habit strength):"},
      {index:42,kind:"text",text:"Final project evidence from Term 3 (project, presentation, reflection):"},
      {index:45,kind:"text",text:"Key idea: You cannot measure everything that matters. You cannot count every moment of growth. Some changes are invisible, like a seed underground. But they are real. Trust the invisible growth. It will show when it is ready. Your portfolio is not the full story of your Form 1 journey. It is the visible portion of a much larger transformation."},
      {index:46,kind:"text",text:"Here’s the tension: faith. You have to believe you are growing even when you cannot see it. You have to trust the process even when the results are not visible. That is hard. We want evidence. We want proof. But the most important changes happen beneath the surface, in the dark, where no one can see. Trust the dark. Trust the roots. The shoots will come — maybe not in Form 1, maybe in Form 2, maybe years from now. But they will come if you keep watering."},
      {index:49,kind:"text",text:"Question 1: What is one thing you will remember from Form 1 forever? What are you most proud of? Who are you now compared with the beginning of the year?"},
      {index:50,kind:"text",text:"Question 2: What is one seed you planted this year that has not yet grown — a skill you began, a habit you started, a question you asked but have not yet answered? How will you keep watering it in Form 2?"},
      {index:58,kind:"text",text:"| Date | | | Lesson | Lesson 78 — Form 1 Year in Review | | Experiment/Observation | I reviewed my entire Form 1 journey and inventoried my evidence of growth. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l79-078": {
    title: "LOOKING AHEAD TO FORM 2",
    blocks: [
      {index:2,kind:"text",text:"Imagine yourself in Form 2."},
      {index:6,kind:"table",rows:[
        ["Term","Meaning"],
        ["Ahead","In the future"],
        ["Intention","A purpose or plan"],
        ["Carry forward","To take with you"],
      ]},
      {index:7,kind:"text",text:"📘 Form 2 Is Waiting"},
      {index:8,kind:"text",text:"Next year, you will be in Form 2. You will be older. You will have more choices. You will face new challenges."},
      {index:10,kind:"text",text:"Myah thinks about Form 2. She does not know exactly what it will bring. But she knows what she will carry: her notebook. Her questions. Her tracking skills. Her budgeting habits. Her 21-day tracker evidence. Her identity as someone who notices, who asks, who acts. Her final project — proof that she can earn, save, and complete something real. Her Tension/Experiment Log — three terms of data on her own becoming. Her Thinking Equations — compressed truths that have become part of how she sees the world. She writes: Form 2, I am coming. I do not know what you will ask of me. But I know what I will bring. I will bring everything I have learned. I will bring myself — the person I have become this year. That is enough. That is everything."},
      {index:16,kind:"text",text:"✍️ Activity 78: My Form 2 Intentions — With Bridge Statement"},
      {index:18,kind:"text",text:"What do you want to be true about you in Form 2?"},
      {index:24,kind:"text",text:"What is the ONE most important thing you will carry from Form 1 into Form 2? Write it as a statement of intention."},
      {index:25,kind:"text",text:"“In Form 2, I will carry forward _________________. When I face challenges, I will remember _________________. The person I am becoming is _________________.”"},
      {index:28,kind:"text",text:"Key idea: You are not walking into Form 2 empty-handed. You are walking in with a year of evidence. Evidence that you can change. Evidence that you can persist. Evidence that you can become. Carry that evidence like a lantern. It will light the way. When Form 2 gets hard — and it will — go back to your portfolio. Look at your Identity Map. Look at your budget. Look at your habit tracker. Look at your final project. Remember who you were and what you did. The evidence is not for the teacher. The evidence is for you. It is proof that you have done hard things before. You can do them again."},
      {index:29,kind:"text",text:"Here’s the tension: Form 2 will also demand things you are not yet ready for. It will test beliefs you thought were settled. It will challenge habits you thought were locked in. It will present situations your Form 1 self could not have imagined. And here is the thing: Myah’s story is your story. In Form 2, Myah will face a system that does not reward rule-followers. She will follow every rule and get silence. She will have to choose: accept the silence, or make herself impossible to ignore. You will face your own version of that moment. The question is not whether you will be tested. The question is whether the foundation you built in Form 1 will hold when the test comes."},
      {index:30,kind:"text",text:"Your Next Step: What is one thing you fear about Form 2? What is one thing you are excited about? Name both. Both are true. Both are data."},
      {index:32,kind:"text",text:"Question 1: What is one thing you will carry forward to Form 2? What is one challenge you might face? What tool from this year will help you face it?"},
      {index:33,kind:"text",text:"Question 2: In Form 2, Myah will learn that following all the rules is not always enough — that sometimes you have to make yourself impossible to ignore. Have you ever experienced something like that? If not, how do you think you would respond if you did? What from Form 1 has prepared you for that moment?"},
      {index:35,kind:"text",text:"Tell someone at home what you are excited about for Form 2. Tell them what you are nervous about. Let them hold both with you."},
      {index:39,kind:"text",text:"If you cannot tell anyone: Write a letter to your Form 2 self. Tell them what you are carrying forward. Tell them what you are afraid of. Tell them what you hope for. Keep the letter. Open it in the middle of Form 2 when you need to remember."},
      {index:41,kind:"text",text:"| Date | | | Lesson | Lesson 79 — Form 2 Intentions | | Experiment/Observation | I set my intentions for Form 2 and identified what I will carry forward. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l80-079": {
    title: "FINAL PORTFOLIO AND FAREWELL TO FORM 1",
    blocks: [
      {index:5,kind:"text",text:"📘 Your Complete Form 1 Portfolio"},
      {index:7,kind:"text",text:"Term 1: ☐ Identity Map and Gap Analysis ☐ Belief Inventory with Cost Audit ☐ “I Can” Statements with External Validation ☐ Goal List with Trade-Off ☐ Savings Goal and Plan ☐ First Income / Value-Creation Evidence ☐ Term 1 Reflection ☐ Letter to Future Self"},
      {index:8,kind:"text",text:"Term 2: ☐ Money Flow or Resource Map ☐ Skill-to-Income Inventory ☐ Spending Trigger Audit ☐ First Budget ☐ Spending Tracker ☐ Habit Loop Analysis ☐ Saving / Budgeting Routine ☐ Term 2 Reflection ☐ Letter to Future Self"},
      {index:9,kind:"text",text:"Term 3: ☐ Compound-Growth or Habit Evidence ☐ Obstacle and Recovery Plan ☐ 21-Day Habit Tracker ☐ Three Threads Integration Statement ☐ Final Project Plan and Timeline ☐ Final Project Evidence ☐ Final Project Reflection and Legacy Statement ☐ Presentation Outline ☐ Year in Review ☐ Form 2 Intentions and Bridge Statement ☐ Final Letter to Future Self"},
      {index:10,kind:"remove"},
      {index:13,kind:"text",text:"Go through the checklist above. Check off everything you have. Find anything that is missing. Your portfolio is the story of your Form 1 journey. Make it complete."},
      {index:24,kind:"text",text:"Write a letter to yourself. Address it to “Future Me.” You will read this in Form 4 — three years from now. Three years is a long time. You will be a different person. But you will also be the same person — the one who wrote this letter, the one who learned these things, the one who became someone new in Form 1."},
      {index:32,kind:"text",text:"What you want to remember about Form 1"},
      {index:37,kind:"text",text:"From me, in Form 1 Date: _____________________"},
      {index:38,kind:"text",text:"📂 Portfolio: Keep this letter somewhere safe. Read it in Form 4 — or whenever you need to remember who you were and how far you have come."},
      {index:44,kind:"text",text:"Here’s the tension: the letter is also a test. When you read it in Form 4, you will see the gap between who you were and who you became. That gap might make you proud. It might make you uncomfortable. It might make you laugh or cry or both. Whatever it does, it will be true. And truth, honestly faced, is the foundation of growth. Some of your Form 1 beliefs will seem naive to your Form 4 self. Some of your Form 1 wisdom will still be true. The letter is a time capsule. What you put in it matters. What you take from it when you open it matters more."},
      {index:45,kind:"text",text:"Your Next Step: What is the most important thing you want your future self to remember about who you were in Form 1? Write it clearly. The future is coming. Your future self is waiting."},
      {index:48,kind:"text",text:"Question 2: What do you HOPE your Form 4 self will think when they read this letter? What do you FEAR they might think? Both are valid. Both are data about what matters to you right now."},
      {index:50,kind:"text",text:"However your family says goodbye — in English, Shona, Ndebele, or any language spoken in your home and community — here is a wish for you:"},
      {index:52,kind:"text",text:"Go well. Carry what you have learned. Keep becoming."},
      {index:54,kind:"text",text:"You finished Form 1."},
      {index:63,kind:"text",text:"Has a portfolio that proves your growth — three terms of evidence"},
      {index:66,kind:"text",text:"Keep going. Form 2 awaits. And Myah is waiting for you there."},
    ],
  },
};

const SOUTH_AFRICAN_LANGUAGE_HEADER=/^\*\*(?:isiZulu|isiXhosa|Afrikaans|Sepedi|Setswana)\*\*$/i;

function applyZimbabweStructuralDefaults(block:ContentBlock):ContentBlock{
  if(block.kind!=="table"||block.rows.length===0) return block;
  const header=block.rows[0];
  if(header.length<3) return block;
  const translationHeaders=header.slice(2);
  if(!translationHeaders.every(cell=>SOUTH_AFRICAN_LANGUAGE_HEADER.test(cell.trim()))) return block;
  return {...block,rows:block.rows.map(row=>row.slice(0,2))};
}

function applyBlockOverrides(blocks:ContentBlock[],overrides:ZimbabweBlockOverride[]=[]):ContentBlock[]{
  const prepared=blocks.map(applyZimbabweStructuralDefaults);
  if(!overrides.length) return prepared;
  const byIndex=new Map(overrides.map(item=>[item.index,item]));
  return prepared.flatMap((block,index)=>{
    const override=byIndex.get(index);
    if(!override) return [block];
    if(override.kind==="remove") return [];

    if(override.kind==="text"){
      if(block.kind!=="text") throw new Error(`Zimbabwe override expects text block at index ${index}.`);
      return [{...block,text:override.text}];
    }

    if(block.kind!=="table") throw new Error(`Zimbabwe override expects table block at index ${index}.`);
    return [{...block,rows:override.rows}];
  });
}

export function applyZimbabweUnitOverlay(unit:UnitContent):UnitContent{
  const override=zimbabweContentOverrides[unit.id];
  return {
    ...unit,
    title:override?.title ?? unit.title,
    label:override?.label ?? unit.label,
    blocks:applyBlockOverrides(unit.blocks,override?.blocks),
  };
}

export function applyZimbabweSummaryOverlay<T extends UnitSummary>(unit:T):T{
  const override=zimbabweContentOverrides[unit.id];
  if(!override) return unit;
  return {
    ...unit,
    title:override.title ?? unit.title,
    label:override.label ?? unit.label,
  };
}
