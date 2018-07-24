const switchBtn = document.getElementById('switch');
const classes = switchBtn.classList;
const openClassName = 'open';

switchBtn.addEventListener('click', e => {
  toggleProgress(classes);
});

contactContent(false);

chrome.storage.sync.get('open', data => {
  if(data.open) {
    classes.add(openClassName);
  } else {
    classes.remove(openClassName);
  }
});

function toggleProgress(classes) {
  const isOpen = classes.contains(openClassName);

  classes.toggle(openClassName);
  contactContent(!isOpen);
}

// interact with contentScript
function contactContent(open) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { open });
    chrome.storage.sync.set({ open });
  });
}