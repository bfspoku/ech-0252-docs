const months = document.querySelectorAll('.months .month-point');
const eventsData = [
  { "month": "Jan", "title": "This is a title", "message": "This is an event in January" },
  { "month": "Mar", "title": "This is a title", "message": "Event in March" },
  { "month": "Jun", "title": "This is a title", "message": "Event in June" },
  { "month": "Sep", "title": "This is a title", "message": "Event in September" },
  { "month": "Dec", "title": "This is a title", "message": "Event in December" }
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
      popup.innerHTML = monthEvents.map(e => e.title).join('<h1>'); // mostra tutti i messaggi
      popup.innerHTML = monthEvents.map(e => e.message).join('<br>'); // mostra tutti i messaggi
      popup.style.display = 'block';
      const rect = monthEl.getBoundingClientRect();
      
      // Posizione sotto la timeline
      popup.style.top = rect.bottom + 10 + window.scrollY + 'px'; // 10px sotto il puntino
      popup.style.left = rect.left + rect.width / 2 + window.scrollX + 'px';
      popup.style.transform = 'translateX(-50%)'; // centrato rispetto al mese
    });

    monthEl.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
    });
  }
});