// ================================
//   SMOOTH SCROLL FOR NAV LINKS
// ================================

document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Only smooth scroll for same-page links
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ================================
//   FADE-IN ON SCROLL
// ================================

const faders = document.querySelectorAll('.fade-in, .staggered');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ================================
//   BACK TO TOP BUTTON
// ================================

const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================================
//   MOBILE MENU TOGGLE
// ================================

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
