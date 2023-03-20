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

home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';

home.addEventListener('click', homepage);
menu.addEventListener('click', menuContent);
contact.addEventListener('click', contactInfo);


header.classList.add('header');
home.classList.add('navBtn');
menu.classList.add('navBtn');
contact.classList.add('navBtn');
main.classList.add('main');


header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);
content.appendChild(header);
content.appendChild(main);

homepage();
