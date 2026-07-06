# Deployment Checklist

Use this checklist before uploading anything to OVH.

## 1. Install Dependencies

Run:

```bash
npm install
```

If you want a cleaner install from the lockfile, run:

```bash
npm ci
```

## 2. Verify The Frontend Locally

Run:

```bash
npm run dev
```

Open the local URL that Vite prints, usually:

```txt
http://127.0.0.1:5173/
```

Check at least these pages:

- `/`
- `/about`
- `/scholarship`
- `/blog`
- `/contact`

## 3. Build Production Files

Run:

```bash
npm run build
```

Expected result:

```txt
✓ built
```

The deployable frontend files will be in:

```txt
dist/
```

## 4. Preview The Production Build

Run:

```bash
npm run preview
```

Open the preview URL and re-check the main pages.

## 5. Upload To OVH

Upload the contents of `dist/`, not the project root.

That means upload files like:

```txt
dist/index.html
dist/assets/...
```

Do not upload `src/`, `node_modules/`, or `server/` to a static web root.

## 6. Configure Route Fallback

Because this is a React single-page app, OVH must serve `index.html` for frontend routes.

Plain explanation: if a visitor opens `/about` directly, OVH needs to send the React app first. Then React shows the About page.

Typical Apache `.htaccess` rule:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 7. Deploy Or Verify The Email API

The contact form calls:

```txt
https://www.study-link-hub.com/api/send-email
```

Before production release, confirm this endpoint exists and works on OVH.

For local backend testing, run:

```bash
cd server
node index.js
```

Note: `server/package.json` currently has `npm start` set to `nodemon index.js`, but `nodemon` is not installed in that server package.

Run:

```bash
curl -I https://www.study-link-hub.com/api/send-email
```

For a POST-only endpoint, a non-200 response can still be normal, but the domain should respond and not look missing.

## 8. Post-Deployment Checks

After upload, check:

- Homepage loads.
- `/about`, `/blog`, `/contact`, and `/scholarship` load directly in the browser.
- Contact form sends a test email.
- Browser console has no major errors.
- Images and video load.
- `https://www.study-link-hub.com/robots.txt` exists after SEO files are added.
- `https://www.study-link-hub.com/sitemap.xml` exists after SEO files are added.
