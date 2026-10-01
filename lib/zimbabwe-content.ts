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
  "g8-t1-l20-020": {
    title: "FOUNDATIONS REVIEW AND PORTFOLIO CHECKPOINT",
    blocks: [
      {index:2,kind:"text",text:"Assess your learning from the first Form 1 foundations cycle."},
      {index:6,kind:"text",text:"📘 Looking Back at Your Foundations"},
      {index:20,kind:"text",text:"The mukando women you met in the saving story"},
      {index:47,kind:"text",text:"What experiment do I want to continue as we move into the resources cycle? _________________________________"},
      {index:51,kind:"text",text:"My Foundations Portfolio Entry"},
      {index:56,kind:"text",text:"My Goal for the Next Learning Cycle:"},
      {index:61,kind:"text",text:"Who you are right now (age, Form 1, what matters to you)"},
      {index:64,kind:"text",text:"What you hope to understand in the next learning cycle"},
      {index:70,kind:"text",text:"From me, in Form 1 Date: _____________________"},
      {index:71,kind:"text",text:"📂 Portfolio: Keep this letter somewhere safe. Read it in Form 4."},
      {index:74,kind:"text",text:"Here’s the tension: the person you have become in this foundations cycle will be tested. The next learning cycle will ask different questions. The habits you built will face obstacles you cannot yet imagine. The beliefs you examined will be challenged by new situations. Some of your experiments will fail. Some of your insights will prove incomplete. That is not failure waiting to happen. That is growth waiting to be earned. The goal is not to arrive. The goal is to keep walking."},
      {index:75,kind:"text",text:"Your Next Step: What you take forward is not just what you learned. It is the evidence that you can learn — that you can notice, experiment, fail, adjust, and keep going. What is ONE thing you will carry from this foundations cycle into the next — not a fact, but a capacity, a habit of mind, a way of seeing?"},
      {index:78,kind:"text",text:"In Form 2, you will meet Myah again. She will not be the same person. She will face a system that does not reward rule-followers. She will learn that sometimes, following every rule leads to silence. And she will have to choose: accept the silence, or make herself impossible to ignore. You are not there yet. But you are building the foundation. What you have learned about identity, beliefs, and the habits that shape them is what she will need when her moment comes."},
      {index:85,kind:"text",text:"Question 3: What is one Thinking Equation you will carry into the next learning cycle? Why that one? What situation do you predict it will help you face?"},
      {index:93,kind:"text",text:"You completed the first foundations cycle of Form 1. Term 1 continues with resources, work, value and income."},
    ],
  },
  "g8-t2-l21-021": {
    title: "MY RELATIONSHIP WITH RESOURCES — NEXT CYCLE",
    blocks: [
      {index:2,kind:"text",text:"Recall key learning from the Form 1 foundations cycle."},
      {index:3,kind:"text",text:"Identify what you are bringing forward into the resources cycle."},
      {index:18,kind:"text",text:"“Before we continue, I want you to think. What did you learn in the foundations cycle that you are still carrying?”"},
      {index:20,kind:"text",text:"Ms. Daniels continues. “In the foundations cycle, you learned that your identity shapes your money choices. You learned that beliefs come from family, community and experience. You learned to set goals and to save. You conducted experiments. You kept a Log. You learned to notice.”"},
      {index:22,kind:"text",text:"“All of that is still inside you. You do not start this resources cycle empty. You start with everything you already are — and everything you have already done.”"},
      {index:28,kind:"text",text:"What did you learn in the foundations cycle that you are still carrying? Write one specific thing — a lesson, an experiment result, a Thinking Equation, a moment of clarity."},
      {index:29,kind:"text",text:"✍️ Activity 21: My Resources-Cycle Intention — With Strategic Audit"},
      {index:31,kind:"text",text:"List THREE assets (skills, habits, mindsets, insights) from the foundations cycle that you will actively use in this resources cycle."},
      {index:36,kind:"text",text:"List ONE liability — a belief, a habit, a pattern — from the foundations cycle that you will deliberately work to set aside."},
      {index:45,kind:"text",text:"Key idea: You are not starting this resources cycle empty. You carry everything from the foundations cycle — every experiment, every insight, every Thinking Equation, every failure that taught you something."},
      {index:47,kind:"text",text:"Your Next Step: What is ONE question about money you want to answer by the end of this resources cycle? Write it down. Later, you will return to this question and see what you have found."},
      {index:48,kind:"text",text:"My question for this resources cycle: _________________________________"},
      {index:50,kind:"text",text:"Look back at your foundations portfolio — your Identity Map, your Tension/Experiment Log, your Self-Assessment."},
      {index:51,kind:"text",text:"Question 1: What is one thing you learned in the foundations cycle that will help you understand where money comes from and where it goes? Why will it help?"},
      {index:52,kind:"text",text:"Question 2: What is one belief about money that shifted for you in the foundations cycle? How might that shift change how you see the lessons ahead?"},
      {index:54,kind:"text",text:"Share your resources-cycle intention with someone at home — or with a friend. Ask them: “What is one intention you have for this season of your life?”"},
      {index:60,kind:"text",text:"| Date | | | Lesson | Lesson 21 — Resources-Cycle Intention | | Experiment/Observation | I set my intention for the resources cycle and shared it (or wrote it down). | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t2-l40-039": {
    title: "BUILDING YOUR FIRST BUDGET AND PROGRESS REFLECTION",
    blocks: [
      {index:22,kind:"text",text:"Part B: The Progress Reflection"},
      {index:43,kind:"text",text:"Your Next Step: What is ONE thing you will carry forward from this money-and-resources cycle into the habit work ahead — not a fact, but a capacity? A way of seeing? A habit of tracking? A question you are still asking? Name it. Then name one way you will use it."},
      {index:45,kind:"text",text:"How I will use it in the habit work ahead: _________________________________"},
      {index:47,kind:"text",text:"In the next lessons, you will turn inward again. You will ask: What small things, done regularly, change everything? The answer is habits. And you will track one habit for 21 days — just like you tracked your money. The skill is the same. Only the subject changes. The habits you have already built — noticing, tracking, questioning — are what you will need when you face the challenge of changing yourself."},
      {index:49,kind:"text",text:"Question 1: What is the most important thing you learned about where money comes from and where it goes? How will you use what you learned going forward?"},
      {index:52,kind:"text",text:"Show your money-and-resources portfolio to someone at home — your budget, your tracker, your reflections, your Log. Ask them: “What do you see in my work that I might have missed about my own growth?”"},
      {index:55,kind:"text",text:"If you cannot show anyone: Look through your money-and-resources work yourself. Read your earlier work first, then your later work. Notice the difference. Write: What do I see now that I did not see when I created this?"},
      {index:57,kind:"text",text:"You completed a major money-and-resources checkpoint in Form 1."},
      {index:60,kind:"text",text:"Keep going. Habit formation comes next."},
    ],
  },
  "g8-t3-l60-059": {
    title: "WHAT HABITS TAUGHT ME — PROJECT REFLECTION",
    blocks: [
      {index:31,kind:"text",text:"✍️ Activity 61: My Habit Project Reflection"},
      {index:40,kind:"text",text:"8. The 1–10 Scale: At the start of the habit project, I was a “1” on the habit-mastery scale (1 = my habits control me, 10 = I deliberately design my habits). Where am I now, honestly? What is the exact number? What is the ONE thing I need to do during the rest of Form 1 to move up by a single point?"},
      {index:46,kind:"text",text:"One situation later in Form 1 where I predict this equation will help me: _________________________________"},
      {index:53,kind:"text",text:"What is one thing I learned about myself from these experiments that I did not know at the start of the habit project?"},
      {index:54,kind:"text",text:"What experiment do I want to continue into the integration and final-project work ahead?"},
      {index:56,kind:"text",text:"✍️ Activity 64: Letter to My Future Self — Habit Project"},
      {index:63,kind:"text",text:"What you hope for the rest of Form 1"},
      {index:67,kind:"text",text:"📂 Portfolio: Keep this letter somewhere safe. Read it near the end of Form 1."},
      {index:70,kind:"text",text:"Here’s the tension: the ability to observe, adjust, and persist is more valuable than any single habit you tracked. You now know how to change. And once you know how to change, you can become anyone you want to become. But the review habit is a muscle. Use it or lose it. It is easy to finish the project and go back to old ways — to stop tracking, stop noticing, stop adjusting. The real test is not whether you tracked for 21 days. It is whether you track again when you need to. The real test is whether you keep using what you learned when nobody is checking."},
      {index:74,kind:"text",text:"During the rest of Form 1 — your final Zimbabwe term — you will bring everything together. You will review who you were and see who you have become. You will complete a final project that demonstrates what you have learned. You will assemble your complete portfolio. And you will write a final letter to your future self — the self who can open it in Form 4. This next phase is not about pretending everything is new. It is about proving to yourself that the ideas have become part of how you act."},
      {index:76,kind:"text",text:"Question 1: What is the most important thing 21 days taught you about yourself? What habit will you keep after this project? Why? How can you use what you learned about habits to help with money decisions during the final Form 1 integration work?"},
      {index:85,kind:"text",text:"| Date | | | Lesson | Lesson 60 — Habit Project Reflection | | Experiment/Observation | I completed my 21-day habit tracker and reflected on what the project taught me. | | Result | Final score: ___ / 21 | | Learning | | | Next Action | The review habit I will carry into the final Form 1 integration: |"},
      {index:88,kind:"text",text:"You completed the 21-day habit project and its reflection."},
      {index:91,kind:"text",text:"Keep going. The Form 1 integration work awaits — the final project, the portfolio, and the letter to your future self. Everything you have learned is about to come together."},
    ],
  },
  "g8-t4-l61-060": {
    title: "REVIEW — MY MONEY IDENTITY",
    blocks: [
      {index:2,kind:"text",text:"Recall key learning from your early Form 1 identity work."},
      {index:8,kind:"text",text:"Earlier in Form 1, you asked: Who am I with money?"},
      {index:24,kind:"text",text:"Myah flips through her earliest Form 1 notebook. The Identity Map she drew in Lesson 1. The Family Belief Inventory. The questions she wrote on the very first page: Where does the money come from? What does Mama give up? Why do some people have more coins than others?"},
      {index:30,kind:"text",text:"What is one thing you learned during your identity work that stayed with you? What is one belief about money that has changed for you this year?"},
      {index:31,kind:"text",text:"✍️ Activity 61: Identity Memory — With Growth Comparison"},
      {index:33,kind:"text",text:"Close your eyes. Think back to your earliest Form 1 work. The Identity Map. The Belief Inventory. The first time you wrote “I can...” The community-savings story. The Thinking Equations."},
      {index:34,kind:"text",text:"What is one thing I remember clearly from my early identity work?"},
      {index:53,kind:"text",text:"Look back at your early Form 1 work if you still have it — your Identity Map, your Belief Inventory, your first Tension/Experiment Log entries. Show someone at home how you have changed. Ask them: “What do you see in my earlier work that is different from who I am now?”"},
      {index:57,kind:"text",text:"If you cannot show anyone: Look through your early Form 1 work yourself. Read your earliest entries first, then your later entries. Write: What do I see now that I did not see then?"},
      {index:59,kind:"text",text:"| Date | | | Lesson | Lesson 61 — Money Identity Review | | Experiment/Observation | I reviewed my early Form 1 work and compared my beginning-of-year identity to my current identity. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l62-061": {
    title: "REVIEW — MY RESOURCES",
    blocks: [
      {index:2,kind:"text",text:"Recall key learning from your money-and-resources work."},
      {index:7,kind:"text",text:"📘 Where We Went with Resources"},
      {index:8,kind:"text",text:"During the money-and-resources cycle, you asked: Where does money come from, and where does it go?"},
      {index:26,kind:"text",text:"Myah reviews her money-and-resources work. The money flow diagrams. The budget she built. The spending tracker. The leakages she found. She writes: I started by thinking money just appeared — from parents, from jobs, from somewhere. I now know it flows. It comes from value. It goes where I spend it. I can track it. I can budget it. I can choose where it goes. That is power."},
      {index:30,kind:"text",text:"This equation from your money-and-resources work — what does it mean to you now that you have traced money through households, supply chains, and communities?"},
      {index:32,kind:"text",text:"What is one story from your money-and-resources work that stuck with you? Why? What is one thing you learned about earning? About spending? About tracking?"},
      {index:33,kind:"text",text:"✍️ Activity 62: Resource Memory — With Resource Audit"},
      {index:35,kind:"text",text:"What is one money-and-resources story that stuck with me? Why?"},
      {index:52,kind:"text",text:"Key idea: You learned that money flows like water. But you also learned something deeper: you are not just standing in the river. You are learning to build the banks. You are learning to dig the channels. You are becoming someone who directs the flow, not just someone who gets wet."},
      {index:54,kind:"text",text:"Your Next Step: What is one money skill you developed that you are still using? What is one skill you developed but have let slip? What would it take to restart it — even in a small way?"},
      {index:56,kind:"text",text:"Question 1: Look at your budget if you still have it. What was one thing your budget taught you about your spending? Did you stick to your budget? Why or why not? What is one money skill you are proud of developing this year?"},
      {index:57,kind:"text",text:"Question 2: If you had to teach ONE money-and-resources lesson to someone who knew nothing about money — a younger sibling, a friend, a neighbour — what would it be? Why that lesson? How would you teach it?"},
      {index:59,kind:"text",text:"Show someone your budget if you still have it — or explain what you learned about tracking and budgeting. Tell them what you have learned about where money comes from and where it goes."},
      {index:63,kind:"text",text:"If you cannot share with anyone: Write a one-page summary of what you learned about resources, earning, spending and budgeting. Imagine a younger learner will read it next year. What do they need to know?"},
      {index:65,kind:"text",text:"| Date | | | Lesson | Lesson 62 — Resource Review | | Experiment/Observation | I reviewed my money-and-resources learning and audited my current money skills. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l63-062": {
    title: "REVIEW — MY HABITS",
    blocks: [
      {index:2,kind:"text",text:"Recall key learning from your habit work."},
      {index:7,kind:"text",text:"📘 Where We Went with Habits"},
      {index:8,kind:"text",text:"During the habit cycle, you asked: What small things, done regularly, change everything?"},
      {index:31,kind:"text",text:"✍️ Activity 63: Habit Memory — With Review-Habit Audit"},
      {index:48,kind:"text",text:"Here’s the tension: the review habit is a muscle. Use it or lose it. It is easy to finish the 21-day project and go back to old ways — to stop tracking, stop noticing, stop adjusting. The real test is not whether you tracked for 21 days. It is whether you are still tracking now. It is whether you will track again when you need to. The review habit may be one of the most important things you learned from the habit work. Do you still have it? Or did you leave it behind with the tracker sheet?"},
      {index:51,kind:"text",text:"Question 1: Look at your 21-day habit tracker. What pattern did you notice in your habit performance? What helped you succeed on your best days? What did you learn about yourself from tracking this habit?"},
      {index:54,kind:"text",text:"Show someone your 21-day habit tracker — if you still have it. Tell them what 21 days taught you about yourself. Ask them: “What habit do you see in me that I might not see in myself?”"},
      {index:60,kind:"text",text:"| Date | | | Lesson | Lesson 63 — Habits Review | | Experiment/Observation | I reviewed my habit learning and audited my current review habit. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t4-l64-063": {
    title: "PUTTING IT ALL TOGETHER",
    blocks: [
      {index:11,kind:"text",text:"Myah looks across her work and sees three threads: Identity. Resources. Habits. She sees how they connect now. Her identity — the observer, the questioner — shaped what resources she noticed. Her resources — her tracking skills, her budgeting habits — shaped what habits she could build. Her habits — saving, tracking, planning — are now shaping who she is becoming. She writes: I am not three separate things. I am one person. The threads are not separate. They are me."},
      {index:25,kind:"text",text:"My identity work taught me that I am _________________________________"},
      {index:26,kind:"text",text:"My resources work taught me that I have _________________________________"},
      {index:27,kind:"text",text:"My habit work taught me that I can build _________________________________"},
      {index:41,kind:"text",text:"Question 2: Look at your three threads. Where is there a contradiction — a place where one thread is pulling in a different direction from the others? What is ONE step you can take during the rest of Form 1 to bring them into closer alignment?"},
    ],
  },
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
