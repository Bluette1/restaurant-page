import '../css/index.css';
import responsiveNavBar from '../../public/js/responsive-nav-master.js/responsive-nav';

const content = document.querySelector('#content');
const titleStr = document.createElement('h2');
titleStr.textContent = 'Eat Well Shade';
titleStr.setAttribute('class', 'title');
content.appendChild(titleStr);

const navItems = [
  { href: '#', text: 'Home' },
  { href: '#', text: 'Menu List' },
  { href: '#', text: 'Contact' },
];


const navElem = document.createElement('nav');
const navList = document.createElement('ul');
let navItem;
let
  navLink;

navElem.appendChild(navList);

for (let i = 0; i < navItems.length; i += 1) {
  navItem = document.createElement('li');
  navLink = document.createElement('a');

  navLink.href = navItems[i].href;
  navLink.textContent = navItems[i].text;

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
}

navList.children[0].className = 'current';
navElem.setAttribute('class', 'nav-collapse');
content.appendChild(navElem);
const nav = responsiveNavBar('.nav-collapse');
nav.setAttribute('class', 'coloured-item');