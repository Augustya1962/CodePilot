# CodePilot — CSET489 SEO Mini-Project Website

A custom, responsive multi-page website built with plain HTML, CSS, and JavaScript. It uses an original dark/minimal visual identity and is designed as a student learning hub for coding and placement preparation.

## Pages
- `index.html` — Home page and learning path overview
- `roadmap.html` — Six-stage coding and placement roadmap
- `python.html` — Python beginner lessons and a short interactive quiz
- `dsa.html` — DSA topic checklist with client-side progress
- `sql.html` — SQL quick reference, DBMS concepts, and quiz
- `interviews.html` — Interview preparation and project-answer worksheet
- `about.html` — Project purpose and principles

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or run a local static server from this folder (for example, `python -m http.server 8000`) and visit `http://localhost:8000`.
3. Test all pages and mobile navigation.

## Publish free
A straightforward option is Cloudflare Pages or GitHub Pages for static hosting. Upload/push the complete folder, including `assets/`. After deployment:
1. Replace `https://YOUR-SITE-NAME.pages.dev/` in every HTML canonical URL and in `robots.txt`, `sitemap.xml`, and the JSON-LD website URL with the actual public URL.
2. Verify that every page loads and the CSS/JS/assets paths work.
3. Submit the sitemap in Google Search Console after verifying site ownership.
4. Check the deployed URL with Google Search Console URL Inspection and a mobile-friendly browser test.

## SEO notes
- Every page has a unique title and meta description.
- Pages use semantic HTML, responsive layouts, internal links, a sitemap, robots.txt, canonical tags, and relevant WebSite structured data on the homepage.
- Canonical URLs are placeholders until you publish. Replace them before treating the site as production-ready.
- Keyword ideas in the accompanying project notes are initial hypotheses, not verified search-volume data. Use Google Keyword Planner, Google Trends, Search Console, and SERP observations to document research in the final report.
- Ranking, indexing, and traffic are not guaranteed by implementation alone.

## CSET489 submission checklist
- [ ] Replace canonical URL placeholders
- [ ] Capture screenshots of desktop and mobile views
- [ ] Document actual keyword research and competitor review
- [ ] Validate HTML, links, metadata, and sitemap
- [ ] Record actual Lighthouse/PageSpeed results after deployment
- [ ] Write the report in your own words and include only work you performed
