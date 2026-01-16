// ------------------------------------
// Main application entry point
// ------------------------------------

import { $ } from './utils/dom.js';
import { loadShelf } from './utils/storage.js';
import { exportBookFiles } from './utils/export.js';
import { runCompass, renderSignals, renderResults as renderCompassResults, renderChips } from './ui/compass.js';
import { renderLibrary } from './ui/library.js';
import { openModal, closeModal } from './ui/modal.js';
import { renderShelf, toggleStar as toggleStarImpl } from './ui/shelf.js';

// ------------------------------------
// UI Elements
// ------------------------------------
const els = {
  q: $("#q"),
  btnGo: $("#btnGo"),
  btnClear: $("#btnClear"),
  tabCompass: $("#tabCompass"),
  tabBrowse: $("#tabBrowse"),
  compassSection: $("#compassSection"),
  results: $("#results"),
  emptyState: $("#emptyState"),
  chips: $("#chips"),
  explain: $("#explain"),
  btnExplain: $("#btnExplain"),
  signalList: $("#signalList"),
  shelf: $("#shelf"),
  librarySearch: $("#librarySearch"),
  libraryGrid: $("#libraryGrid"),
  btnResetFilters: $("#btnResetFilters"),
  btnExport: $("#btnExport"),
  modal: $("#modal"),
  modalClose: $("#modalClose"),
  modalOverlay: $("#modalOverlay"),
  modalTitle: $("#modalTitle"),
  modalMeta: $("#modalMeta"),
  modalBody: $("#modalBody"),
  modalOpenFile: $("#modalOpenFile"),
  modalStar: $("#modalStar"),
};

// ------------------------------------
// Application State
// ------------------------------------
const state = {
  mode: "compass",
  activeQuickFilter: null,
  libraryQuery: "",
  shelf: loadShelf(),
  lastSignals: null,
  lastResults: []
};

// ------------------------------------
// Wrapper functions to bind state
// ------------------------------------
function runCompassWrapper(input) {
  runCompass(
    input, 
    state, 
    renderSignals, 
    (results, signals) => renderCompassResults(results, signals, state, toggleStarWrapper, openModalWrapper)
  );
}

function renderShelfWrapper() {
  renderShelf(state, openModalWrapper);
}

function renderLibraryWrapper() {
  renderLibrary(state, openModalWrapper, toggleStarWrapper);
}

function openModalWrapper(slug) {
  openModal(slug, state, toggleStarWrapper);
}

function toggleStarWrapper(slug, refreshModal = false) {
  toggleStarImpl(
    slug, 
    state, 
    renderShelfWrapper, 
    renderLibraryWrapper, 
    (results, signals) => renderCompassResults(results, signals, state, toggleStarWrapper, openModalWrapper),
    refreshModal
  );
}

// ------------------------------------
// Mode switching
// ------------------------------------
function setMode(mode) {
  state.mode = mode;
  if (mode === "compass") {
    els.tabCompass.className = "px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition text-sm";
    els.tabBrowse.className  = "px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-sm";
    if (els.q.value.trim()) document.querySelector("#compassSection").scrollIntoView({block:"start"});
  } else {
    els.tabCompass.className = "px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-sm";
    els.tabBrowse.className  = "px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition text-sm";
    document.querySelector("#library").scrollIntoView({block:"start"});
  }
}

// ------------------------------------
// Event handlers
// ------------------------------------
function wire() {
  // Ctrl+K focus
  window.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const mod = isMac ? e.metaKey : e.ctrlKey;
    if (mod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      els.q.focus();
    }
    if (e.key === "Escape") closeModal();
  });

  els.btnGo.addEventListener("click", () => runCompassWrapper(els.q.value));
  els.btnClear.addEventListener("click", () => {
    els.q.value = "";
    location.hash = "";
    state.lastSignals = null;
    state.lastResults = [];
    els.results.innerHTML = "";
    els.emptyState.classList.remove("hidden");
    els.signalList.innerHTML = "";
  });

  els.q.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runCompassWrapper(els.q.value);
  });

  els.tabCompass.addEventListener("click", () => setMode("compass"));
  els.tabBrowse.addEventListener("click", () => setMode("browse"));

  els.btnExplain.addEventListener("click", () => {
    els.explain.classList.toggle("hidden");
  });

  els.librarySearch.addEventListener("input", (e) => {
    state.libraryQuery = e.target.value;
    renderLibraryWrapper();
  });

  els.btnResetFilters.addEventListener("click", () => {
    state.activeQuickFilter = null;
    state.libraryQuery = "";
    els.librarySearch.value = "";
    [...document.querySelectorAll(".filterBtn")].forEach(b => b.classList.remove("bg-indigo-500/30","ring-indigo-300/30"));
    renderLibraryWrapper();
  });

  document.querySelectorAll(".filterBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      state.activeQuickFilter = (state.activeQuickFilter === f) ? null : f;
      document.querySelectorAll(".filterBtn").forEach(b => b.classList.remove("bg-indigo-500/30","ring-indigo-300/30"));
      if (state.activeQuickFilter) btn.classList.add("bg-indigo-500/30","ring-indigo-300/30");
      renderLibraryWrapper();
    });
  });

  els.btnExport.addEventListener("click", exportBookFiles);

  els.modalClose.addEventListener("click", closeModal);
  els.modalOverlay.addEventListener("click", closeModal);
}

// ------------------------------------
// Initialize application
// ------------------------------------
function boot() {
  wire();
  renderChips(runCompassWrapper, els);
  renderShelfWrapper();
  renderLibraryWrapper();
  setMode("compass");

  // hash query support for sharing
  const u = new URL(location.href);
  const q = u.hash.startsWith("#q=") ? decodeURIComponent(u.hash.slice(3)) : "";
  if (q) {
    els.q.value = q;
    runCompassWrapper(q);
  }
}

// Start the application
boot();
