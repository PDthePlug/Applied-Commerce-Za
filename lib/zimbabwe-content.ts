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
  "g8-t1-l01-001": {
    blocks: [
      {index:12,kind:"text",text:"Myah puts the coins in her pocket. She feels their weight all the way to the kombi rank. She does not ask where the money came from. She does not ask if there is enough. She does not ask what her mother gives up so she can get to school."},
    ],
  },
  "g8-t1-l02-002": {
    blocks: [
      {index:30,kind:"table",rows:[
        ["Source","Example"],
        ["Family","“We do not waste money in this house.”"],
        ["Community","“Everyone in our neighbourhood saves with a mukando or savings club.”"],
        ["Experience","“Last time I spent all my money, I had nothing left for transport.”"],
        ["What we are told directly","“Save for later.”"],
        ["What we are told indirectly","“Again? You just got money yesterday?”"],
        ["What we observe","Watching someone worry about bills"],
      ]},
    ],
  },
  "g8-t1-l04-004": {
    blocks: [
      {index:45,kind:"text",text:"This is how mukando groups work. This is how families work. This is how successful people work."},
    ],
  },
  "g8-t1-l05-005": {
    blocks: [
      {index:8,kind:"text",text:"Myah is sitting at the kombi rank after school, watching people. She does this often — watching, noticing, writing in her notebook."},
      {index:22,kind:"table",rows:[
        ["Type","Timeframe","Example"],
        ["Short-term","Days or weeks","Save enough for a school trip by next month"],
        ["Long-term","Months or years","Save enough for a Form 4 school-leaving event"],
      ]},
    ],
  },
  "g8-t1-l06-006": {
    blocks: [
      {index:61,kind:"text",text:"Observe one person in your community for a day or two — a family member, a neighbour, a vendor near a kombi rank or market. Are they more like Nosipho (clear direction, steady progress) or more like Sipho (flexible, drifting, open to whatever comes)?"},
    ],
  },
  "g8-t1-l10-010": {
    blocks: [
      {index:3,kind:"text",text:"Explain how mukando and community savings groups work."},
      {index:6,kind:"table",rows:[
        ["Term","Definition"],
        ["Mukando","A Zimbabwean community savings arrangement where members pool agreed contributions"],
        ["Contribution","The amount each member puts into the group according to its rules"],
        ["Rotation","Taking turns to receive pooled funds in a rotating-savings model"],
      ]},
      {index:7,kind:"text",text:"📘 Saturday Afternoon in Highfield"},
      {index:8,kind:"text",text:"It is Saturday afternoon in Highfield, Harare."},
      {index:11,kind:"text",text:"This is a mukando."},
      {index:12,kind:"text",text:"📘 What Is a Mukando?"},
      {index:13,kind:"text",text:"A mukando is a Zimbabwean community savings arrangement. Members agree on rules and contribute money regularly. Some groups rotate the pooled amount so members receive it in turn. Others keep a shared pool and lend or invest according to agreed rules. The exact model can differ, but the discipline is collective: people save together and hold one another accountable."},
      {index:14,kind:"text",text:"It is simple. It is practical. It is built on trust and rules. Mukando groups exist because:"},
      {index:21,kind:"text",text:"The women in this Highfield story call their mukando “The Saturday Club.” They have been meeting for 12 years. In that time:"},
      {index:29,kind:"text",text:"✍️ Activity 14: Mukando Discussion — And Design Your Own"},
      {index:32,kind:"text",text:"1. Does anyone in your family belong to a mukando or another savings group? If yes, what kind?"},
      {index:33,kind:"text",text:"2. Why do you think people can trust a mukando even when the group is informal? What rules or relationships make trust possible?"},
      {index:34,kind:"text",text:"3. What can a mukando teach us about saving that an individual bank account cannot?"},
      {index:36,kind:"text",text:"Part B: Design Your Own Mukando or Savings Group (Hypothetical)"},
      {index:37,kind:"text",text:"If you started a savings group with five people you trust, what would the rules be?"},
      {index:38,kind:"text",text:"Name of our group: _________________________________"},
      {index:43,kind:"text",text:"What makes this group different from just saving alone: _________________________________"},
      {index:51,kind:"text",text:"Saving is not only something wealthy people do. Families and communities have practised forms of saving for generations — putting money aside, pooling resources, building herds, buying assets, preparing for school costs, emergencies or business opportunities. Here is the deeper idea: saving requires believing in a future. It requires believing that tomorrow is worth preparing for. That is not only a financial skill. It is an act of hope. When you save, you are declaring that your future self matters."},
      {index:54,kind:"text",text:"Question 1: Compare a mukando with a bank account. What is one possible advantage of saving with a trusted group? What is one possible advantage of a bank account? Which would work better for YOU right now? Defend your answer with at least one specific reason based on your real situation."},
      {index:55,kind:"text",text:"Question 2: Look at your hypothetical savings-group design. What is the biggest risk? What is the biggest strength? If this were real, would you trust it with your money? Why or why not?"},
      {index:57,kind:"text",text:"Ask someone in your family: “Have you ever been in a mukando or another savings group? What worked? What did not work? Would you do it again?”"},
      {index:62,kind:"text",text:"If you cannot ask anyone: Research one type of mukando or community savings group used in Zimbabwe. Write down how it works, who it serves and one risk members need to manage."},
      {index:64,kind:"text",text:"| Date | | | Lesson | Lesson 10 — Mukando and Community Saving | | Experiment/Observation | I asked someone about their experience with mukando or savings groups, or researched how one works. | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t1-l11-011": {
    blocks: [
      {index:10,kind:"text",text:"Myah sits at the kombi rank, her notebook open. She has been thinking about what she wants. Understanding money. Helping her mother. Noticing what others miss."},
    ],
  },
  "g8-t1-l12-012": {
    blocks: [
      {index:10,kind:"text",text:"3. Method 3: The Mukando Way. Save with a trusted group whose rules and contribution schedule you understand. The group can help keep you accountable."},
      {index:30,kind:"text",text:"Here’s the tension: every system has a weakness. The jar at home is visible and simple — but it can be easy to dip into. A bank or formal savings account can be more secure — but may feel less immediate or require access you do not yet have. A mukando is community-powered — but depends on trust, clear rules and members contributing as agreed. The best system is not the one with the most features. It is the one whose risks you understand and can manage."},
    ],
  },
  "g8-t1-l13-013": {
    blocks: [
      {index:27,kind:"text",text:"Grandmother’s mukando → pays out → buys food"},
    ],
  },
  "g8-t1-l16-016": {
    blocks: [
      {index:7,kind:"text",text:"📘 Myah at the Kombi Rank"},
      {index:8,kind:"text",text:"Myah is sitting at the kombi rank, waiting for transport home. It is hot. The sun is high. People are fanning themselves with newspapers. A baby is crying. A woman is wiping sweat from her forehead."},
      {index:13,kind:"text",text:"She files it away. Years later, when she learns about problems and opportunities, she will remember this day. The hot kombi rank. The thirsty people. The baby crying."},
      {index:47,kind:"text",text:"Question 1: What did Myah notice at the kombi rank? Did she solve the problem that day? Why not? What was the first step she took — even without acting?"},
    ],
  },
  "g8-t1-l17-017": {
    blocks: [
      {index:10,kind:"text",text:"Sipho takes the money. He walks to the neighbourhood shop."},
    ],
  },
  "g8-t1-l18-018": {
    blocks: [
      {index:8,kind:"text",text:"Before Myah and her mother moved to the new town, they lived in a small flat in Harare."},
    ],
  },
  "g8-t2-l22-022": {
    blocks: [
      {index:7,kind:"text",text:"📘 Myah’s Question at the Tuckshop"},
      {index:8,kind:"text",text:"It is Saturday afternoon. Myah is at Emmanuel’s tuckshop, watching money move."},
      {index:12,kind:"text",text:"Emmanuel shrugs. “The delivery driver takes it to the wholesaler. The wholesaler pays the producer. The producer pays workers and suppliers. Those people spend it somewhere else. Maybe at another tuckshop. Maybe near the kombi rank. Maybe on airtime.”"},
      {index:25,kind:"text",text:"But where do they get it? Follow the trail: Parents work → earn money → share with you. Grandmother’s mukando → pays out → buys food. Family business → sells things → makes income. Public support or a household transfer → supports the family. Money keeps moving because people create, earn, exchange, share and spend."},
    ],
  },
  "g8-t2-l23-023": {
    blocks: [
      {index:12,kind:"text",text:"Their daughter, Palesa, is helping pack vetkoek into bags. Their son, age 12, is counting change for a tuckshop run. Even the youngest, age 8, is sweeping the yard."},
      {index:20,kind:"table",rows:[
        ["Type","Description","Examples"],
        ["Formal work","Registered employment, regular pay and defined responsibilities","Teacher, nurse, shop assistant, warehouse worker"],
        ["Informal work","Work or trade outside a formal employment arrangement","Street vendor, market trader, car wash, home baking"],
        ["Family work","Unpaid household support","Caring for siblings, cooking, cleaning"],
        ["Community work","Benefits the community, often unpaid","Mukando organising, helping neighbours"],
        ["Self-work","Investing in your own growth","Studying, practising a skill"],
      ]},
    ],
  },
  "g8-t2-l24-024": {
    title: "EMMANUEL’S TUCKSHOP — COSTS AND PROFIT",
    blocks: [
      {index:8,kind:"text",text:"Emmanuel is 15. He lives in Chitungwiza with his mother and two younger sisters. His mother runs a small tuckshop from their front room. It sells everyday items such as bread, milk, cool drinks, snacks and airtime. It is small — but it is theirs."},
      {index:9,kind:"text",text:"After school, Emmanuel helps. Myah visits on a Saturday, curious about how the shop actually works. She has been thinking about money flows, and a tuckshop is a useful place to see them in action."},
      {index:59,kind:"text",text:"Find a small business in your community — a tuckshop, market stall, vendor, car wash or another trader. Observe it for 10 minutes. Write down:"},
    ],
  },
  "g8-t2-l26-026": {
    blocks: [
      {index:15,kind:"text",text:"Active income: Tuckshop sales (the family works for this). A parent’s part-time cleaning job."},
      {index:16,kind:"text",text:"Passive or delayed income: A mukando payout at an agreed time. Interest on savings. Rent from an asset, where applicable."},
      {index:52,kind:"text",text:"If you cannot ask anyone: Research one type of passive or delayed income that exists in Zimbabwe — for example a mukando payout, rental income or interest from a savings account. Write down what you learn and one risk involved."},
    ],
  },
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
      {index:13,kind:"text",text:"Myah puts the coins in her pocket. Same weight. Same kombi rank. Same mother."},
      {index:18,kind:"text",text:"“Before we continue, I want you to think. What did you learn in the foundations cycle that you are still carrying?”"},
      {index:19,kind:"text",text:"Myah thinks. She remembers Lerato, who taught herself to braid. She remembers Nosipho, who had a goal and followed it. She remembers Sipho, who had no goals — and how Sipho began to change, fixing a chair with his hands. She remembers the mukando women, saving together for years. She remembers her own mother, counting coins every morning."},
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
  "g8-t2-l27-027": {
    blocks: [
      {index:9,kind:"table",rows:[
        ["Way to Earn","Example"],
        ["Helping neighbours","Wash a car, carry goods, help with a task"],
        ["Selling things","Snacks, drinks, handmade items"],
        ["Skills","Braiding hair, fixing phones, tutoring"],
        ["Chores at home","Sometimes paid, sometimes not"],
        ["Small jobs","Assist at a tuckshop, market stall or kombi rank"],
      ]},
    ],
  },
  "g8-t2-l28-028": {
    blocks: [
      {index:11,kind:"text",text:"Myah walks through the kombi rank, her notebook open. She sees: people are hot. People are thirsty. People are bored. People carry heavy things with nowhere to put them. Each problem is a signal. Each signal is a possibility."},
    ],
  },
  "g8-t2-l29-029": {
    blocks: [
      {index:8,kind:"text",text:"Thandi lives near Mutare. Her grandmother has a mango tree in the yard. Every season, the tree is heavy with fruit — more than they can eat."},
      {index:9,kind:"text",text:"One year, Thandi had an idea. She picked the mangoes. She washed them until they shone. She arranged them in a crate. She walked to the side of the road near the kombi rank."},
      {index:53,kind:"text",text:"If you cannot ask anyone: Research what similar things sell for — at a market, near a kombi rank, at a tuckshop, or elsewhere in your community. Write down the prices and the currency used. What do you notice?"},
    ],
  },
  "g8-t2-l35-035": {
    blocks: [
      {index:9,kind:"text",text:"The one where: Auntie sells vetkoek near the kombi rank. Uncle fixes cars in his yard. Neighbours lend each other sugar. Mukando groups meet regularly. Tuckshops sell everyday items in small quantities."},
      {index:11,kind:"text",text:"Myah walks through her neighbourhood, notebook open. She counts: tuckshops, hair salons, car washes, a woman selling vegetables on the corner, a man fixing shoes under a tree. Many of these businesses operate informally. They may not have payslips or formal employment contracts. But they are creating value. They are feeding families. She writes: There is an economy here that textbooks can miss. It runs on cash, mobile payments, trust and relationships. It becomes visible when you learn to look."},
      {index:13,kind:"text",text:"Across Zimbabwe, many people earn livelihoods in the informal economy. Formal paperwork may differ from one business to another, but the economic activity is real: customers exchange money for value, households earn income, relationships create trust, and small enterprises support communities."},
      {index:37,kind:"text",text:"This week, buy something from someone in your community — a tuckshop, market trader, vendor, neighbour or another small seller. Notice how the transaction feels different from buying at a large shop."},
      {index:54,kind:"text",text:"Imagine a busy corner in Mbare, Harare. Within a short walk you might find:"},
      {index:63,kind:"text",text:"The Tuckshop"},
      {index:74,kind:"text",text:"School learners buy at the tuckshop → get their hair done at Precious’s"},
      {index:75,kind:"text",text:"Auntie Grace buys bread from the tuckshop"},
      {index:76,kind:"text",text:"Precious buys a cool drink from the tuckshop"},
      {index:84,kind:"text",text:"Auntie Grace ←→ Tuckshop owner ←→ ? Precious ←→ ?"},
      {index:101,kind:"text",text:"Here’s the tension: this web of interdependence is also fragile. If the tuckshop raises prices, other households feel it. If the kombi rank moves, Auntie Grace may lose customers. If one family moves away, the web changes. Interdependence is strength — but it is also vulnerability. The same connections that sustain a community can also transmit a shock."},
    ],
  },
  "g8-t2-l39-038": {
    blocks: [
      {index:8,kind:"text",text:"Busisiwe is 14. She lives in Bulawayo with her mother and two younger brothers. Her mother manages the household money, but it is hard."},
    ],
  },
  "g8-t3-l43-042": {
    title: "THE MUKANDO HABIT",
    blocks: [
      {index:2,kind:"text",text:"Explain how mukando savings groups can create saving habits through accountability."},
      {index:4,kind:"text",text:"Design your own “Habit Mukando” for accountability."},
      {index:8,kind:"text",text:"Remember the Highfield mukando story from earlier in Form 1? Every meeting, the members contribute as agreed. They repeat the routine over months and years."},
      {index:10,kind:"text",text:"Myah thinks about this. The mukando members do not rely only on willpower. They rely on one another, agreed rules and a repeated routine. The habit is not just saving. The habit is showing up. The habit is being part of something. She writes: What if I had a “Habit Mukando”? A group of people who expected me to show up for my own goals? Would that make it easier?"},
      {index:11,kind:"text",text:"📘 How Mukando Builds Habit"},
      {index:12,kind:"table",rows:[
        ["Habit Element","How Mukando Uses It"],
        ["Cue","The agreed meeting or contribution date arrives"],
        ["Routine","Check in and make the agreed contribution"],
        ["Reward","Progress toward a shared or personal goal"],
        ["Repetition","The same pattern is repeated"],
        ["Accountability","Other members expect you to show up"],
        ["Identity","“I am someone who keeps my commitments”"],
      ]},
      {index:15,kind:"text",text:"Accountability = The Mukando Principle"},
      {index:19,kind:"text",text:"✍️ Activity 43: My Habit Mukando — With Accountability Design"},
      {index:21,kind:"text",text:"In this class, you will work in Habit Mukando groups — fixed groups of 5 learners who hold one another accountable for habit tracking."},
      {index:22,kind:"text",text:"Write the names of your Habit Mukando members:"},
      {index:28,kind:"text",text:"Your Habit Mukando will:"},
      {index:39,kind:"text",text:"Write one sentence you will say to your Habit Mukando this week about the habit you are tracking: “This week, I commit to _________________. If I struggle, I will _________________.”"},
      {index:42,kind:"text",text:"Key idea: A mukando works because the group helps turn an intention into a repeated commitment. Your habits do not need to be solitary. The right group can carry you when your willpower fails."},
      {index:43,kind:"text",text:"Here’s the tension: a group can also pull you down. If your group normalises bad habits — overspending, complaining, giving up — you may absorb those too. The question is not just whether you have a group. The question is what your group is normalising. Choose your Habit Mukando carefully. Their expectations will shape your behaviour. Their normal can become your normal."},
      {index:47,kind:"text",text:"Question 1: Why can it be easier to save with a mukando than alone? What might happen if a member repeatedly misses an agreed contribution or check-in? How could you create “mukando power” for a habit you want to build, such as studying or exercising?"},
      {index:48,kind:"text",text:"Question 2: Think of your Habit Mukando group. What happens if ONE member stops showing up? What happens if TWO stop? What does this tell you about the strength — and fragility — of group accountability? What is YOUR responsibility to your group?"},
      {index:54,kind:"text",text:"If you cannot tell anyone: Write a letter to yourself. Promise yourself you will check in on your own progress in one week. Put the letter where you will see it. The letter becomes your accountability check-in."},
    ],
  },
  "g8-t3-l52-051": {
    blocks: [
      {index:8,kind:"text",text:"Habits are not just personal. Families have habits too. Some family habits: eating together, saving together through a mukando or savings club, helping with chores, sharing money when someone needs it, planning for the future."},
    ],
  },
  "g8-t3-l55-054": {
    blocks: [
      {index:12,kind:"text",text:"You have met earners throughout this year: Lerato (braiding hair), Emmanuel (helping at the tuckshop), Thandi (selling mangoes), Precious (hair stall), Uncle Solly (car wash), Sipho (fixing things with his hands), Thabo (delivery service and fixing things)."},
    ],
  },
  "g8-t3-l56-055": {
    blocks: [
      {index:10,kind:"text",text:"You have met planners: Nosipho (planned to be a teacher), Busisiwe (tracked to help her family plan), the Molefe family (Sunday planning habit), mukando members (planned for future needs)."},
    ],
  },
  "g8-t3-l57-056": {
    blocks: [
      {index:51,kind:"text",text:"My Habit Mukando members will check in with me on (day of week): _________________________________"},
      {index:65,kind:"text",text:"Question 1: What habit will you track? Why did you choose this habit? What is your Habit Mukando’s first check-in day? What will you do if you miss a day?"},
    ],
  },
  "g8-t3-l58-057": {
    blocks: [
      {index:25,kind:"text",text:"Part D: Habit Mukando Check-In"},
      {index:26,kind:"text",text:"Share with your Habit Mukando: What worked? What did not? What will you change? Listen to their experiences. What can you learn from them?"},
      {index:27,kind:"text",text:"One thing I learned from my Habit Mukando: _________________________________"},
      {index:37,kind:"text",text:"Share your Week 1 progress with your Habit Mukando or someone at home. Even if you missed days. Even if it is hard. Saying it out loud — or writing it down — helps."},
    ],
  },
  "g8-t3-l59-058": {
    blocks: [
      {index:22,kind:"text",text:"Part D: Habit Mukando Check-In"},
      {index:34,kind:"text",text:"Tell your Habit Mukando or someone at home about your midpoint progress. Be honest — share the wins AND the struggles. Ask: “Any advice for the final week?”"},
    ],
  },
  "g8-t4-l65-064": {
    title: "INTRODUCTION TO FINAL PROJECT",
    blocks: [
      {index:28,kind:"text",text:"Here’s the tension: a final project is also an ending. It is the last major piece of work you will do in Form 1. After this, you move on. The people you have met — Myah, Thabo, Sipho, Lerato, the mukando members, Emmanuel, Thandi, Karabo — will stay with you. But you will not be in Form 1 anymore. The final project is your bridge out of Form 1. Make it count. But do not let the weight of “lastness” paralyse you. Done is better than perfect. Finished is better than flawless."},
      {index:29,kind:"text",text:"Your Next Step: What do you want to leave behind in Form 1? What do you want to carry forward into Form 2? Your final project is the bridge between the two. What kind of bridge do you want to build?"},
    ],
  },
  "g8-t4-l66-065": {
    blocks: [
      {index:39,kind:"text",text:"Choose a business (tuckshop, market stall, vendor, car wash, hair salon, etc.)"},
    ],
  },
  "g8-t4-l69-068": {
    blocks: [
      {index:8,kind:"text",text:"Possibilities: Tuckshop. Market trader. Street vendor. Car wash. Hair salon. Kombi-rank activity. Mukando member. Small repair shop. Someone selling from their home."},
    ],
  },
  "g8-t4-l73-072": {
    blocks: [
      {index:40,kind:"text",text:"Here’s the tension: completion can also bring a strange emptiness. You have been working toward this. And now it is done. What now? The answer is: you carry it with you. The evidence does not disappear when the project ends. It becomes part of your portfolio — and part of your identity. You are now someone who has completed a final project in Form 1. No one can take that from you. But do not rest on it too long. Completion opens the door to the next thing. Be proud. Then be ready."},
    ],
  },
  "g8-t4-l76-075": {
    title: "FINAL PROJECT PRESENTATIONS — DAY 2 AND CELEBRATION",
    blocks: [
      {index:27,kind:"text",text:"Question 1: What did you learn from someone else’s project that you will carry with you? How do you feel now that your project — and your Form 1 journey — is nearly complete?"},
    ],
  },
  "g8-t4-l77-076": {
    blocks: [
      {index:6,kind:"text",text:"You completed a final project in Form 1. That is something many adults never do."},
      {index:8,kind:"text",text:"Myah sits at the kombi rank — the same bench where she sat at the beginning of the year. The same kombis. The same vendors. The same flow of people. But she sees differently now. She sees the money flowing. She sees the habits at work. She sees identities being built, transaction by transaction. She writes: I am not the same person who sat here at the beginning of the year. That person was just beginning to notice. This person notices, asks, tracks, budgets, saves, plans, earns, and acts. This person completed a final project. This person has evidence. That is growth. That is becoming. That is enough."},
      {index:21,kind:"text",text:"What is ONE thing from this project that you will carry with you into Form 2 and beyond? Not the project itself — the learning, the capacity, the evidence of who you became through doing it."},
      {index:30,kind:"text",text:"Your Habit Mukando"},
      {index:38,kind:"text",text:"Your Next Step: Who is ONE person you have not yet thanked — someone whose support made your final project possible, or made your Form 1 year meaningful? Thank them. This week. In person, in writing, in a message. Do not let the year end without saying it."},
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
      {index:63,kind:"text",text:"What you hope for the rest of Form 1"},\n      {index:66,kind:"text",text:"From me, in Form 1 Date: _____________________"},
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
      {index:2,kind:"text",text:"Recall key learning from your early Form 1 identity work."},\n      {index:11,kind:"text",text:"The Highfield mukando members — proving that community creates accountability"},\n      {index:22,kind:"text",text:"Saving stories from your community — mukando, savings clubs, livestock or other ways families prepare for future needs"},
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
      {index:2,kind:"text",text:"Recall key learning from your money-and-resources work."},\n      {index:10,kind:"text",text:"Emmanuel at the tuckshop — learning that every product has a story, and profit helps a small business survive"},
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
      {index:2,kind:"text",text:"Recall key learning from your habit work."},\n      {index:10,kind:"text",text:"The mukando members again — showing the power of routine and accountability"},
      {index:7,kind:"text",text:"📘 Where We Went with Habits"},
      {index:8,kind:"text",text:"During the habit cycle, you asked: What small things, done regularly, change everything?"},
      {index:31,kind:"text",text:"✍️ Activity 63: Habit Memory — With Review-Habit Audit"},
      {index:48,kind:"text",text:"Here’s the tension: the review habit is a muscle. Use it or lose it. It is easy to finish the 21-day project and go back to old ways — to stop tracking, stop noticing, stop adjusting. The real test is not whether you tracked for 21 days. It is whether you are still tracking now. It is whether you will track again when you need to. The review habit may be one of the most important things you learned from the habit work. Do you still have it? Or did you leave it behind with the tracker sheet?"},
      {index:51,kind:"text",text:"Question 1: Look at your 21-day habit tracker. What pattern did you notice in your habit performance? What helped you succeed on your best days? What did you learn about yourself from tracking this habit?"},
      {index:49,kind:"text",text:"Your Next Step: What is one way you can keep the review habit alive after Form 1 ends? A monthly review? A weekly check-in? A commitment to track something every term? Design your maintenance plan now, before the year ends."},\n      {index:52,kind:"text",text:"Question 2: The review habit — noticing and adjusting your habits — is more valuable than any single habit. Have you kept it alive? If yes, how? If no, what happened? What is ONE way to restart it before Form 1 ends?"},\n      {index:54,kind:"text",text:"Show someone your 21-day habit tracker — if you still have it. Tell them what 21 days taught you about yourself. Ask them: “What habit do you see in me that I might not see in myself?”"},
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
      {index:14,kind:"text",text:"The Highfield mukando members — who proved that community creates accountability"},\n      {index:15,kind:"text",text:"Emmanuel — learning business at the tuckshop, tracing supply chains"},\n      {index:23,kind:"text",text:"Mama Rose — who proves that business is people (you will meet her properly in Form 2)"},
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

      {index:12,kind:"text",text:"From Term 1: Identity, beliefs, saving and first income. You learned to trace where your beliefs come from, set goals, begin saving, recognise value and gather evidence about who you are becoming."},
      {index:13,kind:"text",text:"From Term 2: Earning, spending, budgeting and habit formation. You learned to follow money flows, price value, track spending, build a budget, notice leakages and begin changing repeated behaviour."},
      {index:14,kind:"text",text:"From Term 3: Financial identity, agency and your first capstone. You learned that small steps compound, practised resilience after setbacks, completed a 21-day tracker, integrated identity, resources and habits, and produced evidence through your final project."},
      {index:15,kind:"remove"},
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
