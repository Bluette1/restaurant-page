const menuContent = (content) => {
  const divEl = document.createElement('div');
  const menuTitle = document.createElement('h4');
  menuTitle.textContent = 'Browse through our delicious meals';
  menuTitle.setAttribute('class', 'menu-title');
  content.appendChild(menuTitle);
  divEl.setAttribute('class', 'background');
  const leftBackground = document.createElement('div');
  const rightBackground = document.createElement('div');
  const centralBackground = document.createElement('div');
  leftBackground.setAttribute('class', 'left-menu-background');
  rightBackground.setAttribute('class', 'right-menu-background');
  centralBackground.setAttribute('class', 'center-menu-background');
  divEl.appendChild(leftBackground);
  divEl.appendChild(centralBackground);
  divEl.appendChild(rightBackground);
  content.appendChild(divEl)
}


export default menuContent;