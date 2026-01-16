// ------------------------------------
// Modal dialog handling
// ------------------------------------

import { BOOKS } from '../data/books.js';
import { $, esc, badge } from '../utils/dom.js';

export function openModal(slug, state, toggleStar) {
  const b = BOOKS.find(x => x.slug === slug);
  if (!b) return;

  const els = {
    modalTitle: $("#modalTitle"),
    modalMeta: $("#modalMeta"),
    modalOpenFile: $("#modalOpenFile"),
    modalStar: $("#modalStar"),
    modalBody: $("#modalBody"),
    modal: $("#modal")
  };

  els.modalTitle.textContent = `${b.title}`;
  els.modalMeta.textContent  = `Vol. ${b.volume} • ${b.authors.join(" • ")} • ${b.category} • ${b.length}`;
  els.modalOpenFile.href     = `books/${b.slug}.html`;
  els.modalStar.textContent  = state.shelf[b.slug] ? "Unstar" : "Star";

  const works = b.works?.length ? `
    <div>
      <div class="text-xs uppercase tracking-wide text-zinc-400">Works included</div>
      <ul class="mt-2 list-disc pl-5 space-y-1">
        ${b.works.map(w => `<li>${esc(w)}</li>`).join("")}
      </ul>
    </div>` : "";

  const wikipedia = b.wikipediaUrl ? `
    <div>
      <div class="text-xs uppercase tracking-wide text-zinc-400">Reference</div>
      <div class="mt-2">
        <a href="${b.wikipediaUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">View on Wikipedia</a>
      </div>
    </div>` : "";

  const themes = `
    <div>
      <div class="text-xs uppercase tracking-wide text-zinc-400">Themes</div>
      <div class="mt-2 flex flex-wrap gap-2">${b.themes.map(t => badge(t,"theme")).join("")}</div>
    </div>`;
  const moods = `
    <div>
      <div class="text-xs uppercase tracking-wide text-zinc-400">Moods</div>
      <div class="mt-2 flex flex-wrap gap-2">${b.moods.map(m => badge(m,"mood")).join("")}</div>
    </div>`;

  els.modalBody.innerHTML = `
    ${works}
    ${wikipedia}
    ${themes}
    ${moods}
    <div class="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 text-sm">
      <div class="text-xs uppercase tracking-wide text-zinc-400">Quick use</div>
      <div class="mt-1 text-zinc-200/85">
        If you want a <b>short entry</b>, read a single section/chapter and then ask:
        <ul class="mt-2 list-disc pl-5 space-y-1 text-zinc-200/75">
          <li>What problem is the author trying to solve?</li>
          <li>What do they assume about human nature?</li>
          <li>Where do I agree—and where do I resist?</li>
        </ul>
      </div>
    </div>
  `;

  els.modalStar.onclick = () => toggleStar(b.slug, true);
  els.modal.classList.remove("hidden");
}

export function closeModal() {
  $("#modal").classList.add("hidden");
}
