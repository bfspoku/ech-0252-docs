// ========================================================================================================================
// Nav. Bar

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("components/navbar.html");
    if (!response.ok) throw new Error("Navbar non caricata");

    document.getElementById("nav-bar").innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }

  // Get the current path (ex. "index.html")
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  // Select all the link in the navbar
  const navLinks = document.getElementById(currentPage);
  navLinks.classList.add('active'); // add active class


});

// ========================================================================================================================
// Status Bar
document.addEventListener('DOMContentLoaded', () => {

  const banner = document.getElementById('status-banner');
  const messageEl = document.getElementById('status-message');

  if (!banner || !messageEl) return;

  if (systemStatus === "Maintenance") {
    banner.classList.add('status-maintenance');
    //messageEl.textContent = "The Swiss Election ETL system is currently under maintenance. Designated contact persons will be notified once the server becomes active.";
    messageEl.textContent = "The Swiss Election ETL system will be live soon!";
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

    messageEl.textContent = `The Swiss Election ETL system is up and ready to process data - ${date} ${time}`;
  }
});
