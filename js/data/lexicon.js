// ------------------------------------
// Feeling/idea → signals (lexicon)
// ------------------------------------

export const LEXICON = [
  { match: ["sick","ill","flu","fever","headache","nauseous","exhausted","burnt","burned","burnout","tired","wiped","drained"], moods:["low-energy","comfort","gentle"], themes:["mind","medicine","life-and-death","habit"], w: 3 },
  { match: ["don't want","dont want","can't","cant","no energy","unmotivated","procrastinating","stuck","frozen"], moods:["low-energy","clarity"], themes:["habit","desire","happiness","will"], w: 3 },

  { match: ["anxious","anxiety","panic","worried","afraid","fear","overwhelmed","stress","stressed"], moods:["calm","clarity"], themes:["courage","prudence","mind","reasoning"], w: 3 },

  { match: ["sad","grieving","grief","lonely","heartbroken","loss","depressed"], moods:["comfort","gentle"], themes:["love","life-and-death","soul","time"], w: 3 },

  { match: ["angry","rage","furious","resent","unfair","injustice","betrayed"], moods:["clarity","serious"], themes:["justice","law","good-and-evil","virtue-and-vice"], w: 3 },

  { match: ["meaning","purpose","directionless","lost","what's the point","whats the point","existential"], moods:["reflective","clarity"], themes:["truth","happiness","virtue","wisdom","soul"], w: 3 },

  { match: ["motivation","discipline","consistent","routine","habit","self control","self-control","focus"], moods:["focused","clarity"], themes:["habit","virtue","prudence","duty","reasoning"], w: 3 },

  { match: ["relationship","marriage","partner","love","jealous","friend","friendship"], moods:["reflective","comfort"], themes:["love","virtue-and-vice","family","desire"], w: 3 },

  { match: ["government","state","politics","democracy","liberty","rights","law","tyranny"], moods:["serious","clear-eyed"], themes:["government","law","liberty","democracy","citizen","tyranny"], w: 3 },

  { match: ["science","physics","math","astronomy","chemistry","evolution","proof","logic"], moods:["curious","precise"], themes:["science","physics","mathematics","astronomy","reasoning"], w: 3 },
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
