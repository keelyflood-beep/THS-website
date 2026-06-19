# CLAUDE.md

Guidance for working in this repo. For step-by-step "how to change X" instructions, see `README.md` — it is thorough and authoritative; this file covers conventions and gotchas.

## What this is

The marketing website for **The Honest Salesperson** (sales coaching + retained recruitment, run by Keely Flood). It is a **static site with no build step** — plain HTML, CSS, and vanilla JS. There is no framework, bundler, package manager, test suite, or lint config. To change the site, edit a file and push.

## Pages

- `index.html` — home (hero, quiz, calculator, chatbot, testimonials, LinkedIn/Substack feeds, calendar, inquiry form)
- `services.html` — coaching services & pricing, about, FAQ
- `recruitment.html` — retained recruitment search (places **180 recruiters** and **sales leadership** roles, **retained only**)

## Critical conventions

- **The `<nav>` block is duplicated in every HTML file.** There is no shared layout/include. When you add a nav link or change the nav, you must edit **all** HTML pages to keep them in sync.
- **Testimonials are duplicated within `index.html`.** The `.marquee-wrapper` contains two identical sets of testimonial cards (the second is the loop copy for the CSS scroll animation). Edit both sets so they match.
- **Use existing CSS, don't add new.** `style.css` defines design tokens in `:root` (colors, radius) and reusable classes (`.container`, `.surface-box`, `.content-grid`, `.pricing-card`, `.faq-item`, `.btn`, section backgrounds like `.section-surface`). Build pages by composing these classes plus inline `style="..."` for one-offs, matching the existing pages — avoid introducing new stylesheet rules unless necessary.
- **Brand facts that recur in copy:** Keely has personally billed **over $10M** in recruitment sales. This figure appears in multiple files (`index.html`, `services.html`, `recruitment.html`) — if it changes, grep and update every instance.
- All CTAs link to the booking anchor `index.html#calendar`.

## Adding a new page

Copy an existing page (e.g. `services.html`), update `<title>` + `<meta name="description">`, replace the content between `<nav>` and `<footer>`, and add the nav link to **every** HTML file. Include `<script src="js/nav.js"></script>` before `</body>` so the mobile menu works.

## JS

Each file in `js/` is a small standalone widget loaded via `<script>` (no modules/imports). `nav.js` (mobile menu) is used on every page; the rest are index-only. External data: `linkedin-posts.json` (LinkedIn embeds) and the Substack RSS URL hard-coded in `js/substack.js`.

## Deployment

Pushing to `main` auto-deploys via GitHub Pages (`.github/workflows/static.yml`). There is nothing to build or run locally — to preview, just open the `.html` file in a browser.
