# Quality assurance report

about/index.html: structure and local links checked
book-research/index.html: structure and local links checked
contact/index.html: structure and local links checked
index.html: structure and local links checked
insights/index.html: structure and local links checked
privacy/index.html: structure and local links checked
resources/index.html: structure and local links checked
services/index.html: structure and local links checked
shop/index.html: structure and local links checked
support/index.html: structure and local links checked
workplace/index.html: structure and local links checked
Telegram QR successfully decoded to exact username link
Home and About use the same portrait image asset
desktop: all eleven page layouts tested
tablet: all eleven page layouts tested
mobile: all eleven page layouts tested

ALL CHECKS PASSED

This checks the static site, simulated user interactions and Telegram draft URL construction in a browser. Because outbound browser navigation is restricted in the test environment, Telegram account identity, successful message delivery, and live HTTPS hosting must be verified after deployment by Minal. This is not a clinical, legal or security certification.

## Clean-URL update checks (October 13, 2026)

- **11 primary pages** load at clean slash URLs on a local Python HTTP server.
- **27 distinct local URLs/asset references** resolved successfully; no missing internal resources found.
- Every primary page has exactly **one footer Privacy link**; the Connect-column duplicate was removed.
- This simplified pre-launch package **omits 10 legacy `.html` redirect stubs** to avoid duplicate-looking pages in VS Code. There are 11 real primary pages.
- All primary pages have an H1, unique element IDs, working local fragment anchors and no `.html` links in internal navigation.
- `publish_setup.py` was tested twice against a disposable copy: generates 11 clean canonical URLs, exactly one Open Graph URL/image per page, and an XML sitemap with matching clean routes. The test domain was **not** written into the deliverable.
- Direct browser-automation verification of this particular change could **not** be completed in this environment because Chromium blocked loopback navigation. Earlier visual tests apply to the previous layout, which was not restyled in this update. Manual desktop/mobile navigation and refresh should be repeated before publishing.
- Telegram Business/bot features were researched but **no Telegram behavior was changed**.

## Clean complete package verification

- Eleven primary HTML pages present, one under each clean route.
- All page-header navigation buttons open Telegram; Contact Us remains an internal link.
- All old root-level alternate `.html` redirect stubs removed (pre-launch cleanup).
- Unused duplicate image assets and Python cache removed.
- See automated verification summary in build output.
