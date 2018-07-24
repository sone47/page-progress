const progress = document.createElement('div');
const body = document.body;

progress.id = 'chrome-extension-progress';

body.appendChild(progress);

chrome.runtime.onMessage.addListener((req) => {
  if(req.open) {
    window.addEventListener('scroll', getUserScrollScale);
    getUserScrollScale();
    progress.style.display = 'block';
  } else {
    window.removeEventListener('scroll', getUserScrollScale);
    progress.style.display = 'none';
  }
});

function getUserScrollScale() {
  const top = document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - window.innerHeight;
  
  progress.style.width = Math.ceil(top / height * 100) + '%';
}