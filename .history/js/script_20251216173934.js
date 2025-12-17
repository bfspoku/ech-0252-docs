const months = document.querySelectorAll('.months .month-point');
const eventsData = [
  { "month": "Jan", "message": "This is an event in January" },
  { "month": "Mar", "message": "Event in March" },
  { "month": "Jun", "message": "Event in June" },
  { "month": "Sep", "message": "Event in September" },
  { "month": "Dec", "message": "Event in December" }
];

// Per ogni mese controlla se c'è almeno un evento
months.forEach(monthEl => {
  const monthLabel = monthEl.querySelector('.month-label').textContent;

  const hasEvent = eventsData.some(evt => evt.month === monthLabel);
  if (hasEvent) {
    monthEl.classList.add('month-point-active'); // aggiunge la classe
    monthEl.classList.remove('month-point');     // opzionale, se vuoi sostituire
  }
});