# Shared theme update (2026-11-16d)

This is a targeted update, not a replacement homepage.

- Upload `style.css` to the website root.
- Upload `RLT/index.html` only if the existing RLT header is the same as the one you supplied; it is preserved here and only the CSS cache version is changed.
- Leave the existing root `index.html`, all graphics, `scripts/theme.js`, and `data/` intact.
- In the existing root `index.html`, update its CSS URL to `style.css?v=20261116d` to ensure browsers refresh it.

Both pages share one theme palette. Dark `h1` uses `skyblue`; light uses `#16425b`. Existing structural RLT classes remain so its layout is not broken, but the page-specific theme palette is removed.
