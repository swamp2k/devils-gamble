const POT_LADDER = [100, 250, 500, 1000, 2500, 6666, 12000, 25000, 50000, 100000];

const personas = [
  { name: "Lucifer, Senior VP of Suffering", intro: "I value efficiency, elegance, and preventable misery.", weights: { cruel: 2.0, selfish: 1.2, chaos: .4, rational: 1.1, absurd: -.4, petty: .7, pizza: -.2, number666: 1.5 } },
  { name: "Kevin", intro: "I have no qualifications. This has never stopped me.", weights: { cruel: .4, selfish: .2, chaos: 2.3, rational: -.8, absurd: 2.4, petty: 1.7, pizza: 1.1, number666: .2 } },
  { name: "The Auditor", intro: "Emotion is an undocumented liability.", weights: { cruel: .2, selfish: .8, chaos: -1.7, rational: 2.8, absurd: -2, petty: -.5, pizza: -.2, number666: .5 } },
  { name: "Todd from Infernal Catering", intro: "Choose carefully. I have very strong opinions about lunch.", weights: { cruel: .6, selfish: .6, chaos: 1.1, rational: .1, absurd: 1.4, petty: 1.1, pizza: -2.8, number666: .8 } },
  { name: "The Old One", intro: "I was here before morals became fashionable.", weights: { cruel: 1.5, selfish: .7, chaos: 1.1, rational: .4, absurd: .5, petty: -.4, pizza: .1, number666: 2.2 } }
];

