/*
  SITE CONFIGURATION
  ------------------
  Paste the external appointment link into bookingUrl before launch.
  Add a WhatsApp number only after Minal confirms which number should be public.
*/
const SITE_CONFIG = {
  bookingUrl: "",
  whatsappNumber: "",
  phoneDisplay: "9922217290",
  phoneHref: "+919922217290",
  email: "minal.marudkar@gmail.com"
};

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-booking]').forEach(link => {
    if (SITE_CONFIG.bookingUrl) {
      link.href = SITE_CONFIG.bookingUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = '#';
      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('The direct appointment-booking link will be connected here before launch.');
      });
    }
  });

  document.querySelectorAll('[data-phone]').forEach(link => {
    link.href = `tel:${SITE_CONFIG.phoneHref}`;
    const target = link.querySelector('[data-phone-text]');
    if (target) target.textContent = SITE_CONFIG.phoneDisplay;
  });

  document.querySelectorAll('[data-email]').forEach(link => {
    link.href = `mailto:${SITE_CONFIG.email}`;
    const target = link.querySelector('[data-email-text]');
    if (target) target.textContent = SITE_CONFIG.email;
  });

  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    if (!SITE_CONFIG.whatsappNumber) {
      link.hidden = true;
      return;
    }
    link.href = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\D/g, '')}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const contact = (data.get('contact') || '').toString().trim();
      const preference = (data.get('preference') || '').toString().trim();
      const note = (data.get('note') || '').toString().trim();
      const subject = encodeURIComponent(`Website enquiry${name ? ` from ${name}` : ''}`);
      const body = encodeURIComponent(
        `Name: ${name}\nContact: ${contact}\nPreferred reply: ${preference}\n\nMessage:\n${note}\n\nPlease note: This enquiry was sent from the public website and should not contain confidential clinical information.`
      );
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }
});
