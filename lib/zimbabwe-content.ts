import type { ContentBlock, UnitContent, UnitSummary } from "./types";

export type ZimbabweBlockOverride =
  | {index:number; kind:"text"; text:string}
  | {index:number; kind:"table"; rows:string[][]}
  | {index:number; kind:"remove"};

export type ZimbabweRangeReplacement = {
  startIncludes: string;
  endIncludes: string;
  replacement: ContentBlock[];
};

export type ZimbabweTableReplacement = {
  cellIncludes: string;
  rows: string[][];
};

export type ZimbabweUnitOverride = {
  title?: string;
  label?: string;
  blocks?: ZimbabweBlockOverride[];
  textReplacements?: Array<{from:string;to:string}>;
  rangeReplacements?: ZimbabweRangeReplacement[];
  tableReplacements?: ZimbabweTableReplacement[];
  tableTextReplacements?: Array<{from:string;to:string;exact?:boolean}>;
  appendBlocks?: ContentBlock[];
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
      {index:10,kind:"text",text:"She rubs her eyes and sees her mother at the kitchen table, counting a small pile of notes and coins. She pushes the money toward Myah."},
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
      {index:17,kind:"text",text:"She saves a little whenever she can for application and school-related costs."},
      {index:61,kind:"text",text:"Observe one person in your community for a day or two — a family member, a neighbour, a vendor near a kombi rank or market. Are they more like Nosipho (clear direction, steady progress) or more like Sipho (flexible, drifting, open to whatever comes)?"},
    ],
  },
  "g8-t1-l10-010": {
    blocks: [
      {index:10,kind:"text",text:"On the table: a tin. An old biscuit tin, painted once, now silver showing through. One by one, each woman places her agreed contribution in the tin. The amount follows the group’s rules for that cycle. The tin fills. The routine is familiar because they have been doing this for years."},
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
      {index:12,kind:"text",text:"She writes: I will save US$12 by the end of this term. US$1 a week. I will keep it somewhere safe where I can track it growing. This is not just about the money. This is about becoming someone who keeps promises to herself."},
      {index:10,kind:"text",text:"Myah sits at the kombi rank, her notebook open. She has been thinking about what she wants. Understanding money. Helping her mother. Noticing what others miss."},
    ],
  },
  "g8-t1-l12-012": {
    blocks: [
      {index:27,kind:"text",text:"US$1 every week is better than US$10 once if your goal is to build a saving habit. This is the compound effect of behaviour: small, regular actions build bigger results."},
      {index:37,kind:"text",text:"Set up your saving method this week. Start with an amount that is realistic for you — even a very small one. After one week, record:"},
      {index:10,kind:"text",text:"3. Method 3: The Mukando Way. Save with a trusted group whose rules and contribution schedule you understand. The group can help keep you accountable."},
      {index:30,kind:"text",text:"Here’s the tension: every system has a weakness. The jar at home is visible and simple — but it can be easy to dip into. A bank or formal savings account can be more secure — but may feel less immediate or require access you do not yet have. A mukando is community-powered — but depends on trust, clear rules and members contributing as agreed. The best system is not the one with the most features. It is the one whose risks you understand and can manage."},
    ],
  },
  "g8-t1-l13-013": {
    blocks: [
      {index:4,kind:"text",text:"Trace where one amount of money in your life came from."},
      {index:49,kind:"text",text:"Key idea: Money is not just a thing. It carries a story. Every note, coin or digital payment you have ever received has travelled through choices, work, exchange and value created by people you may never meet. Your money is a library of stories. Learn to read them."},
      {index:65,kind:"text",text:"| Date | | | Lesson | Lesson 13 — Money Flow Tracing | | Experiment/Observation | I traced one amount received and one amount spent. I asked a seller where something came from. | | Result | | | Learning | | | Next Action | |"},
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
      {index:8,kind:"text",text:"Sipho is nine years old. His grandmother gives him US$2. His first pocket money."},
      {index:12,kind:"text",text:"He spends the whole US$2 on sweets."},
      {index:14,kind:"text",text:"The next day, his friend shows him a small toy car. It costs US$1.50. Sipho wants it."},
      {index:16,kind:"text",text:"He asks his grandmother. She says: “You had US$2 yesterday. What happened to it?”"},
      {index:37,kind:"text",text:"Think of ONE choice you regret. Not a life-changing one — a small one, like Sipho spending all his pocket money."},
      {index:45,kind:"text",text:"Key idea: Every choice is a vote. A vote for the person you are becoming. Sipho spending all his pocket money on sweets was not only about US$2. It was a vote for “I am someone who chooses pleasure now over value later.”"},
      {index:50,kind:"text",text:"Question 1: What choice did Sipho make with his US$2? What was the consequence? What did he learn?"},
      {index:51,kind:"text",text:"Question 2: Sipho learned from his pocket-money mistake — but he also made other mistakes, and will make more. What is ONE recurring money mistake you make? What would it take to break the pattern — not just once, but permanently? What is the first step?"},
      {index:10,kind:"text",text:"Sipho takes the money. He walks to the neighbourhood shop."},
    ],
  },
  "g8-t1-l18-018": {
    blocks: [
      {index:44,kind:"text",text:"If you cannot do the full routine, what is the smallest version you can still do? (Ten minutes of homework instead of an hour. Save a smaller amount instead of your full target. Read one page instead of one chapter.)"},
      {index:8,kind:"text",text:"Before Myah and her mother moved to the new town, they lived in a small flat in Harare."},
    ],
  },
  "g8-t2-l22-022": {
    blocks: [
      {index:3,kind:"text",text:"Identify the original source of value behind money that changes hands."},
      {index:9,kind:"text",text:"A woman buys bread for US$1.40. She hands over a US$2 note. Emmanuel gives her US$0.60 change. Myah watches the US$2 go into the till."},
      {index:10,kind:"text",text:"Later, Emmanuel’s mother takes US$20 from the till and gives it to a supplier delivering cool drinks. The supplier puts the money away and leaves."},
      {index:14,kind:"text",text:"“Yes. Money is like water. It flows. It rarely stays still. The same US$2 that bought bread this morning might be in someone else’s till by tonight, and paying a worker or buying school shoes later.”"},
      {index:46,kind:"text",text:"Key idea: You now believe money flows from value. You are partly right. Every amount you receive traces back to someone, somewhere, who created something another person wanted or needed."},
      {index:51,kind:"text",text:"Question 1: Trace the flow of the last US$2 — or another clearly identified amount — that you or your family received. How many hands might it have passed through before it reached you? Where did the original value come from?"},
      {index:7,kind:"text",text:"📘 Myah’s Question at the Tuckshop"},
      {index:8,kind:"text",text:"It is Saturday afternoon. Myah is at Emmanuel’s tuckshop, watching money move."},
      {index:12,kind:"text",text:"Emmanuel shrugs. “The delivery driver takes it to the wholesaler. The wholesaler pays the producer. The producer pays workers and suppliers. Those people spend it somewhere else. Maybe at another tuckshop. Maybe near the kombi rank. Maybe on airtime.”"},
      {index:25,kind:"text",text:"But where do they get it? Follow the trail: Parents work → earn money → share with you. Grandmother’s mukando → pays out → buys food. Family business → sells things → makes income. Public support or a household transfer → supports the family. Money keeps moving because people create, earn, exchange, share and spend."},
    ],
  },
  "g8-t2-l23-023": {
    blocks: [
      {index:10,kind:"text",text:"Mr. Ndlovu is in the front yard, setting up buckets and sponges. His car-wash sign is hand-painted: “Ndlovu Car Wash — US$3 car, US$5 pickup.” He has been doing this every Saturday for six years."},
      {index:40,kind:"text",text:"Key idea: The economy measures paid work in money. But money does not measure care. It does not measure love. It does not measure the grandmother who holds the family together without a salary. You are not your wage. You are your work. And your work is not only what you are paid for."},
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
      {index:14,kind:"text",text:"They buy a crate of cool drinks for US$12.00 (cost)."},
      {index:15,kind:"text",text:"They sell each bottle for US$0.80."},
      {index:16,kind:"text",text:"The crate has 24 bottles → US$19.20 income."},
      {index:17,kind:"text",text:"Profit = US$19.20 – US$12.00 = US$7.20."},
      {index:18,kind:"text",text:"“US$7.20 is not just extra money,” Emmanuel says. “It can help buy food, cover school costs, or buy more stock. Sometimes there is very little left.”"},
      {index:27,kind:"text",text:"1. They buy 10 loaves of bread for US$0.80 each. How much is the total cost? US$ _______"},
      {index:28,kind:"text",text:"2. They sell each loaf for US$1.00. If they sell all 10, what is the income? US$ _______"},
      {index:43,kind:"text",text:"Assets (what they own): US$50.00 (stock, cash, fridge)"},
      {index:44,kind:"text",text:"Owner’s Equity (what his mother put in): US$50.00"},
      {index:45,kind:"text",text:"Liabilities (what they owe): US$0.00 (no debt)"},
      {index:46,kind:"text",text:"The equation works: US$50.00 = US$50.00 + US$0.00"},
      {index:56,kind:"text",text:"Question 1: Calculate: If Emmanuel’s shop buys 10 loaves at US$0.80 each and sells them at US$1.00 each, but 2 go stale, what is the profit or loss? Show your working."},
      {index:8,kind:"text",text:"Emmanuel is 15. He lives in Chitungwiza with his mother and two younger sisters. His mother runs a small tuckshop from their front room. It sells everyday items such as bread, milk, cool drinks, snacks and airtime. It is small — but it is theirs."},
      {index:9,kind:"text",text:"After school, Emmanuel helps. Myah visits on a Saturday, curious about how the shop actually works. She has been thinking about money flows, and a tuckshop is a useful place to see them in action."},
      {index:59,kind:"text",text:"Find a small business in your community — a tuckshop, market stall, vendor, car wash or another trader. Observe it for 10 minutes. Write down:"},
    ],
  },
  "g8-t2-l26-026": {
    blocks: [
      {index:12,kind:"text",text:"Myah thinks about her own income — the money from her mother, the occasional small payment from helping a neighbour. All active. All requiring someone’s effort. She writes: Is there a way to earn money that does not require trading time for it? Is that even possible for someone my age?"},
      {index:36,kind:"text",text:"If you could start ONE tiny passive or delayed income stream — even something that earned a small amount each month — what would it be? Think: interest on savings? Renting out something you own with permission? Something else?"},
      {index:42,kind:"text",text:"Your Next Step: What is one small step you could take, even now, to begin building a passive or delayed income stream? Think: saving money that earns interest, planting something that produces fruit to sell later, or creating something once that can be sold more than once. Name your seed."},
      {index:15,kind:"text",text:"Active income: Tuckshop sales (the family works for this). A parent’s part-time cleaning job."},
      {index:16,kind:"text",text:"Passive or delayed income: A mukando payout at an agreed time. Interest on savings. Rent from an asset, where applicable."},
      {index:52,kind:"text",text:"If you cannot ask anyone: Research one type of passive or delayed income that exists in Zimbabwe — for example a mukando payout, rental income or interest from a savings account. Write down what you learn and one risk involved."},
    ],
  },
  "g8-t1-l03-003": {
    blocks: [
      {index:18,kind:"text",text:"They paid. One small amount. Then another. Then another. The exact amount mattered less than the fact that someone was willing to pay for value."},
    ],
  },
  "g8-t1-l07-007": {
    blocks: [
      {index:45,kind:"text",text:"For the next three days, track every amount of money that comes in and every amount that goes out. For each, ask: What value did this money represent? What was I building? What was I breaking?"},
      {index:56,kind:"text",text:"Question 2: Based on your audit, what is ONE specific change you will make in how you use money this week? “Spend less” is not a change. “No airtime purchases before 5pm” is a change. “Save a small amount before spending anything” is a change. Write the exact change."},
    ],
  },
  "g8-t1-l09-009": {
    blocks: [
      {index:33,kind:"text",text:"If you save a small amount every week, you are practising being a saver."},
      {index:34,kind:"text",text:"If you save one large amount once and never repeat the behaviour, you are someone who saved once."},
      {index:39,kind:"text",text:"Key idea: You do not need a lot to be a saver. You need consistency. A river does not cut through rock because it is powerful. It cuts through rock because it is consistent. Drop by drop. Day after day. Year after year. Saving a small amount each week may not feel like much. But the amount is not the only point. Every time you save, you cast a vote for “I am someone who thinks about tomorrow.” After enough votes, the identity begins to lock in."},
      {index:45,kind:"text",text:"Question 2: What is the SMALLEST amount you could save this week without making life harder at home? If the answer is “nothing, I have nothing right now,” then the question changes: What would need to change for saving to become possible? Name that change."},
      {index:49,kind:"text",text:"This week, save SOMETHING if you can. Put it somewhere specific. If you cannot save money, save another resource: time (10 minutes set aside for a goal), effort (one extra chore without being asked), airtime, water or electricity. The experiment is about practising the behaviour of setting something aside for later."},
    ],
  },
  "g8-t1-l15-015": {
    blocks: [
      {index:29,kind:"text",text:"She asked the class who had fixed it. No one answered. But she noticed Sipho — the same Sipho who had spent all his pocket money on sweets and regretted it — looking down at his hands. His fingers had small cuts on them, the kind you get from working with something sharp."},
    ],
  },
  "g8-t1-l19-019": {
    blocks: [
      {index:56,kind:"text",text:"Question 2: Trust takes years to build and seconds to break. What is ONE thing you will do this week to either (a) build trust with someone, or (b) repair trust you have damaged? Be specific. “Be more trustworthy” is not an action. “Pay back the small amount I owe my friend by Friday” is an action."},
    ],
  },
  "g8-t2-l25-025": {
    blocks: [
      {index:20,kind:"table",rows:[
        ["Date","What","Amount"],
        ["1 March","Sold bread","US$4.00"],
        ["1 March","Sold cool drink","US$2.40"],
        ["2 March","Sold bread","US$3.20"],
        ["2 March","Sold milk","US$1.80"],
      ]},
      {index:24,kind:"table",rows:[
        ["Date","What","Amount"],
        ["3 March","Sold sweets","US$1.50"],
        ["3 March","Sold cool drink","US$1.60"],
        ["4 March","Sold bread","US$4.00"],
        ["4 March","Sold milk","US$1.80"],
      ]},
      {index:28,kind:"table",rows:[
        ["Date","Paid to","What for","Amount"],
        ["1 March","Wholesaler","Bread (10 loaves)","US$8.00"],
        ["2 March","Utility account","Electricity","US$5.00"],
        ["3 March","Tuckshop","Milk","US$3.60"],
      ]},
      {index:32,kind:"table",rows:[
        ["Date","Paid to","What for","Amount"],
        ["5 March","Wholesaler","Cool drink","US$12.00"],
        ["5 March","Kombi","Transport","US$2.00"],
        ["6 March","Utility account","Water","US$3.00"],
      ]},
      {index:57,kind:"text",text:"Here’s the tension: records only work if you are honest with them. It is tempting to skip small expenses. “It was only a little. It does not matter.” It is tempting to round numbers in your favour. But the records know. Over time, small dishonesty compounds into large ignorance. The person you cheat when you falsify your records is yourself."},
      {index:61,kind:"text",text:"Question 1: Emmanuel’s shop had total income of US$8.90 and total expenses of US$17.00 in the examples above. What was the profit or loss? What does a negative number mean for a business?"},
      {index:64,kind:"text",text:"Start a simple journal for one week. Write down every time money comes in and every time money goes out. Even the small things. After one week, review your journal."},
      {index:71,kind:"text",text:"| Date | | | Lesson | Lesson 25 — One-Week Money Journal | | Experiment/Observation | I tracked every amount of money in and out for one week (or tracked time). | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t1-l20-020": {
    title: "FOUNDATIONS REVIEW AND PORTFOLIO CHECKPOINT",
    blocks: [
      {index:19,kind:"text",text:"Sipho — who spent all his first pocket money on sweets, and who fixed a chair with his hands"},
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
      {index:11,kind:"text",text:"She rubs her eyes and sees her mother at the kitchen table, counting a small pile of notes and coins. She pushes the money toward Myah."},
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
      {index:33,kind:"text",text:"US$0.50 here. US$1 there. It may not seem like much at first."},
      {index:34,kind:"text",text:"But: US$1 a day = US$7 a week ≈ US$30 a month ≈ US$365 a year. Small earnings can become meaningful when repeated."},
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
      {index:57,kind:"text",text:"If you cannot share with anyone: Write a short plan for how you would test your solution — the smallest, cheapest, fastest test possible. If you had only a small starting budget, what would you do tomorrow?"},
      {index:11,kind:"text",text:"Myah walks through the kombi rank, her notebook open. She sees: people are hot. People are thirsty. People are bored. People carry heavy things with nowhere to put them. Each problem is a signal. Each signal is a possibility."},
    ],
  },
  "g8-t2-l29-029": {
    blocks: [
      {index:12,kind:"text",text:"“Um... US$0.20 each?”"},
      {index:14,kind:"text",text:"US$0.80. Thandi’s first income."},
      {index:15,kind:"text",text:"That day, Thandi learned: you can start with what you have — the mangoes were free from her grandmother’s tree. Price is a conversation — she picked US$0.20, but could have asked US$0.30. People will buy if you offer something they want. Small amounts add up — by the end of the day, she had US$4.20."},
      {index:21,kind:"table",rows:[["Lesson","What It Means"],["Start with what you have","The mangoes were free"],["Price is a conversation","She picked US$0.20 and learned she could test a higher price"],["People will buy","If you offer value"],["Small adds up","US$4.20 in one afternoon"],["Dignity in earning","She could provide for herself"]]},
      {index:26,kind:"text",text:"1. Thandi sold mangoes for US$0.20 each. She sold 30 mangoes. How much did she earn? US$ _______"},
      {index:27,kind:"text",text:"2. A buyer offered US$0.15 each for 10 mangoes. If she agrees, how much does she earn from that sale? US$ _______"},
      {index:28,kind:"text",text:"3. She sells 10 at US$0.15 and 20 at US$0.20. What is her total? US$ _______"},
      {index:40,kind:"text",text:"Here’s the tension: the power to name a price is the power to value what you offer. Thandi could have asked US$0.10. She could have asked US$0.30. The choice was hers — but the market also responds. Name too high, and customers may walk away. Name too low, and you may undervalue your effort and make the work unsustainable. Pricing is not only math. It is a decision about value, customers and sustainability."},
      {index:44,kind:"text",text:"Question 1: Thandi could have charged US$0.30 for her mangoes instead of US$0.20. Why might she have chosen the lower price? What are the advantages and disadvantages? What would you have charged? Why?"},
      {index:8,kind:"text",text:"Thandi lives near Mutare. Her grandmother has a mango tree in the yard. Every season, the tree is heavy with fruit — more than they can eat."},
      {index:9,kind:"text",text:"One year, Thandi had an idea. She picked the mangoes. She washed them until they shone. She arranged them in a crate. She walked to the side of the road near the kombi rank."},
      {index:53,kind:"text",text:"If you cannot ask anyone: Research what similar things sell for — at a market, near a kombi rank, at a tuckshop, or elsewhere in your community. Write down the prices and the currency used. What do you notice?"},
    ],
  },
  "g8-t2-l35-035": {
    blocks: [
      {index:56,kind:"text",text:"US$2 for a regular wash, US$3 for a full service"},
      {index:60,kind:"text",text:"US$3 for a car, US$5 for a larger vehicle"},
      {index:68,kind:"text",text:"US$3 for plaits, US$5 if you want beads"},
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
      {index:10,kind:"table",rows:[["Date","Item","Amount"],["1 March","Kombi to work","US$3.00"],["1 March","Bread","US$1.40"],["1 March","Milk","US$1.80"],["2 March","Kombi","US$3.00"],["2 March","Airtime","US$1.20"],["2 March","Vegetables","US$4.50"]]},
      {index:12,kind:"text",text:"“Transport costs are huge,” Busisiwe says. “They can become about US$60 in a month. The small daily buys also add up. We did not see the pattern until we wrote it down.”"},
      {index:39,kind:"text",text:"Start your own tracking notebook this week — or continue the one you started. Write down everything you spend. Every amount, with the currency clearly labelled. No judgment. Just noticing. At the end of the week, ask yourself: “What does this record tell me that I did not know before?”"},
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
  "g8-t3-l51-050": {
    title: "THE GARDENERS OF MASHONALAND EAST",
    textReplacements: [
      {
        from:"The Mkhize family lives in a village in Limpopo.",
        to:"The Moyo family lives in a village in Mashonaland East.",
      },
      {
        from:"Then Granny Mkhize had an idea.",
        to:"Then Gogo Moyo had an idea.",
      },
      {
        from:"Granny Mkhize says:",
        to:"Gogo Moyo says:",
      },
      {
        from:"What habits did the Mkhize family need to build the garden?",
        to:"What habits did the Moyo family need to build the garden?",
      },
      {
        from:"What would Granny Mkhize say?",
        to:"What would Gogo Moyo say?",
      },
    ],
  },
  "g8-t3-l52-051": {
    blocks: [
      {index:8,kind:"text",text:"Habits are not just personal. Families have habits too. Some family habits: eating together, saving together through a mukando or savings club, helping with chores, sharing money when someone needs it, planning for the future."},
    ],
  },
  "g8-t3-l55-054": {
    blocks: [
      {index:43,kind:"text",text:"This week, try one small way to earn. It could be helping a neighbour, selling something, offering a service. Even a very small earning counts. Even one customer counts."},
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
      {index:14,kind:"text",text:"Track every amount I spend"},
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
  "g8-t2-l31-031": {
    blocks: [
      {index:13,kind:"text",text:"Price (US$9.99 can feel cheaper than US$10 even though the difference is tiny)"},
    ],
  },
  "g8-t2-l32-032": {
    blocks: [
      {index:11,kind:"text",text:"Myah looks at her own spending. Airtime. She buys it regularly. Need or want? She uses it to call her mother when she is working late. That feels like a need. She uses it to scroll social media when she is bored. That feels like a want. The same amount of money. Two different purposes. The line is not just blurry — it moves depending on the moment."},
      {index:19,kind:"text",text:"Your family has US$20 left after paying all essential bills. You must choose between TWO of the following. You cannot have all four. Which two do you choose — and why?"},
      {index:20,kind:"text",text:"School shoes for your younger sibling (US$12)"},
      {index:21,kind:"text",text:"Data for homework this month (US$6)"},
      {index:22,kind:"text",text:"A birthday gift for your grandmother (US$8)"},
      {index:23,kind:"text",text:"Airtime for your phone (US$4)"},
      {index:40,kind:"text",text:"If you cannot observe a trade-off: Imagine you had US$10 and had to choose between something for yourself and something for your family. Write what you would choose — and be honest about the struggle."},
    ],
  },
  "g8-t2-l33-033": {
    blocks: [
      {index:8,kind:"text",text:"Karabo saved for months. A little here. A little there. She wanted the takkies everyone had — the ones with the white soles and the logo that said “you belong.”"},
      {index:36,kind:"text",text:"Here’s the tension: not everyone can afford to be generous. Karabo had saved money. She had a choice. What about the person who has nothing to give — whose available money goes to survival? Does that person lack values? No. They lack resources. Generosity is beautiful. But generosity from abundance is different from generosity from sacrifice. Karabo sacrificed. Not everyone can."},
    ],
  },
  "g8-t2-l34-034": {
    blocks: [
      {index:11,kind:"text",text:"School shoes: Price US$15, Value = you can go to school"},
      {index:12,kind:"text",text:"Takkies: Price US$30, Value = status, belonging, maybe happiness"},
      {index:16,kind:"table",rows:[["Item","Cheap Price","What Happens","Real Cost"],["Shoes","US$8","Fall apart quickly","Buy again = US$16"],["Phone","US$50","Breaks quickly","Buy again = US$100"],["Food","US$0.50","Makes you sick","Medicine + suffering"]]},
      {index:26,kind:"table",rows:[["Item","Price","Situation","Good Value? Why?"],["School shoes","US$15","Last all year",""],["Takkies","US$30","Last 3 months",""],["Loaf of bread","US$1.20","Feeds family",""],["Cheaper bread","US$0.80","Goes stale tomorrow",""],["Data bundle","US$2.90","Lasts a week",""],["Data bundle","US$10","Lasts a month",""]]},
    ],
  },
  "g8-t2-l37-036": {
    blocks: [
      {index:14,kind:"text",text:"Myah looks at her notebook. She has been tracking her money for weeks — every coin, note or digital payment, and every expense. She has the data. Now she needs a plan."},
      {index:53,kind:"text",text:"If you cannot share with anyone: Review your budget yourself. Ask: If I had to cut one small expense from this budget, where would it come from? The answer tells you what is truly essential."},
    ],
  },
  "g8-t2-l38-037": {
    blocks: [
      {index:8,kind:"text",text:"Themba gets US$5 pocket money every Friday. By Sunday, it is gone. He does not know where it went. It just... disappears. His grandmother says: “Money burns a hole in your pocket.”"},
      {index:11,kind:"table",rows:[["Day","What","Amount"],["Friday","Cool drink after school","US$0.80"],["Friday","Airtime","US$1.20"],["Saturday","Sweets","US$0.50"],["Saturday","Data","US$1.00"],["Saturday","Chips","US$0.70"],["Sunday","Church offering","US$0.20"],["Sunday","Cool drink","US$0.60"],["Total","","US$5.00"]]},
      {index:12,kind:"text",text:"He looks at the list. He cannot believe it. US$1.40 on cool drinks. US$1.20 on airtime. US$1.00 on data. US$1.20 on sweets and chips. Only the US$0.20 offering is something he does not regret."},
      {index:22,kind:"text",text:"For one week, track everything you spend. Every amount."},
      {index:31,kind:"text",text:"Key idea: Themba thought his money was disappearing. It was not. It was leaking. Small drops, unnoticed, until the bucket was empty. Your money does not disappear. It goes somewhere. Every amount has a story. Tracking tells that story."},
      {index:32,kind:"text",text:"Here’s the tension: tracking requires honesty. It requires looking at your choices without flinching. It requires admitting that the money did not vanish — you spent it. That admission can be uncomfortable. But it is also freeing. Because if you spent it, you can choose to spend it differently. The money you do not track can control you. The money you track gives you information you can use. And if tracking every tiny amount is unrealistic, choose a simpler system you can actually maintain."},
      {index:38,kind:"text",text:"Question 2: Themba spent US$1.40 on cool drinks in one weekend. If he cut that to US$0.70 and saved the other US$0.70, about how much could he save in four weeks? In one year? Do the math. What could that money help him do?"},
      {index:46,kind:"text",text:"| Date | | | Lesson | Lesson 38 — One-Week Spending Tracker | | Experiment/Observation | I tracked every amount I spent for one week (or tracked time). | | Result | | | Learning | | | Next Action | |"},
    ],
  },
  "g8-t3-l41-040": {
    blocks: [
      {index:14,kind:"text",text:"She stares at the page. She has been tracking her money for weeks — every amount, every expense. She tracked her spending earlier in Form 1. She budgeted. She calculated profit and loss. But she has never tracked her habits. She has never really looked at her own morning. She has never asked herself why she keeps doing something that makes her feel worse."},
    ],
  },
  "g8-t3-l42-041": {
    blocks: [
      {index:44,kind:"text",text:"Choose one tiny new habit to try this week. Make it so small it feels almost too easy. Example: Drink a glass of water before school. Say thank you to one person. Save a very small amount. Do it every day. Notice how it feels — especially on the days when it feels pointless."},
    ],
  },
  "g8-t3-l44-043": {
    blocks: [
      {index:11,kind:"text",text:"She decides: every Friday, when she receives money for school, she will put a small fixed amount into her savings before she does anything else. Before spending. Before thinking. The saving place is somewhere safe where she can track her progress. The routine is simple. The decision is already made."},
    ],
  },
  "g8-t3-l45-044": {
    blocks: [
      {index:8,kind:"text",text:"One small saving can feel like nothing. But repeated action changes the result:"},
      {index:9,kind:"text",text:"US$0.50 a day = US$3.50 a week ≈ US$15 a month ≈ US$182.50 a year"},
      {index:12,kind:"text",text:"Myah calculates this in her notebook. She does not have US$0.50 to save every day. But she could save US$0.20 a week. US$0.20 a week = US$10.40 over 52 weeks. Not nothing. A start. She writes: The amount does not matter as much as the consistency. Every week I save, I vote for “I am a saver.” After enough votes, I will believe it."},
    ],
  },
  "g8-t3-l46-045": {
    blocks: [
      {index:8,kind:"text",text:"Imagine you save US$1 a week."},
      {index:9,kind:"text",text:"After one year: US$52"},
      {index:10,kind:"text",text:"After five years: US$260 — before any interest"},
      {index:11,kind:"text",text:"After ten years: US$520 — before any interest"},
      {index:15,kind:"text",text:"Year 1: US$10.00 earns 2% interest → US$10.20"},
      {index:16,kind:"text",text:"Year 2: US$10.20 earns about US$0.20 interest → about US$10.40"},
      {index:17,kind:"text",text:"Year 3: about US$10.40 earns about US$0.21 interest → about US$10.61"},
      {index:23,kind:"text",text:"If you saved US$0.50 a week for a year, how much would you have? What could you do with that money? Now imagine you did that for five years. What changes?"},
      {index:27,kind:"text",text:"Start with US$10. Add US$1 every week. No interest."},
      {index:28,kind:"text",text:"After 1 year: US$10 + (US$1 × 52) = US$ _______"},
      {index:30,kind:"text",text:"Year 1: US$62 + 5% = US$ _______   Year 2: Add US$52 = US$_______ + 5% = US$ _______   Year 3: Add US$52 = US$_______ + 5% = US$ _______"},
    ],
  },
  "g8-t3-l49-048": {
    blocks: [
      {index:12,kind:"text",text:"Remember Sipho from earlier in Form 1? He had no goals. Then he started saving US$0.50 a week. He did it for six weeks straight. He was proud."},
      {index:13,kind:"text",text:"Then week seven came. His friends wanted to go to the movies. He had US$3 saved. He used it all."},
      {index:20,kind:"text",text:"And something else happened. Remember the chair he fixed earlier in Form 1? Ms. Daniels noticed that Sipho’s hands knew things his mouth could not yet say. Now, Sipho is starting to see it too. He fixed a neighbour’s bicycle last week. He charged US$3. He saved US$2 of it. The boy who spent everything on sweets is becoming someone different — one small choice, one small repair, one restart at a time."},
    ],
  },
  "g8-t3-l50-049": {
    blocks: [
      {index:16,kind:"text",text:"One week, he really wanted something that cost US$5. But he had nothing left. He had spent his available money on sweets and airtime."},
      {index:19,kind:"text",text:"The next week, he saved US$2.50. The week after, he saved US$2.50 again. In two weeks, he had US$5. He bought what he wanted."},
    ],
  },
  "g8-t3-l53-052": {
    blocks: [
      {index:18,kind:"table",rows:[["Action","Evidence","Identity"],["I saved US$0.50 today","“I save money”","I am a saver"],["I helped my sister","“I help others”","I am a helper"],["I gave up on my goal","“I quit”","I am a quitter"]]},
      {index:42,kind:"text",text:"Here’s the tension: you are always voting. Every action is a vote for some identity. The question is not whether you are voting. The question is which identity you are voting for. When you save, you vote for “I am a saver.” When you repeatedly break a promise to yourself, you cast a different vote. There is no day off from becoming. You are becoming someone, every day, through repeated choices. The only question is who."},
    ],
  },
  "g8-t3-l54-053": {
    blocks: [
      {index:10,kind:"text",text:"You can be a saver with a very small weekly amount. You can be a saver with more. The amount matters for the goal, but the habit is what builds the identity."},
      {index:29,kind:"text",text:"Key idea: The word “saver” sounds like someone who holds back. But think of it differently: a saver is sending money forward. You are not simply losing today’s spending power. You are sending resources to your future self. Your future self is not a stranger. Your future self is you. Send them something good."},
      {index:30,kind:"text",text:"Here’s the tension: your present self also wants things. Your present self wants the cool drink, the airtime, the snack. Your present self is loud and urgent. Your future self is quiet and patient. Saving is a negotiation between your present self and your future self. Every time you save, you are telling your present self: “Not now. Later.” That is hard. And sometimes your present self should win because a need is real. The skill is learning to tell the difference."},
    ],
  },
  "g8-t4-l67-066": {
    blocks: [
      {index:6,kind:"table",rows:[["Element","Details"],["Duration","4–6 weeks"],["Goal","Save for something specific"],["Earning","Through your own effort"],["Tracking","Record every amount earned and saved"],["Reflection","What helped? What got in the way? What did you learn about yourself?"],["Presentation","Share your journey — the goal, the process, the struggle, the outcome, the learning"]]},
      {index:44,kind:"text",text:"Here’s the tension: the first earning is the hardest. The first sale, the first savings deposit — they can feel awkward, uncertain and small. You will wonder if it is worth it. It is. The first earning is not only about the money. It is about the proof: proof that you can create value and keep a promise to yourself. The hard part is starting. Start anyway. And remember: some weeks you may earn nothing. That is data, not a reason to quit."},
      {index:45,kind:"text",text:"Your Next Step: What is the FIRST thing you will do to earn your first amount? When exactly will you do it? Name the day. Name the action."},
      {index:50,kind:"text",text:"Take your first step this week. Earn your first amount, however small. Start."},
    ],
  },
  "g8-t4-l71-070": {
    blocks: [
      {index:7,kind:"text",text:"Myah knocks on her first neighbour’s door. Mrs. Dlamini. She asks if she needs help with anything — shopping, cleaning, carrying things. Mrs. Dlamini says yes. She needs someone to fetch her medication from the clinic once a week. She will pay US$1.50. Myah writes it down. Her first earning. Her first customer. She thinks: This is not a big business. It is not even really a business. But it is something. It is a start. And every big thing started small."},
    ],
  },
  "g8-t4-l72-071": {
    blocks: [
      {index:7,kind:"text",text:"Myah is three weeks into her earning and saving. She looks at her tracker. Week 1: US$3 earned, US$2 saved. Week 2: US$4.50 earned, US$3 saved. Week 3: US$2.50 earned, US$1.50 saved — she was sick one day and could not work. Total: US$10 earned, US$6.50 saved. Her goal is US$12. She is more than halfway there. She writes: I am ahead on savings but behind on earnings. I need to find one more customer, ask for a referral, or adjust the plan."},
    ],
  },
  "g8-t2-l40-039": {
    title: "BUILDING YOUR FIRST BUDGET AND PROGRESS REFLECTION",
    blocks: [
      {index:9,kind:"text",text:"Myah looks at her tracking data. Her income is small — money from her mother, occasional small payments from helping neighbours. But even small money can be budgeted. She writes:"},
      {index:10,kind:"text",text:"Needs: Transport US$1, school supplies US$0.50. Total US$1.50. Wants: Airtime US$0.50, snacks US$0.50. Total US$1. Savings: US$0.50 a week into my savings."},
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
      {index:66,kind:"text",text:"From me, in Form 1 Date: _____________________"},
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
      {index:11,kind:"text",text:"The Highfield mukando members — proving that community creates accountability"},
      {index:22,kind:"text",text:"Saving stories from your community — mukando, savings clubs, livestock or other ways families prepare for future needs"},
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
      {index:10,kind:"text",text:"Emmanuel at the tuckshop — learning that every product has a story, and profit helps a small business survive"},
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
      {index:18,kind:"text",text:"Small steps compound into bigger results — US$0.50 a day becomes US$182.50 over 365 days"},
      {index:2,kind:"text",text:"Recall key learning from your habit work."},
      {index:10,kind:"text",text:"The mukando members again — showing the power of routine and accountability"},
      {index:7,kind:"text",text:"📘 Where We Went with Habits"},
      {index:8,kind:"text",text:"During the habit cycle, you asked: What small things, done regularly, change everything?"},
      {index:31,kind:"text",text:"✍️ Activity 63: Habit Memory — With Review-Habit Audit"},
      {index:48,kind:"text",text:"Here’s the tension: the review habit is a muscle. Use it or lose it. It is easy to finish the 21-day project and go back to old ways — to stop tracking, stop noticing, stop adjusting. The real test is not whether you tracked for 21 days. It is whether you are still tracking now. It is whether you will track again when you need to. The review habit may be one of the most important things you learned from the habit work. Do you still have it? Or did you leave it behind with the tracker sheet?"},
      {index:51,kind:"text",text:"Question 1: Look at your 21-day habit tracker. What pattern did you notice in your habit performance? What helped you succeed on your best days? What did you learn about yourself from tracking this habit?"},
      {index:49,kind:"text",text:"Your Next Step: What is one way you can keep the review habit alive after Form 1 ends? A monthly review? A weekly check-in? A commitment to track something every term? Design your maintenance plan now, before the year ends."},
      {index:52,kind:"text",text:"Question 2: The review habit — noticing and adjusting your habits — is more valuable than any single habit. Have you kept it alive? If yes, how? If no, what happened? What is ONE way to restart it before Form 1 ends?"},
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
      {index:14,kind:"text",text:"The Highfield mukando members — who proved that community creates accountability"},
      {index:15,kind:"text",text:"Emmanuel — learning business at the tuckshop, tracing supply chains"},
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

  "g9-t2-l17-018": {
    textReplacements: [
      {from:"Identify the original value behind a rand in your own life.",to:"Identify the original value behind money in your own life."},
      {from:"📘 The R5 Note in Myah's Pocket",to:"📘 The Note in Myah's Pocket"},
      {from:"Myah has been selling water at the taxi rank for two months now. She knows her customers. She knows her margins. She knows that R5 is the right price — a coin, not a question.",to:"Myah has been selling water at the kombi rank for two months now. She knows her customers. She knows her margins. She knows the price that works in that place and moment."},
      {from:"But today, a customer does something unusual. An elderly woman, Mrs. Dube, hands her a R5 coin and says: \"This coin came from my daughter in Cape Town. She sent it with a neighbour's child who was coming home for a funeral. Before that, my daughter earned it working at a supermarket — ten hours on her feet for R280 a day. Before the supermarket, the money was in the till of a customer who bought bread and milk. Before that, who knows? Maybe a factory. Maybe a farm. Maybe someone's pension.\"",to:"But today, a customer does something unusual. An elderly woman, Mrs. Dube, pays and says: \"This money came from my daughter in another city. She earned it working at a supermarket. Before that, it was in the till of a customer who bought bread and milk. Before that, who knows? Maybe a factory. Maybe a farm. Maybe someone's pension.\""},
      {from:"Myah stares at the R5 coin in her hand. It is just a coin. But it carries a story. It passed through a till in Cape Town, into a daughter's hand, onto a bus or in a pocket, across a thousand kilometres, into her own hand at a taxi rank in Johannesburg. And before all of that, someone, somewhere, created something of value — stacked a shelf, harvested a crop, cared for a child — and got paid.",to:"Myah stares at the money in her hand. It looks ordinary. But it carries a story. It moved through a till, into a worker's hand, through other people and places, and eventually into her own hand at a kombi rank. Before all of that, someone, somewhere, created something of value — stacked a shelf, harvested a crop, cared for a child — and got paid."},
      {from:"Every rand has a story. Most of us never read it.",to:"Every amount of money has a story. Most of us never read it."},
      {from:"Every Rand Is a Story You Have Not Read",to:"Every Amount Is a Story You Have Not Read"},
      {from:"I got R__________________ from _______________________________________________",to:"I received __________________ [currency] from _______________________________________________"},
      {from:"I spent R__________________ at _______________________________________________",to:"I spent __________________ [currency] at _______________________________________________"},
      {from:"Grandmother's stokvel → pays out → buys food.",to:"Grandmother's mukando or savings group → pays out → buys food."},
      {from:"Government grant → paid from taxes → supports the family.",to:"Public support or a household transfer → supports the family."},
      {from:"Every rand you have ever held was created by someone, somewhere, who solved a problem for someone else.",to:"Every amount of money you have ever held came through people, work, exchange, transfers or value created somewhere in the economy."},
      {from:"When you hold a rand, you are holding someone's labour, someone's skill, someone's time — compressed into metal and paper.",to:"When you hold money, you are holding a claim on value that moved through someone's labour, skill, time, exchange or transfer."},
      {from:"This week, when you spend money — even R5 — pause.",to:"This week, when you spend money — even a small amount — pause."},
      {from:"I traced one rand received and one rand spent as far back and forward as I could.",to:"I traced one amount received and one amount spent as far back and forward as I could."},
    ],
  },
  "g9-t2-l18-019": {
    textReplacements: [
      {from:"Crèche salary: R3,200",to:"Early childhood centre salary: US$220"},
      {from:"Saturday baking: R600–R900 (varies)",to:"Saturday baking: US$40–US$60 (varies)"},
      {from:"Child support grant: R510",to:"Family support / other household income: US$35"},
      {from:"Thabo's delivery contribution: R200–R400 (varies)",to:"Thabo's delivery contribution: US$20–US$30 (varies)"},
      {from:"Rent: R1,400",to:"Rent: US$100"},
      {from:"Electricity: R350 (prepaid, runs out fast in winter)",to:"Electricity: US$25 (illustrative household amount)"},
      {from:"Transport: R480 (taxis to work and school)",to:"Transport: US$45 (kombis and other local travel)"},
      {from:"Food: R1,200 (mostly from the spaza shop and the wholesaler)",to:"Food: US$100 (mostly from the tuckshop, market and wholesaler)"},
      {from:"Airtime: R150",to:"Airtime: US$10"},
      {from:"School costs: R200 (fees, supplies, uniform pieces)",to:"School costs: US$15 (supplies and other school needs)"},
      {from:"Stokvel contribution: R200",to:"Mukando contribution: US$15"},
      {from:"\"The crèche pays the rent,\" Grace says. \"The baking pays for everything else. The grant covers food. Thabo's money covers his own costs, mostly. The stokvel is for December — school uniforms for the new year, Christmas food, the one time of year we do not count every rand.\"",to:"\"My salary covers the biggest fixed costs,\" Grace says. \"The baking helps with food and everyday needs. Family support helps when it is available. Thabo contributes to some of his own costs. The mukando helps us prepare for larger expenses instead of facing them all at once.\""},
      {from:"Key idea: Your household's money map is a portrait of its priorities. Where the money goes, there your family's heart is also. School fees mean you value education. Stokvel contributions mean you value community. Airtime means you value connection. The map does not lie.",to:"Key idea: Your household's money map is a portrait of its priorities and constraints. School costs can show a commitment to education. Mukando contributions can show preparation and community accountability. Airtime can represent connection or work. The map does not judge the household; it helps you see patterns clearly."},
    ],
    tableTextReplacements: [
      {from:"Government grants",to:"Public / household support"},
      {from:"Child support, old age pension",to:"Eligible support, pensions or household transfers"},
      {from:"Spaza shop",to:"Tuckshop"},
      {from:"Stokvels",to:"Mukando / savings groups"},
      {from:"Rotating savings payouts",to:"Agreed group savings payouts"},
    ],
  },
  "g9-t2-l19-020": {
    textReplacements: [
      {from:"Emmanuel is seventeen now. He still helps at his family's spaza shop in Katlehong. But he sees it differently than he did a year ago. A year ago, he saw shelves and customers. Now he sees a whole world behind every item.",to:"Emmanuel is seventeen now. He still helps at his family's tuckshop in Chitungwiza. But he sees it differently than he did a year ago. A year ago, he saw shelves and customers. Now he sees a whole world behind every item."},
      {from:"\"And not all of them paid fairly,\" Emmanuel says quietly. \"The farm workers — I read that some of them earn R23 an hour. The truck driver might earn more. The bakery owner earns the most. The farmer depends on the weather and the global wheat price. One bad season and the whole chain feels it.\"",to:"\"And not everyone in the chain has the same bargaining power,\" Emmanuel says quietly. \"A farm worker may earn very little compared with the value that appears later in the chain. A driver carries transport risk. A bakery owner carries business risk. A farmer depends on weather and input prices. One shock can travel through the whole chain.\""},
      {from:"A cool drink: Factory makes drink → Distributor transports to wholesaler → Wholesaler sells to spaza shop → Spaza shop sells to you.",to:"A cool drink: Factory makes drink → Distributor transports to wholesaler → Wholesaler sells to tuckshop → Tuckshop sells to you."},
      {from:"Here’s the tension: gratitude without justice is sentiment. It is easy to feel thankful for the farm worker while doing nothing about the fact that she earns R23 an hour and cannot feed her own children properly. It is easy to appreciate the truck driver while accepting a system where fuel prices rise and his wages do not. The supply chain is not just a series of transactions. It is a series of power relationships. Some people in the chain have choices. Some do not. Your gratitude matters — but it is not a substitute for asking harder questions. Who has power in this chain? Who does not? What would it take to shift that?",to:"Here’s the tension: gratitude without fairness is not enough. It is easy to appreciate the farm worker while ignoring whether workers receive a fair share of the value they help create. It is easy to appreciate the driver while ignoring rising operating costs. A supply chain is not only a series of transactions; it also contains power relationships. Some people have more choices than others. Ask the harder questions: Who carries the risk? Who captures the value? Who has bargaining power? What could make the chain fairer?"},
    ],
    tableTextReplacements: [
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g9-t2-l20-021": {
    textReplacements: [
      {from:"Price: R2.",to:"Illustrative price: US$0.20."},
    ],
  },
  "g9-t2-l21-022": {
    textReplacements: [
      {from:"\"One bottle of my peri-peri sauce sells for R18 at the supermarket. Here is where that R18 goes.\"",to:"\"One bottle of my peri-peri sauce sells for an illustrative US$1.80 at the supermarket. Here is how that US$1.80 can be shared across the chain.\""},
      {from:"Farmer (chillies, onions, garlic): R1.80 per bottle's worth of ingredients. The farmer sells in bulk, tiny margins, dependent on weather and market prices.",to:"Farmer (chillies, onions, garlic): about US$0.18 per bottle's worth of ingredients in this example. The farmer sells in bulk, on thin margins, and remains exposed to weather and market prices."},
      {from:"My factory: We buy ingredients, pay workers, pay rent, pay electricity, make the sauce, bottle it, label it. Our cost per bottle is about R7. We sell to the distributor for R10. Our margin is R3 per bottle — and from that R3, I pay myself last.",to:"My factory: We buy ingredients, pay workers, pay rent and utilities, make the sauce, bottle it and label it. In this example our cost is about US$0.70 per bottle. We sell to the distributor for US$1.00. The US$0.30 difference still has to cover risk, reinvestment and the owner's return."},
      {from:"Distributor: They transport, warehouse, and deliver to supermarkets. They buy at R10, sell at R13. Margin: R3.",to:"Distributor: They transport, warehouse and deliver to shops. In this example they buy at US$1.00 and sell at US$1.30. Difference: US$0.30 before their full operating costs."},
      {from:"Supermarket: They buy at R13, sell at R18. Margin: R5 per bottle — the biggest single margin in the chain. For putting it on a shelf.",to:"Retailer: In this example the retailer buys at US$1.30 and sells at US$1.80. The US$0.50 difference is not pure profit: it also helps cover staff, premises, losses and other operating costs. The question remains: who captures how much value, and why?"},
    ],
    tableTextReplacements: [
      {from:"~R0.50",to:"~US$0.05"},
      {from:"~R2.00",to:"~US$0.20"},
      {from:"~R1.00",to:"~US$0.10"},
      {from:"~R3.00",to:"~US$0.30"},
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g9-t2-l22-023": {
    textReplacements: [
      {from:"Nosipho — the same Nosipho who has wanted to be a teacher since Grade 3 — volunteers at a crèche in Tembisa three afternoons a week. She helps with the younger children, reads to them, and watches how the crèche operates.",to:"Nosipho — the same Nosipho who has wanted to be a teacher since she was younger — volunteers at an early childhood centre in Harare three afternoons a week. She helps with younger children, reads to them, and watches how the centre operates."},
    ],
    tableTextReplacements: [
      {from:"A taxi driver who owns his taxi",to:"A kombi operator who owns the vehicle"},
      {from:"A taxi driver who drives someone else's taxi",to:"A kombi driver who drives someone else's vehicle"},
    ],
  },
  "g9-t2-l23-024": {
    textReplacements: [
      {from:"Myah leans forward. \"Like tracing a rand through my community?\"",to:"Myah leans forward. \"Like tracing money and value through my community?\""},
      {from:"\"Start where you live. Start with your street. Start with the taxi rank. Start with the shops you know. Every rand has a story. Your job is to follow it.\"",to:"\"Start where you live. Start with your street. Start with the kombi rank, market or shops you know. Every amount has a story. Your job is to follow the value and the money.\""},
    ],
    tableReplacements: [
      {
        cellIncludes:"40% of Term 2 grade",
        rows:[
          ["Element","Description"],
          ["Duration","3 weeks of observation and mapping"],
          ["What you will create","A visual Community Money Map with analysis and reflection"],
          ["Presentation","5–7 minute presentation to the class"],
          ["Assessment","Form 2 Term 1 portfolio evidence"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"stokvels",to:"mukando / savings groups"},
      {from:"grants",to:"support / transfers"},
    ],
  },
  "g9-t2-l24-025": {
    title: "THE KOMBI-RANK ECONOMY",
    textReplacements: [
      {from:"15 people buy vetkoek from Auntie Grace at R5 each. That is R75 in her pocket.",to:"15 people buy vetkoek from Auntie Grace at an illustrative US$0.50 each. That is US$7.50 in sales."},
      {from:"8 people buy coffee from the woman with the flask. That is R40.",to:"8 people buy coffee at an illustrative US$0.50 each. That is US$4.00 in sales."},
      {from:"3 taxi drivers buy airtime from the vendor. That is R30.",to:"3 kombi drivers buy airtime worth US$1.00 each. That is US$3.00 in sales."},
      {from:"12 people buy cold drinks from the spaza shop across the street. That is R72.",to:"12 people buy cold drinks from the tuckshop across the street at US$0.60 each. That is US$7.20 in sales."},
      {from:"The spaza shop owner sends most of his money to the distributor. Most of it leaves.",to:"The tuckshop owner uses part of the sales to replace stock from suppliers outside the immediate community. That portion flows outward while some value stays through local wages, services and household spending."},
      {from:"Choose ONE place in your community to observe. It could be a taxi rank, a spaza shop, a market, a street corner, or a community hall.",to:"Choose ONE place in your community to observe. It could be a kombi rank, a tuckshop, a market, a street corner, or a community hall."},
      {from:"Taxi Rank",to:"Kombi Rank"},
      {from:"Taxi rank",to:"Kombi rank"},
      {from:"taxi rank",to:"kombi rank"},
      {from:"taxi drivers",to:"kombi drivers"},
      {from:"taxi driver",to:"kombi driver"},
      {from:"taxis",to:"kombis"},
      {from:"taxi",to:"kombi"},
    ],
    tableTextReplacements: [
      {from:"Lesson 24 — Taxi Rank Economy",to:"Lesson 24 — Kombi-Rank Economy"},
    ],
  },
  "g9-t2-l25-026": {
    textReplacements: [
      {from:"Total: about R4,760",to:"Total: about US$330"},
      {from:"Total: about R3,980",to:"Total: about US$310"},
      {from:"Child support grant: R510",to:"Family support / other household income: US$35"},
      {from:"Income (Monthly):",to:"Illustrative Income (Monthly):"},
      {from:"Crèche salary: R3,200",to:"Crèche salary: US$220"},
      {from:"Saturday baking: R600–R900 (average R750)",to:"Saturday baking: US$40–US$60 (average US$50)"},
      {from:"Child support grant: R510",to:"Family support / other household income: US$35"},
      {from:"Thabo's delivery contribution: R200–R400 (average R300)",to:"Thabo's delivery contribution: US$20–US$30 (average US$25)"},
      {from:"Total: Approximately R4,760",to:"Total: Approximately US$330"},
      {from:"Rent: R1,400",to:"Rent: US$100"},
      {from:"Electricity: R350",to:"Electricity: US$25"},
      {from:"Transport: R480",to:"Transport: US$45"},
      {from:"Food: R1,200",to:"Food: US$100"},
      {from:"Airtime: R150",to:"Airtime: US$10"},
      {from:"School costs: R200",to:"School costs: US$15"},
      {from:"Stokvel: R200",to:"Mukando: US$15"},
      {from:"Total: Approximately R3,980",to:"Total: Approximately US$310"},
      {from:"So we have a surplus,\" Thabo says. \"R780 left over.\"",to:"So we have a surplus,\" Thabo says. \"About US$20 left over.\""},
      {from:"But that R780 is for emergencies, repairs, school fees, Christmas. It is not extra. It is protection.",to:"But that US$20 is for emergencies, repairs and school costs. It is not extra. It is protection."},
    ],
    tableTextReplacements: [
      {from:"Taxi Rank Economy",to:"Kombi-Rank Economy"},
      {from:"R3,200",to:"US$220"},
      {from:"R750",to:"US$50"},
      {from:"R510",to:"US$35"},
      {from:"R300",to:"US$25"},
      {from:"R1,400",to:"US$100"},
      {from:"R350",to:"US$25"},
      {from:"R480",to:"US$45"},
      {from:"R1,200",to:"US$100"},
      {from:"R150",to:"US$10"},
      {from:"R200",to:"US$15"},
      {from:"R4,760",to:"US$330"},
      {from:"R3,980",to:"US$310"},
      {from:"Grant",to:"Family support",exact:true},
      {from:"Stokvel",to:"Mukando",exact:true},
      {from:"R",to:"Currency + amount",exact:true},
    ],
  },
  "g9-t2-l27-028": {
    textReplacements: [
      {from:"Myah has been mapping the taxi rank for three weeks. She has tracked money in. She has tracked money out. Now she is mapping the leaks.",to:"Myah has been mapping the kombi rank for three weeks. She has tracked money in. She has tracked money out. Now she is examining which outflows strengthen local value and which leave without much local return."},
      {from:"She draws a large circle on a piece of paper. Inside, she writes everything that happens at the taxi rank. Outside, she writes everything that leaves.",to:"She draws a large circle on a piece of paper. Inside, she writes everything that happens at the kombi rank. Outside, she writes the payments and value flows that leave the immediate community."},
      {from:"Money spent at the spaza shop (some of it)",to:"Money spent at the tuckshop (some of it)"},
      {from:"Airtime purchased from the network provider (who is based in Johannesburg)",to:"Airtime purchased from a national network provider outside the immediate community"},
      {from:"Myah stares at the map. \"Most of the money leaves,\" she says. \"The taxi rank is like a sieve. The money flows in, but most of it flows out. Very little stays.\"",to:"Myah stares at the map. \"A lot of the money moves outward,\" she says. \"The kombi rank connects our community to a much bigger economy. The question is not whether money leaves — it must — but what value stays, what comes back, and what we can strengthen locally.\""},
      {from:"Your Move: What is one leak you could reduce in your own life? Could you buy from a local shop instead of a chain? Could you save in a stokvel instead of a bank? Could you support a local business instead of a distant one?",to:"Your Move: What is one outflow you could examine more carefully in your own life? Could a local supplier meet the need? Could a trusted mukando or formal savings option help you prepare better? Could you support a local business where the value and price make sense? The goal is not to keep all money local; it is to make deliberate choices."},
      {from:"Every rand that leaves without return is a leak.",to:"Every amount that leaves without strengthening value, resilience or a real need deserves a second look."},
      {from:"Every Rand That Leaves Without Return Is a Leak",to:"Every Outflow Should Have a Reason"},
    ],
  },
  "g10-t1-l01-001": {
    textReplacements: [
      {from:"Conduct a strategic audit of your assets and liabilities from Grade 9.",to:"Conduct a strategic audit of the assets, liabilities and evidence you carry forward from Form 2."},
      {from:"Set a strategic intention for Grade 10 that includes what you are willing to sacrifice.",to:"Set a strategic intention for Form 3 that includes what you are willing to give up or change to make it real."},
      {from:"Myah opened her mouth to tell the story — the grant office, the silence, the cooler box, the first R5 water bottle. But then she stopped.",to:"Myah opened her mouth to tell the story — the committee office, the silence, the cooler box, the first small water sale. But then she stopped."},
      {from:"Think about your Grade 9 journey. What is one scar you carry — a moment when something failed, hurt, or cost you? That scar is not just pain. It is evidence. It is data. What did it teach you that success never could?",to:"Think about your Form 2 journey. What is one scar you carry — a moment when something failed, hurt or cost you? That scar is not just pain. It is evidence. What did it teach you that success never could?"},
      {from:"✍️ Activity 1: My Grade 10 Strategic Audit — With Scar Inventory",to:"✍️ Activity 1: My Form 3 Strategic Audit — With Scar Inventory"},
      {from:"List THREE assets from Grade 9 — skills, habits, mindsets, relationships, evidence — that you will actively use in Grade 10. For each, name one specific situation this term where it will give you an advantage.",to:"List THREE assets from Form 2 — skills, habits, mindsets, relationships or evidence — that you will actively use in Form 3. For each, name one specific situation this term where it may help you."},
      {from:"List TWO liabilities — patterns, beliefs, blind spots — from Grade 9 that could sabotage you this term. For each, name the specific situation where it might appear AND your counter-move.",to:"List TWO liabilities — patterns, beliefs or blind spots — from Form 2 that could undermine you this term. For each, name the situation where it might appear and your counter-move."},
      {from:"What is ONE scar you carry from Grade 9 — a failure, a loss, a moment when something broke? What did it teach you that success never could? How will you use that scar in Grade 10?",to:"What is ONE scar you carry from Form 2 — a failure, loss or moment when something broke? What did it teach you that success never could? How will you use that lesson in Form 3?"},
      {from:"Part D: My Grade 10 Intention — With Sacrifice",to:"Part D: My Form 3 Intention — With Sacrifice"},
      {from:"Key idea: You are not starting Grade 10 empty. You carry everything from Grade 9 — the scars, the evidence, the skills, the systems you built. The person who walked into the grant office, who borrowed a cooler box, who tracked a habit for 21 days — she is still here. But she is not the same. She is becoming someone who designs, not just reacts. Someone who builds, not just starts.",to:"Key idea: You are not starting Form 3 empty. You carry everything from Form 2 — scars, evidence, skills and systems you built. The person who walked into the committee office, borrowed a cooler box and tracked a habit for 21 days is still here. But she is becoming someone who designs, not just reacts; someone who builds, not just starts."},
      {from:"Here’s the tension: the skills that made you successful in Grade 9 may not be the skills that make you successful in Grade 10. Acting on instinct, starting before you are ready, pushing through obstacles with sheer persistence — these got you here. But they will not get you where you need to go next. Grade 10 demands something different: not just action, but architecture. Not just starting, but designing. Not just persistence, but prediction. And here is the harder truth: the strategist carries a burden the challenger never knew. When you design a system and it fails, you cannot blame the system. You built it. You own it. You carry the scar.",to:"Here’s the tension: the skills that helped you in Form 2 may not be enough for Form 3. Acting quickly and pushing through obstacles can help you start, but this year asks for more architecture: design, prediction, measurement and revision. When you design a system and it fails, the useful response is not blame. It is to study what broke, own what you controlled and improve the design."},
      {from:"Your Next Step: What is one situation in Grade 9 where you acted fast — and it worked? What is one situation where acting fast was not enough — where you needed a system, a plan, a design, and you did not have one? What did that cost you? Be specific. What will you do differently in Grade 10?",to:"Your Next Step: What is one Form 2 situation where acting fast worked? What is one situation where action was not enough because you needed a system, plan or design? What did that cost you? What will you do differently in Form 3?"},
      {from:"Review your Strategic Audit. Myah said: \"A system without a scar is just a theory.\" You named one scar. Now answer: If you do NOT use that scar in Grade 10 — if you forget what it taught you — what is the most likely way it will reappear and sabotage you? Write the scene. Be specific. Then write: what is the ONE action you will take THIS WEEK to ensure the scar serves you rather than sabotaging you?",to:"Review your Strategic Audit. You named one scar. If you ignore what it taught you in Form 3, how could the same pattern reappear? Write the scene. Then name one action you will take this week to use the lesson rather than repeat the mistake."},
      {from:"| Date | | | Lesson | Lesson 1 — Grade 10 Strategic Audit | | Experiment/Observation | I conducted a strategic audit including scar inventory. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |",to:"| Date | | | Lesson | Lesson 1 — Form 3 Strategic Audit | | Experiment/Observation | I conducted a strategic audit including scar inventory. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |"},
    ],
  },
  "g10-t1-l02-002": {
    textReplacements: [
      {from:"Thandiwe arrived at 7:45, flustered. She had overslept. Her child had been sick. The stove would not light — Mama Rose always lit it. The recipe for the gravy was in Mama Rose's head, not on paper. By 9am, half the customers had left. By noon, the kitchen had served twenty-three plates instead of the usual sixty. Revenue for the day: R345. On a Tuesday that normally brought in R900.",to:"Thandiwe arrived at 7:45, flustered. She had overslept. Her child had been sick. The stove would not light — Mama Rose always lit it. The recipe for the gravy was in Mama Rose's head, not on paper. By 9am, half the customers had left. By noon, the kitchen had served twenty-three plates instead of the usual sixty. In this illustrative example, revenue for the day was US$34.50 instead of the usual US$90."},
    ],
    tableTextReplacements: [
      {from:"A plate of food for R25",to:"A plate of food for US$2.50 in this illustrative example"},
    ],
  },
  "g10-t1-l03-003": {
    title:"KARABO'S PAYSLIP — UNDERSTANDING THE SYSTEM YOU ENTER",
    textReplacements: [
      {from:"Karabo is in Grade 11 now. She works Saturdays at a clothing shop in the mall. She has been collecting her payslips for six months. She came to find Myah at the taxi rank — not to complain, but because she had discovered something that disturbed her.",to:"Karabo is an older learner who works Saturdays at a clothing shop. She has been collecting her payslips for six months. She comes to find Myah at the kombi rank — not to complain, but because she has started asking what every line on the payslip means."},
      {from:"\"At first I was angry,\" Karabo said. \"I worked those hours. That money was mine. But then I started learning what each deduction was for. PAYE funds schools, roads, clinics. UIF is a safety net. SDL funds training. The union fee gives me collective power I could never have alone. I stopped being angry. I started being... something else.\"",to:"\"At first I was angry,\" Karabo says. \"I worked those hours. Then I started learning what each line meant. PAYE is employee income tax administered by ZIMRA. Other deductions can depend on the law, my employment conditions or choices I have made. I stopped guessing and started checking.\""},
      {from:"She pointed to a line Myah had not noticed. \"This one. R85. 'Admin fee.' I asked my manager what it was for. She said it covers the cost of processing payroll. I asked if I could opt out. She said no. So I am paying R85 a month for someone to calculate how much of my money to take. That is R1,020 a year. For math.\"",to:"She points to a line Myah had not noticed. \"This one. US$5. An optional savings deduction I agreed to months ago. I had forgotten it was there. The lesson for me is simple: if money leaves my pay, I should know why, whether it is required or optional, and what I receive in return.\""},
      {from:"\"Nothing. Not about that line. But I can do other things. I opened a TFSA. Contributions are not taxed. I am learning which deductions are mandatory and which are optional — and I am opting out of everything I can, legally. I am not fighting the system. I am navigating it. There is a difference. Fighting a system you cannot change is exhausting. Navigating it is strategic.\"",to:"\"I cannot simply remove a lawful tax deduction because I dislike it. But I can read my payslip, ask questions, check current ZIMRA guidance and understand which deductions are statutory, contractual or voluntary. I am not fighting the system. I am learning how to navigate it responsibly.\""},
      {from:"4. Karabo's admin fee is R85/month. How much is that per year? R _______",to:"4. Karabo's optional savings deduction is US$5 per month. How much is that over 12 months? US$ _______"},
      {from:"Question 1: If Karabo earns R1,200 gross and mandatory deductions total 18%, what is her net pay? Show your calculation.",to:"Question 1: In a purely illustrative maths example, if gross pay is US$120 and total deductions are 18%, what is net pay? Show your calculation. Do not treat 18% as a current Zimbabwe tax rate."},
      {from:"If you cannot ask anyone: Research one deduction — UIF, SDL, or PAYE. Find out: what percentage goes to administration (not actual benefits)? Write down what you find. Does this change how you feel about the deduction?",to:"If you cannot ask anyone: research PAYE on the official ZIMRA website. Find the latest tax table and write down the date of the table you found. What changed when you checked the source instead of relying on a remembered rate?"},
    ],
    tableReplacements: [
      {
        cellIncludes:"Unemployment Insurance Fund",
        rows:[
          ["Payslip line","What it means","What to check"],
          ["Gross pay","Pay before deductions","Hours/rate or salary agree with the work contract"],
          ["PAYE","Employee income tax administered by ZIMRA","Use the latest applicable ZIMRA table; rates can change"],
          ["Other statutory or employment deductions","Only where current law or an employment arrangement applies","What is required, who receives it, and why"],
          ["Voluntary deductions","Amounts you chose or authorised","Can you change or stop them, and under what rules?"],
          ["Net pay","What remains after deductions","Gross pay minus all valid deductions"],
        ],
      },
      {
        cellIncludes:"Gross pay (16 hours × R55)",
        rows:[
          ["Item","Illustrative Amount"],
          ["Gross pay (16 hours × US$5.50)","US$88.00"],
          ["Illustrative PAYE for the exercise only","-US$8.80"],
          ["Union or association fee, if voluntarily applicable","-US$3.00"],
          ["Optional savings deduction","-US$5.00"],
          ["Net pay in this illustration","US$71.20"],
        ],
      },
    ],
  },
  "g10-t1-l04-004": {
    tableReplacements: [
      {
        cellIncludes:"TFSA growth",
        rows:[
          ["Stream","Type","Illustrative Monthly Amount","Control (1-5)","What could interrupt it?"],
          ["Tutoring","Active","US$200","4","Clients can leave, but new clients may be found"],
          ["Weekend retail","Active","US$120","1","Employer controls shifts"],
          ["Bursary or scholarship stipend","Conditional","US$150","3","Conditions such as academic progress may apply"],
          ["Investment growth","Portfolio","US$15","3","Markets can rise or fall; provider and product rules matter"],
          ["Digital study guides","Business / royalty-like","US$60","4","Demand and platform access can change"],
        ],
      },
    ],
    textReplacements: [
      {from:"\"Five streams. R5,450 total. But look at the control scores. R1,200 of that — more than 20% — could disappear tomorrow if my manager decides to cut my hours. R1,500 more could vanish if I fail one subject. That is nearly half my income dependent on decisions other people make.\"",to:"\"Five streams. In this illustration they total US$545 a month. But look at the control scores. US$120 depends heavily on an employer's shifts and US$150 depends on bursary conditions. The amount matters, but so does who controls whether the stream continues.\""},
      {from:"R1,000 You Control > R3,000 That Can Be Taken Away",to:"Control Matters Alongside Amount"},
      {from:"Key idea: Zinhle earns R5,450 a month as a student. That is impressive. But the more impressive number is her control percentage. She knows exactly which streams depend on someone else's goodwill and which depend only on her. Most people never ask that question. They count the money. They do not count the control. And then one day the manager cuts their hours, the bursary committee says no, the client leaves — and half their income vanishes overnight.",to:"Key idea: in this illustration Zinhle receives US$545 a month from several sources. The useful insight is not that one stream is 'safe' forever. It is that each stream has different dependencies: employer decisions, client demand, bursary conditions, market movement or platform access. Count both the money and the dependency."},
      {from:"Here’s the tension: shifting toward control means earning less now. The retail job pays R1,200. The study guides pay R600. If she quits the retail job to focus on study guides, she takes a 50% pay cut temporarily. That is the trap. The streams with the lowest control often pay the most right now. The streams with the highest control pay the least right now. Choosing control means choosing less money now for more freedom later. Not everyone can afford that choice. If you cannot shift yet, do not blame yourself. But know the direction. And move when you can.",to:"Here’s the tension: a stream you control more may earn less today and still carry real risk. A job may provide steadier cash now; a small business may provide more decision-making control but less certainty. Not everyone can afford to trade current stability for future optionality. The goal is not to worship control. It is to understand the trade-offs."},
      {from:"Your Next Step: If you had to choose TODAY between a R2,000/month job with control score 1 and a R800/month business with control score 5, which would you choose? Why? What does your answer reveal about what you are optimising for?",to:"Your Next Step: if you had to choose between an illustrative US$200/month job with low control and an US$80/month micro-business with higher decision-making control but more risk, what would you choose today? Why? What are you optimising for: stability, learning, control, growth, or something else?"},
    ],
    tableTextReplacements: [
      {from:"Spaza shop",to:"Tuckshop"},
    ],
  },
  "g10-t1-l05-005": {
    textReplacements: [
      {from:"Key idea: Thabo's business looked profitable. It was. But it was less profitable than he thought. And the gap between what he thought and what was true almost broke him. The paradox: the more successful you become, the easier it is to ignore the small leaks. When revenue is growing, R20 here and R30 there feel insignificant. But they add up. And one day, something breaks — a bike, a body, a relationship — and the buffer you thought you had is not there. Because it was never there. You just did not know it.",to:"Key idea: Thabo's business looked profitable, but hidden costs made it less profitable than he thought. Small untracked amounts can look insignificant while revenue is growing, yet they accumulate and weaken the buffer. The strategic response is not fear; it is a simple, repeatable cost-tracking system."},
      {from:"But last week, his bike needed a major repair. R450. And he did not have it.",to:"But last week, his bike needed a major repair. In this illustrative example, the repair cost US$45. He did not have it."},
      {from:"Myah found him at Emmanuel's spaza shop, staring at a piece of paper covered in numbers.",to:"Myah found him at Emmanuel's tuckshop, staring at a piece of paper covered in numbers."},
      {from:"Thabo had been tracking his revenue carefully. Every delivery. Every payment. R2,400 in a good month. But he had not been tracking his costs with the same discipline. He knew the big ones — bike maintenance, airtime, the occasional snack for an elder. But the small ones? The R20 here for a bolt. The R30 there for a new tyre tube. The R10 for parking at the taxi rank when he had to wait. The R50 he gave his younger cousin to help with a delivery when he was sick. He had not counted any of it.",to:"Thabo had been tracking revenue carefully. Every delivery. Every payment. In a good month, about US$240 in this example. But he had not tracked costs with the same discipline. He knew the obvious costs — bike maintenance and airtime. The small ones were missing: US$2 for a bolt, US$3 for a tyre tube, US$1 for a small rank-related cost, US$5 paid to his younger cousin for helping with a delivery. He had not counted any of it."},
      {from:"Myah added them up. R680 in a month. On top of the R400 he had budgeted for known expenses. Total costs: R1,080. Revenue: R2,400. Profit: R1,320.",to:"Myah adds them up: US$68 in hidden costs, on top of US$40 in known expenses. Total costs: US$108. Revenue: US$240. Profit: US$132."},
      {from:"\"That is still profit,\" Thabo said. \"R1,320 a month is good.\"",to:"\"That is still profit,\" Thabo says. \"US$132 a month is still meaningful.\""},
      {from:"\"Yes. But you did not know about R680 of your costs. You thought your profit was R2,000. You were spending money you did not know you were spending. And when the bike broke, you had already spent the buffer you thought you had. The business did not fail because the bike broke. The business failed because you did not know where your money was going.\"",to:"\"Yes. But you did not know about US$68 of your costs. You thought your profit was US$200. The repair exposed a tracking problem that already existed. The lesson is not 'the bike broke the business.' The lesson is that hidden costs made the buffer look larger than it really was.\""},
      {from:"Thabo's hidden costs were R680 — 28% of his revenue. If you had to estimate your hidden costs as a percentage, what would they be?",to:"Thabo's hidden costs were US$68 — about 28% of his US$240 revenue. If you had to estimate hidden costs in a small project, what percentage would you test for first, and how would you verify it?"},
      {from:"Thabo's fix was simple: track every rand. Every bolt. Every parking fee. Every cousin-helping payment. What is ONE system you could put in place to track your hidden costs?",to:"Thabo's fix was simple: track every amount and label the currency. Every bolt. Every fee. Every payment to someone who helps. What is ONE system you could use to track hidden costs?"},
      {from:"Here’s the tension: tracking every rand is exhausting. It takes time. It takes discipline. Most people will not do it. They would rather live with the illusion of profit than face the reality of their spending. The strategist chooses the discomfort of knowing over the comfort of guessing. The question is not whether you can track every rand. The question is whether you can afford not to. Thabo could not afford not to. And he learned — the hard way, with his grandmother's money, with the shame of borrowing again — that the piper always gets paid. The only question is whether you know when the payment is coming.",to:"Here’s the tension: tracking every small cost takes effort. But ignoring small costs creates false confidence. You do not need a complicated accounting system to begin. You need a consistent one. The strategist chooses evidence over guessing and creates a routine simple enough to keep using."},
      {from:"Question 1: Thabo's revenue was R2,400. His tracked costs were R400. His hidden costs were R680. What was his ACTUAL profit? What percentage of his revenue was hidden costs? Show your calculations.",to:"Question 1: Thabo's illustrative revenue was US$240. Known costs were US$40 and hidden costs were US$68. What was actual profit? What percentage of revenue was hidden costs? Show your calculations."},
      {from:"This week, track EVERY rand you spend. Every single one. Even the R2 sweet. Even the R5 airtime. At the end of the week, separate your spending into two columns: \"I Planned For This\" and \"I Did Not Plan For This.\" Total each column.",to:"This week, track every amount you spend and label the currency. Even tiny amounts count. At the end of the week, separate spending into 'I Planned For This' and 'I Did Not Plan For This.' Total each column."},
      {from:"| Date | | | Lesson | Lesson 5 — Hidden Costs Audit | | Experiment/Observation | I audited my hidden costs and tracked every rand for one week. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 5 — Hidden Costs Audit | | Experiment/Observation | I audited hidden costs and tracked every amount for one week. | | Result | | | Learning | | | Next Action | |"},
    ],
    tableReplacements: [
      {
        cellIncludes:"Thabo's Numbers",
        rows:[
          ["Term","What It Means","Thabo's Illustrative Numbers"],
          ["Revenue","All the money customers pay","US$240"],
          ["Expenses","Everything spent to operate","US$108"],
          ["Profit","Revenue − expenses","US$132"],
          ["Hidden costs","Expenses not originally counted","US$68"],
        ],
      },
    ],
  },
  "g10-t1-l06-006": {
    textReplacements: [
      {from:"Lethabo's clock business has grown. He has helpers. He has orders. He has a system. But he also has a problem: he cannot make enough clocks alone. So three months ago, he took on a partner. His cousin, Sizwe. Sizwe had capital — R3,000 saved from a year of working at a supermarket. Lethabo had the skill, the reputation, the customer relationships. They agreed to split everything 50/50. No written agreement. They were family.",to:"Lethabo's clock business has grown. He has helpers, orders and a system. But he cannot make enough clocks alone. Three months ago he took on a partner, his cousin Sizwe. In this illustrative example, Sizwe contributed US$300 in saved capital. Lethabo contributed skill, reputation and customer relationships. They agreed to split everything 50/50. No written agreement. They were family."},
      {from:"They argued. Sizwe wanted out. He wanted his R3,000 back. Lethabo did not have it — he had reinvested everything in materials and paying his helpers.",to:"They argued. Sizwe wanted out and wanted his US$300 back. Lethabo did not have it available because the money had been reinvested in materials and helper payments."},
      {from:"Myah finds Lethabo at Emmanuel's spaza shop, staring at nothing.",to:"Myah finds Lethabo at Emmanuel's tuckshop, staring at nothing."},
    ],
  },
  "g10-t1-l07-007": {
    textReplacements: [
      {from:"Thandi's cooperative has grown. Eight members now. Mangoes, avocados, bananas, herbs. A joint savings account. A shared stall at the taxi rank. By all visible measures, it is a success story.",to:"Thandi's cooperative has grown. Eight members now. Mangoes, avocados, bananas and herbs. A joint account. A shared stall near the kombi rank. By all visible measures, it is a success story."},
      {from:"Myah finds her at the taxi rank on a Thursday afternoon. The stall is open, but Thandi is the only one there. She is supposed to have two partners on shift with her. Neither showed up.",to:"Myah finds her near the kombi rank on a Thursday afternoon. The stall is open, but Thandi is the only one there. She is supposed to have two partners on shift with her. Neither showed up."},
    ],
  },
  "g10-t1-l08-008": {
    tableReplacements: [
      {
        cellIncludes:"With helpers (untrained)",
        rows:[
          ["Scale","Clocks Made","Illustrative Total Cost","Illustrative Unit Cost"],
          ["Alone","8 per week","US$40","US$5.00 per clock"],
          ["With helpers (untrained)","15 per week","US$65","US$4.33 per clock"],
          ["With trained team + system","35 per week","US$120","US$3.43 per clock"],
        ],
      },
    ],
  },
  "g10-t1-l10-010": {
    textReplacements: [
      {from:"Nosipho has been tutoring for six months. She is good at it. Her students pass. Their parents are grateful. She charges R40 per hour.",to:"Nosipho has been tutoring for six months. She is good at it. Her students improve. Their parents are grateful. In this illustrative example, she charges US$4 per hour."},
      {from:"Last week, a new parent asked her rate. She said R40. The parent paused. Then said: \"Is that all? My friend pays R120 an hour for a tutor who is not half as good as you. You should charge more.\"",to:"Last week, a new parent asked her rate. She said US$4. The parent paused, then said: \"Is that all? I know families paying much more for tutoring. Have you checked the market and the value of your results?\""},
      {from:"Nosipho did not know what to say. She felt exposed — like someone had seen something she was trying to hide. Later, she told Myah about it at the taxi rank.",to:"Nosipho did not know what to say. She felt exposed — like someone had seen something she was trying to hide. Later, she told Myah about it at the kombi rank."},
      {from:"\"I do not know how to charge more. R40 feels like... what I am worth. Maybe less. When I think about charging R80, I feel like I am being arrogant. Like someone is going to laugh at me and say: 'Who do you think you are?'\"",to:"\"I do not know how to charge more. US$4 feels tied to what I think I am worth. When I think about charging US$8, I feel arrogant — even though I know pricing should be about the service, the market and the value created, not my worth as a person.\""},
      {from:"The next week, Nosipho told a new parent: \"R80 per hour.\" The parent said yes without hesitating. Nosipho felt sick. Then she felt something else — something that took her a moment to recognize. It was pride.",to:"The next week, after checking comparable tutoring rates and explaining what her sessions include, Nosipho quotes US$8 per hour to a new parent. The parent says yes. Nosipho feels nervous, then proud that she used evidence rather than shame to set the price."},
      {from:"Here’s the tension: naming a higher price does not just change what you earn. It changes who you are. When Nosipho said \"R80\" and the parent said yes, something shifted in her. She felt sick — because she was violating an old belief. Then she felt proud — because she was installing a new one. Every time you name your price without apologizing, you are not just making money. You are rewriting your identity. You are telling yourself: I am someone who creates value, and I am not ashamed to be paid for it. That is not arrogance. That is accuracy.",to:"Here’s the tension: pricing can trigger identity and confidence, but a higher price is not automatically the right price. Nosipho's job is to separate self-worth from pricing and test the business facts: customer value, alternatives, her costs, her time, demand and sustainability. A price is a market decision, not a verdict on who she is."},
    ],
    tableTextReplacements: [
      {from:"Materials R10 + labour R30 + margin R10 = R50",to:"Materials US$1 + labour US$3 + margin US$1 = US$5"},
      {from:"Tutoring that raises a child's grade = R80/hour",to:"Tutoring with strong evidence of value = US$8/hour in this illustration"},
    ],
  },
  "g10-t1-l11-011": {
    title:"COMPETITION, PESTLE & FIVE FORCES — THE SHOP THAT ADAPTED",
    textReplacements: [
      {from:"📘 The Spaza Shop That Refused to Die",to:"📘 The Tuckshop That Refused to Die"},
      {from:"Emmanuel's family spaza shop has survived for fifteen years. It survived the 2008 recession. It survived COVID. It survived the wholesaler closure that broke their supply chain last year. But the new mall — the one that opened six months ago three streets away — is different. The mall has a supermarket with prices Emmanuel cannot match. It has air conditioning. It has parking. It has bright lights and clean floors and a bakery that fills the air with the smell of fresh bread.",to:"Emmanuel's family tuckshop has survived for fifteen years. It has lived through inflation, supply disruptions and changing customer habits. But a new shopping centre that opened nearby is different. The supermarket has purchasing power Emmanuel cannot match. It has parking, long opening hours, bright displays and a bakery that fills the air with fresh bread."},
      {from:"Emmanuel's mother has been quiet for weeks. The numbers tell the story: revenue down 35% since the mall opened. Regular customers still come, but they buy less. The bulk of their shopping goes to the supermarket. The spaza shop gets the leftovers — the single eggs, the emergency bread, the late-night milk.",to:"Emmanuel's mother has been quiet for weeks. The numbers tell the story: revenue down 35% since the shopping centre opened. Regular customers still come, but they buy less. The supermarket gets more of the planned shopping. The tuckshop gets the single eggs, emergency bread and late-night milk."},
      {from:"Choose a real business you know — a spaza shop, a vendor, a service provider, or your own project.",to:"Choose a real business you know — a tuckshop, market stall, vendor, service provider or your own project."},
      {from:"Key idea: Emmanuel's spaza shop is losing. The mall is bigger, cheaper, shinier. On almost every competitive measure, the mall wins. But competitive analysis is not just about identifying threats. It is about identifying the one place you can win — and betting everything on that. For Emmanuel, that place is cooperation. Every spaza shop in Katlehong faces the same mall. Alone, they are vulnerable. Together, they can buy in bulk, share transport, share marketing, share survival.",to:"Key idea: Emmanuel's tuckshop is under pressure. The shopping centre is bigger and can often buy stock more cheaply. Competitive analysis is not only about listing threats. It is about finding where a smaller business can create a defensible advantage. For Emmanuel, one option is cooperation with other local shops: bulk purchasing, shared transport, joint promotions or other arrangements that reduce cost without pretending trust is automatic."},
      {from:"Here’s the tension: cooperation requires trust. And trust is exactly what competition destroys. The spaza shop owners have been competing against each other for years. They have undercut each other on prices. They have bad-mouthed each other to customers. Now Emmanuel is asking them to cooperate. Why should they trust him? Why should they trust each other? The same structural analysis that reveals cooperation as the solution also reveals why cooperation is so hard. The strategist does not just identify the right move. The strategist identifies why the right move is difficult — and then figures out how to make it possible anyway.",to:"Here’s the tension: cooperation requires rules and trust. Local shop owners may have competed against one another for years. The same analysis that makes cooperation attractive also explains why it is difficult. A strategist must design the conditions that make cooperation testable: small commitments, transparent records, clear exit rules and evidence before deeper dependence."},
      {from:"Question 2: Emmanuel identified cooperation as his strategic response to the mall. But the spaza shop owners have been competitors for years. What is the biggest barrier to them cooperating now? If you were Emmanuel, what would you do to overcome that barrier — specifically, practically, tomorrow?",to:"Question 2: Emmanuel identified cooperation as one possible response to the shopping centre. What is the biggest barrier to local shops cooperating? If you were Emmanuel, what low-risk first step would you test tomorrow?"},
      {from:"Visit a small business in your community — a spaza shop, a vendor, a service provider. Observe for ten minutes. Apply PESTLE in your head. Write down: What is the biggest threat they face? What could they do about it — that they are not currently doing?",to:"Visit or observe a small business in your community — a tuckshop, vendor, market stall or service provider. Apply PESTLE. What is one major external factor affecting them? What response could they test?"},
    ],
    tableTextReplacements: [
      {from:"Katlehong",to:"the local market"},
      {from:"Spaza shop",to:"Tuckshop"},
      {from:"spaza shop",to:"tuckshop"},
      {from:"many spaza shops in Katlehong",to:"many small shops in the same local market"},
      {from:"Very easy — anyone can open a spaza shop",to:"Relatively easy — small retail competitors can enter the market"},
      {from:"Load-shedding affects both, but mall has generator",to:"Power interruptions affect both, but larger competitors may have stronger backup systems"},
    ],
  },
  "g10-t1-l12-012": {
    textReplacements: [
      {from:"Emmanuel has been thinking about what Myah said. Cooperation. But before he can convince other spaza shop owners to join him, he needs to be clear about who HE is. What his shop stands for. What makes it different from the mall — and from every other spaza shop.",to:"Emmanuel has been thinking about what Myah said. Cooperation. But before he can convince other tuckshop owners to join him, he needs to be clear about what his own shop stands for and why customers choose it."},
      {from:"\"Emmanuel's Spaza — Open Late, Always Family. 15 Years in Katlehong.\"",to:"\"Emmanuel's Tuckshop — Open Late, Always Family. 15 Years in Chitungwiza.\""},
      {from:"Key idea: Emmanuel's sign was not clever. It was true. \"Open Late, Always Family. 15 Years in Katlehong.\" Every word is verifiable. Every word has been earned. That is not marketing. That is just telling people who you are. And in a world where most marketing is lies dressed up in design, the truth stands out. It does not need to shout. It just needs to be true.",to:"Key idea: Emmanuel's sign was not clever. It was true: \"Open Late, Always Family. 15 Years in Chitungwiza.\" A strong brand claim should be earned and verifiable. Marketing works best when the promise matches the experience customers actually receive."},
    ],
    tableTextReplacements: [
      {from:"Katlehong residents who value community over price",to:"Local residents who value convenience, trust and community alongside price"},
    ],
  },
  "g10-t1-l13-013": {
    textReplacements: [
      {from:"Ms. Daniels stands at the front of the room. The energy is different than in Grade 9. The learners are older. They have built things. They have watched things break. They know that plans are not magic.",to:"Ms. Daniels stands at the front of the room. The energy is different from Form 2. The learners have built things, watched things break and learned that plans are not magic."},
      {from:"\"Your project is to design something that creates lasting value — for yourself, your community, or both. But this is not the Grade 9 project. In Grade 9, we asked you to start something. In Grade 10, we ask you to design something that could outlast you. Something with systems. Something with structure. Something that does not depend entirely on your presence.\"",to:"\"Your project is to design something that creates lasting value — for yourself, your community or both. This is not the Form 2 project. In Form 2, we asked you to start and execute. In Form 3, we ask you to design something with systems and structure — something that does not depend entirely on your presence.\""},
      {from:"Key idea: This is not a test. This is a demonstration. You are not proving what you know. You are proving what you can build. In Grade 9, the question was: can you start? In Grade 10, the question is: can you design something that lasts? The difference is not effort. The difference is architecture.",to:"Key idea: this project is a demonstration. In Form 2, the question was: can you start and execute? In Form 3, the question becomes: can you design something more durable? The difference is architecture."},
    ],
  },
  "g10-t1-l15-015": {
    textReplacements: [
      {from:"\"In Grade 9, I started a water business. It depended on me. I was there at 6am. I bought the stock. I sold the bottles. If I got sick, the business stopped. This project is different. This project is designed to run without me. That is the difference between a job and a system. That is what Grade 10 taught me.\"",to:"\"In Form 2, I tested a water business. It depended on me. I was there early. I bought the stock. I sold the bottles. If I stopped, the activity stopped. This project is different. I designed roles, steps and checks so the work can continue without every decision depending on me. That is what Form 3 is teaching me about systems.\""},
    ],
  },
  "g10-t1-l16-016": {
    textReplacements: [
      {from:"R680",to:"US$68"},
      {from:"R80",to:"US$8"},
      {from:"Lesson 1: Strategic Audit. Her scar inventory. The cooler box. The grant office silence — still there, still teaching. Lesson 2: The kitchen that broke. Mama Rose on her back. Thandiwe failing in public. Single point of failure. Lesson 3: Karabo's payslip. Understanding versus agreeing. Navigating systems you did not choose. Lesson 4: Income control. Zinhle's napkin. Amount versus control. The streams you own. Lesson 5: Thabo's hidden costs. R680 he did not know he was spending. Lesson 6: Lethabo and Sizwe. Partnership without agreement. Trust without structure. Lesson 7: Thandi's cooperative. Free riders. Enforcement. The rules you do not write. Lesson 8: Bottlenecks. Lethabo checking every clock. Letting go. Lesson 9: Intellectual property. Protecting what you build. Building what cannot be copied. Lesson 10: Pricing. Nosipho naming R80. The body knowing the truth before the mind. Lesson 11: Competitive analysis. Emmanuel's mall. PESTLE. Porter's Five Forces. Cooperation as defense. Lesson 12: Brand truth. The sign that was true. Marketing as honesty. Lesson 13: Her Value-Creation Plan. The financial literacy workshop. Systematized. Lesson 14: Feedback. The flaw she did not see. …",to:"Lesson 1: Strategic Audit and scar inventory. Lesson 2: The kitchen that broke — single points of failure. Lesson 3: Karabo's payslip — understanding PAYE and deductions before reacting. Lesson 4: Income streams and dependency. Lesson 5: Thabo's hidden costs — US$68 he had not counted. Lesson 6: Lethabo and Sizwe — trust without structure. Lesson 7: Thandi's cooperative — rules, participation and enforcement. Lesson 8: Bottlenecks and scale. Lesson 9: Intellectual property and defensible value. Lesson 10: Pricing with evidence. Lesson 11: PESTLE and competitive forces. Lesson 12: Brand truth. Lessons 13–15: the Value-Creation Plan — designed, tested and presented."},
      {from:"From me, in Grade 10 Date: _____________________",to:"From me, in Form 3 Date: _____________________"},
      {from:"You finished Term 1 of Grade 10.",to:"You completed the first Form 3 learning cycle: value creation, business systems and enterprise architecture. Form 3 Term 1 continues with saving, investing and assets."},
    ],
  },
  "g10-t2-l17-017": {
    title:"SAVING VS INVESTING — PROTECTING MONEY FOR DIFFERENT JOBS",
    textReplacements: [
      {from:"List any money you have saved — in a bank, in a jar, with a stokvel, anywhere.",to:"List any money you have saved — in a bank, in a jar, through a mukando or another savings arrangement."},
      {from:"📘 The R800 That Shrank",to:"📘 The US$80 That Lost Purchasing Power"},
      {from:"Myah has R800 in a savings account. She put it there eight months ago, after her water business stabilized. She has not touched it. She checks the balance: R812. R12 interest.",to:"Myah has US$80 in a savings account in this illustrative example. She put it there eight months ago and has not touched it. She checks the balance: US$81.20. The number is slightly higher."},
      {from:"She shows her mother. \"Eight months. R12. That is R1.50 a month.\"",to:"She shows her mother. \"Eight months. US$1.20 earned. The balance grew — but only a little.\""},
      {from:"Myah does not understand. Her mother pulls out an old receipt from a drawer. \"This is what bread cost when you were born. R4.50. Now it is R14. The R800 you saved — it is still R800. But what it can buy is less. Every year, a little less. That is inflation. It does not break down your door. It just quietly takes your money's ability to do things. Saving protects the number. It does not protect the value.\"",to:"Myah does not understand. Her mother explains: \"Prices can rise over time. If the return on your savings is lower than inflation, the balance may grow while its purchasing power falls. Saving and investing therefore do different jobs. Savings prioritise access and stability; investing accepts more risk in pursuit of long-term growth.\""},
      {from:"Myah stares at the receipt. R4.50. She cannot remember bread ever costing R4.50. She looks at her bank balance. R812. The number is growing — R1.50 a month. But what it can buy is shrinking — faster than R1.50 a month.",to:"Myah looks at the balance again. The number rose, but she now understands that the useful question is what the money can buy when she needs it."},
      {from:"If inflation is 6% per year and your savings earn 2% interest, are you gaining or losing purchasing power? By how much per year? If your R800 sits in savings for 5 years at 2% interest while inflation is 6%, what can it buy then that it can buy now?",to:"In a hypothetical example where inflation is 6% per year and savings earn 2%, are you gaining or losing purchasing power? By roughly how much per year? Use US$80 as the starting amount for the calculation. These rates are for maths practice, not current Zimbabwe rates."},
      {from:"Key idea: Myah's R800 is safe. The bank will not lose it. No one will steal it. But safety is not the same as growth. While her money sits in savings earning R1.50 a month, the price of everything she needs — bread, transport, airtime — is rising faster. She is not being robbed by a thief. She is being eroded by time. Saving protects the number. Investing protects the value. They are different tools for different purposes.",to:"Key idea: saving and investing solve different problems. A savings account can prioritise access and lower risk, but returns may not keep pace with inflation. Investing offers higher growth potential but also the possibility of loss. Neither tool is automatically 'better.' The right choice depends on purpose, time horizon, liquidity needs and risk."},
      {from:"Question 2: If you had R1,000 and a goal to use it in 6 months, would you save or invest? Why? If the goal was 10 years away, would your answer change? What does the difference reveal about how time horizon determines strategy?",to:"Question 2: If you had US$100 for a goal six months away, would you save or invest? Why? If the same goal were ten years away, would your answer change? Explain how time horizon affects strategy."},
      {from:"Find out the current interest rate on a savings account at a South African bank. Find out the current inflation rate. Compare them. If someone saved R1,000 for a year, would they gain or lose purchasing power? By how much? Write down what you find.",to:"Research one current Zimbabwe savings product from a regulated provider and find the latest published inflation figure from a credible source. Record the date of both figures. Compare them, but do not assume one product or one month's inflation represents the future."},
    ],
    tableTextReplacements: [
      {from:"stokvel",to:"mukando or savings group"},
      {from:"Stokvel",to:"Mukando or savings group"},
    ],
  },
  "g10-t2-l18-018": {
    textReplacements: [
      {from:"📘 Themba's R2,000 Mistake — Revisited With New Eyes",to:"📘 Themba's US$200 Mistake — Revisited With New Eyes"},
      {from:"\"Last year I told you about losing R2,000 on an online business idea. I said I learned about risk. But I did not tell you the whole story.\"",to:"\"Last year I told you about losing US$200 on an online business idea in this illustrative story. I said I learned about risk. But I did not tell you the whole story.\""},
      {from:"\"I did not just lose R2,000. I borrowed R1,000 of it from my grandmother. She gave it to me because she believed in me. When the business failed, I could not pay her back for six months. Six months of her looking at me with disappointment she was too kind to say out loud. Six months of me avoiding her house because I could not face her.\"",to:"\"I did not just lose US$200. I had borrowed US$100 of it from my grandmother. When the business failed, I could not repay her for six months. The financial loss damaged trust too.\""},
      {from:"\"The R2,000 loss was bad. The shame was worse. And I did not factor the shame into my risk calculation. I only thought about the money. I did not think about what it would feel like to lose money that was not mine. What it would do to the person who gave it to me. What it would do to our relationship.\"",to:"\"The US$200 loss was bad, but the relationship cost was worse. I had calculated financial risk and ignored human risk — especially because part of the money was not mine.\""},
      {from:"\"That risk is not just about numbers. It is about what you can afford to lose — not just financially, but emotionally, relationally, psychologically. I could not afford to lose R2,000. But more than that, I could not afford to lose my grandmother's trust. I lost both because I only calculated the financial risk. I did not calculate the human risk. Now I do. Before I invest in anything, I ask: If this goes to zero — not just the money, but everything attached to it — can I survive that? If the answer is no, I do not invest. No matter how good the return looks.\"",to:"\"Risk is not only the amount on the screen. I now ask: if this goes badly, what else is attached — debt, trust, essential money, time or reputation? If the downside would damage something I cannot afford to lose, the position is too large or the funding source is wrong.\""},
      {from:"If you invested R500 and it dropped to R250, how would you feel? ☐ I would panic and sell immediately ☐ I would be uncomfortable but hold on ☐ I would see it as a buying opportunity ☐ I do not know — I have never been tested",to:"If an illustrative US$50 investment fell to US$25, how would you feel? ☐ I would panic and sell immediately ☐ I would be uncomfortable but review my plan before acting ☐ I might consider adding only if the original case still holds and I can afford the risk ☐ I do not know — I have never been tested"},
    ],
  },
  "g10-t2-l19-019": {
    textReplacements: [
      {from:"\"Not money. Time. Knowledge. I have been teaching the younger women at the stokvel. Not just how to save — they know that. How to invest. How to think about risk. How to read a payslip. How to check a credit score. The things I learned too late. I am giving them what I did not have: the knowledge, early enough to use it.\"",to:"\"Not money. Time. Knowledge. I have been teaching younger women after their mukando meeting. Not just how to save — they know that. We talk about investing, risk, payslips and how to check a credit record. I am giving them knowledge early enough to use it.\""},
      {from:"She pulls out a piece of paper. On it, she has written names. \"Thirteen women. They meet with me every Saturday, after the stokvel meeting. I teach them for an hour. They teach each other. Some of them have opened tax-free savings accounts. Two of them have started small businesses. One of them — my neighbour's daughter, Palesa — she is 19. She has already started a retirement annuity. Nineteen! When I was 19, I did not know what retirement was.\"",to:"She pulls out a piece of paper. On it, she has written names. \"Thirteen women. They meet with me every Saturday after the mukando meeting. I teach for an hour, then they teach one another. Some have opened formal savings or investment accounts with regulated providers. Two have started small businesses. One has already begun a long-term retirement saving habit. The exact product matters less than starting with understanding.\""},
      {from:"Example: If you invest R1,000 at 8%, it will double to R2,000 in about 9 years. In another 9 years, it will double again to R4,000. In 36 years (4 doubles), it becomes about R16,000.",to:"Hypothetical maths example: if US$100 grows at a constant 8% annually, the Rule of 72 suggests a doubling time of about 9 years. Four approximate doublings would turn US$100 into roughly US$1,600. Real returns are not constant or guaranteed."},
      {from:"Example: Save R1,000 at 10% compound interest for 3 years.",to:"Hypothetical example: compound US$100 at 10% per year for 3 years."},
      {from:"With simple interest, you would have R1,300 after 3 years. Compound interest gave you R1,331 — an extra R31. Over longer periods, the difference is enormous.",to:"With simple interest in this example, you would have US$130 after 3 years. Compound growth gives US$133.10 — an extra US$3.10. Over long periods, the gap can become much larger."},
      {from:"If you invest R1,000 at 8%, about how much will it be worth in 36 years (doubles every 9 years = 4 doubles)? R _______",to:"Using the Rule of 72 approximation, if US$100 grows at 8%, about how much would four doublings produce? US$ _______"},
      {from:"Using the start-age table above: If you start saving R500/month at age 20, about how much will you have at retirement? R _______",to:"Using the illustrative start-age table above, what is the lesson about starting earlier even when the monthly contribution is small? Do not treat the displayed growth rate as guaranteed."},
      {from:"Key idea: Gogo Maria learned about compound interest too late to use it for money. But she found another currency: people. Every woman she teaches becomes a teacher. Every teacher reaches more women. That is compounding — not in rands, but in lives changed. The mathematics is the same. The currency is different. You do not need money to start compounding. You need something to invest — knowledge, time, skill — and the patience to let it grow.",to:"Key idea: Gogo Maria learned about compounding late, but she recognised the pattern beyond money. Knowledge can also spread through repeated teaching. Financial compounding is mathematical; social learning is not literally the same formula, but the analogy is useful: small repeated contributions can accumulate into something much larger."},
      {from:"Question 1: Using the Rule of 72, how long does it take money to double at 9%? Show your calculation. If you invest R100 at age 16 at 9%, about how many times will it double by age 70? What will it be worth?",to:"Question 1: Using the Rule of 72, about how long does money take to double at a hypothetical 9% return? If US$10 compounded at that constant rate from age 16 to 70, estimate the number of doublings and final amount. State clearly that the return is hypothetical."},
    ],
    tableReplacements: [
      {
        cellIncludes:"R1,100",
        rows:[
          ["Year","Start","Interest (10%)","End"],
          ["1","US$100.00","US$10.00","US$110.00"],
          ["2","US$110.00","US$11.00","US$121.00"],
          ["3","US$121.00","US$12.10","US$133.10"],
        ],
      },
      {
        cellIncludes:"R270,000",
        rows:[
          ["Start Age","Illustrative Monthly Contribution","Years","Total Contributed","Illustrative Growth at 8%"],
          ["20","US$50","45","US$27,000","Approx. US$230,000"],
          ["30","US$50","35","US$21,000","Approx. US$110,000"],
          ["40","US$50","25","US$15,000","Approx. US$47,500"],
          ["50","US$50","15","US$9,000","Approx. US$17,000"],
        ],
      },
    ],
  },
  "g10-t2-l21-021": {
    textReplacements: [
      {from:"Here’s the tension: starting small feels pointless. One sewing machine. One R100 investment. One skill learned. It feels like nothing. It feels like it will never add up to anything. That feeling — the feeling of pointlessness — is what stops most people. They cannot see the factory in the sewing machine. The strategist sees what others cannot: the compound curve, the long arc, the invisible growth that happens underground before anything breaks the surface.",to:"Here’s the tension: starting small can feel pointless. One sewing machine. One US$10 investment in this illustration. One skill learned. It feels too small to matter. But asset building often begins with a productive tool or capability that can create the next increment of value. The strategist asks what the first small asset makes possible next."},
    ],
  },
  "g10-t2-l22-022": {
    textReplacements: [
      {from:"A local supermarket chain wants to stock their produce. Mangoes. Avocados. Herbs. All of it. They want consistent supply, professional packaging, delivery to their distribution centre. The contract would triple their revenue. But it requires investment — R8,000 for packaging equipment, a delivery vehicle rental, and certification. The cooperative has R4,800 in savings.",to:"A supermarket wants to stock their produce. Mangoes, avocados, herbs. It wants consistent supply, professional packaging and reliable delivery. In this illustrative example, meeting the requirements needs US$800 for packaging equipment, transport setup and compliance costs. The cooperative has US$480 saved."},
      {from:"They have three options. Option one: take a loan. Borrow the R3,200 they need. Option two: bring in two new members who have capital to contribute. New members mean new equity. New equity means dilution — the six current members would own less of a bigger pie. Option three: say no to the supermarket. Stay small. Keep doing what they are doing. Risk that someone else says yes and takes the opportunity forever.",to:"They have three options. One: borrow the US$320 gap, after checking total cost and affordability. Two: admit new members who bring capital, which changes ownership and decision rights. Three: decline or renegotiate the opportunity and remain smaller for now. Each option carries a different risk."},
    ],
  },
  "g10-t2-l23-023": {
    title:"DEBT — PURPOSE, COST & RISK",
    textReplacements: [
      {from:"\"I want to tell you about two loans I took,\" she says. \"One nearly destroyed me. The other built everything I have. They were the same amount. R20,000. The difference was what I did with the money.\"",to:"\"I want to tell you about two loans I took,\" she says. \"They were the same illustrative amount — US$2,000 — but they served very different purposes and created very different risks.\""},
      {from:"She tells the first story. Five years ago. She borrowed R20,000 to buy a car. A beautiful car. Leather seats. She felt successful driving it. The repayments were R2,100 a month for five years. Total cost: R126,000. For a R20,000 loan. The car is now worth about R35,000. It did not generate a single rand of income. It was a liability from day one. She is still paying it off.",to:"She tells the first story. She borrowed US$2,000 for a vehicle mainly for personal use. The repayments and fees stretched her budget, while the vehicle lost value and did not generate income. The lesson was not that every car is 'bad debt'; it was that the borrowing cost and purpose did not fit her cash flow."},
      {from:"Then the second story. Three years ago. She borrowed R20,000 to buy industrial ovens. The repayments were the same. R2,100 a month. But the ovens let her cater for twice as many events. They generated R6,000 a month in new income. They paid for themselves in four months. Everything after that was profit. The ovens are still working. Still earning. That debt bought her an asset. An asset that put money in her pocket every month.",to:"Then the second story. She borrowed the same US$2,000 for industrial ovens. The ovens increased productive capacity and generated additional cash flow. That did not make the debt automatically safe — demand could have failed — but she had a clearer repayment case because the asset could help produce income."},
      {from:"\"Same amount. Same interest rate. Same bank. One debt nearly destroyed me. The other built my business. The difference was not the debt. The difference was what the debt bought. Good debt buys you an asset. Bad debt buys you a feeling. Learn the difference before you borrow a single rand.\"",to:"\"Same borrowed amount, very different use. Debt is not automatically good because it buys an asset or automatically bad because it buys consumption. Ask: what is the total cost, what cash flow will repay it, what happens if the plan fails, and can I still meet essential needs?\""},
      {from:"Key idea: Mrs. Khumalo's two loans were identical on paper. R20,000. Same bank. Same interest rate. The difference was what the money bought. The car bought a feeling. The ovens bought income. The strategist does not ask \"Can I afford the repayments?\" The strategist asks \"Does this debt buy me an asset or a liability?\" If the answer is liability, the repayments are irrelevant. You cannot afford a liability. No one can.",to:"Key idea: loan purpose matters, but purpose is not enough. Productive debt can still fail and consumption debt can sometimes be necessary. A better test asks about total borrowing cost, affordability, repayment source, downside risk, lender legitimacy and what the borrower gives up to make the payments."},
      {from:"Your Next Step: If you had to borrow R5,000 tomorrow, what would you use it for? Would that purchase put money in your pocket — or take it out? Be honest. The bank will not ask this question. You must.",to:"Your Next Step: if you were considering an illustrative US$500 loan, what would it fund? What is the repayment source? What happens if your income falls? What information would you need from the lender before deciding?"},
      {from:"Question 2: Mrs. Khumalo's car loan: R20,000 borrowed, total repayment R126,000 over five years. Was the problem the interest rate, or was the problem what she did with the money? If she had bought the ovens first and the car second, would the car still have been bad debt? Why or why not?",to:"Question 2: compare borrowing for a personal-use vehicle with borrowing for productive equipment. Why is 'what the debt buys' important but insufficient? Include affordability, total cost, risk and repayment source."},
      {from:"If you cannot ask anyone: Research the total cost of a R10,000 loan at 20% interest over 3 years. How much do you actually pay back? Write down the number. Let it sink in.",to:"If you cannot ask anyone: find a current loan illustration from a legitimate Zimbabwe lender. Record the principal, interest rate, fees, repayment period and total amount repayable. Do not apply for the loan; use the disclosure for learning."},
    ],
    tableTextReplacements: [
      {from:"Borrowing R5,000 for a laptop to do freelance work",to:"Borrowing US$500 for a laptop used for paid freelance work"},
      {from:"Borrowing R3,000 for a new phone when your old one works",to:"Borrowing US$300 for a new phone when your current one works"},
      {from:"Borrowing R20,000 for a car to use for Uber",to:"Borrowing US$2,000 toward a vehicle used for paid transport work"},
      {from:"Borrowing R1,000 for a friend's birthday party",to:"Borrowing US$100 for a social event"},
      {from:"Borrowing R10,000 for tools to start a repair business",to:"Borrowing US$1,000 for tools for a tested repair business"},
    ],
  },
  "g10-t2-l24-024": {
    title:"MANAGING DEBT — WHY THE MINIMUM CAN COST MORE",
    textReplacements: [
      {from:"📘 The R85 That Kept Sipho Trapped",to:"📘 The US$8.50 Minimum That Moved Too Slowly"},
      {from:"Sipho has a store account. He bought a phone on credit — R3,000, payable over 24 months. The minimum payment is R85 per month. R85 feels small. Manageable. Almost nothing.",to:"Sipho has a store account in this illustrative example. He bought a phone on credit for US$300. The minimum payment shown on the statement is US$8.50 per month. It feels small and manageable."},
      {from:"He has been paying R85 for eight months. He checked his balance last week. After eight payments totaling R680, he still owes R2,540. He has paid R680 — and only R460 has gone toward the phone. R220 has gone to interest.",to:"After eight US$8.50 payments, he has paid US$68 in total, but the balance has fallen much less because part of each payment went to finance charges. He finally reads the statement instead of judging the debt by the monthly payment alone."},
      {from:"He brought the statement to Myah at Emmanuel's spaza shop. \"I have paid for eight months. I still owe almost the whole thing. How is that possible?\"",to:"He brings the statement to Myah at Emmanuel's tuckshop. \"I have paid for eight months. Why has the balance fallen so slowly?\""},
      {from:"Myah studied the statement. Interest rate: 22% per year. Minimum payment: R85. If Sipho continues paying R85, it will take him 44 months — nearly four years — to pay off a R3,000 phone. Total cost: about R3,740. The phone will be worth maybe R800 by then.",to:"Myah studies the illustration. The rate, fees and minimum-payment rule mean a small payment can stretch the repayment period. The exact result depends on the contract. The lesson is to read the annual rate, fees, payment schedule and total amount repayable — not only the minimum."},
      {from:"\"Pay more. Even R50 more makes a difference. At R135 per month, you pay it off in about 28 months instead of 44. You save over R500 in interest. At R200 per month, you pay it off in 17 months. You save over R900. The more you pay above the minimum, the faster you are free — and the less the freedom costs.\"",to:"\"If your agreement allows extra payments without a penalty, paying more can reduce interest and time. But first check the contract. If you cannot afford more, the answer is not shame. It may be budgeting, contacting the lender early, restructuring where legitimate, increasing income or prioritising the most expensive debt.\""},
      {from:"Sipho increased his payment to R150 starting that month. He will be free of the phone debt in 24 months instead of 44. He will save R470 in interest.",to:"Sipho checks the agreement and chooses a larger payment he can sustain. The important change is that he now knows the trade-off between monthly payment, repayment time and total cost."},
      {from:"R1,000 debt at 2% monthly interest, R50 minimum payment:",to:"Illustrative US$100 debt at 2% monthly interest with a US$5 payment:"},
      {from:"At this rate, it takes 23 months to repay. Total interest: R287. After three payments totaling R150, only R91.81 has gone to principal. The rest is interest.",to:"This simplified illustration shows why early payments can contain both principal and interest. Use the table to calculate how the balance changes; real agreements may also include fees."},
      {from:"You owe R2,000 on a store card. Interest rate: 18% per year (1.5% per month). Minimum payment: R60 per month.",to:"For maths practice, imagine a US$200 balance at a hypothetical 18% annual rate (1.5% per month). This is not a current Zimbabwe product quote."},
      {from:"How much do you save by paying R150 instead of R60? R _______ How much sooner are you free? _______ months",to:"Using the illustrative table, compare the highest and lowest monthly payments. How much interest and time differ?"},
      {from:"Here’s the tension: sometimes the minimum payment is all you can afford. When every rand is spoken for, when survival is the priority, paying more than the minimum is not a choice — it is a luxury. The advice to \"pay more than the minimum\" assumes you have more to pay. Not everyone does. If you cannot pay more, do not blame yourself. But do not pretend the minimum is enough either. The minimum keeps you alive. It does not set you free. The gap between surviving and freedom is what you must work to close — not through shame, but through strategy.",to:"Here’s the tension: sometimes the contractual minimum is all a household can afford. Advice to pay extra assumes there is extra money. If there is not, the strategy shifts to understanding the agreement, preventing new expensive debt, contacting the lender before default, protecting essential needs and looking for legitimate ways to improve cash flow."},
      {from:"Your Next Step: If you were advising Sipho — and he genuinely could not afford more than R85 — what would you tell him to do? What options does someone have when they cannot pay more than the minimum?",to:"Your Next Step: if Sipho genuinely cannot afford more than the contractual minimum, what responsible options should he investigate before missing payments?"},
      {from:"Question 1: Why is paying only the minimum payment dangerous? Use Sipho's numbers to explain: R3,000 at 22%, paying R85/month.",to:"Question 1: why can a small minimum payment make debt expensive over time? Explain using principal, interest, fees and repayment period rather than memorising one product example."},
      {from:"Question 2: If Sipho genuinely cannot afford more than R85 per month, what should he do? List at least two strategies beyond \"pay more.\" Think: income, expenses, negotiation, refinancing, prioritization.",to:"Question 2: if Sipho cannot afford more than the minimum, list at least two responsible strategies beyond 'pay more.' Consider income, expenses, lender communication, legitimate restructuring and debt prioritisation."},
      {from:"If you have no debt: Research the interest rate on a typical store card in South Africa. Calculate the total cost of a R2,000 purchase if you pay only the minimum.",to:"If you have no debt: find a current Zimbabwe credit example from a legitimate provider. Record the rate, fees, minimum-payment rule and total amount repayable. Do not apply for credit for this exercise."},
    ],
    tableReplacements: [
      {
        cellIncludes:"R970",
        rows:[
          ["Month","Balance","Interest Added (2%)","Payment","New Balance"],
          ["1","US$100.00","US$2.00","US$5.00","US$97.00"],
          ["2","US$97.00","US$1.94","US$5.00","US$93.94"],
          ["3","US$93.94","US$1.88","US$5.00","US$90.82"],
        ],
      },
      {
        cellIncludes:"Minimum + R40",
        rows:[
          ["Payment Strategy","Illustrative Monthly Payment","Effect"],
          ["Minimum only","US$6","Longest repayment and highest interest of these examples"],
          ["Minimum + US$4","US$10","Faster repayment and lower interest"],
          ["Minimum + US$9","US$15","Fastest repayment and lowest interest of these examples"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"Even R10 extra saves interest and time",to:"An affordable extra payment can reduce interest and time if the agreement permits it"},
    ],
  },
  "g10-t2-l25-025": {
    title:"CREDIT RECORDS — THE FILE LENDERS MAY READ",
    textReplacements: [
      {from:"Credit Score Plan",to:"Credit Record Plan"},
      {from:"📘 Credit Score Ranges",to:"📘 Credit Records and Lender Assessment"},
      {from:"📘 What Affects Your Credit Score",to:"📘 What Can Affect Your Credit Record"},
      {from:"If you cannot ask anyone: Research how to check your credit record in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: research Zimbabwe's Central Credit Registry through the Reserve Bank of Zimbabwe. Write down what a credit report or record is used for and where consumers can find current official guidance."},
      {from:"| Date | | | Lesson | Lesson 25 — Credit Score Plan | | Experiment/Observation | I learned how credit records work and designed a plan to build one. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 25 — Credit Record Plan | | Experiment/Observation | I learned how credit records and lender screening work and designed a plan for responsible borrowing behaviour. | | Result | | | Learning | | | Next Action | |"},
      {from:"credit scores",to:"credit records"},
      {from:"Credit scores",to:"Credit records"},
      {from:"credit score",to:"credit record"},
      {from:"Credit score",to:"Credit record"},
      {from:"If you cannot ask anyone: Research how to check your credit record in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: research Zimbabwe's Central Credit Registry through the Reserve Bank of Zimbabwe. Write down what a credit report or record is used for and where consumers can find current official guidance."},
      {from:"| Date | | | Lesson | Lesson 25 — Credit Record Plan | | Experiment/Observation | I learned how credit records work and designed a plan to build one. | | Result | | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 25 — Credit Record Plan | | Experiment/Observation | I learned how credit records and lender screening work and designed a plan for responsible borrowing behaviour. | | Result | | | Learning | | | Next Action | |"},
      {from:"Last month, he applied for a small car loan — R60,000. The bank said no.",to:"Last month, he applied for a small vehicle loan in an illustrative example. The lender said no after reviewing affordability and credit information."},
      {from:"If you cannot ask anyone: Research how to check your credit score in South Africa. Write down the steps. One day you will need them.",to:"If you cannot ask anyone: research Zimbabwe's Central Credit Registry through the Reserve Bank of Zimbabwe. Write down what a credit report/record is used for and where a consumer can find current official guidance."},
    ],
    tableTextReplacements: [
      {from:"credit scores",to:"credit records"},
      {from:"Credit scores",to:"Credit records"},
      {from:"credit score",to:"credit record"},
      {from:"Credit score",to:"Credit record"},
    ],
  },
  "g10-t2-l26-026": {
    title:"INVESTMENT VEHICLES — MATCHING THE TOOL TO THE GOAL",
    textReplacements: [
      {from:"Identify different investment vehicles available in South Africa.",to:"Identify broad saving and investment vehicle categories relevant to Zimbabwe, and explain why current provider availability must be verified."},
      {from:"\"Five vehicles. Each one has a job. The savings account is not trying to grow — it is my buffer. The TFSA is my long-term engine. The retail bonds are for a specific goal — a laptop upgrade in five years. The unit trust is for wealth building. The stokvel is community, not just money. The key is not picking the 'best' vehicle. The key is matching the vehicle to the goal. A savings account is a terrible place for retirement money. An ETF is a terrible place for emergency funds. The vehicle must fit the purpose.\"",to:"\"Different vehicles have different jobs. Emergency savings prioritise access. A fixed deposit trades access for a known term. A collective investment scheme or listed security may offer growth potential but can lose value. A mukando can support saving discipline but depends on the group's rules and trust. The goal is not to pick one 'best' vehicle. It is to match purpose, time horizon, liquidity, fees and risk.\""},
      {from:"📘 Investment Vehicles in South Africa",to:"📘 Saving and Investment Vehicle Categories"},
      {from:"If you had R1,000 to invest today, what would you do with it — and why? What is the PURPOSE of that money? Have you matched the vehicle to the purpose, or are you just chasing returns?",to:"If you had an illustrative US$100 available, what job would the money need to do first? Emergency buffer, short-term goal or long-term growth? Only after defining the job should you compare vehicles."},
      {from:"If you had R5,000 to allocate across different vehicles, how would you divide it? Why?",to:"If you had an illustrative US$500 to allocate across different purposes, how would you divide it? Explain the role of each allocation."},
      {from:"Question 1: Name three investment vehicles available in South Africa. For each, state: risk level, minimum investment, and best use.",to:"Question 1: name three saving or investment vehicle categories relevant to Zimbabwe. For each, state the main purpose, risk, liquidity and what current information must be checked before using a real provider."},
      {from:"Research one investment vehicle you did not know about before this lesson. Find out: minimum investment, expected returns, risk level, and how to access it in South Africa. Write down what you learn.",to:"Research one saving or investment product offered through a regulated Zimbabwe provider or market participant. Record the provider, regulator where applicable, minimum amount, fees, liquidity and stated risk. Record the date because product terms can change."},
    ],
    tableReplacements: [
      {
        cellIncludes:"TFSA (ETF)",
        rows:[
          ["Vehicle","Illustrative Amount","Purpose","Time Horizon","Main Risk / Constraint"],
          ["Savings account","US$300","Emergency buffer","Immediate","Return may lag inflation"],
          ["Fixed deposit","US$100","Defined medium-term goal","Fixed term","Limited access before maturity"],
          ["Collective investment scheme","US$250","Long-term growth","5+ years","Market and fee risk"],
          ["Listed securities","US$150","Long-term growth / ownership","Long term","Prices can fall; diversification matters"],
          ["Mukando / savings group","US$20 per cycle","Saving discipline / agreed group goal","Group-defined","Trust and group-rule risk"],
        ],
      },
      {
        cellIncludes:"Retail bonds",
        rows:[
          ["Vehicle Category","What It Is","Typical Risk Pattern","Best Use"],
          ["Savings account","Deposit with a regulated bank","Lower market risk; inflation and institution terms still matter","Emergency and short-term needs"],
          ["Fixed deposit","Deposit locked for an agreed term","Lower market volatility but lower liquidity","Known medium-term goals"],
          ["Collective investment scheme","Pooled investments managed under a fund structure","Market and fee risk","Diversified long-term investing"],
          ["Listed shares / securities","Ownership or exposure traded on a securities market","Market and company risk","Long-term growth where appropriate"],
          ["Mukando / savings group","Community saving arrangement under agreed rules","Trust, governance and liquidity depend on the group","Saving discipline and shared goals"],
        ],
      },
      {
        cellIncludes:"Emergency fund (R3,000)",
        rows:[
          ["Goal","Time Horizon","Vehicle Features to Prioritise","Why?"],
          ["Emergency fund","Immediate","Liquidity, capital stability, low fees","Money must be accessible"],
          ["Education cost in 3 years","3 years","Known term, controlled risk, appropriate liquidity","Short horizon limits risk capacity"],
          ["Retirement / long-term wealth","Decades","Diversification, fees, regulated access, growth potential","Long horizon can tolerate more variability"],
          ["Large purchase in 8 years","8 years","Balanced growth, diversification and liquidity plan","Goal has time but still a fixed date"],
        ],
      },
    ],
  },
  "g10-t2-l27-027": {
    title:"FUNDS, LISTED SECURITIES & FEES — TUMELO'S COMPARISON",
    textReplacements: [
      {from:"Distinguish between ETFs, unit trusts, and retail bonds.",to:"Distinguish between pooled funds, listed securities and lower-volatility saving options, with attention to fees and regulation."},
      {from:"Tumelo is 25. He started investing at 18 — R200 a month into a unit trust his bank recommended. He was proud of himself. He was building wealth. He was doing what responsible adults do.",to:"Tumelo is 25. In this illustrative story, he started investing US$20 a month at 18 into a managed fund. He was proud that he had started early."},
      {from:"The unit trust had a Total Expense Ratio of 2.5%. That means for every R1,000 he invested, R25 went to fees — every year, regardless of performance. Over seven years, he had paid nearly R3,000 in fees. His returns after fees were barely beating inflation.",to:"The fund had an illustrative annual expense ratio of 2.5%. That means fees reduce returns whether the market rises or falls. Tumelo realises that a small annual percentage can compound into a large difference over many years."},
      {from:"He switched. He moved his money to an ETF tracking the same market index. The TER was 0.3%. His annual fees dropped from R625 to R75 per R25,000 invested. Same exposure. Same market. Drastically different cost.",to:"He compares the managed fund with a lower-fee index-tracking structure where such a regulated product is available. The lesson is not that one structure is always better; it is that similar market exposure can carry very different fees, service and tracking choices."},
      {from:"He tells Myah at Mama Rose's kitchen: \"The bank did not tell me about the fees. They told me about the returns. But fees are guaranteed. Returns are not. A 2.5% fee on a fund that earns 8% means you keep 5.5%. That 2.5% compounds against you — just like interest compounds for you. Over 30 years, the difference between a 0.3% fee and a 2.5% fee on R500 a month is hundreds of thousands of rands. Fees are the silent killer of wealth. No one talks about them because they are boring. But boring things compound too.\"",to:"He tells Myah: \"Returns are uncertain, but disclosed fees are costs you can compare before investing. If two products give similar exposure and one charges much more, that difference compounds too. I need to compare fees, risk, liquidity, regulation and what the product actually holds — not only the return headline.\""},
      {from:"📘 Comparing ETFs, Unit Trusts, and Retail Bonds",to:"📘 Comparing Investment Structures and Fees"},
      {from:"Imagine you invest R500 per month for 30 years. Average return: 8% per year.",to:"For a maths illustration, imagine investing US$50 per month for 30 years at an assumed 8% annual return before fees. The return is hypothetical, not promised."},
      {from:"Question 1: What is the difference between an ETF and a unit trust? Which typically has lower fees — and why? What is a retail bond, and who issues it?",to:"Question 1: what is the difference between an exchange-traded fund structure and a managed collective investment scheme? What fees, liquidity, market exposure and provider regulation should you compare?"},
      {from:"Find one financial product — a savings account, a funeral plan, a stokvel, anything — that you or your family uses. Find out: what are the fees? Are they clearly stated, or hidden? Write down what you discover.",to:"Find one financial product your household knows — a savings account, insurance policy, mukando or investment product. What fees or charges apply? Are they clearly stated? Record the source and date."},
    ],
    tableReplacements: [
      {
        cellIncludes:"Retail Bond",
        rows:[
          ["Feature","ETF Structure","Collective Investment Scheme","Fixed Deposit"],
          ["What it is","Basket of securities traded on an exchange where available","Pooled fund managed under an investment mandate","Bank deposit locked for an agreed term"],
          ["Main costs","Trading/platform costs and fund expenses","Management and other disclosed fund fees","Early-access restrictions and product terms"],
          ["Risk","Market risk","Depends on underlying assets","Lower market volatility; institution and inflation risks remain"],
          ["Liquidity","Usually market-dependent","Depends on fund rules","Limited until maturity"],
          ["Best comparison question","What index/assets, total fees and liquidity?","What mandate, assets, fees and track record?","What rate, term, penalties and access rules?"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"Retail bond",to:"Fixed deposit"},
      {from:"retail bond",to:"fixed deposit"},
    ],
  },
  "g10-t2-l28-028": {
    textReplacements: [
      {from:"\"Year five. The factory was making profit. Not much. R30,000 a year. I had a choice. I could take that R30,000 home. Live better. Buy a car. Or I could reinvest it. Buy more machines. Hire more workers. Grow.\"",to:"\"Year five. In this illustrative example, the factory was making US$3,000 a year in profit. I had a choice: take it all home, or reinvest part of it in machines, people and capacity.\""},
      {from:"He pauses. \"My wife wanted me to take it. My children needed things. My neighbours thought I was crazy — working so hard and driving an old car. But I reinvested. Every rand. For three years. I lived on almost nothing. My family sacrificed. And at the end of year eight, the factory was making R100,000 a year. The R90,000 I had reinvested over three years was now generating an extra R70,000 a year — every year. The reinvestment paid for itself in less than two years. Everything after that was profit.\"",to:"He pauses. \"In the simplified case, I reinvested US$3,000 a year for three years — US$9,000 total. By the end of the period, annual profit had increased by about US$7,000 compared with the earlier base. That did not happen automatically; demand, execution and timing could have gone badly. Reinvestment worked in this story because productive capacity and sales grew together.\""},
      {from:"Myah does the math in her notebook: R90,000 reinvested over 3 years → R70,000 annual increase in profit. Payback period: 1.3 years. After that, R70,000/year forever. That is a 78% annual return on the reinvested money. No bank. No stock market. No investment vehicle offers 78% returns. The highest-return investment Mr. Patel could make was in himself. In his own business. In his own capacity to produce.",to:"Myah does the simplified arithmetic: US$9,000 reinvested over three years and an illustrative US$7,000 annual profit increase implies about 78% of the reinvested amount. She writes a warning next to it: this is one business example, not a guaranteed annual return. Business reinvestment can also fail or lose capital."},
      {from:"Total reinvested over 3 years: R90,000. Annual profit increase: R70,000. Return on reinvestment: 78%.",to:"Illustrative total reinvested over 3 years: US$9,000. Illustrative annual profit increase: US$7,000. Ratio to reinvested amount: about 78%."},
      {from:"Mr. Patel reinvested R90,000 over 3 years. That reinvestment generated an additional R70,000 per year in profit. What was the annual return on his reinvestment?",to:"In the simplified example, US$9,000 was reinvested and the annual profit increase was US$7,000. What percentage is US$7,000 of US$9,000? Why should you not treat that percentage as a guaranteed future return?"},
      {from:"Question 2: If you had R5,000 and had to choose between investing in a unit trust (8% expected return) and investing in a tool that could start a business (uncertain return, but potentially much higher), which would you choose? Why? What factors influence your decision beyond the numbers?",to:"Question 2: if you had an illustrative US$500, compare putting it into a diversified regulated investment versus buying a productive tool for a tested business idea. What factors matter beyond the headline return — diversification, demand, liquidity, skill, concentration risk and time?"},
      {from:"If you cannot ask anyone: Design your own self-investment. If you had to spend R1,000 on something that would increase your future earning capacity, what would it be? Why?",to:"If you cannot ask anyone: design a self-investment. If you had an illustrative US$100 to increase future earning capacity, what would you spend it on, and what evidence suggests it could help?"},
    ],
    tableReplacements: [
      {
        cellIncludes:"R30,000",
        rows:[
          ["Year","Illustrative Profit","Reinvested","Taken Home","Result"],
          ["1","US$3,000","US$3,000","US$0","Bought more tools"],
          ["2","US$4,500","US$3,000","US$1,500","Hired first employee"],
          ["3","US$7,000","US$3,000","US$4,000","Added production capacity"],
          ["4","US$10,000","US$3,000","US$7,000","Business operating at larger scale"],
        ],
      },
    ],
  },
  "g10-t2-l29-029": {
    title:"FINANCIAL PLANNING — ZINHLE'S ONE-PAGE SYSTEM",
    textReplacements: [
      {from:"Zinhle has been offered a full-time job starting next year. She will earn R8,000 a month. She has exactly six months to prepare. She sits down with Myah at the library and pulls out a single piece of paper.",to:"Zinhle has been offered a full-time job starting next year. In this illustrative example she expects about US$800 a month before deductions. She has six months to prepare. She sits down with Myah at the library and pulls out a single piece of paper."},
      {from:"\"The fun budget. R750 feels like a lot — until it is the end of the month and I am tired and I want to buy something I do not need. The fun budget is the first place I overspend. So I put a rule on it: cash only. When the cash is gone, it is gone. No card. No exceptions. Rules protect me from myself.\"",to:"\"My non-essential budget is US$75 in this illustration. That is the first place I overspend. So I set a rule: once the planned amount is used, I stop. The exact method can change, but I need a boundary I can actually follow.\""},
    ],
    tableReplacements: [
      {
        cellIncludes:"TFSA: max out R36,000/year",
        rows:[
          ["Section","Illustrative Detail"],
          ["Goals","Emergency fund: US$1,000 over 12 months. Build a long-term investment habit through a regulated provider. Review retirement/pension options when employment begins."],
          ["Current net worth","US$720 (savings + investments − debt)"],
          ["Monthly budget","Income: US$545. Essentials: US$220. Long-term investing/saving: US$150. Non-essential: US$75. Buffer: US$100."],
          ["Debt strategy","Avoid borrowing that has no clear repayment plan; compare total cost before signing."],
          ["Protection","Emergency fund first; then investigate appropriate regulated insurance as responsibilities grow."],
          ["Tax","Understand PAYE and check current ZIMRA guidance rather than memorising old brackets."],
          ["Retirement","Learn how NSSA, employment-linked pensions and personal long-term saving may fit together where applicable."],
          ["Review","Every 3 months; adjust as life and rules change."],
        ],
      },
    ],
  },
  "g10-t2-l30-030": {
    textReplacements: [
      {from:"Themba is 20. He has recovered from the R2,000 loss. He has four income streams. He has been investing R300 a month into a unit trust for the past year. But he has been doing something that troubles him.",to:"Themba is 20. He has recovered from the earlier US$200 loss in this illustrative story. He has several income streams and has been investing US$30 a month through a diversified fund for the past year."},
      {from:"\"Dollar-cost averaging. I invest R300 on the same day every month. No matter what. Market up? R300 goes in. Market down? R300 goes in. I do not think about it. I do not try to predict. I just execute. When the market is down, my R300 buys more shares. When it is up, it buys fewer. Over time, I pay the average price. Not the best price. Not the worst. The average. And the average, compounded over thirty years, is enough.\"",to:"\"Regular investing means I contribute US$30 on the same day every month in this example. When prices are lower, the same contribution buys more units; when prices are higher, it buys fewer. It removes some timing emotion, but it does not guarantee a profit and it does not make a poor investment good.\""},
      {from:"R300 invested monthly, regardless of share price:",to:"Illustrative US$30 invested monthly, regardless of share price:"},
      {from:"Average cost per share: R47.67 — lower than the average price of R48.75. The strategy works because it removes emotion from the equation.",to:"Illustrative average cost per unit: about US$4.77 compared with an average quoted price of US$4.88. The lesson is about consistent purchasing, not a promise that regular investing will always outperform."},
      {from:"Your Next Step: If you were investing R200 a month and the market dropped 30% in one month, what would you do? Keep investing? Stop? Invest more? Why? What does your answer reveal about your emotional readiness for real investing?",to:"Your Next Step: if you were regularly investing US$20 a month and the market dropped 30%, what would you review before acting? Consider time horizon, emergency cash, diversification, why the asset fell and whether the original plan still fits."},
    ],
    tableReplacements: [
      {
        cellIncludes:"R1,200",
        rows:[
          ["Month","Amount Invested","Illustrative Unit Price","Units Bought"],
          ["Jan","US$30","US$5.00","6"],
          ["Feb","US$30","US$4.00","7.5"],
          ["Mar","US$30","US$6.00","5"],
          ["Apr","US$30","US$4.50","6.67"],
          ["Total","US$120","Avg US$4.88","25.17"],
        ],
      },
    ],
  },
  "g10-t2-l31-031": {
    tableTextReplacements: [
      {from:"cooperative, stokvel, community project",to:"cooperative, mukando / savings group, community project"},
    ],
  },
  "g10-t2-l32-032": {
    textReplacements: [
      {from:"Myah is researching for her personal investment plan. She needs a vehicle for her medium-term goal: R10,000 for a financial literacy certification course in 4 years. She compares:",to:"Myah is researching for her personal investment plan. In this illustrative example, her medium-term goal is US$1,000 for a course in four years. She compares categories and then checks current products from regulated providers:"},
      {from:"She calculates: to reach R10,000 in 4 years, she needs to save R190 per month at 6.5% (fixed deposit) or R175 per month at 8% (retail bond). The retail bond is the better fit — locked, safe, predictable. She will use a TFSA for her longer-term goal.",to:"She does not choose from a textbook rate. She records the date, provider, fees, access rules and current quoted return for each real option she researches. For the classroom plan, she uses conservative scenarios and labels every assumed return as hypothetical."},
    ],
    tableReplacements: [
      {
        cellIncludes:"Retail bond (3yr)",
        rows:[
          ["Option Category","What to Research","Risk / Constraint","Access"],
          ["Savings account","Current interest, fees, currency and provider regulation","Return may lag inflation","Usually high"],
          ["Fixed deposit","Current quoted rate, term, early-access rules","Funds locked; inflation risk","Low until maturity"],
          ["Collective investment scheme","Mandate, underlying assets, fees, licensed manager","Market risk; returns variable","Depends on fund rules"],
          ["Listed securities / ETF structure where available","Market, diversification, broker/platform fees and liquidity","Market volatility; product availability must be verified","Market-dependent"],
        ],
      },
    ],
  },
  "g10-t2-l33-033": {
    textReplacements: [
      {from:"Goal 1 (Medium-term): R10,000 for financial literacy certification (4 years)",to:"Goal 1 (Medium-term): US$1,000 for a skills or certification course (4 years)"},
      {from:"Vehicle: Retail bond (3-year, 8%)",to:"Vehicle category: fixed deposit or other suitable regulated medium-term option after current comparison"},
      {from:"Monthly savings needed: R175",to:"Illustrative monthly contribution target: US$17.50 before updating for current rates and fees"},
      {from:"Failure signal: If I have not saved R5,000 by end of Year 2, I must increase income or extend timeline.",to:"Failure signal: if I have not reached US$500 by the end of Year 2, I must review contribution, income, costs or timeline."},
      {from:"Vehicle: TFSA (ETF, 0.3% fee)",to:"Vehicle category: diversified long-term investment through a regulated provider; exact product and fees to be verified"},
      {from:"Monthly contribution: R200 (starting now, increasing with income)",to:"Illustrative monthly contribution: US$20, reviewed as income changes"},
      {from:"Goal 3 (Short-term): Emergency fund (R3,000)",to:"Goal 3 (Short-term): Emergency fund (US$300 illustrative target)"},
      {from:"Monthly contribution: R100",to:"Illustrative monthly contribution: US$10"},
      {from:"Failure signal: If I have not reached R3,000 in 18 months, I must redirect funds from Goal 1 temporarily.",to:"Failure signal: if I have not reached US$300 in 18 months, I must review priorities and redirect contributions if appropriate."},
    ],
  },
  "g10-t2-l34-034": {
    textReplacements: [
      {from:"Thabo shares his plan: he wants to invest R300/month into a TFSA for a delivery vehicle upgrade in 5 years. Myah studies it.",to:"Thabo shares his plan: in this illustrative example he wants to invest US$30 per month toward a delivery-vehicle upgrade in five years using a diversified regulated investment vehicle appropriate to his risk and time horizon. Myah studies it."},
      {from:"\"Your plan assumes you will earn R300 extra every month. What happens in a bad month — when the bike breaks, when customers are scarce? Where is the buffer?\"",to:"\"Your plan assumes you will always have US$30 available. What happens in a bad month — when the bike breaks or customers are scarce? Where is the buffer?\""},
      {from:"Thabo pauses. He had not built a buffer. He adds one: in months where income drops below R1,500, the investment drops to R100. The R200 difference goes to emergency savings. The plan survives because it flexes.",to:"Thabo pauses. He had not built a buffer. He adds a rule: when income falls below the minimum level needed for essentials and operating costs, the long-term contribution reduces and the difference supports the emergency buffer. The plan survives because it flexes."},
    ],
  },
  "g10-t2-l35-035": {
    textReplacements: [
      {from:"Atlehang presents her family's investment plan — a collective TFSA for the community kitchen's future building. She shows the fee comparison. She shows the failure signals. She shows the review schedule.",to:"Atlehang presents her family's investment plan for the community kitchen's future building. She compares regulated saving and investment categories, fees, access rules and failure signals. She also shows a review schedule because products and conditions can change."},
    ],
  },
  "g10-t2-l36-036": {
    textReplacements: [
      {from:"Lesson 17: Saving vs investing. Her R800 that shrank. Inflation as slow theft. Lesson 18: Risk and return. Themba's R2,000 and the shame he did not calculate. Lesson 19: Compound interest. The Rule of 72. Gogo Maria planting seeds at 73. Lesson 20: Assets and liabilities. Mr. Patel's factory — and what it cost him besides money. Lesson 21: Building assets. The sewing machine that started everything. Lesson 22: Cooperatives. Thandi's growth decision. Choosing which risk to take. Lesson 23: Debt. Mrs. Khumalo's two loans — same amount, different outcomes. Lesson 24: Managing debt. Sipho's minimum payment trap. The amortization table. Lesson 25: Credit scores. Elder Mkhize, invisible to the banks he never owed. Lesson 26: Investment vehicles. Zinhle's portfolio — each vehicle with a job. Lesson 27: Fees. Tumelo's 2.5% that compounded against him. Lesson 28: Reinvestment. Mr. Patel's 78% return on betting on himself. Lesson 29: Financial planning. Zinhle's one-page plan. Lesson 30: Strategies. Themba's dollar-cost averaging. Removing emotion. Lessons 31-35: Her Investment Plan. Built. Tested. Presented.",to:"Lesson 17: saving versus investing and purchasing power. Lesson 18: financial and human risk. Lesson 19: compounding and the Rule of 72 using hypothetical returns. Lesson 20: assets and liabilities. Lesson 21: building an asset base. Lesson 22: cooperative growth and capital choices. Lesson 23: debt purpose, cost and risk. Lesson 24: minimum payments and total borrowing cost. Lesson 25: credit records and lender screening. Lesson 26: matching vehicles to goals. Lesson 27: fees and investment structures. Lesson 28: reinvestment and business risk. Lesson 29: one-page financial planning. Lesson 30: regular investing and emotional discipline. Lessons 31–35: an investment plan researched, tested and presented."},
      {from:"From me, in Grade 10 Date: _____________________",to:"From me, in Form 3 Date: _____________________"},
      {from:"You finished Term 2 of Grade 10.",to:"You completed Form 3 Term 1 — value creation, saving, investing, assets and financial planning."},
    ],
  },
  "g9-t1-l01-001": {
    textReplacements: [
      {from:"Recall key learning from Grade 8 and assess what you carry forward.",to:"Recall key learning from Form 1 and assess what you carry forward."},
      {from:"Set a strategic intention for Grade 9.",to:"Set a strategic intention for Form 2."},
      {from:"Three months since she submitted her water project proposal to the community grant committee. She was fifteen then — younger, she thinks now, though it was only June. She had typed the pages carefully at the internet café, R2 for fifteen minutes. She had attached a budget spreadsheet, checked three times. She had letters of support from Auntie Grace at the taxi rank and from her mother's employer, who wrote on letterhead that looked official.",to:"Three months since she submitted her water project proposal to the community committee. She was younger then, she thinks now, though it was only a few months ago. She had typed the pages carefully at an internet café, paying a small fee for computer time. She had attached a budget spreadsheet, checked three times. She had letters of support from Auntie Grace at the kombi rank and from her mother's employer, who wrote on official letterhead."},
      {from:"She thinks about this as she walks to school. The same taxi rank. The same vendors — Auntie Grace selling vetkoek, the queue marshals shouting destinations, the woman with the flask of coffee who has been there since 5am. She sees it differently now. Last year, in Grade 8, she learned to notice. She learned to trace money flows. She learned that her identity shapes her choices and her habits shape her identity. She tracked a habit for 21 days. She built a budget. She completed a final project.",to:"She thinks about this as she walks to school. The same kombi rank. The same vendors — Auntie Grace selling vetkoek, the rank marshals calling destinations, the woman with the flask of coffee who has been there since before sunrise. She sees it differently now. In Form 1, she learned to notice. She learned to trace money flows. She learned that identity shapes choices and habits reinforce identity. She tracked a habit, built a budget and completed a final project."},
      {from:"At the school gate, she sees Ms. Daniels — not in the classroom, just there, buying a banana from a vendor. Ms. Daniels taught her in Grade 8. Now she is something else. A mentor. Someone who appears when needed.",to:"At the school gate, she sees Ms. Daniels — not in the classroom, just there, buying a banana from a vendor. Ms. Daniels taught her in Form 1. Now she is something else too: a mentor. Someone who appears when needed."},
      {from:"Ms. Daniels listens without interrupting. When Myah finishes, she says: \"Grade 8 taught you to notice. Grade 9 will teach you what to do when noticing is not enough. The rules you learned — follow instructions, work hard, be patient — they matter. But they are not always sufficient. Sometimes you do everything right and still lose. That moment is not the end. It is the beginning of agency.\"",to:"Ms. Daniels listens without interrupting. When Myah finishes, she says: \"Form 1 taught you to notice. Form 2 will teach you what to do when noticing is not enough. The rules you learned — follow instructions, work hard, be patient — they matter. But they are not always sufficient. Sometimes you do everything right and still lose. That moment is not the end. It is where agency becomes visible.\""},
      {from:"This equation is not new to you. You met it in Grade 8. But it means something different now. In Grade 8, it was a principle. In Grade 9, it is a test. What will you do with what you know?",to:"This equation is not new to you. You met it in Form 1. But it means something different now. In Form 1, it was a principle. In Form 2, it becomes a test: what will you do with what you know?"},
      {from:"Think about your Grade 8 year. What is one thing you learned that you are still carrying? What is one thing you learned but have not yet acted on?",to:"Think about your Form 1 year. What is one thing you learned that you are still carrying? What is one thing you learned but have not yet acted on?"},
      {from:"✍️ Activity 1: My Grade 9 Strategic Audit",to:"✍️ Activity 1: My Form 2 Strategic Audit"},
      {from:"List THREE assets from Grade 8 — skills, habits, mindsets, insights — that you will actively use this year. For each, write one sentence about how it will help you in Grade 9.",to:"List THREE assets from Form 1 — skills, habits, mindsets or insights — that you will actively use this year. For each, write one sentence about how it will help you in Form 2."},
      {from:"Key idea: You are not starting Grade 9 empty. You carry everything from Grade 8 — every experiment, every insight, every Thinking Equation, every failure that taught you something. That foundation is real.",to:"Key idea: You are not starting Form 2 empty. You carry everything from Form 1 — every experiment, insight, Thinking Equation and failure that taught you something. That foundation is real."},
      {from:"Here’s the tension: the person who wrote your Grade 8 letter to yourself is not gone. She is still inside you — with her old fears, her old habits, her old ways of avoiding hard things. She will fight for control of your future this term. Your new intention is a declaration of war against your old self. You are both the sculptor and the stone. The stone resists. The question is whether you will keep sculpting when it gets hard — or let the old shape reassert itself.",to:"Here’s the tension: the person who wrote your Form 1 letter to yourself is not gone. Old fears, habits and avoidance patterns can return. Your new intention is not a war against yourself; it is a decision to practise a better response when those patterns appear. You are both the sculptor and the stone. The question is whether you keep shaping your behaviour when it gets hard."},
      {from:"| Date | | | Lesson | Lesson 1 — Strategic Audit | | Experiment/Observation | I conducted a strategic audit of my assets and liabilities for Grade 9. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |",to:"| Date | | | Lesson | Lesson 1 — Strategic Audit | | Experiment/Observation | I conducted a strategic audit of my assets and liabilities for Form 2. | | Result | My most dangerous liability: | | Learning | | | Next Action | My one action this week: |"},
    ],
  },
  "g9-t1-l03-003": {
    textReplacements: [
      {from:"The community hall where the grant committee meets is a low brick building near the taxi rank. Myah has walked past it a hundred times. She has never gone in — until today.",to:"The community hall where the committee meets is a low brick building near the kombi rank. Myah has walked past it a hundred times. She has never gone in — until today."},
    ],
  },
  "g9-t1-l04-004": {
    textReplacements: [
      {from:"Thabo's mother, Grace, works at a crèche on weekdays. Formal work. Payslip. UIF. She earns R3,200 a month. It covers the rent and not much else.",to:"Thabo's mother, Grace, works at an early childhood centre on weekdays. Formal work. Regular pay. In this illustrative story she earns about US$220 a month. It covers major household costs and leaves little room for shocks."},
      {from:"She wakes at 4am. By 6am, the kitchen is full of the smell of bread and vetkoek. By 7am, she is at the taxi rank with a cooler box and a flask of coffee. She sells to commuters, taxi drivers, queue marshals — anyone who is hungry and in a hurry.",to:"She wakes before dawn. By 6am, the kitchen is full of the smell of bread and vetkoek. By 7am, she is at the kombi rank with a cooler box and a flask of coffee. She sells to commuters, kombi drivers, rank marshals — anyone who is hungry and in a hurry."},
      {from:"Myah meets Thabo at the taxi rank one Saturday. She watches his mother work — the speed of her hands, the way she remembers who takes sugar and who does not, the way she asks after people's children.",to:"Myah meets Thabo at the kombi rank one Saturday. She watches his mother work — the speed of her hands, the way she remembers who takes sugar and who does not, the way she asks after people's children."},
      {from:"Key idea: The economy measures work in rands. But rands do not measure care. They do not measure love. They do not measure the grandmother who holds the family together without a salary, the older sibling who gets the younger ones ready for school, the neighbour who checks on the elder next door. You are not your wage. You are your work — all of it, paid and unpaid.",to:"Key idea: Markets put prices on some work, but money does not measure all value. It does not fully measure care, love, unpaid household labour or the neighbour who checks on an elder next door. Your wage is one signal of economic value; it is not the full measure of your contribution."},
    ],
    tableTextReplacements: [
      {from:"Spaza shop owner",to:"Tuckshop owner"},
      {from:"taxi owner",to:"kombi operator"},
      {from:"Stokvel organising",to:"Mukando organising"},
    ],
  },
  "g9-t1-l05-005": {
    textReplacements: [
      {from:"Twenty years ago, she was a domestic worker in Alexandra. She had four children. Her husband had left. She earned R800 a month, and after rent and transport, there was almost nothing for food.",to:"Twenty years ago, she was a domestic worker in Harare. She had four children. Her husband had left. Her income was small and irregular enough that after rent, transport and other essentials, there was often very little left for food."},
      {from:"Her children ate. Then her neighbour's children smelled the food and asked for some. Then the neighbour herself came with a plate and R5. Then a taxi driver stopped by on his way home. Then another. Then another.",to:"Her children ate. Then her neighbour's children smelled the food and asked for some. Then the neighbour herself came with a plate and a small payment. Then a kombi driver stopped by on his way home. Then another. Then another."},
      {from:"Myah watches the customers come and go. A taxi driver in a hurry. An elderly woman who sits slowly. A young mother with a baby. Mama Rose treats each one differently — because each one IS different.",to:"Myah watches the customers come and go. A kombi driver in a hurry. An elderly woman who sits slowly. A young mother with a baby. Mama Rose treats each one differently — because each one is different."},
      {from:"This week, when you buy from a small business — a spaza shop, a vendor, a service provider — do one thing: learn their name if you do not know it, or use their name if you do. Say thank you specifically for something. Notice how they respond. Notice how you feel.",to:"This week, when you buy from a small business — a tuckshop, market stall, vendor or service provider — do one thing: learn the person's name if you do not know it, or use their name if you do. Say thank you specifically for something. Notice how they respond. Notice how you feel."},
    ],
  },
  "g9-t1-l07-007": {
    textReplacements: [
      {from:"Sipho — the same Sipho who in Grade 8 had no goals, spent his R20 on sweets and regretted it, and later fixed a broken classroom chair with nothing but folded cardboard — has been busy.",to:"Sipho — the same Sipho who in Form 1 had no clear goals, spent money impulsively and regretted it, and later fixed a broken classroom chair with folded cardboard — has been busy."},
      {from:"He did not plan to become someone who fixes things. It just happened. His sister's toy car broke. He fixed it. His grandmother's kettle stopped working. He opened it, saw a loose wire, reconnected it. A neighbour noticed and asked if he could look at their radio. He did. It worked. They paid him R30.",to:"He did not plan to become someone who fixes things. It just happened. His sister's toy car broke. He fixed it. His grandmother's kettle stopped working. He opened it, found a simple fault and repaired it safely with an adult nearby. A neighbour noticed and asked if he could look at their radio. He did. It worked. They paid him a small agreed amount."},
      {from:"Now, at fifteen, Sipho has a small reputation in his section of Tembisa. He fixes small appliances. He does not have a shop. He does not have a sign. He has his hands and a growing sense that his hands know things his mouth has never been able to say.",to:"Now, Sipho has a small reputation in his neighbourhood in Chitungwiza. He fixes simple items he knows how to handle safely. He does not have a shop. He does not have a sign. He has practical skill and a growing sense that his hands know things his mouth has never been able to say."},
      {from:"Myah finds him at Emmanuel's spaza shop, buying a replacement switch for a kettle he is repairing. \"You have a business,\" she says.",to:"Myah finds him at Emmanuel's tuckshop, buying a simple replacement part for something he is repairing. \"You have a business,\" she says."},
    ],
  },
  "g9-t1-l08-008": {
    textReplacements: [
      {from:"Lerato, visiting her cousin in Tembisa, finds Myah at the taxi rank. Myah shows her the skill list from yesterday's activity. \"I have too many skills,\" Myah says. \"I do not know which one to focus on.\"",to:"Lerato, visiting her cousin in Chitungwiza, finds Myah at the kombi rank. Myah shows her the skill list from yesterday's activity. \"I have too many skills,\" Myah says. \"I do not know which one to focus on.\""},
    ],
  },
  "g9-t1-l09-009": {
    textReplacements: [
      {from:"📘 What Myah Sees at the Taxi Rank",to:"📘 What Myah Sees at the Kombi Rank"},
      {from:"Myah has been coming to this taxi rank her whole life. But since the grant office, since Atlehang's question, since she started seeing differently, the rank has transformed.",to:"Myah has been coming to this kombi rank for years. But since the committee office, since Atlehang's question, since she started seeing differently, the rank has transformed."},
      {from:"6:45 am. about 40 people waiting. Three queues — Soweto, Tembisa, Johannesburg. The Soweto queue is the longest. People are tired. Some have been here since 5:30.",to:"6:45 am. About 40 people waiting. Several queues — into central Harare, to nearby suburbs and to surrounding areas. One queue is much longer than the others. People are tired. Some have been here since before sunrise."},
      {from:"Problem 2: Thirst. No one sells water or cold drinks in the morning. The spaza shop opens at 7am. The sun is already hot by 6:30.",to:"Problem 2: Thirst. No one sells water or cold drinks early enough. The nearby tuckshop opens later. The morning is already warm."},
      {from:"Think about a place you know well — your school, your street, your taxi rank. What problems do people experience there every day? What signals is the market sending?",to:"Think about a place you know well — your school, your street, your kombi rank or market. What problems do people experience there every day? What signals are people giving about unmet needs?"},
      {from:"Walk through a familiar place in your mind. List TEN problems you notice. For THREE of them, name a specific, real person who experiences it. Not \"commuters\" — \"Mrs. Dlamini, who takes three taxis and carries heavy bags.\"",to:"Walk through a familiar place in your mind. List TEN problems you notice. For THREE of them, name a specific, real person who experiences it. Not \"commuters\" — \"Mrs. Moyo, who changes kombis twice and carries heavy bags.\""},
    ],
  },
  "g9-t1-l10-010": {
    textReplacements: [
      {from:"Myah has chosen her problem: thirst at the taxi rank. People are hot. There is no cold water available before 7am. The spaza shop opens late. The vetkoek woman sells food, not drinks.",to:"Myah has chosen her problem: thirst at the kombi rank. People are hot. There is no cold water available early enough. The nearby tuckshop opens later. The vetkoek vendor sells food, not drinks."},
      {from:"\"I am going to sell water at the taxi rank. No committee. No grant. Just me, a cooler box, and whatever I can buy with my savings.\"",to:"\"I am going to test selling water at the kombi rank. No committee. No grant. Just me, a cooler box, and a small amount from my savings.\""},
      {from:"\"R60.\"",to:"\"US$6.\""},
      {from:"\"That buys you about 15 bottles at wholesale. Sell them at R5 each. Profit is about R3 per bottle. If you sell all 15, you make R45. Then you buy more. Then you sell more. That is not a project. That is a business.\"",to:"\"In this example, US$6 buys 15 bottles at about US$0.40 each. If you sell them at US$0.50 each and sell all 15, sales are US$7.50 and gross profit is US$1.50 before any other costs. Then you use the evidence to decide what to do next. That is how a tiny test becomes enterprise learning.\""},
      {from:"Example: If you think people at the taxi rank are thirsty, do not buy 100 bottles. Buy five. Stand there tomorrow. See if anyone asks to buy one. If they do, your assumption is validated. If they do not, you just learned something important for R20.",to:"Example: If you think people at the kombi rank are thirsty, do not buy 100 bottles. Buy five. Stand there at the relevant time. See whether people actually buy. If they do, you have evidence. If they do not, you just learned something important for a small test cost."},
      {from:"If you can, run your MVP test this week. Even a tiny version. Even with R20. Even with one person. If you cannot run it, simulate it: write down exactly what you WOULD do, what you WOULD buy, where you WOULD stand, what you WOULD say. Then predict what would happen. The simulation is not the test — but it prepares you for the test.",to:"If you can, run your MVP test this week. Keep it tiny and use only an amount you can safely afford to test — for example US$2 or the equivalent in a clearly labelled currency. If you cannot run it, simulate it: write down exactly what you would do, buy, say and measure. The simulation is not the test, but it prepares you for one."},
    ],
  },
  "g9-t1-l11-011": {
    textReplacements: [
      {from:"📘 Myah's First Day at the Taxi Rank",to:"📘 Myah's First Day at the Kombi Rank"},
      {from:"6:00 am. Taxi rank. Cooler box. Fifteen bottles of water. R5 each.",to:"6:00 am. Kombi rank. Cooler box. Fifteen bottles of water. US$0.50 each in this illustrative example."},
      {from:"Myah stands near the Soweto queue, where people wait longest. She does not shout. She does not have a sign. She just stands with her cooler box open, bottles visible, watching.",to:"Myah stands near one of the longest queues. She does not shout. She does not have a sign. She just stands with her cooler box open, bottles visible, watching."},
      {from:"\"R5.\"",to:"\"US$0.50.\""},
      {from:"The woman hesitates. Then she buys one. Then a man in the queue behind her buys one. Then a taxi driver walking past stops, looks, buys two — \"One for now, one for later.\"",to:"The woman hesitates. Then she buys one. Then a man in the queue behind her buys one. Then a kombi driver walking past stops, looks, buys two — \"One for now, one for later.\""},
      {from:"By 7:30 am, she has sold twelve bottles. R60 in her pocket. Cost of goods: R48. Profit: R12. Plus two bottles left to sell.",to:"By 7:30 am, she has sold twelve bottles. Sales: US$6.00. Cost of the twelve bottles sold: US$4.80. Gross profit on those sales: US$1.20, with three bottles still in stock."},
      {from:"What surprised me: The taxi driver bought two. He said he would look for me tomorrow. A regular — on day one.",to:"What surprised me: The kombi driver bought two. He said he would look for me tomorrow. A possible regular customer — on day one."},
    ],
  },
  "g9-t1-l12-012": {
    textReplacements: [
      {from:"📘 What Myah Learned About R5",to:"📘 What Myah Learned About a US$0.50 Price"},
      {from:"She has been selling 15 bottles a day at R5 each. Daily income: R75. Daily cost: R60 (wholesale price). Daily profit: R15.",to:"In this illustrative example, she sells 15 bottles a day at US$0.50 each. Daily sales: US$7.50. Daily stock cost: US$6.00. Gross profit: US$1.50 before any other costs."},
      {from:"\"R15 a day is not much,\" she says.",to:"\"US$1.50 a day does not feel like much,\" she says."},
      {from:"\"It is R75 a week,\" Mama Rose says. \"R300 a month. For standing at a taxi rank for two hours before school. That is more than many people earn in a full day of domestic work.\"",to:"\"If you sold out on five mornings, that would be US$7.50 gross profit for the week,\" Mama Rose says. \"The important question is whether the return is worth your time, effort and risk — and what the test is teaching you.\""},
      {from:"\"But I could charge more. R6. Or R7. People might pay.\"",to:"\"But I could charge more. Maybe US$0.60 or US$0.70. People might pay.\""},
      {from:"\"Because R5 feels fair. It is a coin. People have R5 coins. They do not have to think about it. At R6, they have to find change. At R7, they start to wonder if it is worth it. R5 is easy. R5 is a decision they do not have to make.\"",to:"\"Because US$0.50 is simple in this example. People understand the price quickly and it still leaves a small margin. At US$0.60 or US$0.70, some customers may start comparing alternatives. Price is not only arithmetic; it changes the decision a customer has to make.\""},
      {from:"Example: If your R5 water saves a customer R50 in lost time or discomfort, R5 is not a price. It is a bargain.",to:"Example: If a low-cost bottle of water saves a customer significant time or discomfort, the customer may value it above its stock cost. Price and value are related, but they are not the same thing."},
      {from:"Here’s the tension: the market does not care about the value you think you create. It only cares about its own problem. If your R5 solution saves a customer R500 in time or R5,000 in future damage, charging R5 is not humility. It is a failure of communication and strategy. You are not being \"nice\" by undercharging. You are withholding a solution from someone who desperately needs it — because your low price made it look cheap and unreliable. Underpricing is a form of sabotage. And here is the edge: the fear of charging is not about money. It is about worth. You are afraid to name your price because you are afraid of what it says about you. Too high, and you are arrogant. Too low, and you are worthless. But the price is not about you. It is about the value you create. Separate your identity from your pricing. They are not the same thing.",to:"Here’s the tension: customers judge value from their own problem, alternatives and trust. A low price can help access, but it can also make an offer look unsustainable or unreliable. A high price can signal value, but it can also exclude customers or fail if the benefit is not clear. Pricing is not a judgment of your worth as a person. It is a business decision about value, cost, customer ability to pay, alternatives and sustainability. Keep your identity separate from the price you test."},
    ],
  },
  "g9-t1-l13-013": {
    textReplacements: [
      {from:"\"Myah Dlamini. I submitted a proposal three months ago. The water project at the taxi rank.\"",to:"\"Myah Dlamini. I submitted a proposal three months ago. The water project at the kombi rank.\""},
    ],
  },
  "g9-t1-l14-014": {
    tableReplacements: [
      {
        cellIncludes:"40% of Term 1 grade",
        rows:[
          ["Element","Description"],
          ["Duration","3 weeks of focused work"],
          ["What you will create","A written enterprise project: problem, solution, customer, pricing, plan and reflection"],
          ["Presentation","3–4 minute pitch to the class"],
          ["Assessment","Form 2 Term 1 portfolio evidence"],
        ],
      },
    ],
    textReplacements: [
      {from:"Here’s the tension: starting fast is not the same as starting recklessly. Myah had R60 saved. She had a cooler box. She had observed the taxi rank for months. She knew her customers before she sold them anything. Fast does not mean blind. It means you do not use \"planning\" as an excuse for avoiding action. The Weekend Test is the filter: if you cannot make one sale by Sunday, your idea might be too big, too vague, or too dependent on resources you do not have. Shrink it until it fits within the weekend. Then start.",to:"Here’s the tension: starting fast is not the same as starting recklessly. Myah had US$6 available for a small test, a cooler box and months of observation at the kombi rank. She knew the problem before she sold anything. Fast does not mean blind. It means you do not use planning as an excuse for avoiding evidence. The Weekend Test is a filter: if you cannot test the smallest useful version quickly and safely, your idea may still be too big, vague or resource-heavy. Shrink the test until it is manageable, then learn from what happens."},
    ],
  },
  "g9-t1-l15-015": {
    textReplacements: [
      {from:"Myah goes first. She shares her water business — the cooler box, the 6am start, the R5 price point, the R15 daily profit.",to:"Myah goes first. She shares her water test — the cooler box, the 6am start, the US$0.50 price point and the US$1.50 gross profit when all 15 bottles sell in this illustrative example."},
      {from:"Atlehang asks: \"What if another seller sees you and starts selling water at R4? What is your competitive response that is not just lowering your price?\"",to:"Atlehang asks: \"What if another seller sees you and starts selling water at US$0.45? What is your competitive response that is not just lowering your price?\""},
      {from:"Lethabo asks: \"You are making R15 a day. That is R75 a week. Is that enough to make it worth your time? What would 'worth it' mean to you?\"",to:"Lethabo asks: \"If your gross profit is US$1.50 on a sold-out morning, is that enough to make the test worth your time? What would 'worth it' mean to you — money, evidence, repeat customers, or something else?\""},
    ],
  },
  "g9-t1-l16-016": {
    title: "ENTERPRISE FOUNDATIONS REVIEW AND PORTFOLIO",
    textReplacements: [
      {from:"Here’s the tension: the person who wrote your Grade 8 letter to yourself is not gone. She is still inside you. You have grown around her. You have added new skills, new insights, new evidence. But her old fears — the ones you named in Lesson 1 as liabilities — they are still there too. They did not disappear. They just got quieter. The question is whether you will keep managing them in Term 2, or let them quietly take back control. Growth is not a one-time achievement. It is a daily choice. The liabilities you named in Week 1 — do you remember them? Have you managed them? Or did they manage you?",to:"Here’s the tension: the person who wrote your Form 1 letter to yourself is still part of your story. You have added skills, insights and evidence, but old fears and avoidance patterns can still return. The question is whether you keep noticing and managing them as Form 2 Term 1 continues. Growth is not a one-time achievement; it is repeated practice. Look back at the liabilities you named in Lesson 1. Which ones are quieter because of action, and which still need a better system?"},
      {from:"✍️ Activity 17: Letter to My Future Self — Term 1",to:"✍️ Activity 17: Letter to My Future Self — Enterprise Foundations Checkpoint"},
      {from:"Share your Term 1 reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours.",to:"Share your enterprise foundations reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours."},
      {from:"Question 2: Look at your Strategic Audit from Lesson 1. You named three liabilities. How many of them did you actively manage this term? How many managed you? What does this tell you about the gap between intention and action — and what will you do about it in Term 2?",to:"Question 2: Look at your Strategic Audit from Lesson 1. You named three liabilities. How many have you actively managed so far? How many have managed you? What does this tell you about the gap between intention and action — and what will you do about it as Form 2 Term 1 continues?"},
      {from:"The term is ending. Myah sits at Mama Rose's kitchen for the last time this term.",to:"The enterprise foundations cycle is closing. Myah sits at Mama Rose's kitchen to review what she has built so far. Form 2 Term 1 is not over yet — the next lessons turn toward how money moves through households and communities."},
      {from:"I started this term thinking I knew the rules.",to:"I started this enterprise cycle thinking I knew the rules."},
      {from:"I end this term knowing that following the rules is not always enough.",to:"I end this cycle knowing that following the rules is not always enough."},
      {from:"📘 What We Learned This Term",to:"📘 What We Learned in the Enterprise Foundations Cycle"},
      {from:"✍️ Activity 16: My Term 1 Reflection",to:"✍️ Activity 16: My Enterprise Foundations Reflection"},
      {from:"What is the ONE thing you need to do in Term 2 to move up by a single point?",to:"What is the ONE thing you need to do during the rest of Form 2 Term 1 to move up by a single point?"},
      {from:"You will read this at the end of Term 2 — or years from now, when you need to remember who you were.",to:"You will read this at the end of Form 2 Term 1 — or years from now, when you need to remember who you were."},
      {from:"What you hope for Term 2",to:"What you hope for the rest of Form 2 Term 1"},
      {from:"From me, in Grade 9",to:"From me, in Form 2"},
      {from:"Read it at the end of Term 2.",to:"Read it at the end of Form 2 Term 1."},
      {from:"The person who wrote your Grade 8 letter to yourself is not gone.",to:"The person who wrote your Form 1 letter to yourself is not gone."},
      {from:"Will you keep managing them in Term 2, or let them quietly take back control?",to:"Will you keep managing them as Form 2 continues, or let them quietly take back control?"},
      {from:"What will you carry forward from this term into Term 2 — and into your life?",to:"What will you carry forward from this enterprise cycle into the rest of Form 2 Term 1 — and into your life?"},
      {from:"Lesson 16 — Term 1 Final Reflection",to:"Lesson 16 — Enterprise Foundations Reflection"},
      {from:"I reflected on my entire Term 1 journey — enterprise, values, liabilities, and growth.",to:"I reflected on my enterprise foundations journey — enterprise, values, liabilities, and growth."},
      {from:"What I will carry into Term 2:",to:"What I will carry forward:"},
      {from:"You finished Term 1 of Grade 9.",to:"You completed the enterprise foundations cycle of Form 2. Term 1 continues with money flows, households and community economics."},
      {from:"Keep going. Term 2 awaits.",to:"Keep going. Form 2 Term 1 continues."},
    ],
    tableTextReplacements: [
      {from:"You bring everything from Grade 8 forward — and set a strategic intention",to:"You bring everything from Form 1 forward — and set a strategic intention"},
    ],
  },
  "g9-t2-l26-027": {
    title: "THE MUKANDO SYSTEM",
    textReplacements: [
      {from:"In South Africa, stokvels handle billions of rands every year. They are not informal. They are essential.",to:"In Zimbabwe, mukando and other community savings arrangements are part of how many families pool resources, create accountability and prepare for larger expenses. Their exact rules differ from group to group."},
      {from:"Twelve women. Each pays R200 a month. Every month, one woman receives R2,400.",to:"Twelve women. Each contributes an agreed amount on the group's schedule. When it is a member's turn, she receives the pooled payout according to the group's rules."},
      {from:"How much does each person contribute each month? R______________________",to:"How much does each person contribute each cycle? ______________________ [currency]"},
      {from:"How much is the payout each month? R_____________________________________",to:"How much is the payout each cycle? _________________________________ [currency]"},
      {from:"Stokvels",to:"Mukando groups"},
      {from:"stokvels",to:"mukando groups"},
      {from:"Stokvel",to:"Mukando"},
      {from:"stokvel",to:"mukando"},
    ],
    tableTextReplacements: [
      {from:"Stokvel",to:"Mukando"},
      {from:"stokvel",to:"mukando"},
    ],
  },
  "g9-t2-l28-029": {
    textReplacements: [
      {from:"She has observed the taxi rank for three weeks",to:"She has observed the kombi rank for three weeks"},
      {from:"She has not looked at the stokvels in her community",to:"She has not looked at the mukando or savings groups in her community"},
      {from:"The taxi rank is a river of money, but most of it flows out",to:"The kombi rank is a river of money, connecting local trade to a wider economy"},
      {from:"The stokvels are a way to keep some money local",to:"Mukando and savings groups can help households pool resources and plan ahead"},
      {from:"She needs to investigate stokvels",to:"She needs to investigate mukando or savings groups"},
    ],
  },
  "g9-t2-l29-030": {
    textReplacements: [
      {from:"Myah looks at her completed map. It covers the taxi rank, the spaza shop, the stokvels, the elders, the leaks. It tells the story of money in her community.",to:"Myah looks at her completed map. It covers the kombi rank, the tuckshop, mukando groups, elders, local businesses and outward flows. It tells the story of money and value in her community."},
      {from:"Money flows through the taxi rank, the spaza shop, and the stokvels",to:"Money flows through the kombi rank, the tuckshop, markets and mukando groups"},
      {from:"Money spent at the spaza shop (some of it)",to:"Money spent at the tuckshop (some of it)"},
      {from:"Money saved in stokvels (all of it)",to:"Money pooled through mukando / savings groups (according to the group's rules)"},
      {from:"\"My community is a river of money. Most of it flows in and then flows out. Very little stays. The stokvels are a way to keep some money local. The spaza shop is a way to keep some money local. But most of the money leaves. If we could keep more money in the community, we could build schools, roads, clinics. We could survive shocks. We could be stronger.\"",to:"\"My community is a river of money and value. Some flows stay nearby and some connect us to suppliers, employers and services elsewhere. Mukando groups, local businesses and local services can strengthen resilience. The goal is not to trap money inside one place. It is to understand the flows well enough to create more useful local value and withstand shocks.\""},
    ],
  },
  "g9-t2-l31-032": {
    textReplacements: [
      {from:"What I learned: My community is a river of money. Most of it leaves. The stokvels are a way to keep some money local. The spaza shop is a way to keep some money local. But most of the money flows out and never returns.",to:"What I learned: My community is a river of money and value. Mukando groups, tuckshops and local services can strengthen local resilience, while other payments connect the community to the wider economy."},
      {from:"My action plan: I will start a community savings group with my friends. We will each save R10 a week. We will use the money to buy things from local businesses. We will keep the money in the community.",to:"My action plan: I will design a small savings-and-local-value experiment with people I trust. We will agree on a realistic contribution in a clearly labelled currency, set transparent rules, and decide what local need or opportunity the pooled resources could support."},
    ],
  },
  "g9-t2-l32-033": {
    title:"FORM 2 TERM 1 LEARNING JOURNEY MAP",
    textReplacements: [
      {from:"Map your learning journey across Term 2.",to:"Map your learning journey across Form 2 Term 1."},
      {from:"Myah sits at Mama Rose's kitchen, flipping through her notebook one final time for Term 2.",to:"Myah sits at Mama Rose's kitchen, flipping through her notebook as Form 2 Term 1 comes to a close."},
      {from:"Lesson 17: Every rand has a story. Money is stored value.",to:"Lesson 17: Every amount has a story. Money carries value through an economy."},
      {from:"Lesson 27: Every rand that leaves without return is a leak.",to:"Lesson 27: Every outflow should have a reason. Trace what value leaves, stays or returns."},
      {from:"Draw a timeline of your learning journey through Term 2. Start at Lesson 17. End at Lesson 31. Mark the key lessons, the key insights, and the key moments.",to:"Draw a timeline of your learning journey through Form 2 Term 1. Include the enterprise foundations from Lessons 1–16 and the money-and-community work from Lessons 17–31. Mark the key lessons, insights and moments."},
      {from:"The Danger: You will forget some of what you learned. That is normal. But you will not forget the insights. You will not forget the feeling of tracing a rand. You will not forget the map.",to:"The Danger: You will forget some details. That is normal. But the important insights can stay: value is created, money moves, communities contain systems, and observation becomes useful when it leads to better action."},
      {from:"Your Move: What is the one thing from Term 2 that you will remember forever? Why that one?",to:"Your Move: What is the one thing from Form 2 Term 1 that you want to remember? Why that one?"},
      {from:"Question 2: How has your understanding of money changed since the beginning of Term 2? What evidence do you have of that change?",to:"Question 2: How has your understanding of work, value and money changed since the beginning of Form 2 Term 1? What evidence do you have of that change?"},
      {from:"☐ I have mapped my learning journey across Term 2.",to:"☐ I have mapped my learning journey across Form 2 Term 1."},
    ],
    tableTextReplacements:[
      {from:"Lesson 32 — Learning Journey Map",to:"Lesson 32 — Form 2 Term 1 Learning Journey Map"},
      {from:"I mapped my learning journey across Term 2.",to:"I mapped my learning journey across Form 2 Term 1."},
    ],
  },
  "g9-t2-l33-034": {
    title:"FORM 2 TERM 1 REFLECTION — WORK, VALUE & MONEY",
    textReplacements: [
      {from:"Compile your complete Term 2 Portfolio.",to:"Compile your complete Form 2 Term 1 portfolio."},
      {from:"Identify what you will carry forward into Term 3.",to:"Identify what you will carry forward into Form 2 Term 2."},
      {from:"📘 Myah's Term 2 Reflection",to:"📘 Myah's Form 2 Term 1 Reflection"},
      {from:"I started Term 2 thinking money was just something you earn and spend. I end Term 2 knowing it is a story. Every rand has a journey. Every rand has a source. Every rand has a destination.",to:"I started Form 2 Term 1 thinking enterprise was mostly about earning and money was mostly about spending. I end the term seeing a system: people create value, money carries that value through households and communities, and every amount has a source, a purpose and a destination."},
      {from:"I am not the same person who started Applied Commerce in Term 1. I am not even the same person who started Applied Commerce at the start of this term. I know more. I see more. I can do more.",to:"I am not the same person who started Form 2 Term 1. I know more. I see more. I can do more."},
      {from:"✍️ Activity 33: My Term 2 Reflection",to:"✍️ Activity 33: My Form 2 Term 1 Reflection"},
      {from:"8. The 1-10 Scale: At the start of the term, you were a \"1\" on the community money awareness scale. Where are you now — honestly? What is the exact number? What is the ONE thing you need to do in Term 3 to move up by a single point?",to:"8. The 1-10 Scale: At the start of Form 2 Term 1, where were you on the work-value-money awareness scale? Where are you now — honestly? What is the exact number? What is the ONE thing you need to do in Form 2 Term 2 to move up by a single point?"},
      {from:"The Truth: You are not the same person who started Applied Commerce at the start of Term 2. You know more about money. You know more about your community. You know more about yourself. That is growth.",to:"The Truth: You are not the same learner who started Form 2 Term 1. You know more about work, value, money and your community. You also have evidence of what you can observe and do. That is growth."},
      {from:"The Danger: The person who started Term 2 is still inside you. The old beliefs, the old habits, the old ways of ignoring money flows — they are still there. They just got quieter.",to:"The Danger: old beliefs and old ways of ignoring money flows do not disappear because you completed a project. They can return when you stop paying attention."},
      {from:"Your Move: Growth is not a one-time achievement. It is a daily choice. What is one thing you will do differently in Term 3 because of what you learned this term?",to:"Your Move: Growth is not a one-time achievement. What is one thing you will do differently in Form 2 Term 2 because of what you learned this term?"},
      {from:"Question 1: What is the biggest difference between who you were at the start of Term 2 and who you are now?",to:"Question 1: What is the biggest difference between who you were at the start of Form 2 Term 1 and who you are now?"},
      {from:"Question 2: What is one thing you will carry forward from Term 2 into Term 3 — and into your life?",to:"Question 2: What is one thing you will carry forward from Form 2 Term 1 into Term 2 — and into your life?"},
      {from:"Share your Term 2 reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours.",to:"Share your Form 2 Term 1 reflection with someone who matters to you. Let them witness your growth. Or keep it private. It is yours."},
      {from:"☐ I have compiled my complete Term 2 Portfolio.",to:"☐ I have compiled my complete Form 2 Term 1 portfolio."},
      {from:"☐ I have identified what I will carry forward into Term 3.",to:"☐ I have identified what I will carry forward into Form 2 Term 2."},
    ],
    tableReplacements:[
      {
        cellIncludes:"Every rand has a story",
        rows:[
          ["Lessons","What We Learned"],
          ["1–16","Values, enterprise, skills, customers, pricing and the courage to act"],
          ["17–22","Money origins, households, supply chains, value chains, employers and employees"],
          ["23–31","Community Money Map — observation, outflows, local value and an action plan"],
          ["32–33","Learning journey, evidence and Form 2 Term 1 reflection"],
        ],
      },
    ],
    tableTextReplacements:[
      {from:"Lesson 33 — Term 2 Final Reflection",to:"Lesson 33 — Form 2 Term 1 Final Reflection"},
      {from:"I reflected on my entire Term 2 journey — money flows, community, and growth.",to:"I reflected on my entire Form 2 Term 1 journey — enterprise, money flows, community and growth."},
      {from:"What I will carry into Term 3:",to:"What I will carry into Form 2 Term 2:"},
    ],
  },
  "g9-t2-l34-035": {
    title: "FORM 2 TERM 1 FAREWELL — LETTER TO MY FUTURE SELF",
    textReplacements: [
      {from:"Myah writes a final letter to her future self. She will read it at the end of Term 3 — or years from now, when she needs to remember who she was.",to:"Myah writes a final letter to her future self at the end of Form 2 Term 1. She will read it at the end of Form 2 Term 2 — or years from now, when she needs to remember who she was."},
      {from:"I am 15 years old. I live in Tembisa. I just finished Term 2 of Grade 9. I traced money through my community. I saw the leaks. I saw the strengths. I saw what could be.",to:"I am in Form 2. I just finished Term 1. I traced money through my community. I saw the outflows. I saw the strengths. I saw what could be."},
      {from:"I learned that every rand has a story. I learned that my community is a river of money — and most of it flows out. I learned that observation is not enough. Action is the next step.",to:"I learned that every amount of money has a story. I learned that my community is a river of money — and that understanding where value stays or leaves changes what I notice. I learned that observation is not enough. Action is the next step."},
      {from:"I hope Term 3 brings more confidence.",to:"I hope Term 2 brings more confidence."},
      {from:"✍️ Activity 34: Letter to My Future Self — Term 2",to:"✍️ Activity 34: Letter to My Future Self — Form 2 Term 1"},
      {from:"You will read this at the end of Term 3 — or years from now, when you need to remember who you were.",to:"You will read this at the end of Form 2 Term 2 — or years from now, when you need to remember who you were."},
      {from:"What you learned this term that changed how you see money and community",to:"What you learned in Form 2 Term 1 that changed how you see money and community"},
      {from:"What you hope for Term 3",to:"What you hope for Form 2 Term 2"},
      {from:"From me, in Grade 9",to:"From me, in Form 2"},
      {from:"Read it at the end of Term 3.",to:"Read it at the end of Form 2 Term 2."},
      {from:"What is the most important thing you want your future self to remember about who you were in Term 2?",to:"What is the most important thing you want your future self to remember about who you were in Form 2 Term 1?"},
      {from:"Save your final Log entry of the term.",to:"Save your final Log entry of Form 2 Term 1."},
      {from:"You finished Term 2 of Grade 9.",to:"You finished Form 2 Term 1."},
      {from:"You traced money through your household and your community. You learned that every rand has a story. You mapped the leaks. You identified the strengths. You created a Community Money Map that tells the story of how money moves through your world.",to:"You traced money through your household and your community. You learned that every amount has a story. You mapped outflows and strengths. You created a Community Money Map that tells the story of how value moves through your world."},
      {from:"Keep going. Term 3 awaits.",to:"Keep going. Form 2 Term 2 awaits — habits, agency and execution."},
    ],
  },
  "g9-t3-l35-024": {
    textReplacements: [
      {from:"Recall the habit loop (cue, routine, reward) from Grade 8 and apply it with deeper understanding.",to:"Recall the habit loop (cue, routine, reward) from Form 1 and apply it with deeper understanding."},
      {from:"She stares at the page. She has been tracking her money for months — every rand, every expense. She traced supply chains. She mapped her community's money. She presented her findings at the community hall. But she has never really looked at her own morning. She has never asked herself why she keeps doing something that makes her feel worse.",to:"She stares at the page. She has been tracking money and expenses for months. She traced supply chains. She mapped her community's money. She presented her findings at the community hall. But she has never really looked at her own morning. She has never asked herself why she keeps doing something that makes her feel worse."},
      {from:"Key idea: You learned the habit loop in Grade 8. Cue. Routine. Reward. It was useful then. But you are not in Grade 8 anymore. The loop is not just a mechanism. It is a voting machine. Every time you perform a habit, you cast a vote for an identity. Save R5, vote for \"I am a saver.\" Scroll for twenty minutes, vote for \"I am someone who starts the day distracted.\" The votes accumulate. Over time, the election is called — and the winner is the identity you have been voting for, whether you meant to or not.",to:"Key idea: You learned the habit loop in Form 1. Cue. Routine. Reward. It was useful then. In Form 2, go deeper: each repetition is also evidence for an identity. Save a small amount consistently, vote for \"I am someone who prepares.\" Scroll for twenty minutes before getting up, vote for \"I am someone who starts the day distracted.\" Repetition accumulates. Over time, the pattern becomes part of how you see yourself."},
    ],
  },
  "g9-t3-l36-025": {
    textReplacements: [
      {from:"\"After a month, it was automatic. I did not think about it. So I added another tiny habit: save R5 every day. Just R5. In a jar on my desk.\"",to:"\"After a month, it was automatic. I did not think about it. So I added another tiny habit: save US$0.50 every day in this example. A small amount, in a jar on my desk.\""},
      {from:"\"A year later, I could do fifty push-ups. I had R1,800 saved. I was studying better — not because I tried to study better, but because the discipline from those tiny habits spilled over. I had proved to myself that I was someone who keeps promises. After that, bigger promises felt possible.\"",to:"\"A year later, I could do fifty push-ups. If I had managed US$0.50 every day for 365 days, that would be about US$182.50 before any withdrawals. I was studying better too — not because one habit magically caused everything else, but because I had evidence that I could keep small promises. Bigger promises started to feel possible.\""},
      {from:"Choose one tiny habit to start. Make it so small it feels almost too easy. If it feels hard, make it smaller. Ten push-ups too many? Do one. Save R5 too much? Save R1. The size does not matter. The consistency does.",to:"Choose one tiny habit to start. Make it so small it feels almost too easy. If it feels hard, make it smaller. Ten push-ups too many? Do one. A daily saving target too high? Reduce it or choose a non-money habit. The size is less important than a repeatable action."},
      {from:"Key idea: Themba's R5 a day was not about the money. It was about the identity. Every time he saved R5, he cast a vote for \"I am a saver.\" The R5 itself was almost meaningless. The vote was everything. At first, the votes feel insignificant. R5? That is nothing. Ten push-ups? That will not change my body. But after thirty votes, something shifts. After a hundred votes, the identity starts to lock. After 365 votes, you no longer have to think about it. You just are a saver. You just are someone who exercises. The compound effect works on money. But it works more powerfully on identity. Small actions, repeated, do not just change what you have. They change who you believe you are.",to:"Key idea: Themba's daily saving habit was not only about the amount. It was evidence. Each repetition supported the identity \"I am someone who prepares.\" The same is true of exercise, study or organisation. One repetition feels small. Thirty repetitions are harder to dismiss. Hundreds of repetitions can change what feels normal. Small actions, repeated, do not only change outcomes; they can change what you believe you are capable of."},
      {from:"Here’s the tension: the compound effect is neutral. It amplifies whatever you feed it. Bad habits compound too. One missed savings day makes the next miss easier. One skipped workout makes the next skip feel normal. One lie makes the next lie less uncomfortable. You are always compounding something. The question is what. And here is the uncomfortable edge: the ability to build tiny habits assumes a baseline of stability. Themba could do push-ups because he had a floor and a body that worked. He could save R5 because he had R5 to save. What if he did not? The tiny habits philosophy is powerful — but it is not equally accessible. Acknowledging that does not excuse inaction. But it explains why some people struggle more than others to build the foundation.",to:"Here’s the tension: repetition can strengthen useful or harmful patterns. One missed day does not destroy a habit, but repeated avoidance can become easier to repeat. The other edge is resources. Themba could exercise because his body and environment allowed it. He could save because he had something available to save. Not everyone has the same starting conditions. Good habit design must respect reality rather than pretending every learner has equal time, money, privacy, safety or support."},
      {from:"Your Next Step: If your conditions make consistency hard — if you cannot save R5 because you do not have R5, if you cannot exercise because you are working or caring for siblings — what is the SMALLEST possible version of a positive habit you COULD build? One deep breath before you start your day? One kind word to someone? One sentence of gratitude? The size does not matter. The vote does.",to:"Your Next Step: If your conditions make consistency hard — if saving money is not realistic, or exercise time is limited because you work or care for siblings — what is the smallest useful habit you could build? One minute of planning? One kind word? One line in your tracker? Choose something that fits your actual life."},
    ],
    tableTextReplacements: [
      {from:"Save R5 every day",to:"Save US$0.50 a day in this illustrative example"},
    ],
  },
  "g9-t3-l37-026": {
    textReplacements: [
      {from:"She talks to Atlehang at the taxi rank.",to:"She talks to Atlehang at the kombi rank."},
      {from:"Atlehang thinks. \"Remember SMART from Grade 8?\"",to:"Atlehang thinks. \"Remember SMART from Form 1?\""},
    ],
  },
  "g9-t3-l40-029": {
    textReplacements: [
      {from:"Then Mrs. October, his biggest customer, told him her daughter was moving back from Johannesburg. Her daughter would do the shopping now. She would not need deliveries anymore.",to:"Then Mrs. October, his biggest customer, told him her daughter was moving back from Bulawayo. Her daughter would do the shopping now. She would not need deliveries anymore."},
    ],
  },
  "g9-t3-l41-030": {
    textReplacements: [
      {from:"He made another for a neighbour. Then another. Then a woman from church. Then the clinic down the road ordered ten. Now, nearly two years later, he has made over sixty clocks. He has saved over R2,000. He has taught three younger kids how to make them. He has a small production system — materials sourced, prices set, quality controlled.",to:"He made another for a neighbour. Then another. Then a woman from church. Then the clinic down the road ordered ten. Now, nearly two years later, he has made over sixty clocks. In this story he has saved more than US$200 from the work. He has taught three younger learners how to make them. He has a small production system — materials sourced, prices set, quality controlled."},
      {from:"Myah finds him at Emmanuel's spaza shop, buying more glue. \"How did you keep going when the first clocks were ugly and people said no?\"",to:"Myah finds him at Emmanuel's tuckshop, buying more glue. \"How did you keep going when the first clocks were ugly and people said no?\""},
    ],
  },
  "g9-t3-l42-031": {
    title:"LEARNING FROM FAILURE — SMALL, CALCULATED TESTS",
    textReplacements: [
      {from:"Here’s the tension: the ability to learn from failure is, in part, a luxury. Sipho could learn from his melted sweets and try again because losing R50 did not destroy him. He had a home. He had food. He had support. He could afford to fail. What if R50 was all he had? What if failing meant he could not eat? The ability to fail safely and extract the lesson is not equally distributed. Some failures are fatal — you do not get a second chance. Some failures cost so much there is nothing left to rebuild with. This does not mean you should not take risks. It means you should take CALCULATED risks — small enough that failure teaches without destroying. And it means you should never judge someone else's failure without understanding what it cost them.",to:"Here’s the tension: the ability to learn safely from failure depends partly on resources and support. Sipho could lose US$5 in a small test and try again because the loss did not threaten food, transport or safety. Not everyone has that margin. Some failures are too costly to treat casually. This is why responsible experimentation uses calculated risks: small enough that a bad result teaches without damaging essential needs, safety or trust. Never judge someone else's failure without understanding what it cost them."},
      {from:"📘 Sipho's R50 Tuition",to:"📘 Sipho's US$5 Lesson"},
      {from:"Sipho — the same Sipho who once had no goals, who spent his R20 on sweets in Grade 8 and regretted it, who fixed his sister's toy car, who now repairs small appliances for neighbours — sits at Mama Rose's kitchen, telling a story Myah has not heard before.",to:"Sipho — the same Sipho who once had no clear goals, who spent money impulsively in Form 1 and regretted it, who fixed his sister's toy car, and who now repairs simple items for neighbours — sits at Mama Rose's kitchen, telling a story Myah has not heard before."},
      {from:"He tells them: a year ago, he tried to sell sweets at school. He bought R50 worth of chocolates — the kind that melt. He did not think about the heat. He did not think about where to store them. By lunchtime, they were a sticky mess. He lost everything.",to:"He tells them: a year ago, he tried to sell sweets at school. In this example he bought US$5 worth of chocolates — the kind that melt. He did not think about the heat or where to store them. By lunchtime, they were a sticky mess. He lost the test money."},
      {from:"\"No. I asked people what they actually wanted. Chips, they said. Cold drink. Things that do not melt. I tried again — smaller, smarter. Chips and cold drinks from Emmanuel's shop. Sold them at school. Made back my R50 and then some.\"",to:"\"No. I asked people what they actually wanted. Chips, they said. Cold drinks. Things that do not melt. I tried again — smaller, smarter. I bought a small amount from Emmanuel's shop, tested demand, and eventually made back the US$5 I had lost.\""},
      {from:"\"What did the R50 teach you?\"",to:"\"What did the US$5 test teach you?\""},
      {from:"Key idea: Sipho paid R50 for a lesson. That is cheap tuition. Some people pay thousands for business courses and learn less. Some people pay with years of their lives on the wrong path. Some never learn at all because they are too afraid of failure to try anything worth learning from. Failure is not the opposite of success. It is a component of success. The people who succeed are not the ones who avoid failure. They are the ones who pay attention when it happens. They extract the lesson. They do not waste the tuition.",to:"Key idea: Sipho lost US$5 on a small test and extracted a useful lesson. The point is not that failure is automatically good. It is that a controlled failure can produce information when you review what happened. Successful experimentation means keeping the downside small enough to survive, measuring the result, and changing the next attempt."},
      {from:"Here’s the tension: failure as tuition only works if you can afford the tuition. Sipho lost R50 and tried again. What if R50 was all he had? What if failing meant he could not eat? The ability to fail safely and extract the lesson is not equally distributed. Some failures are fatal — you do not get a second chance. Some failures cost so much there is nothing left to rebuild with. This does not mean you should not take risks. It means you should take CALCULATED risks — small enough that failure teaches without destroying. And it means you should never judge someone else's failure without understanding what it cost them.",to:"Here’s the tension: failure only becomes useful tuition when the loss is survivable. Sipho lost US$5 and tried again. If that money had been needed for food or transport, the same experiment would have been irresponsible. The ability to fail safely is not equally distributed. Take calculated risks: small enough to learn from without damaging essential needs, safety or trust. Never judge someone else's failure without understanding what it cost them."},
    ],
    tableTextReplacements: [
      {from:"lost R50",to:"lost US$5"},
    ],
  },
  "g9-t3-l46-035": {
    textReplacements: [
      {from:"Lethabo has R200 saved. He has been saving for months.",to:"Lethabo has US$20 saved in this illustrative example. He has been saving for months."},
      {from:"Now his friends want to go to an amusement park. Entry is R150. Food is extra.",to:"Now his friends want to go to an amusement park. Entry is US$15 in this example. Food and transport are extra."},
      {from:"1. Go — spend R150, have fun, but savings gone.",to:"1. Go — spend US$15 plus extras, have fun, but use most of the savings."},
    ],
  },
  "g9-t3-l47-036": {
    textReplacements: [
      {from:"She knows how this goes. Last time, she went with no money and ended up borrowing from Thabo to buy a cool drink. Now she owes R15.",to:"She knows how this goes. Last time, she went with no money and ended up borrowing from Thabo to buy a cool drink. In this illustrative example she still owes him US$1.50."},
    ],
  },
  "g9-t3-l48-037": {
    title:"DIGITAL HABITS, SUBSCRIPTIONS & MONEY",
    textReplacements: [
      {from:"📘 The R80 That Disappeared",to:"📘 The US$8 That Disappeared"},
      {from:"Thabo is at Emmanuel's spaza shop, checking his bank balance on his phone. He has been using a banking app since he opened his savings account. It is convenient. But convenient is not always safe.",to:"Thabo is at Emmanuel's tuckshop, checking his account balance on his phone. He has been using a financial app to track his savings. It is convenient. But convenient is not always deliberate."},
      {from:"He stares at the screen. He had R340 last week. Now he has R260. R80 gone. He does not remember spending it.",to:"He stares at the screen. In this illustrative example he had US$34 last week. Now he has US$26. US$8 gone. He does not remember choosing to spend it."},
      {from:"R15 — Game Coins",to:"US$1.50 — Game coins"},
      {from:"R25 — App Subscription (monthly, auto-renewing)",to:"US$2.50 — App subscription (monthly, auto-renewing)"},
      {from:"R20 — Game Coins again",to:"US$2.00 — Game coins again"},
      {from:"R20 — Another subscription he forgot he signed up for",to:"US$2.00 — Another subscription he forgot he signed up for"},
      {from:"R80. Gone. He did not even feel it leaving.",to:"US$8. Gone. He did not feel each small payment leaving."},
      {from:"\"I just lost R80. In-app purchases. Subscriptions I forgot about. I did not even notice until I checked my balance. It just... disappeared.\"",to:"\"I spent US$8 without paying attention. In-app purchases. Subscriptions I forgot about. I did not notice the total until I checked my balance.\""},
      {from:"☐ Cancel unused subscriptions ☐ Disable in-app purchases ☐ Turn off one-click buying ☐ Set a 24-hour rule before any digital purchase over R50 ☐ Check transaction history weekly ☐ Other: _________________________________",to:"☐ Cancel unused subscriptions ☐ Disable in-app purchases ☐ Turn off one-click buying ☐ Set a 24-hour rule before any non-essential digital purchase over US$5 or another threshold that fits your currency ☐ Check transaction history weekly ☐ Other: _________________________________"},
      {from:"Here’s the tension: Thabo discovered his R80 loss because he checked his transaction history. He has a bank app. He has enough literacy to understand what he is looking at. What if he did not? Digital literacy is not equally distributed. The people most vulnerable to digital spending traps are often the people least equipped to detect them. And the deeper tension: the digital economy runs on attention extraction. Even if you protect your money, your attention is still being harvested, packaged, and sold. You are not just a consumer. You are the product. Every free app, every social media platform, every \"free\" service — you pay with your attention, your data, your preferences. The price is just hidden.",to:"Here’s the tension: Thabo noticed the US$8 only because he reviewed his transaction history. Digital literacy is uneven, and recurring payments can be difficult to notice. There is also a second cost: attention and data. Many digital services are designed to keep you engaged because your attention, behaviour and preferences have commercial value. Protecting yourself therefore means checking both what you spend and what you give away in time, attention and information."},
    ],
    tableTextReplacements: [
      {from:"\"Just R10\" — but it adds up",to:"\"Just US$1\" — but repeated purchases add up"},
    ],
  },
  "g9-t3-l49-038": {
    title:"ONLINE SAFETY, PHISHING & SCAMS",
    textReplacements: [
      {from:"Atlehang's phone buzzes while she waits at the taxi rank. A WhatsApp message from an unknown number:",to:"Atlehang's phone buzzes while she waits at the kombi rank. A WhatsApp message from an unknown number:"},
      {from:"\"Congratulations! You have won a R5,000 shopping voucher! Click here to claim your prize: [link]\"",to:"\"Congratulations! You have won a US$500 shopping voucher! Click here to claim your prize: [link]\""},
      {from:"Her finger hovers over the link. R5,000. That is more than her mother makes in a week at the kitchen. That could buy ingredients for a month.",to:"Her finger hovers over the link. US$500. It is a large amount for her household. It could cover many real needs."},
      {from:"She stops. She remembers something Ms. Daniels said during the Community Money Map project: \"If something sounds too good to be true, it almost always is. Nobody gives away R5,000 for free. They want something from you. Your information. Your money. Your identity.\"",to:"She stops. She remembers something Ms. Daniels said during the Community Money Map project: \"If something sounds too good to be true, treat it as a warning. A message promising US$500 for a competition you never entered may be trying to get your information, money or identity.\""},
      {from:"Later, Atlehang hears that a neighbour's son clicked a similar link. Entered his mother's banking details to \"claim the prize.\" R800 disappeared before she could stop it. It took weeks to get the bank to reverse the charges. The money was never fully recovered.",to:"Later, Atlehang hears that a neighbour's son clicked a similar link and entered financial details to \"claim the prize.\" In this illustrative scenario, US$80 was taken before the account could be secured. Recovery was difficult and incomplete."},
    ],
    tableTextReplacements: [
      {from:"Online ad for new phone for R200 (usually R2,000)",to:"Online ad for a new phone for US$20 when the normal price is around US$200"},
      {from:"Message saying you won a competition you never entered — just pay R50 to claim your prize",to:"Message saying you won a competition you never entered — just pay US$5 to claim your prize"},
    ],
  },
  "g9-t3-l51-040": {
    textReplacements: [
      {from:"Myah is ten days into her habit challenge. She meets her Habit Stokvel at Mama Rose's kitchen — Thabo, Atlehang, and Lethabo.",to:"Myah is ten days into her habit challenge. She meets her Habit Accountability Circle at Mama Rose's kitchen — Thabo, Atlehang and Lethabo."},
      {from:"Part D: Habit Stokvel Check-In",to:"Part D: Habit Accountability Circle Check-In"},
      {from:"One insight from my Stokvel: _________________________________",to:"One insight from my Accountability Circle: _________________________________"},
    ],
  },
  "g9-t3-l52-041": {
    textReplacements: [
      {from:"Lethabo is trying to build a habit of saving R10 every day. For two weeks, it worked — every day, R10 into the jar on his desk.",to:"Lethabo is trying to build a habit of saving US$1 every day in this illustrative example. For two weeks, it worked — every day, US$1 into the jar on his desk."},
      {from:"He told Myah at Emmanuel's spaza shop. \"I broke the chain. Fourteen days of ticks, and now nothing. I might as well give up.\"",to:"He told Myah at Emmanuel's tuckshop. \"I broke the chain. Fourteen days of ticks, and now nothing. I might as well give up.\""},
      {from:"He put R10 in the jar that afternoon. The chain continued — not unbroken, but continued. And that was the point.",to:"He restarted with US$1 that afternoon. The chain continued — not unbroken, but continued. And that was the point."},
      {from:"Here’s the tension: designing a resilient system requires resources. An emergency fund requires extra money. A backup plan requires options. Not everyone has those resources. If you cannot build the ideal system, build the best system you CAN with what you have. If you cannot save R10 a day, save R2. If you cannot exercise for 30 minutes, do 5. If you cannot study for an hour, do 10 minutes. The system does not need to be perfect. It needs to survive contact with reality. And the most resilient system is the one that can fail and restart without shame. Shame is what keeps people from restarting. Remove the shame. Keep the restart.",to:"Here’s the tension: resilient systems often require resources, and not everyone has the same options. If you cannot build the ideal system, build the best one that fits your reality. If US$1 a day is not realistic, choose a smaller amount or a non-money habit. If thirty minutes of exercise is not possible, try five. If an hour of study is impossible, try ten minutes. The system does not need to be perfect. It needs to survive contact with real life and make restarting easier after a miss."},
    ],
  },
  "g9-t3-l53-042": {
    textReplacements: [
      {from:"Your Next Step: What is one way you will use the review habit in Term 4 — not as a project, but as a way of being? A weekly check-in with yourself? A monthly review of a habit? A commitment to track something new every term?",to:"Your Next Step: What is one way you will use the review habit in Form 2 Term 3 — not as a project, but as a way of being? A weekly check-in? A monthly review? A commitment to track one important behaviour while you work on your community project?"},
      {from:"Question 2: The review habit — noticing and adjusting — is more valuable than any single habit. What is your specific plan to keep it alive in Term 4? Not a wish. A plan.",to:"Question 2: The review habit — noticing and adjusting — can outlast any single project. What is your specific plan to keep it alive in Form 2 Term 3? Not a wish. A plan."},
    ],
  },
  "g9-t3-l50-039": {
    title: "HABIT TRANSFORMATION PROJECT — LAUNCH",
    tableReplacements: [
      {
        cellIncludes:"40% of Term 3 grade",
        rows:[
          ["Element","Description"],
          ["Duration","21 days of tracking"],
          ["What you will create","Tracker + daily notes + midpoint review + reflection + presentation"],
          ["Assessment","Form 2 Term 2 portfolio evidence"],
        ],
      },
    ],
    textReplacements: [
      {from:"Set up your tracking system and commit to your Habit Stokvel.",to:"Set up your tracking system and commit to your Habit Accountability Circle."},
      {from:"Track every rand I spend",to:"Track every amount I spend and label the currency"},
      {from:"My Habit Stokvel members are: _________________",to:"My Habit Accountability Circle members are: _________________"},
      {from:"This is the third-term capstone.",to:"This is the Form 2 Term 2 applied habit project."},
      {from:"Habit Stokvel",to:"Habit Accountability Circle"},
    ],
  },
  "g9-t3-l54-043": {
    title: "TERM 2 REFLECTION — HABITS, EXECUTION & NEXT MOVE",
    tableReplacements: [
      {
        cellIncludes:"Path Forward",
        rows:[
          ["Term","Definition"],
          ["Reflection","Thinking back on what you have learned"],
          ["Growth","Getting better over time"],
          ["Readiness","Being prepared to apply what you have learned in the next challenge"],
        ],
      },
    ],
    rangeReplacements: [
      {
        startIncludes:"📘 The Fork in the Road: Choosing Your Path Forward",
        endIncludes:"If you cannot share with anyone: Write your Path Forward declaration on a piece of paper. Sign it. Date it. Keep it. This is your contract with yourself.",
        replacement:[
          {kind:"text",type:"section",text:"📘 Looking Ahead to Term 3 — Community Enterprise"},
          {kind:"text",type:"paragraph",text:"Form 2 Term 3 moves outward again. You will use the discipline, observation, planning and problem-solving skills you have built to work on a real community need. The next challenge is not to choose your whole future. It is to choose how you will show up for the next project."},
          {kind:"text",type:"activity",text:"✍️ Activity 54B: My Term 3 Readiness Plan\n\n1. One habit or system I will carry into Term 3: _________________________________\n2. One community problem I am curious about: _________________________________\n3. One person or group I may need to listen to before acting: _________________________________\n4. One skill I want to practise during the community project: _________________________________\n5. One way I will know I am contributing value rather than assuming what people need: _________________________________"},
          {kind:"text",type:"reflection",text:"You do not need to know the final answer before Term 3 begins. You need evidence that you can observe, ask, plan, act, review and adjust. That is what the last two terms have been building."},
        ],
      },
    ],
    textReplacements: [
      {from:"Understand the subject choice implications for Grade 10 — and make a first Path Forward declaration.",to:"Identify how your habits, self-management and execution skills will support your community-enterprise work in Form 2 Term 3."},
      {from:"Compile your complete Term 3 Portfolio.",to:"Compile your complete Form 2 Term 2 portfolio."},
      {from:"Lesson 35: Habits and identity. The phone loop. The vote. Lesson 36: Tiny habits. Themba's story. The R5 that was not about the R5. Lesson 37: SMART+ goals. Emotional connection. Accountability. Lesson 38: Time management. Sipho's four hours on his phone. Lesson 39: Procrastination. The five-minute rule. Action before motivation. Lesson 40: Resilience. The bike that broke again. Internal strength plus external resources. Lesson 41: Grit. Lethabo's sixty clocks. Deciding, over and over, not to quit. Lesson 42: Failure as tuition. Sipho's R50 education. Extract the lesson. Lesson 43-44: Growth mindset. The word \"yet.\" The operating system upgrade. Lesson 45: Self-discipline. The phone in the kitchen. Environment over willpower. Lesson 46: Decision making. Lethabo's fork. Always find the third option. Lesson 47: Peer pressure. Saying no. Paying the cost. Lesson 48: Digital habits. Thabo's R80. Painless spending. Lesson 49: Online safety. Atlehang's near-click. The pause that saves. Lesson 50-53: Her 21-day tracker. The ticks. The crosses. The mirror.",to:"Lesson 35: Habits and identity. The phone loop. The vote. Lesson 36: Tiny habits. Themba's small daily saving example. Lesson 37: SMART+ goals. Emotional connection. Accountability. Lesson 38: Time management. Sipho's four hours on his phone. Lesson 39: Procrastination. The five-minute rule. Action before motivation. Lesson 40: Resilience. The bike that broke again. Internal strength plus external resources. Lesson 41: Grit. Lethabo's sixty clocks. Deciding, over and over, not to quit. Lesson 42: Failure as a small calculated test. Extract the lesson. Lesson 43-44: Growth mindset. The word \"yet.\" The operating system upgrade. Lesson 45: Self-discipline. Environment over willpower. Lesson 46: Decision making. Lethabo's fork. Look for additional options. Lesson 47: Peer pressure. Saying no. Paying the cost. Lesson 48: Digital habits. Thabo's US$8 of unnoticed spending. Lesson 49: Online safety. Atlehang's near-click. The pause that protects. Lesson 50-53: The 21-day tracker. The ticks. The crosses. The mirror."},
      {from:"You finished Term 3 of Grade 9.",to:"You finished Form 2 Term 2."},
      {from:"Keep going. Term 4 awaits — the final term. The final project. The fork in the road. Everything you have built is about to come together.",to:"Keep going. Form 2 Term 3 awaits — the community-enterprise project, final portfolio and the chance to apply everything you have built."},
      {from:"Understand the subject choice implications for Grade 10 — and make a preliminary Path Forward declaration.",to:"Identify how your habits, self-management and execution skills will support your community-enterprise work in Term 3."},
      {from:"📘 What We Learned This Term",to:"📘 What We Learned in Form 2 Term 2"},
      {from:"35-36 Habits, identity, tiny habits",to:"35-36 Habits, identity and tiny habits"},
      {from:"37-38 SMART+ goals, time management",to:"37-38 SMART+ goals and time management"},
      {from:"39-40 Procrastination, resilience",to:"39-40 Procrastination and resilience"},
      {from:"41-42 Grit, learning from failure",to:"41-42 Grit and learning from failure"},
      {from:"43-44 Growth mindset",to:"43-44 Growth mindset"},
      {from:"45-46 Self-discipline, decision making",to:"45-46 Self-discipline and decision making"},
      {from:"47-49 Peer pressure, digital habits, online safety",to:"47-49 Peer pressure, digital habits and online safety"},
      {from:"50-53 Habit Transformation Project",to:"50-53 Habit Transformation Project"},
      {from:"54 Term reflection and Path Forward",to:"54 Term reflection and Term 3 readiness"},
      {from:"📘 Myah's Final Term 3 Entry",to:"📘 Myah's Form 2 Term 2 Review"},
      {from:"I am ready for Term 4.",to:"I am ready for Term 3."},
      {from:"✍️ Activity 54: My Term 3 Reflection — With Scale",to:"✍️ Activity 54: My Form 2 Term 2 Reflection — With Scale"},
      {from:"The ONE thing I need to do in Term 4 to move up by a single point:",to:"The ONE thing I need to do in Term 3 to move up by a single point:"},
      {from:"Lesson 54 — Term 3 Final Reflection",to:"Lesson 54 — Form 2 Term 2 Final Reflection"},
      {from:"I reflected on my entire Term 3 journey and made a preliminary Path Forward declaration.",to:"I reflected on my Form 2 Term 2 journey and prepared for Term 3 community-enterprise work."},
      {from:"I have compiled my complete Term 3 Portfolio.",to:"I have compiled my complete Form 2 Term 2 portfolio."},
      {from:"I have made a preliminary Path Forward declaration.",to:"I have made a Term 3 readiness plan."},
    ],
  },
  "g9-t4-l55-045": {
    title: "LOOKING BACK — WHAT WE HAVE LEARNED SO FAR",
    tableReplacements: [
      {
        cellIncludes:"Work and Value",
        rows:[
          ["Term","Theme","What We Learned"],
          ["Term 1","Enterprise, Money & Community","Values, enterprise, skills, customers, pricing, household economics and the completed Community Money Map"],
          ["Term 2","Habits, Agency & Execution","Habits, goals, time, resilience, decision making, digital habits and the completed Habit Transformation project"],
          ["Term 3","Community Enterprise & Portfolio","Ahead: apply what you know to a real community need and build evidence through action"],
        ],
      },
    ],
    textReplacements: [
      {from:"Key idea: You did not learn these things in isolation. Each term built on the last. Term 1 gave you the lens of values and enterprise — and the hard lesson that the system does not always reward rule-followers. Term 2 gave you the lens of money flows and community — learning to trace where money comes from and where it goes. Term 3 gave you the lens of habits and mindset — learning that you can change, one small action at a time. Now, in Term 4, you will combine all three lenses. You will use your values to choose a project that matters. You will use your understanding of money flows to design something sustainable. You will use your habit skills to execute consistently. This is the compound effect of learning.",to:"Key idea: You did not learn these things in isolation. Form 2 Term 1 built the lenses of enterprise, money and community. Term 2 built the lenses of habits, resilience and execution. Now, in Term 3, you will combine them in a community-enterprise project: choose a real need, design responsibly, manage resources and execute consistently. This is the compound effect of learning."},
      {from:"Here’s the tension: knowing is not the same as doing. You could know everything in these notebooks and still do nothing with it. Knowledge without action is entertainment. Agency requires movement. Term 4 is not about learning new concepts. It is about proving — to yourself — that the concepts have become part of you. Can you take what you know and build something real? Can you face obstacles and adapt? Can you complete something that matters? The notebooks will not answer these questions. Only your actions will.",to:"Here’s the tension: knowing is not the same as doing. You could know everything in these notebooks and still avoid action. Form 2 Term 3 is where you test whether the concepts can survive contact with reality. Can you use what you know to build something useful? Can you face obstacles, adapt and complete what you started? Your actions will create the evidence."},
      {from:"Your Next Step: What is ONE thing you learned this year that you have NOT yet acted on? What would it take to act on it in Term 4? Name the action. Name the obstacle. Name your plan for when the obstacle appears.",to:"Your Next Step: What is ONE thing you learned this year that you have not yet acted on? What would it take to act on it in Form 2 Term 3? Name the action, the likely obstacle and your plan for when the obstacle appears."},
      {from:"Question 2: What is one thing you learned this year that you have NOT yet put into practice? What has stopped you? What will you do about it in Term 4?",to:"Question 2: What is one thing you learned this year that you have not yet put into practice? What has stopped you? What will you do about it in Form 2 Term 3?"},
      {from:"If you cannot share with anyone: Read your Year in Review out loud to yourself. Let your own voice witness your growth. Write one sentence of acknowledgment to the person who started Grade 9 in January.",to:"If you cannot share with anyone: Read your Year in Review out loud to yourself. Let your own voice witness your growth. Write one sentence of acknowledgment to the person who started Form 2."},
      {from:"Recall key learning from Terms 1–3.",to:"Recall key learning from Forms 2 Terms 1–2."},
      {from:"Prepare for your final capstone project.",to:"Prepare for your Form 2 Term 3 community-enterprise project."},
      {from:"Myah is at Mama Rose's kitchen, three notebooks spread before her. Term 1. Term 2. Term 3. Evidence of a year.",to:"Myah is at Mama Rose's kitchen with two term portfolios spread before her. Term 1. Term 2. Evidence of how much Form 2 already contains."},
      {from:"Term 1: Values. Mama Rose. Skills inventory. Her first mini-business — selling water at the taxi rank. The betrayal at the grant office. The choice to start anyway. The cooler box. R84 profit in one week. \"I learned that I do not need permission to create value.\"",to:"Term 1, enterprise foundations: values, skills, customers, pricing and a first small business test. She learned to create value, gather evidence and act without waiting for perfect conditions."},
      {from:"Term 2: Where money comes from. Supply chains. Value chains. Her Community Money Map of the taxi rank. The leaks. Mr. Patel's honesty. \"Every rand has a story. Most of the money leaves my community. I cannot un-see it.\"",to:"Term 1, money and community: household flows, supply chains, value chains and the completed Community Money Map. She learned to see how money and value move through systems around her."},
      {from:"Term 3: Habits. Growth mindset. Grit. Resilience. Procrastination. Self-discipline. Environment design. Her 21-day phone challenge. Fourteen ticks. Seven crosses. The meta-habit. \"I can change. Not because someone told me. Because I have evidence.\"",to:"Term 2: habits, growth mindset, resilience, decision making, digital habits and the completed 21-day Habit Transformation project. She learned that behaviour can be reviewed and redesigned with evidence."},
      {from:"Term 1 (Values and Enterprise):",to:"Term 1 (Work, value and how money moves):"},
      {from:"Term 2 (Money Flows and Community):",to:"Term 2 (Habits, agency and execution):"},
      {from:"Term 3 (Habits and Mindset):",to:"Term 3 readiness — what I want to carry into community enterprise:"},
      {from:"That gap is not failure. It is your starting point for Term 4.",to:"That gap is not failure. It is useful information for Term 3."},
      {from:"How I might address it in Term 4:",to:"How I might address it in Term 3:"},
    ],
  },
  "g9-t4-l56-046": {
    textReplacements: [
      {from:"Ms. Daniels meets Myah at the taxi rank. The same bench. The same flows of money Myah mapped in Term 2. Everything looks different when you have learned to see.",to:"Ms. Daniels meets Myah at the kombi rank. The same bench. The same flows of money Myah mapped in Form 2 Term 1. Everything looks different when you have learned to see."},
      {from:"\"Two: What you are good at. Your talents. The skills you have built — in Grade 8, in Grade 9, in your life.\"",to:"\"Two: What you are good at. Your talents. The skills you have built — in Form 1, in Form 2, and in your life.\""},
      {from:"What she cares about: Her mother. The elders at the taxi rank. Justice. Fairness. People who are invisible to the system. Young people who need to understand money the way she learned to understand it.",to:"What she cares about: Her mother. The elders around the kombi rank and neighbourhood. Justice. Fairness. People who are easy for systems to overlook. Young people who need practical ways to understand money and agency."},
      {from:"What her community needs: The taxi rank is a river of money, but most of it leaks. Elders need help with parcels — and they need company. Young people need to learn what she has learned.",to:"What her community needs: The kombi rank connects many money and value flows. Elders may need help with parcels — and sometimes company. Younger learners may benefit from practical financial capability."},
      {from:"She writes in her notebook: A financial literacy workshop for younger students? Something that teaches them what I wish I had known in Grade 8? A project that combines everything I have learned and everything I can do?",to:"She writes in her notebook: A financial capability workshop for younger learners? Something that teaches what I wish I had practised earlier in Form 1? A project that combines what I have learned with what I can actually do?"},
    ],
  },
  "g9-t4-l57-047": {
    tableTextReplacements: [
      {from:"Spaza shop",to:"Tuckshop"},
      {from:"Stokvel",to:"Mukando / savings group"},
      {from:"stokvel",to:"mukando / savings group"},
    ],
  },
  "g9-t4-l58-048": {
    title:"PROJECT LAUNCH — MY COMMUNITY ENTERPRISE PROJECT",
    textReplacements: [
      {from:"Ms. Daniels gathers everyone at the community hall. The end of the year is close. This is the final project of Grade 9. The room feels different — charged with something between excitement and gravity.",to:"Ms. Daniels gathers everyone at the community hall. The end of Form 2 is getting closer. This is the final applied project of the year. The room feels different — charged with something between excitement and gravity."},
      {from:"\"This is it. Your Grade 9 final project. You will design and complete a project that demonstrates everything you have learned. Identity. Resources. Habits. Enterprise. Community. Resilience. Everything.\"",to:"\"This is it. Your Form 2 final applied project. You will design and complete a project that brings together what you have learned: identity, resources, habits, enterprise, community, resilience and evidence.\""},
      {from:"OPTION B: IMPROVE SOMETHING EXISTING Help an existing community effort grow or improve. Partner with a stokvel, a kitchen, a crèche, a local business. Add value to something already working. Best for learners who prefer collaboration.",to:"OPTION B: IMPROVE SOMETHING EXISTING Help an existing community effort grow or improve. Partner with a mukando or savings group, a kitchen, an early childhood centre, a local business or another community effort. Add value to something already working. Best for learners who prefer collaboration."},
      {from:"\"This is not about leaving school. This is about proving your agency. It is for anyone — whether you are heading to Grade 10 or not — who wants to know: can I create value from nothing but my own skills, attention, and effort?\"",to:"\"This is not about leaving school. Form 3 comes next. This project is about proving your agency now: can you use your skills, attention, relationships and effort to create useful value while continuing your education?\""},
      {from:"(For Option D, the \"Impact\" is measured in rands earned, customers served, and skills proven.)",to:"(For Option D, impact may include money earned in a clearly labelled currency, customers served, skills demonstrated and evidence of repeat demand.)"},
      {from:"My Survival Asset: What is the ONE skill or resource I have right now that could generate R20 by tomorrow? _________________________________",to:"My Survival Asset: What is ONE skill or resource I have right now that could create the equivalent of US$2 in useful value by tomorrow — without risking essential money or safety? _________________________________"},
      {from:"The 50% Rule: If I make R50, I will spend R___ on myself/family and R___ on buying more supplies/tools.",to:"My Seed-Capital Rule: If I earn US$5 in this example, how much must I protect to replace stock or maintain tools before I spend the rest? US$_____ protected; US$_____ available for other needs."},
    ],
    tableReplacements: [
      {
        cellIncludes:"The First Rand",
        rows:[
          ["Step","Question","Action"],
          ["1. The Asset Audit","What do I already own or control?","List your hands, skills, tools, space, relationships and knowledge."],
          ["2. The Immediate Need","What specific problem can I solve today?","Choose a real, observable need — not a giant problem you cannot test."],
          ["3. The Zero-Cost Prototype","How can I test before spending money?","Offer the service to one person for feedback; borrow appropriate tools; use what you already have."],
          ["4. The First Sale","What is the smallest unit of useful value someone may pay for?","One item, one tutoring session, one delivery, one simple service or another small test."],
          ["5. The Survival Loop","How do I protect tomorrow's ability to operate?","Replace stock and protect essential seed capital before treating the rest as spendable."],
        ],
      },
    ],
  },
  "g9-t4-l59-049": {
    textReplacements: [
      {from:"\"I would be your first customer. And I know three other ladies on this street who would be second, third, and fourth. Mrs. Dube cannot walk to the clinic alone. Mrs. Moloi's daughter moved to Cape Town — she has no one for shopping. Mrs. September is nearly blind — she needs someone to read her letters and her bills.\"",to:"\"I would be your first customer. And I know three other ladies on this street who would be second, third and fourth. Mrs. Dube cannot walk to the clinic alone. Mrs. Moloi's daughter moved to Bulawayo — she has no one nearby for shopping. Mrs. September has poor eyesight — she sometimes needs help reading letters and bills.\""},
    ],
  },
  "g9-t4-l60-050": {
    textReplacements: [
      {from:"Thabo is at Emmanuel's spaza shop, a blank page before him. He chose Option B — Improve Something Existing. He will expand his delivery service to include the visit component Myah identified — not just dropping parcels, but staying for ten minutes. Talking. Noticing if something is wrong.",to:"Thabo is at Emmanuel's tuckshop, a blank page before him. He chose Option B — Improve Something Existing. He will expand his delivery service to include the visit component Myah identified — not just dropping parcels, but staying for ten minutes. Talking. Noticing if something seems wrong."},
      {from:"Project: Elder Delivery and Visit Service (Expanded) Need: Elders in my route need parcels delivered AND someone to check on them. Solution: Weekly deliveries plus a 10-minute wellness check. R20 per delivery — R5 more than before, because the visit adds value. Free for those who genuinely cannot pay. Beneficiaries: Mrs. Nkosi, Mrs. Dube, Mrs. Moloi, Mrs. September. Start with four. Grow slowly. Resources needed: My bike (already have). Airtime for communication. A simple checklist for each visit — medication taken? Food in the house? Anything broken? Anyone to contact? Who can help: Myah (partnering on visits). Mr. Daniels (bike repairs). Emmanuel (discounted supplies for elders). Steps:",to:"Project: Elder Delivery and Visit Service (Expanded) Need: Elders on my route need parcels delivered and some would value a brief check-in. Solution: Weekly deliveries plus a 10-minute visit. Illustrative price: US$2 per delivery — US$0.50 more than the earlier delivery-only service because the visit adds time and value. Where someone genuinely cannot pay, the team can decide whether sponsorship or a no-fee visit is sustainable. Beneficiaries: Mrs. Nkosi, Mrs. Dube, Mrs. Moloi, Mrs. September. Start with four. Grow slowly. Resources needed: My bike, airtime for communication and a simple visit checklist. The checklist is not medical diagnosis; it is basic observation: Is there an urgent practical need? Is there someone the elder wants contacted? Who can help: Myah, Mr. Daniels for bike repairs and Emmanuel for local supplies. Steps:"},
    ],
  },
  "g9-t4-l61-051": {
    textReplacements: [
      {from:"\"We do not have R205.\"",to:"\"We do not have US$20.50.\""},
      {from:"They decide to print five copies first. Cost: R68. They will take pre-orders — ask five families to pay R30 each before the books are made. If all five say yes, the project funds itself. If only three say yes, they print three copies. No debt. No risk.",to:"They decide to print five copies first. Illustrative cost: US$6.80. They will take pre-orders — ask five families to pay US$3 each before the books are made. If all five say yes, the first print run is funded. If only three say yes, they print three copies. No borrowing for an untested demand forecast."},
      {from:"Key idea: You do not need a lot of money to start something that matters. You need a plan, a clear ask, and the willingness to start with what you have. Atlehang's cookbook started with R205 — and she did not have it. But she found a way: pre-orders, smaller print run, no debt. The money you do not have is not a reason to stop. It is a problem to solve — and you have been solving problems all year. A budget is not a restriction. It is a map. It shows you where your resources need to go.",to:"Key idea: You do not always need a large budget to start something that matters. You need a plan, a clear ask and evidence. Atlehang's illustrative cookbook budget was US$20.50 — and she did not have it. She reduced the first print run and used pre-orders to test demand before spending. A budget is not only a restriction. It is a map of what the project requires and where the risks are."},
      {from:"Here’s the tension: a budget is also a mirror. It shows you what you truly value — not what you SAY you value, but what you are willing to spend money on. If your budget has R50 for printing but R0 for thanking the people who helped you, what does that say? If your budget assumes someone else will cover the gap, what is your plan if they say no? And here is the hardest truth: some projects should not happen — yet. If the budget requires money you do not have and cannot raise ethically, the most agentic choice might be to wait. To save. To build toward it. Not every idea must be executed NOW. Some ideas need time to become possible. Knowing which is which is wisdom.",to:"Here’s the tension: a budget is also a mirror. It shows priorities and assumptions. If your budget allocates US$5 to printing but nothing to an essential project cost, what does that reveal? If you assume someone else will cover the gap, what happens if they say no? Some projects should not happen yet. If the project requires money you do not have and cannot raise ethically, the responsible choice may be to redesign, save, build partnerships or wait. Not every idea must be executed immediately."},
    ],
    tableReplacements: [
      {
        cellIncludes:"Paper for printing",
        rows:[
          ["Item","Illustrative Cost"],
          ["Paper for printing (15 copies, 20 pages each)","US$9.00"],
          ["Cardboard for covers","US$3.00"],
          ["Binding (staples and glue)","US$2.50"],
          ["Photocopying","US$6.00"],
          ["Total","US$20.50"],
        ],
      },
    ],
    tableTextReplacements: [
      {from:"Taxis to get supplies, visit people",to:"Kombis or other transport to get supplies and visit people"},
    ],
  },
  "g9-t4-l62-052": {
    textReplacements: [
      {from:"He sits at Emmanuel's spaza shop with a list: Who can help?",to:"He sits at Emmanuel's tuckshop with a list: Who can help?"},
    ],
    tableTextReplacements: [
      {from:"Spaza shop owners",to:"Tuckshop owners"},
      {from:"stokvels",to:"mukando / savings groups"},
    ],
  },
  "g9-t4-l63-053": {
    textReplacements: [
      {from:"She hands over the parcel. Stays. They talk. Mrs. Nkosi tells her about her garden, about the clinic appointment next week, about the letter from her daughter in Johannesburg that she has not been able to read because her glasses broke. Myah reads the letter aloud. It is full of love and worry and promises to visit soon. Mrs. Nkosi's eyes fill with tears.",to:"She hands over the parcel. Stays. They talk. Mrs. Nkosi tells her about her garden, about the clinic appointment next week, about a letter from her daughter in Gweru that she has not been able to read because her glasses broke. With permission, Myah reads the letter aloud. It is full of love, worry and promises to visit soon. Mrs. Nkosi's eyes fill with tears."},
    ],
  },
  "g9-t4-l66-056": {
    textReplacements: [
      {from:"Here’s the tension: completion also brings a strange emptiness. You have been working toward this. And now it is done. What now? The answer: you carry it with you. The evidence does not disappear when the project ends. It becomes part of your portfolio — and part of your identity. You are now someone who has completed a final project in Grade 9. No one can take that from you. But do not rest on it too long. Completion opens the door to the next thing. Be proud. Then be ready.",to:"Here’s the tension: completion can bring a strange emptiness. You have been working toward this, and now it is done. The evidence does not disappear when the project ends. It becomes part of your portfolio and part of what you know you can do. You are now someone who has completed a substantial Form 2 community project. Be proud of the evidence, then carry the learning forward into Form 3."},
    ],
  },
  "g9-t4-l69-059": {
    textReplacements: [
      {from:"Sipho presents — his High-Agency Challenge. He chose Option D. \"I fixed appliances. Kettles. Radios. I started with zero capital — just my hands and what I knew. My first customer paid me R30 to fix a radio. I used R15 for food and R15 for a screwdriver set. Now I have tools. I have regular customers. I proved to myself that I can create value from nothing — and that is a kind of freedom no one can take from me.\"",to:"Sipho presents — his High-Agency Challenge. He chose Option D. \"I fixed simple items I knew how to handle safely. My first customer paid me US$3 in this illustrative example. I used part for a household need and put part into a tool fund. Now I have better tools and repeat customers. I proved that practical skill can create value when I use it responsibly.\""},
    ],
  },
  "g9-t4-l70-060": {
    textReplacements: [
      {from:"\"I started Grade 9 waiting for a grant committee to say yes. I followed every rule. I did everything right. And I got silence. So I stopped waiting. I borrowed a cooler box. I sold water. I mapped money flows. I tracked my habits. And this term, I started visiting elders — not just delivering parcels, but staying. Talking. Reading letters. Being present.\"",to:"\"I started Form 2 waiting for a committee to say yes. I followed every rule and got silence. So I stopped treating permission as the only path. I borrowed a cooler box. I tested selling water. I mapped money flows. I tracked my habits. And this term, I worked with elders — not just delivering parcels, but staying, talking and being present.\""},
      {from:"\"I am not the same person who started Grade 8. I am not even the same person who started this term. I know what I value. I know how money moves. I know that I can change — because I have evidence. And I know that I do not need anyone's permission to create value. I just need to see a need and move toward it.\"",to:"\"I am not the same person who started Form 1. I am not even the same person who started this term. I know what I value. I know more about how money moves. I know I can change because I have evidence. And I know that when I see a real need, I can test a responsible way to move toward it.\""},
      {from:"\"Some of you will go on to Grade 10. Some of you will take a different path. Both paths require the same thing: seeing a need and moving toward it. Both paths have dignity. The only shame is standing at the fork and refusing to walk. Do not refuse to walk. Walk. Whatever path you choose, walk it with the same attention, the same persistence, the same agency you have shown this year.\"",to:"\"Form 3 comes next. Your interests may differ — academic, practical, technical, creative, entrepreneurial — and your responsibilities outside school may differ too. What you carry forward is the same discipline: notice carefully, learn, act responsibly, review evidence and keep building capability.\""},
      {from:"Question 1: What did you learn from someone else's project that you will carry with you? How do you feel now that your Grade 9 journey is nearly complete?",to:"Question 1: What did you learn from someone else's project that you will carry with you? How do you feel now that your Form 2 journey is nearly complete?"},
    ],
  },
  "g9-t4-l71-061": {
    textReplacements: [
      {from:"What is ONE thing from this project that you will carry with you into Grade 10 and beyond — not the project itself, but the capacity, the insight, the evidence of who you became through doing it?",to:"What is ONE thing from this project that you will carry with you into Form 3 and beyond — not the project itself, but the capability, insight or evidence you built through doing it?"},
    ],
  },
  "g9-t4-l72-062": {
    textReplacements: [
      {from:"What is ONE thing your community could do together — a cooperative, a stokvel, a shared resource, a regular event — that no individual could do alone?",to:"What is ONE thing your community could do together — a cooperative, a mukando or savings group, a shared resource, a regular event — that no individual could do alone?"},
    ],
  },
  "g9-t4-l73-063": {
    title:"FORM 3 DIRECTION — WHAT WILL I STRENGTHEN NEXT?",
    rangeReplacements: [
      {
        startIncludes:"Understand the subject choice implications for Grade 10 — and the alternatives.",
        endIncludes:"What is my plan for the first month after Grade 9? _________________________________",
        replacement:[
          {kind:"text",type:"paragraph",text:"Use your Form 2 evidence to choose what you want to strengthen next. Form 3 is the next stage of your secondary-school journey. You do not need to decide your entire future now."},
          {kind:"text",type:"paragraph",text:"Different learners will have different interests and responsibilities. Some will lean toward academic subjects, some toward technical or practical skills, some toward enterprise, and many will combine these. The useful question is not 'Which label am I?' It is 'Which capabilities and learning areas do I need to strengthen next, and what evidence will show that I did?'"},
          {kind:"text",type:"activity",text:"✍️ Activity 73: My Form 3 Direction Plan\n\n1. One capability I want to strengthen in Form 3: _________________________________\n2. One school subject or learning area I need to take more seriously: _________________________________\n3. One practical skill or project I want to continue outside ordinary classwork: _________________________________\n4. One person I can ask for guidance or feedback: _________________________________\n5. By the end of Form 3 Term 1, the evidence I want to have is: _________________________________"},
          {kind:"text",type:"reflection",text:"A direction plan should keep doors open while giving you something concrete to practise. It can change when new evidence appears. Changing a plan after learning is not failure; it is informed adjustment."},
        ],
      },
    ],
    textReplacements: [
      {from:"| Date | | | Lesson | Lesson 73 — Path Forward | | Experiment/Observation | I evaluated my options after Grade 9 and made a Path Forward declaration. | | Result | My path: | | Learning | | | Next Action | |",to:"| Date | | | Lesson | Lesson 73 — Form 3 Direction | | Experiment/Observation | I reviewed my Form 2 evidence and built a Form 3 direction plan. | | Result | Capability I will strengthen: | | Learning | | | Next Action | First evidence I will create: | |"},
    ],
  },
  "g9-t4-l74-064": {
    title:"FORM 2 PORTFOLIO & LETTER TO FUTURE SELF",
    rangeReplacements: [
      {
        startIncludes:"Term 1: ☐ Strategic Audit",
        endIncludes:"Term 4: ☐ Year in Review",
        replacement:[
          {kind:"text",type:"section",text:"Form 2 Term 1 — Enterprise, Money & Community"},
          {kind:"text",type:"paragraph",text:"☐ Strategic Audit and Values work (Lessons 1–2)\n☐ Work, enterprise, skills, customers and pricing evidence (Lessons 3–15)\n☐ Enterprise Foundations checkpoint (Lesson 16)\n☐ Money-flow, household, supply-chain and value-chain evidence (Lessons 17–22)\n☐ Community Money Map project, presentation and action plan (Lessons 23–31)\n☐ Term 1 learning journey, reflection and future-self letter (Lessons 32–34)"},
          {kind:"text",type:"section",text:"Form 2 Term 2 — Habits, Agency & Execution"},
          {kind:"text",type:"paragraph",text:"☐ Habit identity, tiny habits, goals and time evidence (Lessons 35–38)\n☐ Procrastination, resilience, grit and learning-from-failure evidence (Lessons 39–42)\n☐ Growth mindset, self-discipline, decisions, peer pressure and digital safety evidence (Lessons 43–49)\n☐ Completed 21-day Habit Transformation project and reflection (Lessons 50–54)"},
          {kind:"text",type:"section",text:"Form 2 Term 3 — Community Enterprise & Portfolio"},
          {kind:"text",type:"paragraph",text:"☐ Year-so-far review and community-project idea (Lessons 55–57)\n☐ Community project launch, needs assessment, design, budget and partnerships (Lessons 58–62)\n☐ Execution, midpoint review, problem solving and completion (Lessons 63–66)\n☐ Storytelling, presentation and audience evidence (Lessons 67–70)\n☐ Project reflection, community synthesis and Form 3 direction plan (Lessons 71–73)\n☐ Final Form 2 portfolio and future-self letter (Lesson 74)"},
        ],
      },
    ],
    textReplacements: [
      {from:"Organize your complete Grade 9 portfolio — four terms of evidence.",to:"Organize your complete Form 2 portfolio — three terms of evidence."},
      {from:"📘 Your Complete Grade 9 Portfolio",to:"📘 Your Complete Form 2 Portfolio"},
      {from:"Go through the checklist above. Check off everything you have. Find anything that is missing. Your portfolio is the story of your Grade 9 journey. Make it as complete as you can.",to:"Go through the checklist above. Check off everything you have and find anything that is missing. Your portfolio is the evidence story of your Form 2 journey. Make it as complete and honest as you can."},
      {from:"Write a letter to yourself. Address it to \"Future Me.\" You will read this at the end of Grade 10 — or whenever you need to remember who you were and how far you have come.",to:"Write a letter to yourself. Address it to \"Future Me.\" Read it at the end of Form 3 — or whenever you need to remember who you were and how far you have come."},
      {from:"From me, in Grade 9 Date: _____________________",to:"From me, in Form 2 Date: _____________________"},
      {from:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Grade 10 — or whenever you need to remember.",to:"📂 Portfolio: Keep this letter somewhere safe. Read it at the end of Form 3 — or whenever you need to remember."},
      {from:"Your Next Step: What is the most important thing you want your future self to remember about who you were in Grade 9? Write it clearly. The future is coming. Your future self is waiting.",to:"Your Next Step: What is the most important thing you want your future self to remember about who you were in Form 2? Write it clearly. Form 3 is coming. Your future self is waiting."},
      {from:"| Date | | | Lesson | Lesson 74 — Final Portfolio and Letter | | Experiment/Observation | I compiled my complete Grade 9 portfolio and wrote my final letter to my future self. | | Result | | | Learning | | | Next Action | Carry everything forward. |",to:"| Date | | | Lesson | Lesson 74 — Form 2 Portfolio and Letter | | Experiment/Observation | I compiled my complete Form 2 portfolio and wrote my final letter to my future self. | | Result | | | Learning | | | Next Action | Carry the evidence into Form 3. |"},
    ],
  },
  "g9-t4-l75-065": {
    title: "FAREWELL TO FORM 2",
    textReplacements: [
      {from:"\"You were the main character of this story — but you did not know it at the start. In Grade 8, you were the quiet observer. You noticed things. You asked questions. In Grade 9, you became the protagonist. You walked into the grant office. You borrowed a cooler box. You sold water. You mapped money flows. You tracked your habits. You built a visit service for elders. You chose your path.\"",to:"\"You were the main character of this story — but you did not know it at the start. In Form 1, you were the quiet observer. You noticed things. You asked questions. In Form 2, you became more active. You walked into the committee office. You borrowed a cooler box. You tested a small water business. You mapped money flows. You tracked your habits. You built a community project. You created evidence.\""},
      {from:"You finished Grade 9.",to:"You finished Form 2."},
      {from:"You are not the same person who started Grade 8. You are not even the same person who started this term.",to:"You are not the same person who started Form 1. You are not even the same person who started this term."},
      {from:"Say a final goodbye to Grade 9 — with gratitude, pride, and forward momentum.",to:"Say a final goodbye to Form 2 — with gratitude, pride, and forward momentum."},
      {from:"In Grade 8, you were the quiet observer. You noticed things. You asked questions. In Grade 9, you became the protagonist.",to:"In Form 1, you were the quiet observer. You noticed things. You asked questions. In Form 2, you became the protagonist."},
      {from:"You have evidence — four terms of it — that you can act on the world and create change.",to:"You have evidence — three terms of it — that you can act on the world and create change."},
      {from:"Lesson 75 — Farewell to Grade 9",to:"Lesson 75 — Farewell to Form 2"},
      {from:"I said my final goodbye to Grade 9 — with gratitude, pride, and forward momentum.",to:"I said my final goodbye to Form 2 — with gratitude, pride, and forward momentum."},
      {from:"I have said a final goodbye to Grade 9 — with gratitude, pride, and forward momentum.",to:"I have said a final goodbye to Form 2 — with gratitude, pride, and forward momentum."},
      {from:"However your family says goodbye — in English, isiZulu, isiXhosa, Afrikaans, Sepedi, Setswana, or any of the languages of this land — here is a wish for you:",to:"However your family says goodbye — in English, Shona, Ndebele, or any language spoken in your home and community — here is a wish for you:"},
      {from:"Hamba kahle. Go well. Tsamaya hantle.",to:"Go well. Carry what you learned. Keep becoming."},
    ],
  },
};

export const zimbabweReviewedNeutralUnitIds = [
  "g8-t1-l08-008",
  "g8-t1-l14-014",
  "g8-t2-l30-030",
  "g8-t3-l47-046",
  "g8-t3-l48-047",
  "g8-t4-l68-067",
  "g8-t4-l70-069",
  "g8-t4-l74-073",
  "g8-t4-l75-074",
] as const;

export const zimbabweReviewedNeutralForm2UnitIds = [
  "g9-t1-l02-002",
  "g9-t1-l06-006",
  "g9-t2-l30-031",
  "g9-t3-l38-027",
  "g9-t3-l39-028",
  "g9-t3-l43-032",
  "g9-t3-l44-033",
  "g9-t3-l45-034",
  "g9-t4-l64-054",
  "g9-t4-l65-055",
  "g9-t4-l67-057",
  "g9-t4-l68-058",
] as const;

const SOUTH_AFRICAN_LANGUAGE_HEADER=/^(?:\*\*)?(?:isiZulu|isiXhosa|Afrikaans|Sepedi|Setswana)(?:\*\*)?$/i;

function applyZimbabweStructuralDefaults(block:ContentBlock):ContentBlock{
  if(block.kind!=="table"||block.rows.length===0) return block;
  const header=block.rows[0];
  if(header.length<3) return block;
  const translationHeaders=header.slice(2);
  if(!translationHeaders.every(cell=>SOUTH_AFRICAN_LANGUAGE_HEADER.test(cell.trim()))) return block;
  return {...block,rows:block.rows.map(row=>row.slice(0,2))};
}

function applyReviewedTableTextReplacements(
  blocks:ContentBlock[],
  replacements:Array<{from:string;to:string;exact?:boolean}>=[],
):ContentBlock[]{
  if(!replacements.length) return blocks;
  return blocks.map(block=>{
    if(block.kind!=="table") return block;
    return {
      ...block,
      rows:block.rows.map(row=>row.map(cell=>{
        let value=cell;
        for(const replacement of replacements){
          if(replacement.exact){
            if(value===replacement.from) value=replacement.to;
          }else if(value.includes(replacement.from)){
            value=value.replaceAll(replacement.from,replacement.to);
          }
        }
        return value;
      })),
    };
  });
}

function applyReviewedTableReplacements(
  blocks:ContentBlock[],
  replacements:ZimbabweTableReplacement[]=[],
):ContentBlock[]{
  if(!replacements.length) return blocks;
  const matched=new Set<number>();
  const result=blocks.map(block=>{
    if(block.kind!=="table") return block;
    const flat=block.rows.flat();
    const index=replacements.findIndex(item=>flat.some(cell=>cell.includes(item.cellIncludes)));
    if(index<0) return block;
    matched.add(index);
    return {...block,rows:replacements[index].rows};
  });
  replacements.forEach((item,index)=>{
    if(!matched.has(index)) throw new Error(`Zimbabwe table override not found: ${item.cellIncludes}`);
  });
  return result;
}

function applyReviewedRangeReplacements(
  blocks:ContentBlock[],
  ranges:ZimbabweRangeReplacement[]=[],
):ContentBlock[]{
  let result=[...blocks];
  for(const range of ranges){
    const start=result.findIndex(block=>block.kind==="text"&&block.text.includes(range.startIncludes));
    if(start<0) throw new Error(`Zimbabwe range override start not found: ${range.startIncludes}`);
    const relativeEnd=result.slice(start).findIndex(
      block=>block.kind==="text"&&block.text.includes(range.endIncludes)
    );
    if(relativeEnd<0) throw new Error(`Zimbabwe range override end not found: ${range.endIncludes}`);
    const end=start+relativeEnd;
    result=[
      ...result.slice(0,start),
      ...range.replacement,
      ...result.slice(end+1),
    ];
  }
  return result;
}

function applyReviewedTextReplacements(
  blocks:ContentBlock[],
  replacements:Array<{from:string;to:string}>=[],
):ContentBlock[]{
  if(!replacements.length) return blocks;
  return blocks.map(block=>{
    if(block.kind!=="text") return block;
    let text=block.text;
    for(const replacement of replacements){
      if(text.includes(replacement.from)) text=text.replaceAll(replacement.from,replacement.to);
    }
    return {...block,text};
  });
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
    blocks:[
      ...applyReviewedTextReplacements(
        applyReviewedRangeReplacements(
          applyReviewedTableReplacements(
            applyReviewedTableTextReplacements(
              applyBlockOverrides(unit.blocks,override?.blocks),
              override?.tableTextReplacements,
            ),
            override?.tableReplacements,
          ),
          override?.rangeReplacements,
        ),
        override?.textReplacements,
      ),
      ...(override?.appendBlocks ?? []),
    ],
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
