// ------------------------------------
// Signal extraction logic
// ------------------------------------

import { LEXICON, THEME_SYNONYMS } from '../data/lexicon.js';

export function extractSignals(text) {
  const raw = text.toLowerCase();
  const normalized = raw
    .replace(/['']/g, "'")
    .replace(/[^a-z0-9\s\-']/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const themes = new Map();
  const moods  = new Map();
  const hits   = [];

  for (const key of Object.keys(THEME_SYNONYMS)) {
    if (normalized.includes(key)) add(themes, THEME_SYNONYMS[key], 2, hits, `phrase:${key}`);
  }

  for (const rule of LEXICON) {
    const found = rule.match.some(m => normalized.includes(m));
    if (!found) continue;

    hits.push(...rule.match.filter(m => normalized.includes(m)).map(m => `match:${m}`));
    rule.themes.forEach(t => add(themes, t, rule.w, hits, `theme:${t}`));
    rule.moods.forEach(m => add(moods, m, rule.w, hits, `mood:${m}`));
  }

  if (/\b(why|what|how)\b/.test(normalized)) add(moods, "inquiry", 1, hits, "question");
  if (/\b(today|right now|tonight)\b/.test(normalized)) add(moods, "immediate", 1, hits, "time");

  const directThemes = [
    "justice","liberty","truth","love","law","duty","happiness","wisdom","mind","soul","god",
    "war","government","science","mathematics","nature","history","education","virtue","desire"
  ];
  for (const t of directThemes) {
    if (normalized.includes(t)) add(themes, t, 2, hits, `direct:${t}`);
  }

  const cleanedThemes = new Map();
  for (const [k,v] of themes.entries()) cleanedThemes.set(k.replace(/\s+/g, "-"), v);

  return {
    input: text,
    normalized,
    themes: cleanedThemes,
    moods,
    hits: uniq(hits),
  };
}

function add(map, key, n, hits, label) {
  map.set(key, (map.get(key) ?? 0) + n);
  if (hits && label) hits.push(label);
}

function uniq(arr) { return [...new Set(arr)]; }
