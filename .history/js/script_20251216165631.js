const events = document.querySelectorAll('.event');
const popup = document.getElementById('popup');

events.forEach(event => {
  event.addEventListener('mouseenter', e => {
    popup.textContent = event.getAttribute('data-text');
    popup.style.display = 'block';
    const rect = event.getBoundingClientRect();
    popup.style.top = rect.top - 40 + window.scrollY + 'px';
    popup.style.left = rect.left + rect.width/2 + window.scrollX + 'px';
  });

  event.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
  });
});