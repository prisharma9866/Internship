// script.js

// DOM Elements
const createPlaylistBtn = document.querySelector('.badge');
const searchInput = document.querySelector('.nav-option a[href="#Search"]');
const playButtons = document.querySelectorAll('.player-control-icon');
const progressBar = document.querySelector('.progress-bar');

// Event: Create Playlist
createPlaylistBtn?.addEventListener('click', () => {
  alert('Feature coming soon: Create your first playlist!');
});

// Event: Play/Pause Music
playButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 2) { // Assuming play button is the third icon
      alert('Play/Pause functionality coming soon!');
    }
  });
});

// Event: Update Progress Bar
progressBar?.addEventListener('input', (e) => {
  console.log(`Seek to: ${e.target.value}%`);
});

// Search Functionality (Placeholder for now)
searchInput?.addEventListener('click', () => {
  alert('Search functionality coming soon!');
});
