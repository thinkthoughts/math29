# carbondioxide.now — original illustrated homepage + RLT

This release restores the **original three-chapter homepage** supplied as `Pasted text(20261116-161937).txt`, while retaining the shared theme script and RLT exhibit. The previous packages accidentally replaced that illustrated homepage with a simplified draft.

## Install

Upload `index.html`, `style.css`, `RLT/index.html`, and `scripts/theme.js` in their matching web-root paths. `data/co2-reading-point.json` and `assets/co2-molecule.svg` are included for the RLT example.

**CRITICAL: keep your existing `assets/` PNG files on the server.** These four original images were not included in the earlier packages or the provided HTML upload and are NOT reproduced in this ZIP:

- `assets/overview.png`
- `assets/breath-carbon-deep-time.png`
- `assets/gender-brain-consent.png`
- `assets/equality-systems-value.png`

The original HTML also references `assets/favicon.svg`. Keep that existing file too. This ZIP includes `assets/co2-molecule.svg` only. **Do not delete, replace, or synchronize-overwrite the entire remote `assets/` folder.** If those image files have already been deleted, restore them from your prior infographic website backup or original graphics source; HTML/CSS alone cannot restore missing image bytes.

## Page defaults

- `/`: dark
- `/RLT/`: light

Both use one root stylesheet and `scripts/theme.js`, with independent browser-stored user preferences. Buttons and navigation have matched geometry across both pages. Reload the versioned `style.css?v=20261116c` after deployment.

## Scope

Preserves the full illustrated original homepage (breath, care, systems) and adds a `RLT` link in the header and a hero CTA. The RLT page states the formal and empirical checking boundaries clearly.
