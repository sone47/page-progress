const switchBtn = document.getElementById('switch');
const classes = switchBtn.classList;
const openClassName = 'open';

// get switch state when awake popup
chrome.storage.sync.get('open', data => {
  const open = data.open;
  if(open) {
    classes.add(openClassName);
  } else {
    classes.remove(openClassName);
  }
  contactContent(open);
});

switchBtn.addEventListener('click', e => {
  toggleProgress(classes);
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