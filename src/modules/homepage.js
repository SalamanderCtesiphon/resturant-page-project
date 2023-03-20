

const homepage = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const homePageContent = document.createElement('div');
  const nameOfResturant = document.createElement('h1');
  nameOfResturant.innerText = "Cafe Milano";
  nameOfResturant.classList.add('nameOfResturant');
  homePageContent.appendChild(nameOfResturant);
  main.classList.add('page');
  main.appendChild(homePageContent);
};

export { homepage };