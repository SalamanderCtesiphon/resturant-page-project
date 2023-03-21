import image from "../images/jonas-jacobsson-1iTKoFJvJ6E-unsplash.jpg";

const homepage = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const homePageContent = document.createElement('div');
  const nameOfResturant = document.createElement('h1');
  nameOfResturant.innerText = "Cafe Milano";
  nameOfResturant.classList.add('nameOfResturant');

  const paragraph = document.createElement('p');
  paragraph.textContent = "Looking for great coffee? You chose the right place. We employ a team of expert roasters from Costa Rica and Ethiopia. Who are uniquely qualified to bring you the finest quality cup of coffee that can be found anywhere in the region."


  const cafeImage = new Image();
  cafeImage.src = image;
  cafeImage.classList.add('cafeImage');

  homePageContent.appendChild(nameOfResturant);
  homePageContent.appendChild(cafeImage);
  homePageContent.appendChild(paragraph);
  homePageContent.classList.add('page');
  main.appendChild(homePageContent);
};

export { homepage };