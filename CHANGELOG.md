# October 13, 2026 — clean complete delivery

- Consolidated the latest approved site and all eleven Telegram navigation changes into one complete ZIP.
- Every page now offers **Contact Us** (Contact page) and **Message on Telegram** (direct Telegram chat).
- Removed pre-launch legacy `.html` redirect files and unused alternate assets to simplify the VS Code Explorer.
- Preserved the homepage, ten clean routes, logo, footer ivory badge, privacy footer cleanup, portrait, flyer, form, styles and scripts.

---

# October 13, 2026 — footer and pre-launch metadata refinement

- Scoped cream background badge added **only** to footer logo; source logo file unchanged.
- Removed the duplicate Privacy & website notice button from Resources > What to Expect (privacy guidance and links in Contact/footer remain).
- Added a 1200x630 branded sharing preview featuring Minal's approved portrait and logo.
- Added draft Open Graph/Twitter image metadata to all pages; `publish_setup.py` finalizes full URLs after domain is confirmed and generates sitemap and structured data.

---

# Changes for October 13, 2026 launch candidate

- Applied approved watercolor mental-wellness logo to header/footer and generated favicon and touch icons from the matching artwork.
- Updated the site-wide palette toward the original flyer’s navy, green, teal and warm cream.
- Reused the exact homepage portrait asset on the About page without changing the established portrait container proportions.
- Published the original World Mental Health Day 2026 flyer within Resources and linked it from Insights.
- Replaced email-based contact action with @Psychologist_Minal link, machine-readable QR code and an enquiry that opens a drafted Telegram message. Visitors still press Send in Telegram.
- Adjusted contact, privacy and visitor expectation text to match actual capabilities.
- Preserved Minal’s existing support offerings, project/book/research material, and future-ideas Shop wording.
- Retained static hosting compatibility and fixed hidden-content reliance on page-load animations.
- Completed structural, responsive and interactive local checks. See QA_RESULTS.md.

### Clean URL / footer refinement
- Converted page links to clean URLs with directory-based `index.html` pages.
- Pre-launch legacy `.html` redirect stubs were later removed in the simplified final package.
- Removed duplicate Connect-column Privacy notice link while keeping bottom footer privacy link and the Contact-page notice.
- Updated SEO production script and documentation for clean routes.
- Left Telegram contact behavior unchanged.
