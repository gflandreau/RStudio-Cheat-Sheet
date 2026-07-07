# RStudio Cheat Sheet

A searchable, single-page reference for R: base R plus dplyr, tidyr, ggplot2,
stringr, lubridate, rvest, scales, and other tidyverse odds and ends — plus a
full section of base R named colors and package color palettes (viridis,
RColorBrewer, scales).

Live search box filters by function name, description, or keyword tag across
every package at once. Category pills narrow to one package.

## Structure

- `index.html` — page markup (search box, nav, sections)
- `styles.css` — all styling (blue/purple palette shared with grace-portfolio)
- `data.js` — every function entry, grouped by package
- `colors-data.js` — base R named colors + palette/scale functions
- `script.js` — search, filtering, and rendering logic (vanilla JS, no build step)

## Adding new entries

Everything lives in plain JS arrays — no build step, just edit and refresh.

**To add a function**, open `data.js` and add an object to `ENTRIES`:

```js
{ cat: "dplyr", fn: "slice_min(.data, order_by, n)", desc: "Select rows with the smallest values of a column.", example: "slice_min(df, mpg, n = 5)", tags: ["rows","subset","bottom"] },
```

`cat` must match one of the ids in `CATEGORIES` (top of `data.js`). To add a
whole new package, add a new entry to `CATEGORIES` first, then start adding
`ENTRIES` with that `cat` id.

**To add a color or palette**, edit `colors-data.js` — add to an existing
family in `BASE_COLORS`, add a new family object, or add a new palette object
to `PALETTES`.

Tip: just ask Claude to add a package/function/palette any time — this repo is
meant to keep growing.

## Running locally

Any static file server works, e.g.:

```
python -m http.server 8743
```

then open `http://localhost:8743`.

## Deploying

Hosted via GitHub Pages from this repo.
