// ========================================================================================================================
// 2026 Timeline

const months = document.querySelectorAll('.months .month-point');

const popup = document.getElementById('popup');

// Loop over all the months
months.forEach(monthEl => {
  const monthLabel = monthEl.querySelector('.month-label').textContent;

  // Find events for the current month
  const monthEvents = eventsData.filter(evt => evt.month === monthLabel);

  if (monthEvents.length > 0) {
    // Change class fot the current month (if an event is found)
    monthEl.classList.add('month-point-active');
    monthEl.classList.remove('month-point'); // opzionale

    // Add pop over
    monthEl.addEventListener('mouseenter', () => {
    popup.innerHTML = monthEvents.map(e => 
      `<div class="popup-line">
        <h1>${e.title}</h1><br>
        <p>${e.message}</p>
      </div>`).join('');
      popup.style.display = 'block';
      const rect = monthEl.getBoundingClientRect();
      
      // Set position of the pop up message 
      popup.style.top = rect.bottom + 10 + window.scrollY + 'px'; // 10px under the point
      popup.style.left = rect.left + rect.width / 2 + window.scrollX + 'px';
      popup.style.transform = 'translateX(-50%)'; // centered with respect to the month
    });

    monthEl.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
    });
  }
});