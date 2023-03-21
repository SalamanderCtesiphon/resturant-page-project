import './style.css';
import { homepage } from "./modules/homepage";
import { menuContent  } from './modules/menu';
import { contactInfo } from './modules/contact';


const content = document.getElementById('content');

const header = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');
const main = document.createElement('div');
const footer = document.createElement('div');

home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';
footer.classList.add('footer-link');

const date = new Date().getFullYear();
footer.innerHTML = `<a href="https://github.com/SalamanderCtesiphon/resturant-page-project" class="footer-link">
<h5>Seamus Quixiote  &#169; <span id="currentYear">${date}</span> <a href="https://www.theodinproject.com/" class="footer-link">for The Odin Project</a></h5>
</a>`;



home.addEventListener('click', homepage);
menu.addEventListener('click', menuContent);
contact.addEventListener('click', contactInfo);


header.classList.add('header');
home.classList.add('navBtn');
menu.classList.add('navBtn');
contact.classList.add('navBtn');
main.classList.add('main');
footer.classList.add('footer');


header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

homepage();
