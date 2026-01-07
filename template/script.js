// ========================================================================================================================
// Nav. Bar

// Select all the link in the navbar
const navLinks = document.querySelectorAll('.nav-link');

// Get the current path (ex. "index.html")
const currentPage = window.location.pathname.split("/").pop();

// Loop over the links
navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');

  if (linkPage === currentPage) {
    link.classList.add('active'); // add active class
  } else {
    link.classList.remove('active'); // remove other classes
  }
});

// ========================================================================================================================
// Status Bar
document.addEventListener('DOMContentLoaded', () => {

  const banner = document.getElementById('status-banner');
  const messageEl = document.getElementById('status-message');

  if (!banner || !messageEl) return;

  if (systemStatus === "Maintenance") {
    banner.classList.add('status-maintenance');
    messageEl.textContent = "The system is currently under maintenance.";
  } else {
    banner.classList.add('status-ok');

    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    const time = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    messageEl.textContent = `The system is up and running – ${date} ${time}`;
  }
});
