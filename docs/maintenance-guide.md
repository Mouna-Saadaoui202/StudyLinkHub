# Maintenance Guide

## Daily Development Commands

Install frontend dependencies:

```bash
npm install
```

Install backend email-server dependencies:

```bash
cd server
npm install
```

Start local development:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

Current note: lint fails today. This does not stop the production build, but it means the codebase has cleanup debt.

## How To Edit Pages

Most visible pages are in:

```txt
src/pages/
```

The active routes are defined in:

```txt
src/App.jsx
```

Example: to edit the Contact page, open:

```txt
src/pages/contact/Contact.jsx
```

## How To Edit Shared Layout

The page wrapper is:

```txt
src/layouts/Layout.jsx
```

Headers are in:

```txt
src/components/headers/
```

Footers are in:

```txt
src/components/footers/
```

Global styling is mainly in:

```txt
src/assets/css/style.css
```

## How To Add A New Page

1. Create the page component in `src/pages/`.
2. Import it in `src/App.jsx`.
3. Add a `<Route>` entry.
4. Add a link in the relevant header/menu component.
5. Test direct access to the URL after deployment.

## How To Maintain Images And Video

Large media files have a big effect on speed and SEO.

Current build output contains very large assets, including a video around 91 MB and several images larger than 4 MB.

Before adding new media:

- Compress images.
- Prefer WebP or AVIF for photos.
- Keep hero images reasonably sized.
- Avoid uploading full-quality camera originals.
- Avoid adding videos to the JS bundle path unless required.

## How To Maintain The Contact Form

The contact form is in:

```txt
src/pages/contact/Contact.jsx
```

It sends data to:

```txt
https://www.study-link-hub.com/api/send-email
```

The matching backend code is in:

```txt
server/index.js
```

Start the backend locally with:

```bash
cd server
node index.js
```

Current note: `npm start` inside `server/` expects `nodemon`, but `nodemon` is not listed as a dependency.

Do not keep email passwords in source code. Move SMTP details to environment variables before continuing maintenance.

## Git Recovery Recommendation

This folder is not currently a healthy Git repository. The `.git` path exists, but `git status` fails.

Recommended recovery steps:

```bash
git init
git add .
git commit -m "Recover Study Link Hub source from ZIP"
```

Before pushing to GitHub, remove secrets from `server/index.js` and rotate the exposed email passwords.

## Suggested Maintenance Order

1. Secure email credentials.
2. Create a real Git repository and first clean commit.
3. Run dependency security updates and retest the site.
4. Document OVH deployment settings.
5. Fix route fallback on OVH if direct URLs fail.
6. Add basic SEO files and metadata.
7. Reduce large image/video weight.
8. Clean lint gradually.
9. Only then consider bigger features like CMS integration.
