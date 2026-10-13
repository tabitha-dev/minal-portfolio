# Minal Marudkar — Hostinger SEO launch steps

## What is already done

- Eleven separate clean-URL pages, with distinct page titles, descriptions, and on-page H1 headings.
- Local context mentioning Navi Mumbai and content using Minal's verified professional scope. No made-up clinic address, ratings, registration number, or qualifications.
- Favicon, WebP assets and a 1200 x 630 branded social-sharing preview.
- Telegram links, enquiry form, and local assets; no email or backend requirements.
- A generator for real canonical URLs, structured data, `sitemap.xml`, Open Graph image URLs and `robots.txt`.

## Wait until the real domain is confirmed

1. Confirm Minal's exact HTTPS public domain, for example `https://www.ACTUAL-DOMAIN.in/` or `https://ACTUAL-DOMAIN.in/`. Decide whether `www` or non-`www` is the preferred address.
2. From the `minal-portfolio` folder in PowerShell or VS Code Terminal, run:

   ```powershell
   python .\publish_setup.py https://ACTUAL-DOMAIN.in/
   ```

   Replace the illustrative domain with the real one. Never execute the script with the temporary `tabitha-dev.github.io` preview URL.
3. Review HTML `rel=canonical` on Home and About, and inspect generated `sitemap.xml` and `robots.txt`; they should use the exact chosen production domain. Re-run with the correct final domain if necessary.
4. In Hostinger hPanel on an HTML-capable hosting plan, use **Websites > Dashboard > File Manager** to open your website's **`public_html`** document root. Upload **the contents** of `minal-portfolio` (the homepage `index.html`, page directories, `assets`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, and icons), not an extra nested `minal-portfolio` folder. A nested folder would incorrectly make the website live under `/minal-portfolio/` instead of `/`.
5. Do **not** deploy `publish_setup.py`, Markdown project notes, `.git/`, `__pycache__/`, backups, or local development files to the public site. Keep them in your local code repository. Ensure HTTPS works, and check every page, especially `/about/`, `/services/`, `/contact/` and direct refreshes. Existing folder `index.html` files provide clean paths on file-based Hostinger web hosting; verify actual hosting supports these (Hostinger Website Builder is different).
6. In Google Search Console, verify the production domain and submit `https://ACTUAL-DOMAIN.in/sitemap.xml`. Check indexing, crawl errors, mobile usability and search performance after launch.
7. Set up a **permanent redirect** so either `www` or non-`www` resolves to the chosen canonical domain; verify HTTPS redirects. Ask Hostinger/Rahul for help if needed.
8. Check final Telegram direct button, scan QR with a phone and send a real test message; test sharing a page in social apps to confirm the preview.
9. Decide what to do with the temporary GitHub Pages preview. Prefer making it private/unpublished when appropriate or serve a true HTTP-accessible `noindex` preview if it must remain publicly available. **Do not copy a noindex tag into the live Hostinger version.** Google's `robots.txt Disallow` cannot reliably prevent indexing of preview pages.

## Important notes

- Social thumbnails and some structured SEO URLs require the production address. They cannot be finalized with an unknown domain.
- Search rankings depend on authority, helpful original content, competition and time; metadata cannot guarantee first-page placement or viral growth.
- The contact form opens a draft in Telegram; visitors press **Send** there. It is not an automated website submission service.
- Web and SEO code are prepared, but launch is not finished until Minal confirms the content and a real device/browser test passes on Hostinger.
