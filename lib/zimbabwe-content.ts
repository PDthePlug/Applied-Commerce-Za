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
      {from:"This is the third-term capstone.",to:"This is the Form 2 Term 2 applied habit project."},
      {from:"Habit Stokvel",to:"Habit Mukando"},
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
          ["Term 1","Work, Value & How Money Moves","Values, enterprise, skills, customers, pricing, early money flows and household economics"],
          ["Term 2","Community Money, Habits & Execution","Community saving, money mapping, habits, resilience, decision making, digital habits and the completed Habit Transformation project"],
          ["Term 3","Community Enterprise & Portfolio","Ahead: apply what you know to a real community need and build evidence through action"],
        ],
      },
    ],
    textReplacements: [
      {from:"Recall key learning from Terms 1–3.",to:"Recall key learning from Forms 2 Terms 1–2."},
      {from:"Prepare for your final capstone project.",to:"Prepare for your Form 2 Term 3 community-enterprise project."},
      {from:"Myah is at Mama Rose's kitchen, three notebooks spread before her. Term 1. Term 2. Term 3. Evidence of a year.",to:"Myah is at Mama Rose's kitchen with two term portfolios spread before her. Term 1. Term 2. Evidence of how much Form 2 already contains."},
      {from:"Term 1: Values. Mama Rose. Skills inventory. Her first mini-business — selling water at the taxi rank. The betrayal at the grant office. The choice to start anyway. The cooler box. R84 profit in one week. \"I learned that I do not need permission to create value.\"",to:"Term 1: Values, enterprise, skills, customers, pricing and the first deep look at how money moves. She learned to create value, track evidence and ask better questions."},
      {from:"Term 2: Where money comes from. Supply chains. Value chains. Her Community Money Map of the taxi rank. The leaks. Mr. Patel's honesty. \"Every rand has a story. Most of the money leaves my community. I cannot un-see it.\"",to:"Term 2: Community saving, money flows, the Community Money Map, habits, resilience and execution. She learned to see systems around her and patterns inside herself."},
      {from:"Term 3: Habits. Growth mindset. Grit. Resilience. Procrastination. Self-discipline. Environment design. Her 21-day phone challenge. Fourteen ticks. Seven crosses. The meta-habit. \"I can change. Not because someone told me. Because I have evidence.\"",to:"Across both terms, the evidence has accumulated: enterprise action, money-flow data, a community map, a 21-day habit tracker and repeated proof that she can notice, act, review and adjust."},
      {from:"Term 1 (Values and Enterprise):",to:"Term 1 (Work, value and how money moves):"},
      {from:"Term 2 (Money Flows and Community):",to:"Term 2 (Community money, habits and execution):"},
      {from:"Term 3 (Habits and Mindset):",to:"Term 3 readiness — what I want to carry into community enterprise:"},
      {from:"That gap is not failure. It is your starting point for Term 4.",to:"That gap is not failure. It is useful information for Term 3."},
      {from:"How I might address it in Term 4:",to:"How I might address it in Term 3:"},
    ],
  },
  "g9-t4-l75-065": {
    title: "FAREWELL TO FORM 2",
    textReplacements: [
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