const questions = [
  { q: "You can save only one side. Who gets the miracle?", left: { text: "ONE LITTLE KID", traits: { rational: -.5, cruel: -.7 } }, right: { text: "THREE GRANDPARENTS", traits: { rational: 1.3, cruel: .2 } } },
  { q: "A button must be pressed. Which one?", left: { text: "666", traits: { number666: 2, rational: .2 } }, right: { text: "PINEAPPLE PIZZA", traits: { pizza: 2, absurd: .8 } } },
  { q: "One inconvenience becomes permanent.", left: { text: "WINDOWS UPDATE AT EVERY BOOT", traits: { cruel: 1.6, petty: 1.3, rational: -.4 } }, right: { text: "ONE LEGO UNDERFOOT EVERY MORNING", traits: { cruel: 1.3, petty: 1.7, absurd: 1 } } },
  { q: "Humanity receives one upgrade.", left: { text: "CURE EVERY DISEASE", traits: { rational: 2.3, cruel: -2 } }, right: { text: "DOGS CAN TALK", traits: { absurd: 1.8, chaos: 1.4, rational: -.3 } } },
  { q: "Which secret survives the apocalypse?", left: { text: "YOUR BROWSER HISTORY", traits: { cruel: 1.1, petty: 1.7, chaos: .8 } }, right: { text: "THE NUCLEAR LAUNCH CODES", traits: { rational: 2.1, chaos: -.6 } } },
  { q: "One thing is released into a quiet classroom.", left: { text: "A DUCK WITH A KNIFE", traits: { absurd: 2.4, chaos: 2.4 } }, right: { text: "THURSDAY", traits: { absurd: 3, chaos: .6, rational: -2 } } },
  { q: "Pick the more trustworthy machine.", left: { text: "A CASINO SLOT MACHINE", traits: { rational: .4, cruel: .5, selfish: .8 } }, right: { text: "THE SCHOOL PRINTER", traits: { chaos: 1.7, petty: 1.4, rational: -.8 } } },
  { q: "You may erase one thing from existence.", left: { text: "MOSQUITOES", traits: { rational: 2.1, cruel: -.4 } }, right: { text: "HOMEWORK DUE ON MONDAY", traits: { petty: 1.7, rational: 1.2, selfish: .8 } } },
  { q: "Choose the final boss of customer support.", left: { text: "A CHATBOT THAT SAYS 'I UNDERSTAND'", traits: { cruel: 1.3, petty: 1.5, absurd: .4 } }, right: { text: "HOLD MUSIC FOR 4 HOURS", traits: { cruel: 1.8, petty: 1, rational: -.3 } } },
  { q: "A billionaire loses one thing. What goes?", left: { text: "HALF THEIR MONEY", traits: { cruel: .6, rational: .8 } }, right: { text: "THE ABILITY TO SKIP YOUTUBE ADS", traits: { petty: 2.7, cruel: .8, absurd: 1.5 } } },
  { q: "Which warning label should be ignored?", left: { text: "DO NOT PRESS", traits: { chaos: 2.3, absurd: .9 } }, right: { text: "MAY CONTAIN REGRET", traits: { chaos: 1.2, absurd: 1.7, rational: -.2 } } },
  { q: "One thing is now legal money.", left: { text: "TEETH", traits: { cruel: 1.3, absurd: 2, chaos: 1.7 } }, right: { text: "COMPLIMENTS", traits: { rational: -.3, absurd: 1.1, cruel: -1 } } },
  { q: "Choose your eternal roommate.", left: { text: "SOMEONE WHO CHEWS LOUDLY", traits: { cruel: 1.1, petty: 2.4 } }, right: { text: "SOMEONE WHO SAYS 'ACTUALLY...'", traits: { cruel: .8, petty: 2.6, rational: .3 } } },
  { q: "Which thing should become conscious first?", left: { text: "THE SCHOOL WIFI", traits: { chaos: 2.3, cruel: .9, absurd: 1.8 } }, right: { text: "YOUR ALARM CLOCK", traits: { chaos: 1.3, petty: 1.5, rational: .1 } } },
  { q: "Your enemy receives one blessing.", left: { text: "PERFECT WIFI", traits: { cruel: -1, rational: 1.2 } }, right: { text: "PERFECT HAIR IN EVERY PHOTO", traits: { petty: .6, selfish: .4, absurd: .5 } } },
  { q: "Only one dessert survives.", left: { text: "CAKE", traits: { rational: .4, pizza: .1 } }, right: { text: "A SECOND, SMALLER CAKE", traits: { absurd: 1.3, selfish: .8 } } },
  { q: "The universe needs a new error sound.", left: { text: "A SCREAM", traits: { cruel: 1.5, chaos: 1.2, absurd: 1 } }, right: { text: "YOUR OWN VOICE SAYING 'WHOOPS'", traits: { cruel: .8, petty: 1.5, absurd: 2 } } },
  { q: "You may know one answer with absolute certainty.", left: { text: "WHAT HAPPENS AFTER DEATH", traits: { rational: 1.3, chaos: -.3 } }, right: { text: "WHO KEEPS MOVING YOUR CHARGER", traits: { petty: 2.5, selfish: .4, rational: .6 } } },
  { q: "One social crime becomes punishable by fire.", left: { text: "SPOILING THE ENDING", traits: { petty: 2.1, cruel: 1.2, rational: .8 } }, right: { text: "STOPPING IN A DOORWAY", traits: { petty: 2.3, cruel: 1.1, rational: 1.1 } } },
  { q: "Pick the safer investment.", left: { text: "MAGIC BEANS", traits: { absurd: 1.9, chaos: 1.5, rational: -1.4 } }, right: { text: "WHATEVER KEVIN RECOMMENDS", traits: { absurd: 2.2, chaos: 2.5, rational: -2 } } },
  { q: "One person gets immortality. Who?", left: { text: "THE WORLD'S BEST SURGEON", traits: { rational: 2.2, cruel: -1 } }, right: { text: "THE PERSON WHO INVENTED POP-UP ADS", traits: { cruel: 2.1, petty: 2.4, chaos: 1.1 } } },
  { q: "Pick the safer thing to hear behind you at 3 AM.", left: { text: "A CHILD LAUGHING", traits: { chaos: 1.5, cruel: .7 } }, right: { text: "'DON'T TURN AROUND'", traits: { cruel: 1.6, absurd: .6, chaos: 1.9 } } },
  { q: "You can delete one sentence from humanity.", left: { text: "CALM DOWN", traits: { petty: 2.1, cruel: .7 } }, right: { text: "IT'S JUST A GAME", traits: { petty: 2.4, cruel: .5, chaos: .4 } } },
  { q: "A stranger offers you one free upgrade.", left: { text: "+20 IQ", traits: { rational: 2.2, selfish: .7 } }, right: { text: "A TAIL", traits: { absurd: 2.4, chaos: 1.2 } } },
  { q: "You can save only one. Who gets out?", left: { text: "YOUR PET", traits: { selfish: 1.4, cruel: -.8, rational: -.5 } }, right: { text: "FIVE STRANGERS", traits: { rational: 2.2, cruel: .2 } } },
  { q: "There is one parachute left.", left: { text: "YOU TAKE IT", traits: { selfish: 2.4, rational: .6, cruel: .8 } }, right: { text: "YOUR BEST FRIEND TAKES IT", traits: { selfish: -1.4, cruel: -.8, rational: .2 } } },
  { q: "Your phone can keep one feature forever.", left: { text: "UNLIMITED BATTERY", traits: { rational: 2.2, selfish: .8 } }, right: { text: "PERFECT WIFI EVERYWHERE", traits: { rational: 1.8, chaos: -.5, selfish: 1 } } },
  { q: "Choose a completely useless superpower.", left: { text: "INVISIBLE ONLY WHEN NOBODY IS LOOKING", traits: { absurd: 2.6, chaos: .5, rational: -2 } }, right: { text: "FLY 30 CM ABOVE THE GROUND", traits: { absurd: 2.1, rational: -.7 } } },
  { q: "One sound follows you everywhere.", left: { text: "BOSS MUSIC", traits: { absurd: 1.8, chaos: 1.2, selfish: .8 } }, right: { text: "A LAUGH TRACK", traits: { cruel: .7, petty: 1.4, absurd: 1.5 } } },
  { q: "Your group chat gets one curse.", left: { text: "EVERY TYPO IS READ ALOUD", traits: { cruel: .8, petty: 1.8, absurd: 1.3 } }, right: { text: "EVERY VOICE NOTE IS 10 MINUTES", traits: { cruel: 1.3, petty: 2.1 } } },
  { q: "Pick your zombie-apocalypse teammate.", left: { text: "PRO GAMER WITH ZERO STAMINA", traits: { rational: .6, absurd: 1.1, chaos: .7 } }, right: { text: "ATHLETE WHO THINKS ZOMBIES ARE FAKE", traits: { rational: -.8, chaos: 1.8, absurd: 1.4 } } },
  { q: "One snack rule becomes law.", left: { text: "CHIPS ARE ALWAYS SLIGHTLY STALE", traits: { cruel: .8, petty: 1.8 } }, right: { text: "SODA IS ALWAYS LUKEWARM", traits: { cruel: .9, petty: 1.6 } } },
  { q: "Your alarm clock gets an upgrade.", left: { text: "IT RUNS AWAY FROM YOU", traits: { chaos: 2, absurd: 1.7 } }, right: { text: "IT CALLS YOUR PARENTS", traits: { cruel: 1.2, petty: 2, rational: .2 } } },
  { q: "You may ban one thing from games.", left: { text: "UNSKIPPABLE TUTORIALS", traits: { petty: 1.9, rational: 1.2 } }, right: { text: "TEAMMATES WHO BLAME LAG", traits: { petty: 2.5, cruel: .4 } } },
  { q: "You must wear one forever.", left: { text: "WET SOCKS", traits: { cruel: 1.8, petty: 1.4 } }, right: { text: "A TINY ITCHY HAT", traits: { cruel: 1.2, absurd: 1.5, petty: 1.5 } } },
  { q: "Pick the better magical pet.", left: { text: "TINY DRAGON THAT STEALS YOUR FOOD", traits: { chaos: 1.6, absurd: 1.8, cruel: .4 } }, right: { text: "GHOST THAT RATES YOUR OUTFIT", traits: { petty: 2.2, absurd: 1.6 } } },
  { q: "One secret appears on a giant screen.", left: { text: "YOUR LAST 20 SEARCHES", traits: { cruel: 1.4, petty: 1.2, chaos: .8 } }, right: { text: "YOUR MOST USED EMOJIS", traits: { absurd: 1.1, petty: .8 } } },
  { q: "Pick the safer time-machine destination.", left: { text: "DINOSAURS WITH 5% BATTERY", traits: { chaos: 2.2, rational: -1.5, absurd: 1.3 } }, right: { text: "YEAR 3000 WITH NO WIFI", traits: { petty: 1.8, rational: .7, absurd: .8 } } },
  { q: "You become famous overnight for one thing.", left: { text: "WORLD'S LONGEST SNEEZE", traits: { absurd: 2.2, petty: .4 } }, right: { text: "FALLING OFF A CHAIR ON CAMERA", traits: { cruel: .6, petty: 1.7, absurd: 1.5 } } },
  { q: "One person chooses the music forever.", left: { text: "YOUR YOUNGER SIBLING", traits: { chaos: 1.4, petty: 1.5 } }, right: { text: "YOUR PE TEACHER", traits: { cruel: .6, rational: .3, petty: 1.1 } } },
  { q: "Every lie now causes one effect.", left: { text: "YOUR NOSE HONKS", traits: { absurd: 1.8, petty: .8 } }, right: { text: "A RANDOM DUCK APPEARS", traits: { absurd: 2.7, chaos: 2.2 } } },
  { q: "You can make one food crime illegal.", left: { text: "RAISINS IN COOKIES", traits: { petty: 2, rational: .4 } }, right: { text: "PINEAPPLE ON PIZZA", traits: { pizza: 2.7, petty: 2.1 } } },
  { q: "A button saves one thing forever.", left: { text: "TEN RANDOM PEOPLE", traits: { rational: 2.4, cruel: -1.2 } }, right: { text: "EVERY MEME ON THE INTERNET", traits: { absurd: 2.2, chaos: 1.4, selfish: .5 } } },
  { q: "The final level gives one reward.", left: { text: "A GOLDEN TOILET", traits: { absurd: 2.3, selfish: .7 } }, right: { text: "ONE EXTRA HOUR OF SLEEP EVERY DAY", traits: { rational: 2, selfish: 1.1 } } }
];

