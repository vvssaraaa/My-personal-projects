
/* CV language switcher */
const cvFiles = {
  en: { file: 'cv/CV English.pdf', label: 'Download my CV!', open: 'Open in new tab', lang: 'en' },
  no: { file: 'cv/CV Norsk.pdf', label: 'Last ned CV', open: 'Åpne i ny fane', lang: 'nb' }
};
const cvButtons = document.querySelectorAll('.seg button');
const cvViewer = document.getElementById('cvViewer');
const cvDownload = document.getElementById('cvDownload');
const cvOpen = document.getElementById('cvOpen');
 
cvButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const cv = cvFiles[btn.dataset.lang];
    cvButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    cvViewer.setAttribute('data', cv.file);
    cvDownload.href = cv.file;
    cvDownload.textContent = cv.label;
    cvOpen.href = cv.file;
    cvOpen.textContent = cv.open;
    cvDownload.lang = cvOpen.lang = cv.lang;
  });
});