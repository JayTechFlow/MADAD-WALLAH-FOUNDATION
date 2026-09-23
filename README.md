# MADAD WALLAH FOUNDATION — Official Website

Production-ready static website for **MADAD WALLAH FOUNDATION**, a Section 8
non-profit company (CIN: U88900BR2026NPL087297, DARPAN ID: BR/2026/1184067).

**Live:** https://madad-wallah-foundation-ngo.netlify.app

## Pages

| File | Page |
|---|---|
| `index.html` | Home — hero, focus areas, stats, news, CTA |
| `about.html` | About Us — overview, vision & mission, leadership |
| `objectives.html` | Our Objectives — 6 MoA domains |
| `activities.html` | Activities / Programs |
| `gallery.html` | Gallery — photo grid + lightbox, video slots |
| `join.html` | Join Us / Volunteer information & Google Form registration |
| `donate.html` | Donate — bank details, UPI QR, impact |
| `transparency.html` | Statutory Documents & Transparency |
| `contact.html` | Contact Us — address, email, Google Map |
| `privacy-policy.html` | Privacy Policy |
| `terms.html` | Terms & Conditions |
| `refund-policy.html` | Refund & Cancellation Policy (donations) |

## Structure

```
├── index.html + 11 inner pages
├── css/style.css        # modern responsive design system (tokens, components, WCAG AA)
├── js/components.js     # reusable Web Components (<site-topbar>, <site-header>, <site-footer>)
├── js/main.js           # interactive features: stats counters, lightbox, validation, copy utils
├── images/              # logo, hero, gallery, leaders, UPI QR
```

## Reusable Web Components

All pages now use modular Web Components defined in `js/components.js`:
- `<site-topbar></site-topbar>` — Top registration bar with CIN, DARPAN, 80G badges, phone helpline, email, and social media buttons.
- `<site-header></site-header>` — Sticky brand header with automatic active page highlighting and full-height mobile slide drawer with backdrop blur.
- `<site-footer></site-footer>` — Comprehensive 4-column footer with organization overview, quick links, get involved links, registered address, follow & connect social icons, and copyright.

Centralizing these components eliminates over 1,000 lines of duplicated code across the 12 HTML pages. Updating contact numbers, links, or social media handles in `js/components.js` automatically applies to every page.

## Official Social Media Channels

- **LinkedIn:** https://www.linkedin.com/in/madad-wallah-foundation-58b4a3435/
- **Instagram:** https://www.instagram.com/madadwallah
- **Facebook:** https://www.facebook.com/friendsofom
6. **Tagline** — the Hindi tagline "हर हाथ में मदद क़ा साथ" is a placeholder;
   swap it in `index.html` hero if the foundation has an official one.
7. **Gallery photos/videos** — replace demo images with real event photos and video media in `gallery.html`.
8. **News items** — update the three news cards in `index.html` as events happen.

## Deploy (free options)

- **GitHub Pages**: push this folder to a repo → Settings → Pages → deploy from branch.
- **Netlify**: drag-and-drop the folder at app.netlify.com/drop, or `netlify deploy --prod`.
- **Vercel**: `vercel --prod` from this folder.

No build step required — pure HTML/CSS/JS.

## Regenerating demo assets

```bash
python assets/generate_images.py   # all images incl. UPI QR
python assets/build_pages.py       # rebuilds the 10 template-generated pages
```
(`index.html` and `about.html` are hand-maintained and are NOT touched by the builder.)
