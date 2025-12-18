// DATABASE OF ALL EVENTS (Data remains the same)
const eventsDatabase = {
  "playlist-drop": {
    title: "Backbrewner Playlist Drop: December Edition",
    date: "Available on Spotify & YouTube Music starting December 15",
    description: "Curated by our top baristas, this playlist is the perfect backdrop for your holiday season. Featuring cozy jazz, lo-fi beats, and warm acoustic tracks.",
    cta: "Follow us on Spotify to listen now!",
    url: "https://open.spotify.com/playlist/37i9dQZF1E8Mc4fxINFUP0" 
  },
  "holiday-sale": {
    title: "☕ Holiday Brew Sale: 20% Off",
    date: "December 20th — December 30th",
    description: "Enjoy 20% off all seasonal lattes, coffee beans, and holiday gift sets. The perfect opportunity to stock up on presents for the coffee lover in your life.",
    cta: "Available in-store and online!",
    url: "#"
  },
  "poetry-night": {
    title: "📝 Coffee & Poetry Night (Virtual)",
    date: "Last Friday of every month @ 7:00 PM PST",
    description: "Join our virtual open-mic stream! Whether you're a seasoned poet or a first-timer, come share your latest work or just enjoy the cozy atmosphere and great coffee.",
    cta: "Tune in live on our YouTube channel!",
    url: "https://www.youtube.com/watch?v=Mxs9m7shLDc" 
  }
};

// LIGHTBOX LOGIC
const lightbox = document.getElementById("eventLightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDate = document.getElementById("lightboxDate");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxCTA = document.getElementById("lightboxCTA");
const closeBtn = document.getElementsByClassName("close")[0]; // Get the close button

function openLightbox(eventId) {
  const event = eventsDatabase[eventId];
  if (event) {
    lightboxTitle.textContent = event.title;
    lightboxDate.textContent = event.date;
    lightboxDescription.textContent = event.description;
    
    // Set the initial text content for CTA
    lightboxCTA.textContent = event.cta; 
    
    // If a URL is provided, format the CTA as a clickable link
    if (event.url && event.url !== '#') { 
        lightboxCTA.innerHTML = `<a href="${event.url}" target="_blank" style="color: #e0c097; text-decoration: underline;">${event.cta}</a>`;
    } else {
        // Ensure non-links are styled correctly
        lightboxCTA.innerHTML = event.cta; 
        lightboxCTA.style.textDecoration = 'none';
        lightboxCTA.style.color = '#e0c097';
    }

    // Use .classList.add('active') to show and animate
    lightbox.classList.add("active");
  }
}

function closeLightbox() {
  // Use .classList.remove('active') to hide
  lightbox.classList.remove("active");
}

// Close modal when clicking the 'x' (handled by onclick in HTML)
// Close modal when clicking outside the content
window.onclick = function(event) {
  if (event.target == lightbox) {
    closeLightbox();
  }
}