// Lule Blume — script.js

// ── Animación al hacer scroll ──────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

// Elementos que se animan
document.querySelectorAll(
  '.card, .galeria-item, .about-text, .about-quote-box, .location-grid, .hero-text, .hero-visual'
).forEach(el => observer.observe(el));