const contraptions = [
  { id: "guillotine", label: "GUILLOTINE — recently serviced" },
  { id: "trapdoor", label: "TRAPDOOR — destination undisclosed" },
  { id: "lightning", label: "DIVINE-ISH LIGHTNING ROD" },
  { id: "blackhole", label: "POCKET BLACK HOLE — warranty void" },
  { id: "cannon", label: "HUMAN-ISH CANNON" },
  { id: "anvil", label: "ANVIL — gravity subscription active" },
  { id: "poison", label: "COMPLIMENTARY HOUSE BEVERAGE" },
  { id: "crossbow", label: "AUTOMATED PERFORMANCE REVIEW" }
];

const victimNames = [
  "Gary", "NPC #14", "Mildred", "Definitely Not The Main Character",
  "Phil", "Asset_Character_03", "Kevin's Cousin", "Some Guy",
  "Unit 07", "Dave, Apparently", "Player Three", "Steve (Unverified)"
];

const lines = {
  round: [
    "Choose. I'm almost certain this is legally binding.",
    "Two options. Regret is complimentary.",
    "I already know what I chose. That's the fun part.",
    "Think carefully. Or don't. I get paid either way.",
    "One of these is correct. Philosophically? No. For me? Yes."
  ],
  win: [
    "Correct. Disturbingly correct.",
    "You understand me. I dislike that.",
    "Fine. They live. Temporarily.",
    "A sensible answer. How disappointing.",
    "Exactly. Should I be worried about you?"
  ],
  lose: [
    "Wrong. Let's make this educational.",
    "An admirable answer. Unfortunately, I am not admirable.",
    "No. But the mechanism appreciates your confidence.",
    "You thought morality was relevant. Cute.",
    "House rules. House consequences."
  ],
  cash: [
    "Leaving already? Prudence is such an unattractive virtue.",
    "Take your chips. I know where you live. Metaphorically.",
    "Cashed out. Cowardice has excellent margins."
  ]
};

