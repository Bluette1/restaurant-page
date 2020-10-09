import '../css/index.css';
import responsiveNavBar from '../../public/js/responsive-nav-master.js/responsive-nav';
import '../../public/js/responsive-nav-master.js/responsive-nav.css';
import homeContent from './home';
import menuContent from './menu';
import contactContent from './contact';

const content = document.querySelector('#content');
const pageTitle = document.querySelector('#title');
const pageDiv = document.querySelector('#background');
const titleStr = document.createElement('h2');

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

  navItem.onclick = () => {
    clear();
    pageContent(content);
  };
  navList.appendChild(navItem);
}

navList.children[0].className = 'current';
navElem.setAttribute('class', 'nav-collapse nav-element');
document.body.insertBefore(titleStr, content);
titleStr.textContent = 'Eat Well Shade';
titleStr.setAttribute('class', 'title');
titleStr.after(navElem);
homeContent(content);
responsiveNavBar('.nav-collapse');

const clear = () => {
  content.textContent = '';
}