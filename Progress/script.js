const progress = document.createElement('div');
const body = document.body;

progress.id = 'chrome-extension-progress';

body.appendChild(progress);

window.addEventListener('scroll', () => {
  getUserScrollScale();
});

getUserScrollScale();

function getUserScrollScale() {
  const top = document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - window.innerHeight;
  
  progress.style.width = Math.ceil(top / height * 100) + '%';
}