// ------------------------------------
// Library/browse mode UI
// ------------------------------------

import { BOOKS } from '../data/books.js';
import { $, $$, esc, badge } from '../utils/dom.js';

export function renderLibrary(state, openModal, toggleStar) {
  const q = (state.libraryQuery ?? "").trim().toLowerCase();
  const f = state.activeQuickFilter;

  const filtered = BOOKS.filter(b => {
    if (f === "short" && !["short","medium"].includes(b.length)) return false;
    if (f === "fiction" && b.category !== "imaginative") return false;
    if (f === "philosophy" && b.category !== "philosophy") return false;
    if (f === "science" && b.category !== "science") return false;
    if (f === "comfort" && !b.comfortTag) return false;

    if (!q) return true;
    const hay = [
      b.title, b.authors.join(" "), b.works.join(" "),
      b.themes.join(" "), b.moods.join(" "), b.category, b.length
    ].join(" ").toLowerCase();
    return hay.includes(q);
  });

  const libraryGrid = $("#libraryGrid");
  libraryGrid.innerHTML = filtered.map(b => {
    const starred = !!state.shelf[b.slug];
    const meta = `${b.authors.join(" • ")}`;
    const topTags = [...b.themes.slice(0,4), ...b.moods.slice(0,2)].slice(0,6);

    return `
      <article class="rounded-2xl bg-white/4 ring-1 ring-white/10 hover:bg-white/6 transition shadow-soft overflow-hidden">
        <div class="p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="text-xs text-zinc-400/80">Vol. ${b.volume} • ${esc(b.category)} • ${esc(b.length)}</div>
              <div class="mt-1 font-semibold">${esc(b.title)}</div>
              <div class="mt-1 text-xs text-zinc-300/75">${esc(meta)}</div>
            </div>
            <div class="flex items-center gap-2">
              <button data-star="${esc(b.slug)}"
                class="px-3 py-2 rounded-xl ${starred ? "bg-yellow-500/20 ring-yellow-300/20" : "bg-white/5 ring-white/10"} hover:bg-white/10 ring-1 transition text-sm">
                ${starred ? "★" : "☆"}
              </button>
              <button data-open="${esc(b.slug)}"
                class="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-sm">
                Open
              </button>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap gap-2">
            ${topTags.map(t => badge(t, b.themes.includes(t) ? "theme" : "mood")).join("")}
          </div>
        </div>
      </article>
    `;
  }).join("");

  libraryGrid.querySelectorAll("button[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.open));
  });
  libraryGrid.querySelectorAll("button[data-star]").forEach(btn => {
    btn.addEventListener("click", () => toggleStar(btn.dataset.star));
  });
}
