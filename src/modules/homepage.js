

const homepage = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const homePageContent = document.createElement('div');
  homePageContent.innerText = 'Hello';
  main.classList.add('page');
  main.appendChild(homePageContent);
};

export { homepage };