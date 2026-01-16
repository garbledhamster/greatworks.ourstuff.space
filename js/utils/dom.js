// ------------------------------------
// DOM utility functions
// ------------------------------------

export function $(sel) { 
  return document.querySelector(sel); 
}

export function $$(sel) { 
  return document.querySelectorAll(sel); 
}

export function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

export function badge(label, kind) {
  const base = "px-2 py-1 rounded-lg text-xs ring-1";
  const styles = {
    theme: `${base} bg-indigo-500/10 ring-indigo-300/20 text-indigo-200`,
    mood:  `${base} bg-emerald-500/10 ring-emerald-300/20 text-emerald-200`,
    cat:   `${base} bg-white/5 ring-white/10 text-zinc-200/80`,
    len:   `${base} bg-white/5 ring-white/10 text-zinc-200/80`
  };
  return `<span class="${styles[kind] ?? styles.cat}">${esc(label)}</span>`;
}
