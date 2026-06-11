# The Honest Salesperson — Website

A simple, no-framework static website deployed on GitHub Pages. Everything is plain HTML, CSS, and JavaScript — no build tools required. To make a change, edit a file and push to GitHub.

---

## File Structure

```
/
├── index.html          ← Home page
├── services.html       ← Services & Pricing page
├── style.css           ← All styles (colors, layout, components)
├── js/
│   ├── nav.js          ← Mobile hamburger menu (used on both pages)
│   ├── calculator.js   ← ROI slider calculator (index only)
│   ├── quiz.js         ← Feast or Famine quiz (index only)
│   ├── chatbot.js      ← Joke chatbot widget (index only)
│   └── substack.js     ← Fetches latest newsletter posts (index only)
└── .github/
    └── workflows/
        └── static.yml  ← Tells GitHub to auto-deploy on every push
```

---

## How to Make Common Changes

### Change the brand name or logo text
Open `index.html` and `services.html`. Find the `<a class="logo">` tag inside `<nav>` and update the text.

### Change the site colors
Open `style.css`. At the very top, you'll see `:root { ... }` — this is where all the colors live. Change the values there and every element using that color will update automatically.

```css
:root {
    --primary-color: #0f172a;   /* Dark navy — used for headings, nav, footer */
    --accent-color: #2563eb;    /* Blue — used for buttons, links, highlights */
    --background-color: #f8fafc; /* Off-white page background */
    --surface-color: #ffffff;   /* White — used for cards and alternating sections */
    --text-main: #334155;       /* Main body text */
    --text-light: #64748b;      /* Lighter/secondary text */
}
```

### Add or edit navigation links
The nav HTML is copied in both `index.html` and `services.html`. Find the `<div class="nav-links">` block in each file and add or change `<a href="...">Link Text</a>` entries.

### Add a testimonial
Find the `<div class="marquee-wrapper">` section in `index.html`. There are two identical sets of testimonial cards (the second set is the loop copy for the scroll animation — keep them in sync). Copy an existing `<div class="testimonial-card">` block and replace the name, title, and quote text.

### Change pricing
Open `services.html`. Find the `<div class="pricing-grid">` section. Each `<div class="pricing-card">` is one tier. Update the price, title, and feature list items (`<li>`) inside it.

### Update FAQ answers
Open `services.html`. Find `<div class="faq-container">`. Each `<div class="faq-item">` is one question — update the `<h4>` for the question and the `<p>` for the answer.

### Change the hero headline or subtext
Open `index.html`. The first `<section class="hero">` contains the `<h1>` and `<p>` tags for the main headline and supporting copy.

### Change the booking calendar
The calendar embed is from TidyCal. In `index.html`, find `<div class="tidycal-embed" data-path="...">` and replace the `data-path` value with your TidyCal username and event slug.

### Change the inquiry form
The form is embedded from Tally. In `index.html`, find the `<iframe data-tally-src="...">` tag and replace the URL with your own Tally form embed link.

### Update the LinkedIn post embeds
LinkedIn posts are controlled by `linkedin-posts.json` in the root of the repo. Edit that file to swap posts in or out — no HTML changes needed.

Each entry needs two things:
```json
[
  {
    "embedUrl": "https://www.linkedin.com/embed/feed/update/urn:li:share:XXXXXXXXX?collapsed=1",
    "height": 500
  }
]
```

**How to get the embed URL and height for a post:**
1. Go to the post on LinkedIn
2. Click the three dots (`...`) in the top-right corner of the post
3. Click **"Embed this post"**
4. LinkedIn shows you an `<iframe>` snippet — copy the `src` value as `embedUrl` and the `height` value as `height`

You can have as many posts in the array as you want. They'll display in a responsive grid.

### Update the Substack feed
In `js/substack.js`, find the line:
```javascript
const rssUrl = 'https://thehonestsalesperson.substack.com/feed';
```
Replace the URL with your own Substack RSS feed URL (it's always `https://YOUR-SUBSTACK-NAME.substack.com/feed`).

### Change the chatbot responses
Open `js/chatbot.js`. Find the `if / else if / else` block inside the `submit` event listener. The three `response` strings are what the bot says on the 1st, 2nd, and 3rd+ messages.

### Add a new page
1. Copy `services.html` to a new file (e.g., `about.html`)
2. Update the `<title>` and `<meta name="description">` in the `<head>`
3. Replace the page content between `<nav>` and `<footer>`
4. Add a link to it in the `<div class="nav-links">` in all pages

---

## How Deployment Works

Every time you push a commit to the `main` branch, GitHub Actions automatically rebuilds and deploys the site. You don't need to do anything extra. The workflow config is in `.github/workflows/static.yml`.

If you need to check deploy status, go to your GitHub repo → **Actions** tab.

---

## How to Add a New Section Style

The site uses reusable CSS classes to control section backgrounds:

| Class | Effect |
|---|---|
| *(no class)* | Default — transparent background, shows the dot-grid pattern |
| `section-surface` | White card background |
| `section-dark` | Dark navy background with white text |
| `section-reviews` | Tight padding, hidden overflow (for the scrolling reviews) |

Example:
```html
<section class="section-surface">
    <div class="container">
        <h2>My New Section</h2>
        <p>Content goes here.</p>
    </div>
</section>
```
