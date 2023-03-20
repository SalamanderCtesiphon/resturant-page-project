const menuContent = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const menuContent = document.createElement('div');
  menuContent.innerText = 'Menu';
  main.classList.add('page');
  main.appendChild(menuContent);
};

export { menuContent };