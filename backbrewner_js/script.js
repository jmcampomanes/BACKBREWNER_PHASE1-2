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


/* ====== Sidebar: Auto-Open Active Category ====== */
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".menu-category");

  categories.forEach(category => {
    const btn = category.querySelector(".dropdown-btn");
    const list = category.querySelector(".dropdown-list");
    
    if (btn && list) {
      // Check if the button is wrapped in a link (<a> tag)
      // If parent is <a>, it means clicking it navigates to another page.
      // If parent is NOT <a>, it means we are currently ON this page.
      const isLink = btn.parentElement.tagName === 'A';

      if (!isLink) {
        // We are on this page (e.g., on Foods page, the Foods button has no link)
        // 1. Auto-open the menu so sub-categories are visible immediately
        list.classList.add("show");

        // 2. Allow clicking the button to toggle the menu closed/open
        btn.addEventListener("click", (e) => {
          // Prevent any default behavior just in case
          e.preventDefault(); 
          list.classList.toggle("show");
        });
      }
      // If it IS a link, we do nothing. The browser will navigate to the
      // matched HTML page, and this script will run THERE to open the menu.
    }
  });
});