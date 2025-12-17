const popup = document.getElementById('popup');
const months = document.querySelectorAll('.months .month-point');
const eventsContainer = document.querySelector('.events-container');

// JSON eventi
const eventsData = [
  { "month": "Jan", "message": "This is an event in January" },
  { "month": "Mar", "message": "Event in March" },
  { "month": "Jun", "message": "Event in June" },
  { "month": "Sep", "message": "Event in September" },
  { "month": "Dec", "message": "Event in December" }
];

// Aggiunge eventi dinamicamente
eventsData.forEach(evt => {
  const monthIndex = Array.from(months).findIndex(
    m => m.querySelector('.month-label').textContent === evt.month
  );
  if (monthIndex !== -1) {
    const eventEl = document.createElement('div');
    eventEl.classList.add('event');

    // Posizione orizzontale proporzionale al mese
    const percent = (monthIndex / (months.length - 1)) * 100;
    eventEl.style.left = percent + '%';

    eventEl.dataset.message = evt.message;
    eventsContainer.appendChild(eventEl);

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