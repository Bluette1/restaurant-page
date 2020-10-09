const menuContent = (content) => {
  const divEl = document.createElement('div');
  const menuTitle = document.createElement('h4');
  menuTitle.textContent = 'Browse through our delicious meals';
  menuTitle.setAttribute('class', 'menu-title');
  content.appendChild(menuTitle);
  divEl.setAttribute('class', 'menu-background');
  content.appendChild(divEl)

}


export default menuContent;