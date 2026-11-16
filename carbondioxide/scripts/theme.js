/* Shared theme control for carbondioxide.now.
 * Page defaults: Home = dark; RLT = light.
 * Each page stores its own optional override; no tracking or external requests.
 */
(() => {
  'use strict';

  const root = document.documentElement;
  const defaultTheme = root.dataset.defaultTheme === 'dark' ? 'dark' : 'light';
  const pageKey = root.dataset.themeKey || location.pathname.replace(/\/+$/, '') || 'home';
  const storageKey = `co2-theme:${pageKey}`;

  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem(storageKey);
  } catch (_) {
    // Browsers with blocked local storage still get a working toggle.
  }

  function setTheme(theme, remember = false) {
    const selected = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = selected;
    root.style.colorScheme = selected;

    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      const next = selected === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${next} mode`);
      button.setAttribute('title', `Switch to ${next} mode`);
      button.setAttribute('aria-pressed', String(selected === 'dark'));
      button.querySelector('.theme-icon').textContent = selected === 'dark' ? '☀' : '☾';
      button.querySelector('.theme-label').textContent = `${next[0].toUpperCase()}${next.slice(1)} mode`;
    }

    if (remember) {
      try { localStorage.setItem(storageKey, selected); } catch (_) { /* optional */ }
    }
  }

  setTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : defaultTheme);

  document.addEventListener('DOMContentLoaded', () => {
    setTheme(root.dataset.theme);
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      button.addEventListener('click', () => {
        setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
      });
    }
  });
})();
