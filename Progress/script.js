const body = document.body;

// create progress
const progress = document.createElement('div');
progress.id = 'chrome-extension-progress';
body.appendChild(progress);

// get switch state
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

// scroll progress
function getUserScrollScale() {
  const top = document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - window.innerHeight;
  
  progress.style.width = Math.ceil(top / height * 100) + '%';
}