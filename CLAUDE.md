# RStudio Cheat Sheet

A static site (no build step) that Grace uses as a personal R reference. Content lives in `data.js` (CATEGORIES + ENTRIES arrays), rendering logic in `script.js`, structure in `index.html`.

Deployed via GitHub Pages from `origin/master` at https://gflandreau.github.io/RStudio-Cheat-Sheet — pushing to master is what publishes changes (usually live within a minute or two).

## Standing permission

When asked to add or edit content on this site, commit and push the changes to `origin/master` automatically once the edit is verified — no need to ask for confirmation before pushing. Use a concise commit message describing what was added/changed.

Note: this repo lives inside a OneDrive-synced folder, which can cause `git commit`/`push` to fail with "invalid write operation detected" / "unable to append to .git/logs/...". If that happens, it means the local one-time fix (`git config windows.appendAtomically false`, run manually by Grace) hasn't been applied in this environment yet — surface the error and ask Grace to run that command, rather than attempting to modify git config directly.
