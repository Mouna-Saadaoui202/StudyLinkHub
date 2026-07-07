# Project Architecture Overview

## What This Project Is

This is a Vite + React single-page application for Study Link Hub. The current website is a bilingual landing page with a separate blogs area.

The recovered ZIP still contains many older template components and pages. Those files are kept as a reference, but the active website is now organized under `src/features/site/`.

## Main Tools

- React 18: builds the visible user interface.
- Vite 5: runs the local development server and creates the production `dist/` folder.
- React Router DOM 6: controls routes such as `/`, `/fr`, `/blogs`, and `/fr/blogs`.
- Formspree: receives the contact and newsletter submissions.

## Active Files And Folders

- `index.html`: the HTML entry file.
- `src/main.jsx`: starts React and wraps the app in `BrowserRouter`.
- `src/App.jsx`: defines the active frontend routes.
- `src/features/site/pages/`: active landing page and blog pages.
- `src/features/site/data/siteContent.js`: bilingual website text, contact details, blog content, and asset references.
- `src/features/site/styles/landing.css`: active website styling.
- `src/assets/img/`: images, logo, icons, and older template assets.
- `docs/`: project recovery, deployment, maintenance, SEO, and risk notes.
- `dist/`: generated production output from `npm run build`. Regenerate it; do not edit it manually.

## Legacy Template Folders

These folders are mostly from the original ZIP template and are not routed by the current app:

- `src/components/`
- `src/layouts/`
- older folders inside `src/pages/`, such as `about`, `course`, `event`, `team`, and similar template pages
- `src/assets/css/style.css`
- `src/assets/js/`

Keep them for now as backup/reference. They can be archived or removed later after the new landing/blog site is fully approved.

## Active Frontend Routes

The current active routes in `src/App.jsx` are:

- `/`: English landing page.
- `/fr`: French landing page.
- `/blogs`: English blogs page.
- `/fr/blogs`: French blogs page.
- `/blogs/:slug`: English blog detail page.
- `/fr/blogs/:slug`: French blog detail page.
- `/articles` and `/fr/articles`: redirects kept for compatibility.
- `*`: redirects unknown paths to `/`.

## Form Integrations

The website uses Formspree instead of the old manual email server.

Current frontend environment variables:

```txt
VITE_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/xwvdzvar
VITE_FORMSPREE_NEWSLETTER_ENDPOINT=https://formspree.io/f/mbdvbdqq
```

These are documented in `.env.example`.

## Deployment Model

The frontend deployment output is created by:

```bash
npm run build
```

For GitHub Pages, `vite.config.js` currently uses:

```txt
/StudyLinkHub/
```

For OVH static hosting on the real domain, confirm whether the site is hosted at the domain root. If yes, the Vite `base` may need to be `/` for OVH deployment.

Because the app uses `BrowserRouter`, the host must return `index.html` for direct URLs such as `/blogs` and `/fr/blogs`. Without this fallback, visitors can see a 404 when refreshing a subpage.

## SEO Implementation Today

Current SEO basics are in place:

- The landing page updates the document title and meta description by language.
- Blog detail pages set page-specific titles and meta descriptions.
- Blog routes exist for SEO-focused content.

Still missing or recommended:

- `robots.txt`
- `sitemap.xml`
- canonical tags
- structured data JSON-LD for organization, local business, and blog posts
- stronger pre-rendering strategy if organic search becomes a major traffic channel
