/* ============================================
   RStudio Cheat Sheet — search, filter, render
   ============================================ */

(function () {
  const cardGrid = document.getElementById("cardGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsMeta = document.getElementById("resultsMeta");
  const searchBox = document.getElementById("searchBox");
  const searchCount = document.getElementById("searchCount");
  const categoryNav = document.getElementById("categoryNav");

  let activeCategory = "all";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function catName(id) {
    const c = CATEGORIES.find((c) => c.id === id);
    return c ? c.name : id;
  }

  function buildNav() {
    const allBtn = document.createElement("button");
    allBtn.textContent = "All";
    allBtn.dataset.cat = "all";
    allBtn.className = "active";
    categoryNav.appendChild(allBtn);

    CATEGORIES.forEach((c) => {
      const btn = document.createElement("button");
      btn.textContent = c.name;
      btn.dataset.cat = c.id;
      categoryNav.appendChild(btn);
    });

    categoryNav.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      activeCategory = btn.dataset.cat;
      [...categoryNav.querySelectorAll("button")].forEach((b) =>
        b.classList.toggle("active", b === btn)
      );
      render();
    });
  }

  function matches(entry, query) {
    if (!query) return true;
    const haystack = [entry.fn, entry.desc, entry.example, ...(entry.tags || []), catName(entry.cat)]
      .join(" ")
      .toLowerCase();
    return query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every((term) => haystack.includes(term));
  }

  function cardHtml(entry) {
    return `
      <article class="fn-card">
        <span class="fn-cat">${escapeHtml(catName(entry.cat))}</span>
        <div class="fn-name">${escapeHtml(entry.fn)}</div>
        <p class="fn-desc">${escapeHtml(entry.desc)}</p>
        <pre class="fn-example">${escapeHtml(entry.example)}</pre>
      </article>`;
  }

  function render() {
    const query = searchBox.value.trim();
    const filtered = ENTRIES.filter(
      (e) => (activeCategory === "all" || e.cat === activeCategory) && matches(e, query)
    );

    cardGrid.innerHTML = filtered.map(cardHtml).join("");
    emptyState.hidden = filtered.length !== 0;

    const label = activeCategory === "all" ? "all packages" : catName(activeCategory);
    resultsMeta.textContent = `${filtered.length} function${filtered.length === 1 ? "" : "s"} — ${label}`;
    searchCount.textContent = query ? `Searching for "${query}"` : `${ENTRIES.length} functions total`;
  }

  function renderColors() {
    const container = document.getElementById("colorFamilies");
    container.innerHTML = BASE_COLORS.map((family) => `
      <div class="color-family">
        <h3>${escapeHtml(family.family)}</h3>
        <div class="swatch-grid">
          ${family.colors
            .map(
              (c) => `
            <div class="swatch">
              <div class="swatch-color" style="background:${escapeHtml(c.hex)}"></div>
              <div class="swatch-label">
                <span class="swatch-name">${escapeHtml(c.name)}</span>
                <span class="swatch-hex">${escapeHtml(c.hex)}</span>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`).join("");

    document.getElementById("colorNote").textContent = COLOR_NOTE;
  }

  function renderPalettes() {
    const container = document.getElementById("paletteGrid");
    container.innerHTML = PALETTES.map((p) => `
      <article class="palette-card">
        <span class="fn-cat">${escapeHtml(p.pkg)}</span>
        <div class="fn-name">${escapeHtml(p.fn)}</div>
        <div class="palette-strip">
          ${p.swatch.map((hex) => `<span style="background:${escapeHtml(hex)}"></span>`).join("")}
        </div>
        <p class="fn-desc">${escapeHtml(p.desc)}</p>
        <pre class="fn-example">${escapeHtml(p.example)}</pre>
      </article>`).join("");
  }

  searchBox.addEventListener("input", render);

  buildNav();
  render();
  renderColors();
  renderPalettes();
})();
