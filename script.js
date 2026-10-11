/*
  SITE CONFIGURATION
  ------------------
  Paste the external appointment link into bookingUrl before launch.
  Add a WhatsApp number only after Minal confirms which number should be public.
*/
const SITE_CONFIG = {
  bookingUrl: "", // Optional appointment system (enable only when confirmed)
  whatsappNumber: "", // Optional public WhatsApp handle (enable only with consent)
  email: "minal.marudkar@gmail.com" // Used by the mailto contact form
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


  const navGroups = document.querySelectorAll('.nav-group');
  const collapseGroups = (except = null) => navGroups.forEach(group => {
    if (group === except) return;
    group.classList.remove('expanded');
    group.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
  });
  navGroups.forEach(group => {
    const trigger = group.querySelector('.nav-trigger');
    trigger?.addEventListener('click', () => {
      const willOpen = !group.classList.contains('expanded');
      collapseGroups(group);
      group.classList.toggle('expanded', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-group')) collapseGroups();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      collapseGroups();
      if (nav?.classList.contains('open')) {
        nav.classList.remove('open');
        menuButton?.setAttribute('aria-expanded', 'false');
        menuButton?.focus();
      }
    }
  });

  document.querySelectorAll('[data-booking]').forEach(link => {
    if (SITE_CONFIG.bookingUrl) {
      link.href = SITE_CONFIG.bookingUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = 'contact.html'; // No dead or misleading booking buttons
    }
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
      const note = (data.get('note') || '').toString().trim();
      const subject = encodeURIComponent(`Website enquiry${name ? ` from ${name}` : ''}`);
      const body = encodeURIComponent(
        `Name: ${name}\nContact email: ${contact}\n\nMessage:\n${note}\n\nPlease note: This enquiry was sent from the public website and should not contain confidential clinical information.`
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
