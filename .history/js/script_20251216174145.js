const months = document.querySelectorAll('.months .month-point');
const eventsData = [
  { "month": "Jan", "message": "This is an event in January" },
  { "month": "Mar", "message": "Event in March" },
  { "month": "Jun", "message": "Event in June" },
  { "month": "Sep", "message": "Event in September" },
  { "month": "Dec", "message": "Event in December" }
];

const popup = document.getElementById('popup');

// Cicla su tutti i mesi
months.forEach(monthEl => {
  const monthLabel = monthEl.querySelector('.month-label').textContent;

  // Trova eventi per questo mese
  const monthEvents = eventsData.filter(evt => evt.month === monthLabel);

  if (monthEvents.length > 0) {
    // Cambia classe del mese
    monthEl.classList.add('month-point-active');
    monthEl.classList.remove('month-point'); // opzionale

    // Popup al passaggio del mouse
    monthEl.addEventListener('mouseenter', () => {
      popup.innerHTML = monthEvents.map(e => e.message).join('<br>'); // mostra tutti i messaggi
      popup.style.display = 'block';
      const rect = monthEl.getBoundingClientRect();
      popup.style.top = rect.top - 70 + window.scrollY + 'px'; // sopra il puntino
      popup.style.left = rect.left + rect.width / 2 + window.scrollX + 'px';
    });

    monthEl.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
    });
  }
});