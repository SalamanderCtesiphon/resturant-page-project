const menuContent = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const menuContent = document.createElement('div');
  menuContent.innerText = 'Menu';
  main.appendChild(menuContent);
};

export { menuContent };