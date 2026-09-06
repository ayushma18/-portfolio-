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
  styles/global.css      Design tokens (colour, type, spacing) + reset + light/dark themes
  components/
    App.js               Section order
    Section.js           Shared section shell: eyebrow, heading, lead, spacing
    Nav.js               Fixed header, scroll-spy, mobile menu
    ThemeToggle.js       Flips data-theme on <html>
    icons.js             Maps icon names in profile.js to react-icons components
    Hero / About / Projects / Skills / Experience / Education / Recognition / Contact / Footer
```

**Content lives in `src/data/profile.js`.** Components read from it and never hard-code
copy, so adding a project or a skill is a one-file change.

**Styling goes through the tokens in `src/styles/global.css`.** Components reference
`var(--brand-500)`, `var(--space-5)` and so on rather than raw values, which is what
keeps light and dark mode consistent. Dark mode redefines only the semantic tokens.

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
