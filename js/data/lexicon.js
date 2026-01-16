// ------------------------------------
// Natural language → signals (lexicon)
// ------------------------------------

export const LEXICON = [
  // === Feelings & Emotional States ===
  { match: ["sick","ill","flu","fever","headache","nauseous","exhausted","burnt","burned","burnout","tired","wiped","drained"], moods:["low-energy","comfort","gentle"], themes:["mind","medicine","life-and-death","habit"], w: 3 },
  { match: ["don't want","dont want","can't","cant","no energy","unmotivated","procrastinating","stuck","frozen"], moods:["low-energy","clarity"], themes:["habit","desire","happiness","will"], w: 3 },
  { match: ["anxious","anxiety","panic","worried","afraid","fear","overwhelmed","stress","stressed"], moods:["calm","clarity"], themes:["courage","prudence","mind","reasoning"], w: 3 },
  { match: ["sad","grieving","grief","lonely","heartbroken","loss","depressed"], moods:["comfort","gentle"], themes:["love","life-and-death","soul","time"], w: 3 },
  { match: ["angry","rage","furious","resent","unfair","injustice","betrayed"], moods:["clarity","serious"], themes:["justice","law","good-and-evil","virtue-and-vice"], w: 3 },
  { match: ["meaning","purpose","directionless","lost","what's the point","whats the point","existential"], moods:["reflective","clarity"], themes:["truth","happiness","virtue","wisdom","soul"], w: 3 },
  { match: ["motivation","discipline","consistent","routine","habit","self control","self-control","focus"], moods:["focused","clarity"], themes:["habit","virtue","prudence","duty","reasoning"], w: 3 },

  // === Relationships & Interpersonal ===
  { match: ["relationship","marriage","partner","love","jealous","friend","friendship"], moods:["reflective","comfort"], themes:["love","virtue-and-vice","family","desire"], w: 3 },
  { match: ["fighting with","argument","conflict","disagreement","dispute","quarrel","spouse","husband","wife"], moods:["calm","reflective"], themes:["love","justice","prudence","family","temperance"], w: 3 },
  { match: ["family","parent","child","sibling","brother","sister","father","mother"], moods:["reflective","gentle"], themes:["family","duty","love","education"], w: 3 },

  // === Intellectual Topics ===
  { match: ["government","state","politics","democracy","liberty","rights","law","tyranny"], moods:["serious","clear-eyed"], themes:["government","law","liberty","democracy","citizen","tyranny"], w: 3 },
  { match: ["science","physics","math","astronomy","chemistry","evolution","proof","logic"], moods:["curious","precise"], themes:["science","physics","mathematics","astronomy","reasoning"], w: 3 },
  { match: ["war","warfare","battle","conflict","military","peace","pacifism"], moods:["serious","reflective"], themes:["war","courage","government","history","good-and-evil"], w: 3 },
  { match: ["philosophy","philosophical","wisdom","truth","thinking","thought"], moods:["reflective","inquiry"], themes:["truth","wisdom","philosophy","reasoning","mind"], w: 3 },
  { match: ["religion","god","faith","belief","prayer","divine","sacred","spiritual"], moods:["reflective","serious"], themes:["god","soul","truth","theology"], w: 3 },
  { match: ["nature","natural world","environment","animals","plants","earth"], moods:["curious","reflective"], themes:["nature","science","being","beauty"], w: 3 },
  { match: ["history","historical","past","civilization","empire","ancient"], moods:["serious","inquiry"], themes:["history","government","war","time"], w: 3 },

  // === Personal Development & Inspiration ===
  { match: ["inspire","inspiration","motivated","aspire","dream","ambition"], moods:["energizing","reflective"], themes:["happiness","virtue","courage","will"], w: 3 },
  { match: ["do my own thing","independent","autonomy","self-reliant","freedom","individualism"], moods:["energizing","clarity"], themes:["liberty","virtue","courage","happiness","self-knowledge"], w: 3 },
  { match: ["courage","brave","bravery","fear","overcome","confront"], moods:["energizing","serious"], themes:["courage","virtue","will","prudence"], w: 3 },
  { match: ["learn","learning","understand","knowledge","study","education","teach"], moods:["inquiry","curious"], themes:["education","wisdom","knowledge","reasoning"], w: 3 },
  { match: ["happiness","happy","joy","fulfillment","satisfied","contentment"], moods:["reflective","gentle"], themes:["happiness","virtue","good","soul"], w: 3 },
  { match: ["ethics","moral","morality","right","wrong","virtue","vice"], moods:["serious","reflective"], themes:["virtue-and-vice","good-and-evil","justice","duty"], w: 3 },

  // === Life Challenges & Problems ===
  { match: ["deal with","dealing with","handle","cope","manage","face","confront"], moods:["clarity","practical"], themes:["prudence","courage","habit","reasoning"], w: 2 },
  { match: ["problem","issue","challenge","difficulty","struggle","trouble"], moods:["clarity","focused"], themes:["prudence","reasoning","wisdom"], w: 2 },
  { match: ["decision","choose","choice","decide","dilemma"], moods:["clarity","reflective"], themes:["prudence","wisdom","reasoning","will"], w: 2 },
  { match: ["change","changing","transformation","reform","improve"], moods:["reflective","energizing"], themes:["habit","virtue","will","time"], w: 2 },
];

export const THEME_SYNONYMS = {
  "life and death": "life-and-death",
  "good and evil": "good-and-evil",
  "virtue and vice": "virtue-and-vice",
  "war and peace": "war",
  "freedom": "liberty",
  "self": "mind",
  "soul": "soul"
};
