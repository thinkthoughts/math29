# Shared controls update

Replace **only** the root `style.css` with this file. Your existing homepage, images, RLT page and `scripts/theme.js` do not need to change.

- Both theme toggles are icon-only, 60px wide. JavaScript retains the accessible aria-label/title and updates the icon.
- Hovering over RLT action buttons no longer underlines them; the background and border change instead.
- Homepage buttons and navigation also remain free of hover underlines.
- All shared headings, components, page layouts and light/dark defaults are preserved.

If the browser retains an old stylesheet, use a hard refresh or increment the `?v=` query in both pages' stylesheet links.
