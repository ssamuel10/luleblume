// Lule Blume v2 — script.js

// ── Animación al hacer scroll ──────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.card, .galeria-item, .ocasion-card, .about-text, .about-quote-box, .location-grid, .hero-content, .hero-visual, .badge'
).forEach(el => observer.observe(el));


// ── Carrusel de cards ──────────────────────────
document.querySelectorAll('.carrusel').forEach(carrusel => {
  const imgs = carrusel.querySelectorAll('img');
  if (imgs.length <= 1) return;

  const card = carrusel.closest('.card');
  const puntos = card.querySelectorAll('.punto');
  let actual = 0;

  function ir(n) {
    imgs[actual].classList.remove('activa');
    imgs[actual].style.opacity = 0;
    puntos[actual] && puntos[actual].classList.remove('activo');

    actual = (n + imgs.length) % imgs.length;

    imgs[actual].classList.add('activa');
    imgs[actual].style.opacity = 1;
    puntos[actual] && puntos[actual].classList.add('activo');
  }

  puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => ir(i));
  });

  setInterval(() => ir(actual + 1), 3500);
});

// ── Eventos Meta Pixel ─────────────────────────

// Clic en cualquier botón de WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', function() {
    fbq('track', 'Contact');
  });
});

// Clic en Instagram
document.querySelectorAll('a[href*="instagram.com"]').forEach(btn => {
  btn.addEventListener('click', function() {
    fbq('track', 'Lead');
  });
});

// Ver catálogo
const catalogoSection = document.querySelector('#catalogo');
if (catalogoSection) {
  const catalogoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fbq('track', 'ViewContent');
        catalogoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  catalogoObserver.observe(catalogoSection);
}
