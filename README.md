# VelorixAI website

Plain HTML, CSS and JavaScript. No build step, no framework tooling, no design tool.

## Running it

Upload the whole `velorixai-website` folder to any web host (cPanel, Netlify, Vercel,
Hostinger, S3 — anything that serves static files) and it works as-is.

To preview on your own machine, serve the folder rather than double-clicking
`index.html` — browsers block one local file from loading another. Any of these works:

    python3 -m http.server 8000      # then open http://localhost:8000
    npx serve

VS Code users: right-click `index.html` and choose "Open with Live Server".

## Folder structure

    index.html                  the page — every section is listed and commented here
    css/
      tokens/                   design tokens: colours, fonts, spacing, shape
      design-system.css         VelorixAI design-system component styles
      velorixai.css             this site's styles (sections, photo scenes, responsive)
    js/
      lib.jsx                   scroll/animation helpers, section shell, accent colours
      ui.jsx                    product UI mockups (dashboard, CRM, calendar, email…)
      moments.jsx               PHOTOS registry — every photograph URL on the site
      nav.jsx                   header, navigation, mobile menu
      modal.jsx                 the lead form
      hero.jsx … close.jsx      one file per section, in page order
      app.jsx                   section order
      vendor/                   design-system bundle, image-slot component
    images/
      velorixai-mark.png        the VelorixAI logo mark

React, Babel and Lucide load from unpkg CDN (pinned versions) in `index.html`.

## Common edits

**Text, headings, button labels** — open the matching `js/*.jsx` file. The text sits in
plain quotes; change it and reload.

**Prices and plans** — `js/offers.jsx` (the `PLANS` array near the top).

**Token offers** — `js/tokens.jsx`.

**Photographs** — `js/moments.jsx`, the `PHOTOS` object. Each entry is
`"slot-id": [pexels-id, "Photographer", "profile url"]`. To use your own image instead,
drop the file in `images/` and change that slot's `src` to `images/your-photo.jpg`.

**YouTube video** — `js/founder.jsx`. The id `Ol6ReFCvqeQ` appears in the embed URL,
the thumbnail URL and the fallback link.

**Email address** — `js/close.jsx` (footer and final CTA).

**Navigation items** — the `NAV` array at the top of `js/nav.jsx`.

**Connecting the form to your CRM or email tool** — `js/modal.jsx`, inside `submit()`.
Replace the `setTimeout` that sets the success state with a `fetch()` POST to your
endpoint, then set it on success. Field names are `name`, `email`, `phone`,
`company`, `message`.
