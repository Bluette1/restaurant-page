const contactContent = (content) => {
  const contactTitle = document.createElement('h4');
  contactTitle.textContent = '+27 7875 090 123';
  contactTitle.setAttribute('class', 'contact-title');
  content.appendChild(contactTitle);
  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'background');
  const leftBackground = document.createElement('div');
  const rightBackground = document.createElement('div');
  const centralBackground = document.createElement('div');
  leftBackground.setAttribute('class', 'left-contact-background');
  rightBackground.setAttribute('class', 'right-contact-background');
  centralBackground.setAttribute('class', 'center-contact-background');
  divEl.appendChild(leftBackground);
  divEl.appendChild(centralBackground);
  divEl.appendChild(rightBackground);
  content.appendChild(divEl);
};


export default contactContent;