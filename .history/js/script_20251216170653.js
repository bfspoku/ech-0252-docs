const timeline = document.querySelector('.timeline');
const events = document.querySelectorAll('.event');
const popup = document.getElementById('popup');

// Calcola giorno dell'anno
function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

events.forEach(event => {
  const dateStr = event.dataset.date;
  const date = new Date(dateStr);

  // 2026 non è bisestile, 365 giorni
  const day = dayOfYear(date);
  const percent = (day - 1) / 365 * 100;
  event.style.left = percent + '%';

  // popup
  event.addEventListener('mouseenter', e => {
    popup.textContent = event.dataset.text + ' (' + dateStr + ')';
    popup.style.display = 'block';
    const rect = event.getBoundingClientRect();
    popup.style.top = rect.top - 40 + window.scrollY + 'px';
    popup.style.left = rect.left + rect.width / 2 + window.scrollX + 'px';
  });

  event.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });
});