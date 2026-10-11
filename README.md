# Ayushma Pudasaini — Portfolio

Personal portfolio site. React (Create React App) with CSS Modules and Framer Motion.

## Run it

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production bundle in build/
```

## How it is organised

```
src/
  data/profile.js        All site content — the only file you edit to update the site
  theme/
    settings.js          The visitor-facing settings model (theme, accent, ground, …)
    ThemeProvider.js     Holds the settings, writes them to <html>, persists them
  styles/global.css      Design tokens + reset + light/dark themes + the accent blocks
  hooks/
    useFocusTrap.js      Confines focus in the menu, settings panel and dialog
    useSmoothScroll.js   Lenis, switched by the motion setting
    useMagnetic.js       Pointer attraction for the one primary action
  components/
    App.js               Section order, motion config, page furniture
    Section.js           Shared section shell: number, rule, rail, heading, lead
    Nav.js               Sticky masthead, scroll-spy, mobile menu
    Backdrop.js          The page ground and the pointer glow
    Cursor.js            The drawn pointer
    ControlPanel.js      "Adjust" — the colophon panel
    Marquee.js           The running tool strip
    ScrollProgress.js    Reading-position hairline
    Hero / Projects / About / Skills / Experience / Education / Recognition / Contact / Footer
```

**Content lives in `src/data/profile.js`.** Components read from it and never hard-code
copy, so adding a project or a skill is a one-file change.

**Styling goes through the tokens in `src/styles/global.css`.** Components reference
`var(--marker)`, `var(--space-5)` and so on rather than raw values, which is what keeps
the themes and the six accents consistent. Dark mode and each accent redefine only the
semantic tokens.

## Adding a project

Append to the `projects` array in `src/data/profile.js`:

```js
{
  title: 'Project name',
  subtitle: 'One line of context',
  category: 'Machine Learning',   // must exist in projectCategories
  year: '2026',
  status: 'In progress',           // optional badge
  description: 'What it does and how it is built.',
  tech: ['Python', 'PyTorch'],
  repo: 'https://github.com/ayushma18/repo-name',
  accent: ['#3751ff', '#7b3fe4'],  // gradient for the generated cover
}
```

Cover art is generated from `accent` plus the title's initials, so there are no image
files to manage and nothing to 404.

## Deploying to Netlify

Build command `npm run build`, publish directory `build`. `netlify.toml` sets both.

The contact form uses Netlify Forms:

- `public/index.html` contains a hidden static copy of the form. Netlify scans for it at
  deploy time — without it, a form rendered only by React is never registered.
- The React form in `Contact.js` posts url-encoded data to `/` with a matching
  `form-name` value.
- `bot-field` is a honeypot; submissions that fill it are discarded.
- On `localhost` the submit is acknowledged without a network call, because the Netlify
  form handler only exists on the deployed site.

Submissions appear under **Forms** in the Netlify dashboard, where you can also turn on
email notifications.

## Design decisions

Recorded so the reasoning survives the next edit — each one is a deliberate choice.

**Paper and ink, not a product UI.** The ground is warm paper (`--paper`) with ink type
and hairline rules. There are no cards, no soft shadows and no rounded corners, because
that vocabulary is what makes portfolios interchangeable. Structure comes from rules and
the grid: a left rail carries mono metadata, the right column carries the content, and
that split runs down every section.

**Fraunces for voice, IBM Plex for data.** Hierarchy comes from two families doing
different jobs — an optical-size serif for anything that speaks, a mono for anything that
is data (labels, years, counts, tech). Fraunces' calligraphic ampersand is a feature at
heading size and a blot at 20px, so the skills list and focus titles are set in the sans;
that is why they are the two places the display face is not used.

**Projects are a catalogue, not a card grid.** Numbered entries (01–08) on rules, each
expanding in place. A reader scanning a portfolio wants the index first, detail on demand.
`navLinks` in `profile.js` and the section order in `App.js` must stay in sync.

**Every entry carries a `Result` line.** A description says what something is; the result
says what it achieved. Each value comes from that repository's own README — never
estimated, because an unverifiable metric is worse than none.

**Six accents, all pre-measured.** Every accent is defined for both themes and every pair
was checked against paper, the inset ground, its own 10%/14% wash and its solid fill.
All clear WCAG AA in both themes, so changing accent cannot break contrast. The dark
pigments are lighter tints and flip `--on-marker` to ink — white on the dark rust measures
2.97:1 and would fail.

**Nothing that must be readable may depend on a JavaScript animation.** This is the rule
the build is held to. Framer Motion animates inline styles, so an entrance animation that
does not run leaves the element stuck at `opacity: 0` — which happened three times here
(hero intro, settings panel, section reveals) before the policy was adopted. Content and
UI animate in CSS with `animation-fill-mode: both`; the accordion uses
`grid-template-rows: 0fr → 1fr`, which needs no measurement and merely snaps where it is
unsupported. Framer is now used only for scroll-linked decoration — the progress hairline
and the hero parallax — where failure costs nothing.

**Motion is purposeful, never uniform.** There is no fade-up-on-scroll: a page-wide
reveal is both the fragile pattern above and the house style of every generated
portfolio. What moves, moves for a reason — the masthead reveal, one plane of parallax,
the ticker, the magnetic primary action, the drawn pointer, and hover states.

**Two breakpoints.** 640px and 960px, with a few component-level adjustments. More
breakpoints create layouts nobody tests.

## Customisation

Visitors set the page up the way they want it from **Adjust** in the masthead. Choices
persist to `localStorage` and are re-applied before first paint by the inline script in
`public/index.html`, so there is no flash of the wrong theme.

| Setting | Options |
| --- | --- |
| Theme | Light · Dark · Auto (follows the OS) |
| Accent | Rust · Oxblood · Ochre · Moss · Cobalt · Plum |
| Background | Grain · Ruled · Grid · Flat |
| Cursor | Crosshair · Dot · System |
| Motion | Full · Auto (follows the OS) · Reduced |

Each setting is written to `<html>` as a `data-*` attribute and read by the stylesheet —
no inline styles and no per-component theming. To add an accent, add one entry to
`ACCENTS` in `src/theme/settings.js` and one pair of CSS blocks in `styles/global.css`.
The inline pre-paint script mirrors `applySettings()`; keep the two in step.

## Accessibility

- Skip link to `#main`; visible focus ring on every interactive element, never removed.
- Interactive targets are ≥44×44px. Decorative icons may be smaller.
- Motion follows `prefers-reduced-motion` by default, and the visitor can override it
  either way from Adjust. Framer Motion is driven by `MotionConfig`, since the CSS
  media query cannot reach animations it runs from JavaScript.
- The mobile menu, settings panel and certificate viewer trap focus (`useFocusTrap`),
  close on Escape, restore focus to their trigger, and lock background scroll.
- The custom pointer only hides the system cursor once it has mounted, so a failure
  leaves a working cursor rather than none; it is off for coarse pointers and reduced
  motion, and text fields keep their caret.
- Headings run `h1 → h2 → h3` with no skipped levels.
- Status is never conveyed by colour alone — each status carries an icon or a text label.
