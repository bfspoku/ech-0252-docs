// Download naming hanlder
// This js code add the date in format (YYYY-MM-DD) and the File Type to the file-name when downloaded

document.querySelectorAll('.download-box').forEach(box => {
    const typeSpan = box.querySelector('#file-type');
    const dateSpan = box.querySelector('#file-date');
    const nameSpan = box.querySelector('#file-name');
    const link = box.querySelector('a[download]');

    if (!dateSpan || !nameSpan || !link) return;

    const filetype = typeSpan.textContent.toLowerCase() // es. pdf
    const rawdate = dateSpan.textContent.trim();       // es. 20.01.2026
    const filename = nameSpan.textContent.trim();   // es. some_filename
    
    const [day, month, year] = rawdate.split('.');
    const date = `${year}-${month}-${day}`;

    link.setAttribute(
      'download',
      `${filename}-${date}.${filetype}`
    );
  });