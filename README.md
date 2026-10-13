# Minal Marudkar — professional website (October 2026)

A complete eleven-page responsive static website in HTML, CSS, and JavaScript. It uses Minal's approved navy/green/cream branding, the watercolor brain-and-leaves logo, and the original World Mental Health Day flyer. No backend, build pipeline, API token, or email account is needed to deploy.

## Included and clean URLs

This archive contains **one folder named `minal-portfolio`**. Open that folder (not the ZIP) in VS Code.

- `index.html` - homepage, reached at `/` (not `/index.html` from website navigation)
- `about/index.html` - `/about/`
- `services/index.html` and `support/index.html` - `/services/` and `/support/`
- `workplace/index.html`, `book-research/index.html` - `/workplace/`, `/book-research/`
- `resources/index.html`, `insights/index.html` - `/resources/`, `/insights/`
- `shop/index.html`, `contact/index.html`, `privacy/index.html` - clean URLs for those pages
- `styles.css`, `script.js`, `assets/` - shared design files at the root of `minal-portfolio`
- There are no extra root-level `about.html`, `services.html`, etc. copies. Each clean URL has exactly one primary page in its own folder.

The duplicated **Privacy & Website Notice** footer link was removed from **Connect**. The single footer-bottom privacy notice remains (and privacy information is also on the Contact page).

## Telegram contact

The header **Contact Us** link opens the Contact page. The prominent **Message on Telegram** navigation button opens `https://t.me/Psychologist_Minal` directly in a new tab. The live contact route is `https://t.me/Psychologist_Minal`. The website form **does not submit or deliver messages on its own**. On submission it opens a Telegram chat with a prepared draft including a visitor-supplied name, topic, and optional brief note; the visitor **must press Send** in Telegram. Messages are not collected or stored on the website. As the draft is embedded in a URL, avoid sensitive health details; these should never be requested in first-contact messages. QR code points to the same public Telegram username.

Before publishing, **Minal should test the QR and contact link on her own Telegram account** (including sending a real test enquiry) and confirm all public contact and service claims. A Telegram client is needed to complete sending.

## Preview locally

1. Unzip the full archive, preserving all subfolders.
2. Run `python -m http.server 8000` from **inside `minal-portfolio`**, and open `http://localhost:8000/`. Opening HTML files directly from disk is not recommended for clean routing.
3. Test the navigation, portrait, logo, full-size flyer, Telegram button, QR code and form on phone and desktop.

## Publish

This can be deployed as-is on a static host such as GitHub Pages, Netlify or Cloudflare Pages. Keep the homepage `index.html`, ten page directories containing `index.html`, and the shared root `assets/`, CSS and JS together. GitHub Pages, Netlify and Cloudflare Pages serve directory `index.html` for clean `/about/`-style paths. Test refreshing deep links after deployment. HTTPS is generally provided by the host; set and test your custom domain separately if desired.

The complete 1200×630 social-sharing preview is already in `assets/social-sharing-preview.jpg` (using Minal's approved portrait and logo), and draft Open Graph/Twitter metadata exists on all pages. **Before publishing**, run `python publish_setup.py https://YOUR-CONFIRMED-SITE-URL/`. This generates absolute social image URLs, **clean canonical URLs** and homepage/about structured data, and creates `sitemap.xml` (plus a sitemap reference in root-hosted `robots.txt`). No domain has been guessed in this package. Hosting-specific analytics/logging, legal notices and consultation terms should be reviewed for the final setup.

## Notes on professional titles and claims

Branding uses **Minal Marudkar**, without `Dr.`. The CV includes M.A. Psychology (Clinical), an MBA in HR, counselling-skills study, practical exposure and writing/research. Confirm any relevant regulated registration before publishing corresponding regulated titles and claims. Minal's confirmed support categories are retained; consultation fees, format, boundaries and availability are discussed directly instead of being fabricated.

## Privacy and safety

Do not use the public form for medical records, detailed health information, crisis communication or online therapy. Telegram is a third-party messaging provider and cloud chats are not end-to-end encrypted by default. The footer and Contact page provide India-specific emergency options.

## Post-launch updates

New articles, workshop dates, downloads, WhatsApp, booking and payments can be added later. Avoid advertising an unfinished feature as live. The Shop distinguishes current offerings from future ideas.

## Focused footer and resources refinement (October 13, 2026)

- Footer **only**: the original approved Minal logo is now placed inside a cream circular background for contrast. The PNG itself is byte-for-byte unchanged, as are header graphics and page layout.
- Resources > What to Expect: removed the redundant Privacy & website notice button. Kept the privacy/consent information in the numbered guidance cards, and preserved the complete Privacy page, Contact-page reference and footer links.
- Prepared the social-sharing preview and metadata for all eleven pages. See `publish_setup.py` above to finish domain-dependent SEO correctly.

## Clean URLs & privacy footer (follow-up update)

- Internal navigation now uses directory URLs (e.g., `/about/` rather than `about.html`) with relative links that also work when GitHub Pages is hosted under a `/repository/` prefix.
- Each nested page has a real `index.html`, so direct refreshes work on standard static hosting without SPA rewrite rules.
- The home link returns to `/`, and shared resources resolve from all nested pages.
- The duplicate footer privacy entry was removed; the remaining footer-bottom link is available on all pages.
- No new Telegram Business or bot features were added during this update.


## October 13 final tidy package

- One top-level `minal-portfolio` folder, not nested folders.
- One primary HTML page per clean URL; removed unused legacy `.html` redirect copies because this site has not yet launched.
- Preserved `index.html` on the homepage and `section/index.html` on subpages. These `index.html` filenames are **required** by standard static web hosting for clean slash URLs; they are not duplicate website pages.
- Navigation on all eleven pages now says **Message on Telegram**, which opens Minal's public Telegram chat in a new tab; **Contact Us** still opens the full Contact page.
- Pruned unused alternate photo files, the unused supplied QR source copy and Python cache. Original logo illustration used by the site and the flyer remain intact.
- Don't extract this ZIP into an already existing `minal-portfolio` directory. Extract it into the **parent directory** to prevent `minal-portfolio/minal-portfolio`. Back up your old directory first.
- Because pre-launch legacy redirect stubs have been removed, old direct `.html` URLs will not redirect. If there are existing external bookmarks to those addresses, restore compatibility redirects before going live.

## Hostinger SEO launch preparation

SEO metadata is reviewed and refined. See `HOSTINGER-LAUNCH.md` for step-by-step deployment instructions and `publish_setup.py` for the final domain-dependent canonical URLs, JSON-LD, sitemap, and social image URLs. Do not run `publish_setup.py` until Minal’s real domain is confirmed.
