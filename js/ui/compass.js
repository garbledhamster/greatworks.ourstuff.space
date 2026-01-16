// ------------------------------------
// Compass mode UI
// ------------------------------------

import { BOOKS } from '../data/books.js';
import { extractSignals } from '../core/signals.js';
import { scoreBook, fallbackPicks, buildWhy } from '../core/scoring.js';
import { $, esc, badge } from '../utils/dom.js';

export function runCompass(input, state, renderSignals, renderResults) {
  const text = (input ?? "").trim();
  if (!text) return;

  location.hash = "#q=" + encodeURIComponent(text);

  const signals = extractSignals(text);
  state.lastSignals = signals;

  const scored = BOOKS
    .map(b => ({ book: b, ...scoreBook(b, signals) }))
    .sort((a,b) => b.score - a.score)
    .slice(0, 8);

  const topScore = scored[0]?.score ?? 0;
  const results = (topScore > 0) ? scored : fallbackPicks(text);

  state.lastResults = results;

  renderSignals(signals);
  renderResults(results, signals);
  $("#emptyState").classList.add("hidden");
}

export function renderSignals(signals) {
  const els = { signalList: $("#signalList") };
  
  if (!signals) {
    els.signalList.innerHTML = `<div class="text-zinc-400/80 text-sm">No signals yet.</div>`;
    return;
  }

  const themes = [...signals.themes.entries()].sort((a,b)=>b[1]-a[1]).slice(0,8);
  const moods  = [...signals.moods.entries()].sort((a,b)=>b[1]-a[1]).slice(0,8);

  const chip = (label, kind="") => `
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 ring-1 ring-white/10 text-xs">
      <span class="opacity-70">${kind}</span><span>${esc(label)}</span>
    </span>`;

  els.signalList.innerHTML = `
    <div class="space-y-3">
      <div>
        <div class="text-xs text-zinc-400 uppercase tracking-wide">Top themes</div>
        <div class="mt-2 flex flex-wrap gap-2">
          ${themes.length ? themes.map(([t,w]) => chip(`${t} (${w})`, "T")).join("") : `<span class="text-zinc-400/80">None</span>`}
        </div>
      </div>
      <div>
        <div class="text-xs text-zinc-400 uppercase tracking-wide">Top moods</div>
        <div class="mt-2 flex flex-wrap gap-2">
          ${moods.length ? moods.map(([m,w]) => chip(`${m} (${w})`, "M")).join("") : `<span class="text-zinc-400/80">None</span>`}
        </div>
      </div>
    </div>
  `;
}

export function renderResults(results, signals, state, toggleStar, openModal) {
  const resultsEl = $("#results");
  
  resultsEl.innerHTML = results.map((r, idx) => {
    const b = r.book;
    const why = buildWhy(b, r, signals);
    const tags = [
      ...b.themes.slice(0,6).map(t => badge(t, "theme")),
      ...b.moods.slice(0,4).map(m => badge(m, "mood")),
      badge(b.category, "cat"),
      badge(b.length, "len")
    ].join("");

    const starred = !!state.shelf[b.slug];

    return `
      <article class="rounded-2xl bg-white/4 ring-1 ring-white/10 hover:bg-white/6 transition shadow-soft overflow-hidden">
        <div class="p-4 sm:p-5">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="text-xs text-zinc-400/80">Rank #${idx+1} • Score <span class="text-zinc-200">${r.score}</span> • Vol. ${b.volume}</div>
              <h3 class="mt-1 text-lg font-semibold leading-snug">${esc(b.title)}</h3>
              <div class="mt-1 text-sm text-zinc-300/80">${esc(b.authors.join(" • "))}</div>
            </div>

            <div class="flex items-center gap-2">
              <button data-star="${esc(b.slug)}"
                class="px-3 py-2 rounded-xl ${starred ? "bg-yellow-500/20 ring-yellow-300/20" : "bg-white/5 ring-white/10"} hover:bg-white/10 ring-1 transition text-sm">
                ${starred ? "★" : "☆"}
              </button>
              <button data-open="${esc(b.slug)}"
                class="px-3 py-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 ring-1 ring-indigo-300/30 shadow-soft transition text-sm font-medium">
                Details
              </button>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap gap-2">${tags}</div>

          <div class="mt-4 rounded-xl bg-zinc-950/40 ring-1 ring-white/10 p-3 text-sm text-zinc-200/85">
            <div class="text-xs uppercase tracking-wide text-zinc-400">Why this match</div>
            <div class="mt-1">${why}</div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  resultsEl.querySelectorAll("button[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.open));
  });
  resultsEl.querySelectorAll("button[data-star]").forEach(btn => {
    btn.addEventListener("click", () => toggleStar(btn.dataset.star));
  });
}

export function renderChips(runCompass, els) {
  const suggestions = [
    "I feel sick and don't want to do anything",
    "I'm anxious and overthinking",
    "I'm angry and feel treated unfairly",
    "I feel lost and need meaning",
    "I need discipline and focus",
    "What is justice?",
    "I need courage"
  ];
  els.chips.innerHTML = suggestions.map(s => `
    <button class="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-xs transition"
      data-chip="${esc(s)}">${esc(s)}</button>
  `).join("");

  els.chips.querySelectorAll("button[data-chip]").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.chip;
      els.q.value = v;
      runCompass(v);
      els.q.focus();
    });
  });
}
