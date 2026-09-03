# Velorix AI website

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

    index.html                  the landing page — every section listed and commented
    terms.html                  Terms & Conditions
    refund.html                 Refund Policy
    privacy.html                Privacy Policy
    thank-you.html              post-form page with the Cal.id calendar
    css/
      tokens/                   design tokens: colours, fonts, spacing, shape
      design-system.css         Velorix AI design-system component styles
      velorixai.css             this site's styles (sections, photo scenes, responsive)
    js/
      config.js                 ⭐ SITE CONFIG — brand, contacts, links, apps,
                                packages, pricing, media, CTA labels
      footer.jsx                the global footer (used by every page)
      page.jsx                  shared shell for the policy pages
      thankyou.jsx              the thank-you page
      lib.jsx                   scroll/animation helpers, section shell, accent colours
      ui.jsx                    product UI mockups (dashboard, CRM, calendar, email…)
      moments.jsx               PHOTOS registry — every photograph URL on the site
      nav.jsx                   header, navigation, mobile menu
      modal.jsx                 the lead form
      hero.jsx … close.jsx      one file per section, in page order
      app.jsx                   section order
      vendor/                   design-system bundle, image-slot component
    images/
      velorixai-mark.png        the Velorix AI logo mark

React, Babel and Lucide load from unpkg CDN (pinned versions) in `index.html`.

## Start here: js/config.js

Almost everything you will want to change lives in one file — `js/config.js`.
Edit a value, reload the page, done. It holds:

- **brand** — name, logo file
- **contact** — email, WhatsApp, phone, address
- **links** — Cal.id booking URL, policy page URLs, social links
- **media** — the YouTube URL (paste any watch/shorts link; the embed,
  thumbnail and fallback are all derived from it)
- **cta** — every button label on the site
- **apps** — the 16 current apps: name, description, icon, colour
- **upcomingApps** — shown separately, never counted in a package
- **packages** — Prestige and Signature; each lists `appIds`, so app counts
  are calculated and can never drift out of sync
- **pricing** — the investment range and note
- **footer** — blurb, copyright, navigation links

Because packages reference apps by id, renaming an app once updates it in the
app index, both package tabs, and the plan card app lists.

## Booking flow

    CTA → lead form (name, email, phone) → thank-you.html → Cal.id calendar

The Cal.id URL is `links.booking` in the config. The visitor's name, email and
phone are appended to it so the calendar arrives prefilled. Change the URL in
one place and every CTA on the site follows.

## Common edits

**Text, headings, button labels** — open the matching `js/*.jsx` file. The text sits in
plain quotes; change it and reload.

**Prices, plans and apps** — `js/config.js`.

**Policy page text** — the `page-data` JSON block near the top of
`terms.html`, `refund.html` or `privacy.html`. Each section is
`{h: "Heading", p: ["paragraph", …], list: ["bullet", …]}`.

**Footer** — `js/footer.jsx` for the layout, `js/config.js` for the content.
It is one component shared by all five pages.

**Photographs** — `js/moments.jsx`, the `PHOTOS` object. Each entry is
`"slot-id": [pexels-id, "Photographer", "profile url"]`. To use your own image instead,
drop the file in `images/` and change that slot's `src` to `images/your-photo.jpg`.

**YouTube video** — `media.youtube` in `js/config.js`. Paste any YouTube link.

**Email, phone, WhatsApp** — `contact` in `js/config.js`.

**Navigation items** — the `NAV` array at the top of `js/nav.jsx`.

**Connecting the form to your CRM or email tool** — `js/modal.jsx`, inside `submit()`.
Replace the `setTimeout` that sets the success state with a `fetch()` POST to your
endpoint, then set it on success. Field names are `name`, `email`, `phone`,
`company`, `message`.
