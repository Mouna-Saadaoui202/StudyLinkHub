# Technical Risks

## Critical: SMTP Passwords Are In Source Code

`server/index.js` contains SMTP usernames and passwords directly in the file.

Why this matters: anyone who gets this ZIP or future repository can use those credentials to send email. This can cause spam, blocked email accounts, or security problems.

Recommended action:

1. Change the exposed passwords in OVH immediately.
2. Move credentials to environment variables.
3. Remove the old values from source code before creating a public or shared Git repository.

## High: The ZIP Is Not A Valid Git Repository

`git status` fails even though a `.git` directory exists.

Why this matters: without Git history, it is harder to track changes, undo mistakes, or know what changed before deployment.

Recommended action: initialize a fresh Git repository after removing secrets.

## High: BrowserRouter Needs Server Fallback

The app uses React Router with `BrowserRouter`.

Why this matters: `/about` works when clicked inside the site, but a direct browser refresh can fail on static hosting unless OVH rewrites all unknown frontend routes to `index.html`.

Recommended action: configure Apache `.htaccess` fallback on OVH.

## High: Contact API Hosting Is Separate From Static Frontend

The frontend can be static, but the contact form needs a server endpoint.

Why this matters: uploading only `dist/` will not deploy `server/index.js`. The contact form depends on `https://www.study-link-hub.com/api/send-email`.

Recommended action: verify how the current live API is hosted before changing deployment.

## Medium: Lint Currently Fails

`npm run lint` reports 422 errors.

Plain explanation: the code still builds, but the automatic code-quality checker sees many problems.

The largest categories are:

- Unused React imports from older template code.
- Unused components/pages imported into `src/App.jsx`.
- Missing React keys in blog detail loops.
- JSX using `class` instead of `className` in inactive auth pages.
- Vendored minified `jquery-ui.min.js` being linted.
- Server CommonJS code being linted as browser/ES module code.

Recommended action: fix the lint configuration first so vendor files and backend files are handled correctly, then clean real source warnings gradually.

## Medium: Dependency Security Advisories Exist

`npm audit --audit-level=high` reports security advisories in both dependency trees.

Frontend audit result:

- 18 total vulnerabilities.
- 1 critical vulnerability from `swiper`.
- Several high vulnerabilities in build/tooling dependencies such as React Router, Rollup, cross-spawn, minimatch, and flatted.

Backend audit result:

- 5 total vulnerabilities.
- 3 high vulnerabilities, including Nodemailer and Express dependency advisories.
- Some fixes are available with `npm audit fix`; Nodemailer may require a breaking upgrade.

Why this matters: even if the site works, old packages may contain known security problems. Some advisories affect only local development tools, but router, email, and server packages deserve attention.

Recommended action: run safe updates first with `npm audit fix`, test the build and contact form, then separately evaluate breaking updates such as major Nodemailer or Swiper upgrades.

## Medium: Very Large Production Assets

The build succeeds but reports very large assets:

- One video is about 91 MB.
- Several images are larger than 4 MB.
- The main JS bundle is about 769 kB before gzip.
- The main CSS bundle is about 691 kB before gzip.

Why this matters: large files slow down first page load, especially on mobile. Speed affects user experience and can affect SEO.

Recommended action: compress media, remove unused template pages/assets, and later consider code splitting.

## Medium: SEO Is Mostly Global, Not Per Page

Only one global title was found in `index.html`.

Why this matters: Google sees less clear page-specific information for `/about`, `/blog`, `/contact`, and `/scholarship`.

Recommended action: add route-specific metadata using a React metadata library or a small custom metadata component.

## Medium: React Client Rendering Can Limit SEO For Content Pages

The current site renders page content in the browser.

Plain explanation: the first HTML response is mostly the app shell. Search engines can render JavaScript, but static HTML content is usually easier and safer for SEO.

Recommended action: first improve metadata, sitemap, robots, structured data, and performance. Only consider pre-rendering or migration if rankings/content indexing show a real limitation.

## Low: Build Warnings For jQuery UI Image Paths

The build warns that several `img/ui-icons_...png` paths could not be resolved at build time.

Why this matters: some jQuery UI icons may be missing if those CSS paths are used.

Recommended action: check whether jQuery UI widgets are actually visible on the site. If not used, remove the dependency; if used, place the missing images where the CSS expects them.
