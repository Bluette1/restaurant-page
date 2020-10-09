const homeContent = (content) => {
  // function that creates a div element, adds the appropriate content
  // and styles to that element and then appends it to the DOM.
  const divEl = document.createElement('div');
  const homeTitle = document.createElement('h4');
  homeTitle.textContent = 'A Home Away From Home';
  homeTitle.setAttribute('class', 'home-title');
  content.appendChild(homeTitle);
  divEl.setAttribute('class', 'home-background');

  content.appendChild(divEl)

}


export default homeContent;