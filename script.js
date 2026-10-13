/* Keep direct /index.html URLs visually clean while preserving the host's subpath. */
if (window.location.pathname.endsWith('/index.html')) {
  const cleanPath = window.location.pathname.slice(0, -'index.html'.length);
  window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
}

/* Contact uses a Telegram public username; no form backend or visitor data storage. */
const SITE_CONFIG = {
  telegramUsername: 'Psychologist_Minal'
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
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim().slice(0, 80);
      const topic = String(data.get('topic') || '').trim();
      const allowedTopics = ['General enquiry', 'Support & consultations', 'Workplace well-being', 'Resources & research', 'Other'];
      if (!name || !allowedTopics.includes(topic)) return;
      const note = String(data.get('note') || '').trim().slice(0, 500);
      const message = [
        `Hello Minal, I am ${name}.`,
        `I am contacting you from your website about: ${topic}.`,
        note ? `My enquiry: ${note}` : 'Could you please let me know how to proceed?',
        'Thank you.'
      ].join('\n\n');
      const url = `https://t.me/${SITE_CONFIG.telegramUsername}?text=${encodeURIComponent(message)}`;
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = 'Opening Telegram with your draft. Please press Send there to deliver your message.';
      window.location.assign(url); // User must send the message from Telegram.
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
