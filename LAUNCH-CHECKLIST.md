# Pre-launch checklist — Minal Marudkar

## Confirm before publishing

- [ ] Minal approves her public name/title, service scope and any relevant registration statement. Do not add “Dr.” without a qualifying credential.
- [ ] Minal opens `https://t.me/Psychologist_Minal` from a phone and computer and confirms the intended profile.
- [ ] Minal scans the website's QR code with her phone and confirms it reaches the same account.
- [ ] Minal submits a sample enquiry through the site, **presses Send in Telegram**, and checks receipt.
- [ ] Minal approves privacy notice, contact wording, consultation scope and practical next steps.
- [ ] Hosting platform and final domain are chosen; HTTPS, redirects and indexing checked.

## Quality assurance completed locally

- [x] All eleven HTML pages parsed and checked for internal asset/link targets.
- [x] Shared logo and favicon assets supplied, and about/homepage portraits use one image.
- [x] Original educational flyer preserved in Resources and linked from Insights.
- [x] Telegram form generates an encoded draft from name/topic/message fields.
- [x] Replaced mailto-based enquiry; no email infrastructure required for this version.
- [x] Responsive layouts tested in headless Chromium; note that external Telegram delivery and third-party link availability require live manual verification.

## After launch (optional)

- [x] Create a branded 1200×630 social-preview image from the approved portrait and artwork.
- [ ] Once the real domain is assigned, run `python publish_setup.py https://YOUR-CONFIRMED-SITE-URL/` to generate absolute social metadata, canonical URLs, structured data and `sitemap.xml`.
- [ ] Register the live site and submit sitemap in Search Console. Confirm social image previews are fetched successfully.
- [ ] Publish additional verified educational resources, events and shop offerings as they become available.
- [ ] Review provider/hosting privacy settings and applicable professional requirements as services expand.

## Follow-up refinements

- [x] Footer logo gets an ivory badge without changes to the approved artwork or header.
- [x] Resources/What-to-Expect page keeps the consent guidance but removes redundant privacy notice button.
- [x] Social-sharing preview built from approved portrait and unchanged logo; dimensions: 1200×630.

## Clean URL release checks
- [ ] Open Home at `/`, About at `/about/`, Contact at `/contact/`, and Privacy at `/privacy/`; confirm addresses do not end in `.html`.
- [ ] Refresh `/services/`, `/resources/`, and `/contact/` directly.
- [x] Confirm there are no duplicate legacy `about.html` / `services.html` redirect stubs in this clean pre-launch package.
- [ ] Confirm only one Privacy notice appears in the footer (footer-bottom).
- [ ] Deploy the **contents** of `minal-portfolio` as the website root and regenerate the sitemap with `publish_setup.py` using the real URL.

- [ ] Check that **Contact Us** opens `/contact/` and **Message on Telegram** opens `https://t.me/Psychologist_Minal` in a new tab on desktop and mobile.
