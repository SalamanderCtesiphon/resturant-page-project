

const homepage = () => {
  const body = document.querySelector('body');
  const homePageContent = document.createElement('div');
  homePageContent.innerText = 'Hello';
  body.appendChild(homePageContent);
};

export { homepage };