const state = {
  bank: 0,
  pot: 0,
  streak: 0,
  level: 0,
  persona: null,
  question: null,
  answer: null,
  contraption: null,
  locked: false,
  insured: false,
  usedQuestionIndexes: new Set()
};

const $ = (id) => document.getElementById(id);
const ui = {
  bank: $("bank"), pot: $("pot"), streak: $("streak"),
  dealerName: $("dealerName"), dealerLine: $("dealerLine"),
  leftCard: $("leftCard"), rightCard: $("rightCard"), leftText: $("leftText"), rightText: $("rightText"), questionText: $("questionText"),
  dangerStage: $("dangerStage"), contraption: $("contraption"), contraptionLabel: $("contraptionLabel"), victim: $("victim"), victimName: $("victimName"),
  verdict: $("verdict"), verdictTitle: $("verdictTitle"), verdictActions: $("verdictActions"),
  peekBtn: $("peekBtn"), rerollBtn: $("rerollBtn"), insuranceBtn: $("insuranceBtn"), newRunBtn: $("newRunBtn"), runHint: $("runHint")
};

function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
function scoreOption(option, persona) {
  let total = 0;
  for (const [trait, value] of Object.entries(option.traits || {})) total += value * (persona.weights[trait] || 0);
  return total + (Math.random() - .5) * .7;
}
function decide(question) {
  const left = scoreOption(question.left, state.persona);
  const right = scoreOption(question.right, state.persona);
  return left >= right ? "left" : "right";
}
function chooseQuestion() {
  if (state.usedQuestionIndexes.size >= questions.length - 1) state.usedQuestionIndexes.clear();
  let index;
  do index = Math.floor(Math.random() * questions.length); while (state.usedQuestionIndexes.has(index));
  state.usedQuestionIndexes.add(index);
  return questions[index];
}
function updateStats() {
  ui.bank.textContent = state.bank.toLocaleString();
  ui.pot.textContent = state.pot.toLocaleString();
  ui.streak.textContent = state.streak;
  ui.peekBtn.disabled = state.locked || state.bank < 250;
  ui.rerollBtn.disabled = state.locked || state.bank < 500;
  ui.insuranceBtn.disabled = state.locked || state.bank < 1000 || state.insured;
  ui.insuranceBtn.classList.toggle("active", state.insured);
}
function setDealerLine(text) {
  ui.dealerLine.style.opacity = "0";
  setTimeout(() => {
    ui.dealerLine.textContent = text;
    ui.dealerLine.style.opacity = "1";
  }, 90);
}
function armContraption() {
  state.contraption = pick(contraptions);
  ui.contraption.className = `contraption ${state.contraption.id}`;
  ui.contraptionLabel.textContent = state.contraption.label;
  ui.victimName.textContent = pick(victimNames);
  ui.victim.classList.remove("nervous");
  requestAnimationFrame(() => ui.contraption.classList.add("armed"));
}
function resetCards() {
  for (const card of [ui.leftCard, ui.rightCard]) {
    card.classList.remove("correct", "wrong", "peeked", "selected", "dimmed");
    card.disabled = false;
  }
}
function hideVerdict() {
  ui.verdict.classList.add("hidden");
  ui.verdictActions.innerHTML = "";
}
function nextRound() {
  state.locked = false;
  state.question = chooseQuestion();
  state.answer = decide(state.question);
  ui.questionText.textContent = state.question.q;
  ui.leftText.textContent = state.question.left.text;
  ui.rightText.textContent = state.question.right.text;
  hideVerdict();
  document.body.classList.remove("reveal-wrong");
  resetCards();
  armContraption();
  setDealerLine(pick(lines.round));
  updateStats();
}
function button(label, className, handler) {
  const element = document.createElement("button");
  element.type = "button";
  element.textContent = label;
  if (className) element.className = className;
  element.addEventListener("click", handler);
  return element;
}
function showVerdict(title, actions = []) {
  ui.verdictTitle.textContent = title;
  ui.verdictActions.innerHTML = "";
  for (const action of actions) ui.verdictActions.append(action);
  ui.verdict.classList.remove("hidden");
}
function showWin() {
  state.streak += 1;
  state.level = Math.min(state.level + 1, POT_LADDER.length - 1);
  state.pot = POT_LADDER[Math.max(0, state.level - 1)];
  ui.contraption.classList.remove("armed", "tense");
  ui.contraption.classList.add("safe");
  ui.victim.classList.remove("nervous");
  const line = pick(lines.win);
  setDealerLine(line);
  showVerdict("RIGHT ANSWER", [button("CASH OUT", "", cashOut), button("DOUBLE DOWN", "primary", nextRound)]);
  updateStats();
}
function showLoss() {
  const lost = state.pot;
  const hadInsurance = state.insured;
  ui.contraption.classList.remove("tense");
  ui.contraption.classList.add("dead");
  ui.victim.classList.remove("nervous");
  document.body.classList.add("reveal-wrong");
  state.streak = 0;
  state.level = 0;
  state.pot = hadInsurance ? lost : 0;
  state.insured = false;
  const line = pick(lines.lose);
  setDealerLine(hadInsurance ? `${line} Your pot, annoyingly, survives.` : line);

  setTimeout(() => {
    showVerdict("WRONG ANSWER", [button(hadInsurance ? "CONTINUE — INSURED" : "NEXT VICTIM", "primary", nextRound)]);
    updateStats();
  }, 720);
}
function choose(side) {
  if (state.locked) return;
  state.locked = true;
  ui.leftCard.disabled = true;
  ui.rightCard.disabled = true;

  const chosen = side === "left" ? ui.leftCard : ui.rightCard;
  const other = side === "left" ? ui.rightCard : ui.leftCard;
  chosen.classList.add("selected");
  other.classList.add("dimmed");
  ui.victim.classList.add("nervous");
  ui.contraption.classList.add("tense");
  setDealerLine("...interesting.");
  updateStats();

  setTimeout(() => {
    const correct = state.answer === "left" ? ui.leftCard : ui.rightCard;
    const wrong = state.answer === "left" ? ui.rightCard : ui.leftCard;
    correct.classList.add("correct");
    if (side !== state.answer) wrong.classList.add("wrong");
    correct.classList.remove("dimmed");

    setTimeout(() => side === state.answer ? showWin() : showLoss(), side === state.answer ? 330 : 470);
  }, 520);
}
function cashOut() {
  const winnings = state.pot;
  state.bank += winnings;
  state.pot = 0;
  state.streak = 0;
  state.level = 0;
  state.insured = false;
  const line = pick(lines.cash);
  setDealerLine(line);
  showVerdict("CASHED OUT", [button("NEW VICTIM", "primary", nextRound)]);
  updateStats();
}
function spend(cost) {
  if (state.bank < cost || state.locked) return false;
  state.bank -= cost;
  updateStats();
  return true;
}
function peek() {
  if (!spend(250)) return;
  const correct = state.answer === "left" ? ui.leftCard : ui.rightCard;
  correct.classList.add("peeked");
  setDealerLine(pick(["You saw nothing.", "A little cheating makes the relationship healthier.", "That glow is probably meaningful. Probably."]));
  setTimeout(() => correct.classList.remove("peeked"), 1150);
}
function reroll() {
  if (!spend(500)) return;
  setDealerLine("Fine. New cards. Same terrible judgment.");
  nextRound();
}
function insure() {
  if (!spend(1000)) return;
  state.insured = true;
  setDealerLine("Insurance? In Hell? That's adorable. Accepted.");
  updateStats();
}
function newDealer() {
  state.persona = pick(personas);
  state.pot = 0;
  state.streak = 0;
  state.level = 0;
  state.insured = false;
  state.usedQuestionIndexes.clear();
  ui.dealerName.textContent = state.persona.name.toUpperCase();
  setDealerLine(state.persona.intro);
  ui.runHint.textContent = "Learn the dealer. Then distrust what you learned.";
  updateStats();
  setTimeout(nextRound, 220);
}

ui.leftCard.addEventListener("click", () => choose("left"));
ui.rightCard.addEventListener("click", () => choose("right"));
ui.peekBtn.addEventListener("click", peek);
ui.rerollBtn.addEventListener("click", reroll);
ui.insuranceBtn.addEventListener("click", insure);
ui.newRunBtn.addEventListener("click", newDealer);

document.addEventListener("keydown", (event) => {
  if (event.repeat || state.locked || !ui.verdict.classList.contains("hidden")) return;
  const key = event.key.toLowerCase();
  if (key === "a" || key === "1" || event.key === "ArrowLeft") choose("left");
  if (key === "b" || key === "2" || event.key === "ArrowRight") choose("right");
});

newDealer();