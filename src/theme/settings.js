/**
 * Every visitor-facing preference on the site, in one place.
 *
 * Each setting is written to `<html>` as a `data-*` attribute and read back by
 * the stylesheet — no inline styles, no per-component theming. Adding an accent
 * means adding an entry here and one CSS block in global.css.
 */

export const ACCENTS = {
  rust:    { label: 'Rust',    swatch: '#b0451c' },
  oxblood: { label: 'Oxblood', swatch: '#a32f42' },
  ochre:   { label: 'Ochre',   swatch: '#8a6212' },
  moss:    { label: 'Moss',    swatch: '#4f6b1c' },
  cobalt:  { label: 'Cobalt',  swatch: '#2b4ea8' },
  plum:    { label: 'Plum',    swatch: '#7a3785' },
};

/** Page ground. `grain` is paper tooth; `rule` is a printer's baseline grid. */
export const BACKDROPS = {
  grain: 'Grain',
  rule:  'Ruled',
  grid:  'Grid',
  flat:  'Flat',
};

/** Pointer treatment. `off` restores the operating system arrow. */
export const CURSORS = {
  crosshair: 'Crosshair',
  dot:       'Dot',
  off:       'System',
};

export const THEMES = { light: 'Light', dark: 'Dark', auto: 'Auto' };
export const MOTIONS = { full: 'Full', auto: 'Auto', off: 'Reduced' };

export const SETTINGS = {
  theme:    { label: 'Theme',      options: THEMES,    fallback: 'auto' },
  accent:   { label: 'Accent',     options: ACCENTS,   fallback: 'rust' },
  backdrop: { label: 'Background', options: BACKDROPS, fallback: 'grain' },
  cursor:   { label: 'Cursor',     options: CURSORS,   fallback: 'crosshair' },
  motion:   { label: 'Motion',     options: MOTIONS,   fallback: 'auto' },
};

export const DEFAULTS = Object.fromEntries(
  Object.entries(SETTINGS).map(([key, { fallback }]) => [key, fallback])
);

export const STORAGE_KEY = 'portfolio-settings';

/** A stored value is only honoured if it is still a valid option. */
export const sanitise = (raw) => {
  const next = { ...DEFAULTS };
  if (!raw || typeof raw !== 'object') return next;
  for (const [key, { options }] of Object.entries(SETTINGS)) {
    if (Object.prototype.hasOwnProperty.call(options, raw[key])) next[key] = raw[key];
  }
  return next;
};

export const readStored = () => {
  try {
    return sanitise(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch (error) {
    return { ...DEFAULTS };
  }
};

/**
 * `theme` and `motion` both support "auto", which has to be resolved against
 * the OS before it can be written to the DOM.
 */
export const resolveTheme = (theme) => {
  if (theme !== 'auto') return theme;
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (error) {
    return 'light';
  }
};

export const resolveMotion = (motion) => {
  if (motion !== 'auto') return motion;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'off' : 'full';
  } catch (error) {
    return 'full';
  }
};

/** Writes the resolved settings onto <html>. Used by React and by the
 *  pre-paint script in index.html, which inlines the same logic. */
export const applySettings = (settings) => {
  const root = document.documentElement;
  root.dataset.theme = resolveTheme(settings.theme);
  root.dataset.accent = settings.accent;
  root.dataset.backdrop = settings.backdrop;
  root.dataset.cursor = settings.cursor;
  root.dataset.motion = resolveMotion(settings.motion);
};
