const contactInfo = () => {
  const body = document.querySelector('body');
  const contactInfo = document.createElement('div');
  contactInfo.innerText = 'Contact';
  body.appendChild(contactInfo);
};

export { contactInfo };