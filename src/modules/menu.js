const menuContent = () => {
  const body = document.querySelector('body');
  const menuContent = document.createElement('div');
  menuContent.innerText = 'Menu';
  body.appendChild(menuContent);
};

export { menuContent };