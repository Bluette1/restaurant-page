const contactContent = (content) => {
  // function that creates a div element, adds the appropriate content
  // and styles to that element and then appends it to the DOM.
  const divEl = document.createElement('div');
  divEl.textContent = 'Contact Page';
  content.appendChild(divEl)

}


export default contactContent;