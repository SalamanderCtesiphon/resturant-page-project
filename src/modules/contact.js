import image4 from '../images/tomas-jasovsky-d5SZqLkpIrY-unsplash.jpg';

const contactInfo = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const contactInfo = document.createElement('h1');
  contactInfo.classList.add('nameOfResturant');

  const contactTextContent = document.createElement('div');
  contactTextContent.innerText = "Email: swbrookshire@gmail.com ";
  contactTextContent.classList.add('menuContent');
  const para1 = document.createElement('p');
  para1.innerText = 'This webpage was created using only vanilla JavaScript. With all the navigation between the pages being rendered dynamically.'

  const contactImg = new Image();
  contactImg.src = image4;
  contactImg.classList.add('contactImg')
  
  contactInfo.innerText = 'Contact';
  main.classList.add('page');
  main.appendChild(contactInfo);
  main.appendChild(contactImg);
  main.appendChild(contactTextContent);
  main.appendChild(para1);
};

export { contactInfo };