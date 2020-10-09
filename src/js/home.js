const homeContent = (content) => {

  const divEl = document.createElement('div');
  const homeTitle = document.createElement('h4');
  homeTitle.textContent = 'A Home Away From Home';
  homeTitle.setAttribute('class', 'home-title');;
  homeTitle.setAttribute('id', 'title');
  content.appendChild(homeTitle);
  divEl.setAttribute('class', 'home-background');
  divEl.setAttribute('id', 'background')
  content.appendChild(divEl)

}


export default homeContent;