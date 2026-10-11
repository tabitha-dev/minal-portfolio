# Static website quality check

- Checked all eleven HTML pages for local links, same-page anchor targets, linked assets and h1 headings.
- Tested desktop (1440px), tablet (900px), and mobile (390px) layouts using Chromium with embedded local assets.
- Checked horizontal overflow, image decoding, JavaScript errors and mobile navigation dropdown/Escape behaviour.
- Result: PASS on automated checks.
- Limit: Chromium navigation to localhost/file URLs was restricted in this environment; the website was rendered using local assets inlined in a test document instead. External services and mail delivery were not tested.
