# SEO Readiness Audit

## Current State

The site has a working React frontend, but SEO implementation is basic.

This does not mean the site cannot be indexed. It means search engines are receiving less help than they should.

## Metadata Management

Current finding:

- `index.html` has one global `<title>`.
- No route-specific meta descriptions were found.
- No Open Graph or Twitter sharing tags were found.
- No canonical URL tags were found.

Why this matters: each important page should tell search engines and social platforms what that page is about.

Priority: high.

Recommended first step: add a metadata system for active routes:

- `/`
- `/about`
- `/scholarship`
- `/blog`
- `/contact`
- `/faqs`

## Sitemap

Current finding: no `sitemap.xml` was found.

Why this matters: a sitemap is a simple file that lists the pages you want search engines to discover.

Priority: high.

Recommended first step: add `public/sitemap.xml` with the current active public routes.

## Robots.txt

Current finding: no `robots.txt` was found.

Why this matters: this file tells search engines whether they can crawl the site and where the sitemap is.

Priority: high.

Recommended first step: add `public/robots.txt`.

## Structured Data

Current finding: no JSON-LD structured data was found.

Why this matters: structured data helps search engines understand the business name, logo, contact details, address, and website type.

Priority: medium.

Recommended first step: add `Organization` or `EducationalOrganization` JSON-LD for Study Link Hub.

## Indexability

Current finding:

- No `noindex` tag was found.
- The app can serve local routes through Vite.
- OVH must be configured to serve `index.html` for direct route visits.

Why this matters: if `/about` returns a server 404 on refresh, search engines may treat that page as missing even if React navigation works inside the site.

Priority: high.

Recommended first step: test live URLs directly in the browser:

```txt
https://www.study-link-hub.com/about
https://www.study-link-hub.com/blog
https://www.study-link-hub.com/contact
https://www.study-link-hub.com/scholarship
```

Each should load the correct page without needing to start from the homepage.

## React Rendering Impact

Current finding: this is a client-rendered React app.

Beginner explanation: the server sends a small HTML shell, then JavaScript builds the visible content in the visitor's browser.

SEO impact:

- Google can usually render React.
- Some crawlers and social previews may not execute all JavaScript.
- Page-specific metadata is harder unless the app manages it carefully.
- Large JavaScript and media files can slow down page rendering.

Recommendation: do not rebuild or migrate yet. First fix the normal SEO basics and measure results.

## Priority Recommendations

1. Rotate exposed SMTP passwords and move backend secrets to environment variables.
2. Recover Git properly and commit the known-good ZIP state.
3. Add `robots.txt` and `sitemap.xml`.
4. Add per-route title, description, canonical, and social tags.
5. Verify OVH route fallback for direct URLs.
6. Add organization structured data.
7. Compress large media files.
8. Remove unused template routes/assets after confirming they are not needed.
9. Fix lint configuration and then real lint errors.
10. Consider CMS integration only after content ownership and publishing workflow are clear.

