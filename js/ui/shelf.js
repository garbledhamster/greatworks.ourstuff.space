// ------------------------------------
// Shelf/favorites management
// ------------------------------------

import { BOOKS } from '../data/books.js';
import { $, esc } from '../utils/dom.js';
import { saveShelf } from '../utils/storage.js';

export function renderShelf(state, openModal) {
  const shelfEl = $("#shelf");
  const items = Object.values(state.shelf);
  
  if (!items.length) {
    shelfEl.innerHTML = `<div class="text-sm text-zinc-400/80">No starred books yet.</div>`;
    return;
  }
  
  shelfEl.innerHTML = items
    .sort((a,b)=>a.volume-b.volume)
    .map(b => `
      <button data-open="${esc(b.slug)}"
        class="w-full text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition">
        <div class="text-xs text-zinc-400/80">Vol. ${b.volume}</div>
        <div class="text-sm font-medium">${esc(b.title)}</div>
        <div class="text-xs text-zinc-400/80">${esc(b.authors.join(" • "))}</div>
      </button>
    `).join("");

  shelfEl.querySelectorAll("button[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.open));
  });
}

export function toggleStar(slug, state, renderShelf, renderLibrary, renderResults, refreshModal = false) {
  const b = BOOKS.find(x => x.slug === slug);
  if (!b) return;
  
  if (state.shelf[slug]) delete state.shelf[slug];
  else state.shelf[slug] = b;
  
  saveShelf(state.shelf);
  renderShelf();
  renderLibrary();
  if (state.lastSignals) renderResults(state.lastResults, state.lastSignals);
  if (refreshModal) $("#modalStar").textContent = state.shelf[slug] ? "Unstar" : "Star";
}
