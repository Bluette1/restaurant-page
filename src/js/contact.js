const contactContent = (content) => {

  const contactTitle = document.createElement('h4');
  contactTitle.textContent = '+27 7875 090 123';
  contactTitle.setAttribute('class', 'contact-title');
  content.appendChild(contactTitle);
  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'contact-background');
  content.appendChild(divEl)

}


export default contactContent;