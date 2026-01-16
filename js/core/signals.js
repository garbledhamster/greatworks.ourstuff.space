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

  // Detect natural language intent patterns and extract topics
  extractIntentPatterns(normalized, themes, moods, hits);

  // Theme synonyms
  for (const key of Object.keys(THEME_SYNONYMS)) {
    if (normalized.includes(key)) add(themes, THEME_SYNONYMS[key], 2, hits, `phrase:${key}`);
  }

  // Lexicon pattern matching
  for (const rule of LEXICON) {
    const found = rule.match.some(m => normalized.includes(m));
    if (!found) continue;

    hits.push(...rule.match.filter(m => normalized.includes(m)).map(m => `match:${m}`));
    rule.themes.forEach(t => add(themes, t, rule.w, hits, `theme:${t}`));
    rule.moods.forEach(m => add(moods, m, rule.w, hits, `mood:${m}`));
  }

  // Question and time markers
  if (/\b(why|what|how)\b/.test(normalized)) add(moods, "inquiry", 1, hits, "question");
  if (/\b(today|right now|tonight)\b/.test(normalized)) add(moods, "immediate", 1, hits, "time");

  // Direct theme matching
  const directThemes = [
    "justice","liberty","truth","love","law","duty","happiness","wisdom","mind","soul","god",
    "war","government","science","mathematics","nature","history","education","virtue","desire",
    "courage","temperance","prudence","philosophy","theology","beauty","knowledge","self-knowledge"
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

function extractIntentPatterns(normalized, themes, moods, hits) {
  // "I want to read about X" pattern
  const readAboutMatch = normalized.match(/(?:want to|wanna|like to|interested in)\s+(?:read|learn|know)\s+(?:about|on)\s+(\w+(?:\s+\w+)?)/);
  if (readAboutMatch) {
    const topic = readAboutMatch[1].trim();
    add(themes, topic, 4, hits, `intent:read-about:${topic}`);
    add(moods, "inquiry", 2, hits, "intent:learning");
  }

  // "How to deal with X" / "How to handle X" pattern
  const dealWithMatch = normalized.match(/(?:how to|how do i|help me)\s+(?:deal with|handle|cope with|manage)\s+(.+?)(?:\.|$)/);
  if (dealWithMatch) {
    const problem = dealWithMatch[1].trim();
    add(moods, "practical", 3, hits, `intent:solve:${problem}`);
    add(moods, "clarity", 2, hits, "intent:problem-solving");
    // Extract key words from the problem
    const words = problem.split(/\s+/).filter(w => w.length > 3);
    words.forEach(w => add(themes, w, 2, hits, `problem-keyword:${w}`));
  }

  // "Inspire me to X" / "Motivate me to X" pattern
  const inspireMatch = normalized.match(/(?:inspire|motivate|encourage)\s+(?:me\s+)?(?:to\s+)?(.+?)(?:\.|$)/);
  if (inspireMatch) {
    const goal = inspireMatch[1].trim();
    add(moods, "energizing", 3, hits, `intent:inspire:${goal}`);
    add(themes, "virtue", 2, hits, "intent:inspiration");
    add(themes, "courage", 2, hits, "intent:inspiration");
  }

  // "I want to X" general pattern (autonomy, independence)
  if (/\b(?:do my own thing|be independent|think for myself|make my own)\b/.test(normalized)) {
    add(themes, "liberty", 3, hits, "intent:autonomy");
    add(themes, "self-knowledge", 2, hits, "intent:autonomy");
    add(moods, "energizing", 2, hits, "intent:autonomy");
  }

  // Learning/teaching intent
  if (/\b(?:teach me|show me|explain|i want to learn|help me understand)\b/.test(normalized)) {
    add(moods, "inquiry", 3, hits, "intent:learning");
    add(themes, "education", 2, hits, "intent:learning");
  }
}

function add(map, key, n, hits, label) {
  map.set(key, (map.get(key) ?? 0) + n);
  if (hits && label) hits.push(label);
}

function uniq(arr) { return [...new Set(arr)]; }
