# Minal Marudkar Website

A hand-coded, responsive static website built with HTML, CSS and JavaScript.

## Files
- `index.html` — Home
- `about.html` — About / credentials / approach
- `services.html` — Audience-based services
- `support.html` — Areas of support
- `workplace.html` — HR + workplace perspective
- `book-research.html` — Book + dissertation
- `resources.html` — Educational resources
- `contact.html` — Contact + booking handoff
- `privacy.html` — Pre-launch website/privacy notice
- `styles.css` — Complete visual system + responsive styles
- `script.js` — Navigation, booking link config, contact form, FAQ, animations
- `assets/minal-marudkar-headshot.jpg` — supplied headshot

## 1) Add the appointment-booking link
Open `script.js` and paste the final external booking URL here:

```js
const SITE_CONFIG = {
  bookingUrl: "https://YOUR-BOOKING-LINK-HERE",
  ...
};
```

Every “Book a Consultation” button across the website will then use that URL automatically.

## 2) Optional WhatsApp
When Minal confirms the public WhatsApp number, add it in international format without spaces, for example:

```js
whatsappNumber: "919999999999"
```

If it is left blank, the WhatsApp option stays hidden.

## 3) Important pre-launch verification
Before publishing, Minal should confirm:
- exact public professional title and any registration/licensure number that should be shown;
- final in-person address / service geography;
- session fees, duration and availability if those will be public;
- phone, email and WhatsApp details;
- final booking URL;
- privacy / consent / professional disclaimers appropriate to her practice and booking platform.

### Why the site currently says “Psychologist” rather than “Clinical Psychologist”
The supplied CV states “Psychologist | Mental Well-being” and shows an M.A. Psychology (Clinical), but it does not list an RCI Clinical Psychologist registration. Keep the current wording unless Minal confirms the credential and registration that support use of the regulated title.

## 4) Preview locally
Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## 5) Host on GitHub Pages
Upload all files and the `assets` folder to a repository, then enable GitHub Pages from the repository settings. The site has no build step and no database.

## Content notes
The site uses Minal's supplied CV and website specification as the content foundation. It intentionally avoids fake testimonials, invented statistics, fabricated client outcomes and generic stock photography. The book section links to the Amazon URL provided for *Demystifying the 3 Elements of Ayurveda: Empowering Healthy Mind, Body & Soul*.
