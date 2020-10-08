import '../css/index.css';

const content = document.querySelector('#content');
const titleStr = document.createElement('h2');
titleStr.textContent = 'Eat Well Shade';
titleStr.setAttribute('class', 'title');
content.appendChild(titleStr);