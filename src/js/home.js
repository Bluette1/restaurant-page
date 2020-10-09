const homeContent = (content) => {
  const divEl = document.createElement('div');
  const homeTitle = document.createElement('h4');
  homeTitle.textContent = 'A Home Away From Home';
  homeTitle.setAttribute('class', 'home-title');
  homeTitle.setAttribute('id', 'title');
  content.appendChild(homeTitle);
  divEl.setAttribute('class', 'background');
  const leftBackground = document.createElement('div');
  const rightBackground = document.createElement('div');
  const centralBackground = document.createElement('div');
  leftBackground.setAttribute('class', 'left-home-background');
  rightBackground.setAttribute('class', 'right-home-background');
  centralBackground.setAttribute('class', 'center-home-background');
  divEl.appendChild(leftBackground);
  divEl.appendChild(centralBackground);
  divEl.appendChild(rightBackground);
  content.appendChild(divEl);
};


export default homeContent;