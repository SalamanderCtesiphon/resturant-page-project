import image from "../images/jonas-jacobsson-1iTKoFJvJ6E-unsplash.jpg";

const homepage = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const homePageContent = document.createElement('div');
  const nameOfResturant = document.createElement('h1');
  nameOfResturant.innerText = "Cafe Milano";
  nameOfResturant.classList.add('nameOfResturant');

  const paragraph = document.createElement('p');
  paragraph.textContent = "This coffee shop is my favorite place to hang and catch up on work. I really enjoy the quite atmosphere of this place.The coffee and pastries so delicious."


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