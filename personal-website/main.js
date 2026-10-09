const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
}

try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch (e) {}

applyTheme(currentTheme());

toggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});
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