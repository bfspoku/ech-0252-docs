// ========================================================================================================================
// FAQs handler
const listQA = document.getElementById('faq-item');

qaData.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add("faq-item")
  div.innerHTML = `
    <button class="faq-question">
      <span>${item.Q}</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
      <p>${item.A}</p>
    </div>
  `;
  listQA.appendChild(div);
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;

    item.classList.toggle('active');
  });
});