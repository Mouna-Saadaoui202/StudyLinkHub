# Project Architecture Overview

## What  ThisProject Is

This is a Vite + React single-page application for Study Link Hub. "Single-page application" means the browser loads one main HTML file, then React changes the visible page when the visitor navigates.

The site is currently structured as a static frontend with a separate Express email server folder.

## Main Tools

- React 18: builds the visible user interface.
- Vite 5: runs the local development server and creates the production `dist/` folder.
- React Router DOM 6: controls page routes such as `/about`, `/blog`, and `/contact`.
- Bootstrap, Slick, Swiper, WOW.js, jQuery UI: UI, sliders, animation, and theme behavior.
- Express + Nodemailer in `server/`: receives contact form submissions and sends email through OVH SMTP.

## Important Files And Folders

- `index.html`: the only HTML entry file. It contains the global page title, favicon, viewport tag, and preloader markup.
- `src/main.jsx`: starts React and wraps the app in `BrowserRouter`.
- `src/App.jsx`: defines the active frontend routes.
- `src/pages/`: top-level route pages.
- `src/components/`: reusable sections such as headers, footers, hero sections, blog sections, and contact blocks.
- `src/assets/`: images, videos, CSS, fonts, and local JavaScript files.
- `public/`: files copied directly to production as-is.
- `server/index.js`: Express email API.
- `dist/`: generated production output from `npm run build`. This folder should be regenerated, not edited manually.

## Active Frontend Routes

The currently active routes in `src/App.jsx` are:

- `/`
- `/scholarship`
- `/about`
- `/faqs`
- `/blog`
- `/blog-details/:id`
- `/contact`
- `*` fallback error page

Several extra pages are imported or still present in the codebase but are not active routes. These look like original template/demo pages.

## API Integrations

The contact page posts form data to:

```txt
https://www.study-link-hub.com/api/send-email
```

That endpoint is implemented in `server/index.js` as:

```txt
POST /api/send-email
```

The server uses OVH SMTP via Nodemailer.

## Environment Variables

No frontend `VITE_` environment variables were found.

The backend should use environment variables for SMTP settings, but currently the credentials are written directly in `server/index.js`. This is a critical security and maintenance risk.

Recommended backend variables:

```txt
SMTP_HOST=pro3.mail.ovh.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@study-link-hub.com
SMTP_PASS=replace-with-real-password
CONTACT_TO=contact@study-link-hub.com
PORT=3010
```

## Deployment Model

The frontend deployment output is the `dist/` folder created by:

```bash
npm run build
```

For OVH static hosting, upload the contents of `dist/` to the web root.

Because the app uses `BrowserRouter`, OVH must be configured so direct URLs like `/about` and `/contact` return `index.html`. Without this rewrite, visitors may see a 404 when refreshing a subpage.

The backend email server is separate. It must be hosted as a Node process or replaced with an OVH-compatible server-side email handler.

## SEO Implementation Today

Current SEO is minimal:

- One global `<title>` exists in `index.html`.
- No route-specific title or meta description management was found.
- No `robots.txt` was found.
- No `sitemap.xml` was found.
- No canonical URL tags were found.
- No structured data JSON-LD was found.
- Content is rendered by React in the browser, not pre-rendered at build time.

