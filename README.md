# Polo Portfolio — React + Vite + Tailwind CSS v4

A code recreation of the "Polo" Framer portfolio template (https://portfolo.framer.website/),
built with React, Vite, and the latest Tailwind CSS v4.

## Stack

- **Vite** — build tool / dev server
- **React 19**
- **Tailwind CSS v4** — configured via the official `@tailwindcss/vite` plugin.
  There is **no `tailwind.config.js`** — all design tokens (colors, fonts, the
  `container-page` layout helper, buttons, cards) are defined directly in
  `src/index.css` using Tailwind v4's CSS-first `@theme` / `@layer` syntax.
- **lucide-react** — icon set (a few social icons — X, Instagram, Dribbble,
  Facebook — are hand-drawn inline SVGs in `src/components/SocialIcons.jsx`
  since the installed lucide-react version no longer ships brand icons).

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  index.css               # Tailwind import + @theme tokens (colors, fonts, container) + shared component classes
  App.jsx                  # page composition
  data/content.js          # all site copy/content in one place — edit here to re-skin the content
  components/
    Navbar.jsx
    Hero.jsx
    Profile.jsx
    Process.jsx
    Services.jsx
    Projects.jsx
    WhyMe.jsx
    Testimonials.jsx
    FAQ.jsx                # accordion (interactive)
    CTA.jsx
    Footer.jsx
    SocialIcons.jsx         # inline SVG brand icons
```

## Notes

- All imagery is done with CSS gradients/placeholder blocks rather than the
  original template's photography/screenshots, since those are the original
  designer's copyrighted assets — swap in your own photos/project screenshots
  where you see `bg-gradient-to-br ...` placeholder blocks.
- Colors, fonts and the container width all live in `src/index.css` under the
  `@theme` block — change a value there and it updates everywhere via the
  generated Tailwind utilities (`bg-surface`, `text-heading`, `text-body`,
  `text-dim`, `bg-accent`, `text-gold`, `bg-live`, `border-border`, etc.).
