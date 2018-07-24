const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', e => {
  const classes = e.target.classList;
  toggleProgress(classes);
});

function toggleProgress(classes) {
  const openClassName = 'open';
  const isOpen = classes.contains(openClassName);

  classes.toggle(openClassName);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { open: !isOpen });
  });
}