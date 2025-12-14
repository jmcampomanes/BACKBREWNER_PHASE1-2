/* ====== Mobile Menu Toggle ====== */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ====== Back to Top Button ====== */
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (toTop) {
    if (window.scrollY > 300) toTop.style.display = "block";
    else toTop.style.display = "none";
  }
});
if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ====== Smooth scroll for same-page anchors ====== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ====== Lightbox for Gallery ====== */
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

if (galleryItems && lightbox) {
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      const large = img.dataset.large || img.src;
      lightboxImage.src = large;
      lightbox.classList.add('active');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
  }

  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
}

/* ====== Basic Contact Form Handling ====== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple validation (HTML required already blocks empty)
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Here you would usually send data to the server.
    alert('Thanks, ' + name + '! Your message has been received.');
    contactForm.reset();
  });
}


