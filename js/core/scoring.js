// ------------------------------------
// Scoring and matching logic
// ------------------------------------

import { BOOKS } from '../data/books.js';

export function scoreBook(book, signals) {
  let score = 0;
  const hits = [];

  for (const [t, w] of signals.themes.entries()) {
    if (book.themes.includes(t) || book.themes.includes(t.replace(/-/g," "))) {
      score += w * 2;
      hits.push(`theme:${t}`);
    }
  }

  for (const [m, w] of signals.moods.entries()) {
    if (book.moods.includes(m)) {
      score += w * 2;
      hits.push(`mood:${m}`);
    }
  }

  const lowEnergy = (signals.moods.get("low-energy") ?? 0) >= 3 || (signals.moods.get("comfort") ?? 0) >= 3;
  if (lowEnergy) {
    if (book.length === "short") score += 6;
    if (book.length === "medium") score += 3;
    if (book.comfortTag) score += 5;
    if (book.title.includes("Montaigne") || book.title.includes("Erasmus") || book.title.includes("Swift")) score += 2;
  }

  if ((signals.themes.get("science") ?? 0) > 0 && book.category === "science") score += 3;
  if ((signals.themes.get("government") ?? 0) > 0 && ["politics","history"].includes(book.category)) score += 2;

  if (book.length === "reference") score -= 4;
  if (signals.normalized.includes("syntopicon") || signals.normalized.includes("index")) {
    if (book.slug.startsWith("the-syntopicon")) score += 10;
  }

  return { score, hits: uniq(hits) };
}

export function fallbackPicks() {
  const defaults = ["late-antiquity","erasmus-montaigne","swift-voltaire-diderot","boswell-johnson","austen-eliot"];
  return defaults
    .map(slug => BOOKS.find(b => b.slug === slug))
    .filter(Boolean)
    .map((b, i) => ({ book: b, score: 10 - i, hits: ["fallback"] }));
}

export function buildWhy(book, scored, signals) {
  const themeHits = (scored.hits ?? []).filter(h => h.startsWith("theme:")).map(h => h.slice(6));
  const moodHits  = (scored.hits ?? []).filter(h => h.startsWith("mood:")).map(h => h.slice(5));

  const bits = [];
  if (themeHits.length) bits.push(`Theme overlap: <b>${esc(themeHits.slice(0,5).join(", "))}</b>.`);
  if (moodHits.length)  bits.push(`Mood fit: <b>${esc(moodHits.slice(0,4).join(", "))}</b>.`);

  const lowEnergy = (signals?.moods?.get("low-energy") ?? 0) >= 3 || (signals?.moods?.get("comfort") ?? 0) >= 3;
  if (lowEnergy && (book.length === "short" || book.length === "medium" || book.comfortTag)) {
    bits.push(`You sounded low-energy, so I biased toward <b>accessible / comforting</b> works.`);
  }

  if (book.slug === "late-antiquity") bits.push(`This volume includes <b>Epictetus</b> and <b>Meditations</b>—great for "I can't do much today."`);
  if (book.slug === "erasmus-montaigne") bits.push(`Montaigne's essays are ideal for gentle reflection without heavy commitment.`);
  if (!bits.length) bits.push(`Good all-purpose entry point based on your input.`);

  return bits.join(" ");
}

function uniq(arr) { return [...new Set(arr)]; }
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
