const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', e => {
  const classes = e.target.classList;
  const openClassName = 'open';
  classes.toggle(openClassName);
});