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
    messageEl.innerHTML = 'The Swiss Elections ETL system is currently undergoing maintenance. Designated contacts will be notified as soon as the server is back online. <i class="fa-regular fa-circle-question" title="A platform that Extracts, Transforms, and Loads (ETL) eCH-0252 Swiss Elections data into a structured format for analysis and reporting"></i>';
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

    messageEl.innerHTML = `The Swiss Election ETL system is up and ready to process data <i class="fa-regular fa-circle-question" title="A platform that Extracts, Transforms, and Loads (ETL) eCH-0252 Swiss Elections data into a structured format for analysis and reporting"></i> - ${date} ${time}`;
  }
});


// ========================================================================================================================
// Footer
document.addEventListener('DOMContentLoaded', () => {
  const messageEl = document.getElementById('footer');
  messageEl.innerHTML = "<p> &copy; 2026 FSO-POKU. All rights reserved.<p>"
});