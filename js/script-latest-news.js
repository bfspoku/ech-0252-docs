// ========================================================================================================================
// Latest news handler (ech-0252-news page)

const listMain = document.getElementById('updates-main');

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('.');
  return new Date(year, month - 1, day);
}

// Ordina per data (più recente prima)
newsData.sort((a, b) => parseDate(b.date) - parseDate(a.date));

newsData.forEach((item, index) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="date">${item.title} - ${item.date}</span>
    <p>${item.message}</p>
  `;
  listMain.appendChild(li);
});