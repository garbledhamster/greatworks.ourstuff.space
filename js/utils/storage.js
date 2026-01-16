// ------------------------------------
// localStorage utilities
// ------------------------------------

export function loadShelf() {
  try {
    const raw = localStorage.getItem("gbww_shelf");
    const obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === "object" ? obj : {};
  } catch { return {}; }
}

export function saveShelf(shelf) {
  localStorage.setItem("gbww_shelf", JSON.stringify(shelf));
}
