document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // 1. Open Lightbox on Image Click
  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        // Just use the source of the image you clicked
        lightboxImg.src = item.src;
        lightbox.classList.add('active');
      });
    });
  }

  // 2. Close Lightbox on 'X' Click
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  // 3. Close Lightbox when clicking outside the image
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
});