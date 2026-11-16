# carbondioxide.now — shared CSS + light/dark toggle

## Important: preservation of your existing homepage

The earlier ZIP supplied `style.css` and `RLT/index.html` but **not** the current
production homepage `index.html`, and the live page could not be retrieved.
The root `index.html` in THIS package is therefore a **replacement draft**, not a
byte-for-byte update of your existing infographic homepage. **Do not overwrite
your production `index.html`** unless you deliberately want the replacement.
Its structure retains the known sections but not the unavailable original graphic.

## Deploy without replacing your existing homepage

1. Upload `style.css`, `scripts/theme.js`, `RLT/index.html`,
   `assets/co2-molecule.svg`, `data/co2-reading-point.json`.
2. Add to your existing homepage `<html>`:
   `data-theme="dark" data-default-theme="dark" data-theme-key="home"`.
3. Add `<script src="/scripts/theme.js" defer></script>` to its `<head>`.
4. Put the button below in the existing masthead nav (or nearby):

```html
<button class="theme-toggle" type="button" data-theme-toggle
        aria-label="Switch to light mode" aria-pressed="true">
  <span class="theme-icon" aria-hidden="true">☀</span>
  <span class="theme-label">Light mode</span>
</button>
```

5. Add `<a href="/RLT/">RLT ↗</a>` to the existing homepage navigation.

Alternatively, use the included root `index.html` as a starter/replacement draft.

## File structure

- `index.html` — replacement HOME DRAFT, defaults dark
- `style.css` — all shared styles plus RLT-specific page rules
- `RLT/index.html` — CO₂ exhalation reading-point example, defaults light
- `scripts/theme.js` — accessible theme toggle, separate saved preference per page
- `data/co2-reading-point.json` — local read-only manifest of sources and proof scope
- `assets/co2-molecule.svg` — reusable molecule schematic, not experimental evidence

No `RLT/rlt.css` remains. No external JavaScript or fonts.

## Verification honesty

The earlier RLT content refers to source-published arithmetic proof examples.
This static site build does **not** rerun the kernel, pin a new certificate,
or prove human exhalation through arithmetic. The physical reading point is
presented as a target of formal specification and empirical correspondence.
