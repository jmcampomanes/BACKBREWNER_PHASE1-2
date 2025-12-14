document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('successPopup');
  const closeBtn = document.getElementById('closePopupBtn');

  // 1. Handle Form Submit
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop page reload
      
      // Show Popup
      popup.classList.add('active');
      
      // Clear the form fields
      form.reset();
    });
  }

  // 2. Close Popup Button
  if(closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }

  // 3. Close when clicking background
  if(popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  }
});