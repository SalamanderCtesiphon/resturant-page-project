const contactInfo = () => {
  const main = document.querySelector('.main');
  main.innerText= '';
  const contactInfo = document.createElement('div');
  contactInfo.innerText = 'Contact';
  main.appendChild(contactInfo);
};

export { contactInfo };