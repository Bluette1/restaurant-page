import '../css/index.css';

const content = document.querySelector('#content');
const titleStr = document.createElement('h2');
titleStr.textContent = 'Eat Well Shade';
titleStr.setAttribute('class', 'title');
content.appendChild(titleStr);

var navItems = [
  { href: '#', text: 'Home' },
  { href: '#', text: 'Menu List' },
  { href: '#', text: 'Contact' }
];


const navElem = document.createElement("nav"),
  navList = document.createElement("ul");
let navItem, navLink;

navElem.appendChild(navList);

for (let i = 0; i < navItems.length; i++) {

  navItem = document.createElement("li");
  navLink = document.createElement("a");

  navLink.href = navItems[i].href;
  navLink.textContent = navItems[i].text;

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
}

navList.children[0].className = "current";
navElem.setAttribute('class', 'nav-collapse');
content.appendChild(navElem);

const nav = responsiveNav(".nav-collapse", { // Selector
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 284, // Integer: Speed of the transition, in milliseconds
  label: "Menu", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  openPos: "relative", // String: Position of the opened nav, relative or static
  navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
  navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
  jsClass: "js", // String: 'JS enabled' class which is added to  element
  init: function() {}, // Function: Init callback
  open: function() {}, // Function: Open callback
  close: function() {} // Function: Close callback
});