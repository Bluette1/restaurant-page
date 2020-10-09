import '../css/index.css';
import responsiveNavBar from '../../public/js/responsive-nav-master.js/responsive-nav';
import '../../public/js/responsive-nav-master.js/responsive-nav.css';
import homeContent from './home';
import menuContent from './menu';
import contactContent from './contact';

const content = document.querySelector('#content');
const titleStr = document.createElement('h2');
titleStr.textContent = 'Eat Well Shade';
titleStr.setAttribute('class', 'title');
content.appendChild(titleStr);

const navItems = [
  { content: homeContent, text: 'Home' },
  { content: menuContent, text: 'Menu List' },
  { content: contactContent, text: 'Contact' },
];

const navElem = document.createElement('nav');
const navList = document.createElement('ul');
let navItem;

navElem.appendChild(navList);

for (let i = 0; i < navItems.length; i += 1) {
  navItem = document.createElement('li');

  navItem.textContent = navItems[i].text;
  const pageContent = navItems[i].content;
  navItem.setAttribute('class', 'nav-item');

  navItem.addEventListener('click', () => {
    clear();
    pageContent(content);
  });
  navList.appendChild(navItem);
}

navList.children[0].className = 'current';
navElem.setAttribute('class', 'nav-collapse');
content.appendChild(navElem);
responsiveNavBar('.nav-collapse');

const clear = () => {
  content.innerHTml = '';
}