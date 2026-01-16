// ------------------------------------
// Export functionality
// ------------------------------------

import { BOOKS } from '../data/books.js';
import { esc } from '../utils/dom.js';

export function exportBookFiles() {
  const ok = confirm(
    "This will download 60 standalone HTML files (one per volume). Your browser may ask permission for multiple downloads.\n\nProceed?"
  );
  if (!ok) return;

  for (const b of BOOKS) {
    const html = buildBookHtml(b);
    downloadFile(`${b.slug}.html`, html, "text/html;charset=utf-8");
  }

  downloadFile(`books.json`, JSON.stringify(BOOKS, null, 2), "application/json;charset=utf-8");
  alert("Downloads triggered. Create a /books folder in your repo and move the generated .html files into it.");
}

function buildBookHtml(b) {
  const worksItems = (b.works?.length ?? 0)
    ? b.works.map(w => `<li class="text-zinc-200/85">${esc(w)}</li>`).join("")
    : "";

  const worksSection = worksItems
    ? `
      <div class="mt-5">
        <div class="text-xs uppercase tracking-wide text-zinc-400">Works included</div>
        <ul class="mt-2 list-disc pl-5 space-y-1">${worksItems}</ul>
      </div>
    `
    : "";

  const themeChips = (b.themes ?? []).map(t =>
    `<span class="px-2 py-1 rounded-lg text-xs bg-indigo-500/10 ring-1 ring-indigo-300/20 text-indigo-200">${esc(t)}</span>`
  ).join("");

  const moodChips = (b.moods ?? []).map(m =>
    `<span class="px-2 py-1 rounded-lg text-xs bg-emerald-500/10 ring-1 ring-emerald-300/20 text-emerald-200">${esc(m)}</span>`
  ).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Vol. ${b.volume} • ${esc(b.title)}</title>
  <meta name="description" content="GBWW Vol. ${b.volume}: ${esc(b.title)}" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
  <main class="mx-auto max-w-3xl px-5 py-10">
    <a href="../index.html#library" class="inline-flex items-center gap-2 text-sm text-zinc-300/80 hover:text-zinc-100">
      <span aria-hidden="true">←</span> Back to library
    </a>

    <div class="mt-6 rounded-2xl bg-white/4 ring-1 ring-white/10 shadow-xl overflow-hidden">
      <div class="p-5">
        <div class="text-xs text-zinc-400/80">Vol. ${b.volume} • ${esc(b.category)} • ${esc(b.length)}</div>
        <h1 class="mt-1 text-2xl font-semibold">${esc(b.title)}</h1>
        <div class="mt-2 text-sm text-zinc-300/80">${esc((b.authors ?? []).join(" • "))}</div>

        ${worksSection}

        <div class="mt-5">
          <div class="text-xs uppercase tracking-wide text-zinc-400">Themes</div>
          <div class="mt-2 flex flex-wrap gap-2">${themeChips}</div>
        </div>

        <div class="mt-5">
          <div class="text-xs uppercase tracking-wide text-zinc-400">Moods</div>
          <div class="mt-2 flex flex-wrap gap-2">${moodChips}</div>
        </div>

        <div class="mt-6 rounded-xl bg-zinc-950/50 ring-1 ring-white/10 p-4 text-sm text-zinc-200/85">
          <div class="text-xs uppercase tracking-wide text-zinc-400">Reading prompt</div>
          <div class="mt-1">
            Read a single section and answer:
            <ul class="mt-2 list-disc pl-5 space-y-1 text-zinc-200/75">
              <li>What's the author's central claim?</li>
              <li>What would a smart critic object to?</li>
              <li>What changes in my thinking after 20 minutes?</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <a href="../index.html" class="px-3 py-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 ring-1 ring-indigo-300/30 text-sm font-medium">Open Compass</a>
          <a href="../index.html#library" class="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm">Open Library</a>
        </div>
      </div>
    </div>

    <p class="mt-6 text-xs text-zinc-500">
      Generated locally from the Compass site. Edit tags in <code class="text-zinc-300">index.html</code> to improve recommendations over time.
    </p>
  </main>
</body>
</html>`;
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
