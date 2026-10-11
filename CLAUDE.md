# RStudio Cheat Sheet

A static site (no build step) that Grace uses as a personal R reference. Content lives in `data.js` (CATEGORIES + ENTRIES arrays), rendering logic in `script.js`, structure in `index.html`.

Deployed via GitHub Pages from `origin/master` at https://gflandreau.github.io/RStudio-Cheat-Sheet — pushing to master is what publishes changes (usually live within a minute or two).

## Content conventions

- Never use em dashes anywhere on the site (descriptions, notes, UI text). Use colons, commas, semicolons, or parentheses instead.
- Entries can have an optional `read` field: bullet lines separated by `\n` that explain how to interpret the function's output (what high vs low values mean, thresholds, red flags). Add one for any new entry that produces numbers, tests, or diagnostics; label thresholds as rules of thumb. It renders as a collapsible "How to read the output" block on the card and in the full-example modal, and it is searchable.
- Tags are search-only metadata: add synonyms and alternate terminology so entries are findable by what people would actually type.

## Standing permission

When asked to add or edit content on this site, commit and push the changes to `origin/master` automatically once the edit is verified — no need to ask for confirmation before pushing. Use a concise commit message describing what was added/changed.

Note: this repo lives inside a OneDrive-synced folder, which can cause `git commit`/`push` to fail with "invalid write operation detected" / "unable to append to .git/logs/...". If that happens, it means the local one-time fix (`git config windows.appendAtomically false`, run manually by Grace) hasn't been applied in this environment yet — surface the error and ask Grace to run that command, rather than attempting to modify git config directly.
