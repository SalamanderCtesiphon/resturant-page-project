import image1 from "../images/devin-avery-5iRgh_G0eRY-unsplash.jpg";
import image2 from "../images/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg";
import image3 from "../images/jarek-ceborski-IhqDpFz7I8Q-unsplash.jpg";

const menuContent = () => {
  const main = document.querySelector('.main');
  main.innerText= '';

  const menuContent = document.createElement('div');
  const classicBlack = document.createElement('div');
  const cappuccino = document.createElement('div');
  const latte = document.createElement('div');

  const classicBlackTextContent = document.createElement('div');
  classicBlackTextContent.innerText = "A single sourced dark roast Brazilian bean.";
  const cappuccinoTextContent = document.createElement('div');
  cappuccinoTextContent.innerText = 'A freakin cappuccino whoa';
  const latteTextContent = document.createElement('div');
  latteTextContent.innerText = 'Hey. I\'m a freakin latte!';

  menuContent.classList.add('menuContent');
  
  const classicBlackImg = new Image();
  classicBlackImg.src = image1;
  classicBlackImg.classList.add('classicBlackImg');

  const cappuccinoImg = new Image();
  cappuccinoImg.src = image2;
  cappuccinoImg.classList.add('cappuccinoImg');

  const latteImg = new Image();
  latteImg.src = image3;
  latteImg.classList.add('latteImg');

  classicBlack.classList.add('menuItem');
  cappuccino.classList.add('menuItem');
  cappuccino.setAttribute('id', 'middleItem');
  latte.classList.add('menuItem');


  classicBlack.appendChild(classicBlackImg);
  classicBlack.appendChild(classicBlackTextContent);
  menuContent.appendChild(classicBlack);
  cappuccino.appendChild(cappuccinoImg);
  cappuccino.appendChild(cappuccinoTextContent);
  menuContent.appendChild(cappuccino);
  latte.appendChild(latteImg);
  latte.appendChild(latteTextContent);
  menuContent.appendChild(latte);
  main.classList.add('page');
  main.appendChild(menuContent);
};

export { menuContent };