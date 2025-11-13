// Shared JS for Qamarshan site
// - Mobile nav toggle
// - Smooth scroll (within page)
// - Citizenship form demo handler

(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (links && links.classList.contains('open')) links.classList.remove('open');
    }
  });

  // Citizenship form handler
  const form = document.querySelector('#citizenship-form');
  const status = document.querySelector('#form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('fullName') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (status) {
          status.className = 'alert error';
          status.textContent = 'Please provide a valid name and email.';
        }
        return;
      }
      if (status) {
        status.className = 'alert';
        status.textContent = 'Application received. Note: Qamarshan maintains restricted citizenship; submissions are reviewed at the Sheikh\'s discretion.';
      }
      form.reset();
    });
  }
})();
