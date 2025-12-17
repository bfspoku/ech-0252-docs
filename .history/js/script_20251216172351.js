const popup = document.getElementById('popup');
const months = document.querySelectorAll('.months .month-point');

// JSON eventi
const eventsData = [
  { "month": "Jan", "message": "This is an event in January" },
  { "month": "Mar", "message": "Event in March" },
  { "month": "Jun", "message": "Event in June" },
  { "month": "Sep", "message": "Event in September" },
  { "month": "Dec", "message": "Event in December" }
];

// Funzione per aggiungere eventi
eventsData.forEach(evt => {
  // trova il month-point corrispondente
  const monthPoint = Array.from(months).find(m => m.querySelector('.month-label').textContent === evt.month);
  if (monthPoint) {
    const eventEl = document.createElement('div');
    eventEl.classList.add('event');
    eventEl.dataset.message = evt.message;
    monthPoint.appendChild(eventEl);

    // popup
    eventEl.addEventListener('mouseenter', () => {
      popup.textContent = evt.message;
      popup.style.display = 'block';
      const rect = eventEl.getBoundingClientRect();
      popup.style.top = rect.top - 40 + window.scrollY + 'px';
      popup.style.left = rect.left + rect.width / 2 + window.scrollX + 'px';
    });
    eventEl.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
    });
  }
});