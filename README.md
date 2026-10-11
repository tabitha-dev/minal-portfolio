# Minal Marudkar · Portfolio refresh

A responsive static website made with HTML, CSS and vanilla JavaScript. Design keeps the existing sage green, ivory and muted clay palette.

## What's new
- Revised psychology, HR, author and researcher introduction using Minal's supplied wording.
- Updated portraits and corrected book promotional mockup, optimized as WebP.
- Corrected “3 Elements of Ayurveda” promotional mockup replaces the previous CSS imitation and incorrect-title graphic.
- Removes dataset-size and participant-age references from the research overview.
- Adds MBA **Employee Retention** dissertation topic without inventing unprovided findings.
- Adds **What to Expect** visitor guide to Resources.
- Adds **Psychology Shop** and **Insights** pages; future products are ideas only, and the Insights page links to three verified public LinkedIn posts.
- Responsive accessible grouped navigation, consistent footer and contact route.
- Removes in-person service claims and public phone/email information from footers.
- Enquiry buttons lead to contact, not a broken booking link.

## Preview
Open `index.html` or run `python -m http.server 8000` here and visit `http://localhost:8000`.

## How the contact form works
The form opens a pre-written email in the visitor's mail application, using the original email contact value kept in `script.js`. No backend stores or transmits a form submission. Mailto **requires a configured email application** and cannot guarantee successful delivery. A hosted form service (with appropriate privacy and consent review) is required for browser-only direct submissions.

## Optional integrations
`script.js` has `SITE_CONFIG.bookingUrl` and `whatsappNumber` as empty strings. Do not fill these until Minal confirms public details and the provider/privacy requirements. Booking-style CTA buttons currently point to `contact.html`; they will link to the confirmed provider if a URL is added.

## Please confirm before publishing
1. **Book title corrected:** The site now uses the newly approved **“3 Elements of Ayurveda”** book mockup in place of the earlier “3 Pillars” graphic. The visual is promotional artwork; final print-format availability should still be confirmed independently.
2. Confirm exact public professional title, qualifications, registration where relevant, scope of support, and geography of online appointments.
3. Approve the exact consultation process, confidentiality/limits, referral policy, fees, duration, booking link and any messaging contact.
4. Confirm the contact email is still approved for public enquiries; it appears in `script.js` and the Contact page mailto link (but not the footer).
5. Supply the MBA dissertation summary (purpose, approach, lessons learned).
6. Three publicly accessible LinkedIn posts are now linked in curated cards. Confirm selections for continued display, and supply additional links if more posts are desired. There is no automatic LinkedIn sync.
7. Confirm which future Shop offerings are actually available before enabling pricing, payment and downloads.
8. Add a complete practice-specific legal/privacy notice after reviewing applicable obligations and any external tools.
9. **Trauma infographic:** the supplied third-party infographic carries a `thepsychologist.in` watermark and labels that could be misleading. It was **not republished**; the Insights page contains a carefully worded original educational note instead. Reuse only with permission and professional review.
10. AI counselling bot and paid conversations have **not** been implemented. Such a feature requires clinical safety review, informed consent, privacy/security controls, crisis escalation and a defined scope that does not present the tool as a replacement for a qualified professional.

## Pages
`index.html` Home; `about.html` About; `services.html` Services; `support.html` Areas of Support; `workplace.html` HR & Workplace; `book-research.html` Book & Research; `resources.html` Learning and What to Expect; `shop.html` Psychology Shop; `insights.html` Insights; `contact.html` Contact; `privacy.html` Notice.

## Deploy
All files must be kept together along with the `assets/` directory. Upload the contents to a static host or GitHub Pages. No build step or third-party runtime is necessary; Google Fonts are optional and require internet access.
