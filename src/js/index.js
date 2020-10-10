import responsiveNavBar from '../../public/js/responsive-nav-master.js/responsive-nav';
import '../../public/js/responsive-nav-master.js/responsive-nav.css';
import '../../public/bootstrap-4.3.1-dist/css/bootstrap.min.css';
import '../css/index.css';
import '../../public/prefixfree.min';
import homeContent from './home';
import menuContent from './menu';
import contactContent from './contact';

const content = document.querySelector('#content');
const titleStr = document.createElement('h2');

const clear = () => {
  content.textContent = '';
};

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
    navItem.classList.add('active');
    pageContent(content);
  };
  navList.appendChild(navItem);

}

navElem.setAttribute('class', 'nav-collapse nav-element');
document.body.insertBefore(titleStr, content);
titleStr.textContent = 'Eat Well Shade';
titleStr.setAttribute('class', 'title');
titleStr.after(navElem);
homeContent(content);
responsiveNavBar('.nav-collapse', { label: 'MENU' });