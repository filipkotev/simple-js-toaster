// Make toasts container, so toasts can stack
let toastsContainer = document.createElement('div');
toastsContainer.className = 'toasts-container';

function createToasts(msg, type) {

  let div = document.createElement('div');
//  div.className = 'toast-wrapper';
  div.className = `toast-wrapper show ${type}`;
  
  //Toast type icon with its attributes
  let toastIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
      useIcon = document.createElementNS('http://www.w3.org/2000/svg','use');

  useIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./assets/sprite.svg#${type}`);
  toastIcon.appendChild(useIcon);

  
  // Toast message
  let textSpan = document.createElement('span'),
      text = document.createTextNode(msg);

  textSpan.appendChild(text);
  textSpan.className = 'toast-message';

  
  // Close Button
  let closeBtn = document.createElement('span'),
      closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
      useCloseIcon = document.createElementNS('http://www.w3.org/2000/svg','use');
  
  useCloseIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './assets/sprite.svg#close');
  closeIcon.appendChild(useCloseIcon);
  closeBtn.appendChild(closeIcon);
  closeBtn.className = 'toast-close';


  div.appendChild(toastIcon);
  div.appendChild(textSpan);
  div.appendChild(closeBtn);
  
  toastsContainer.appendChild(div);
  document.body.appendChild(toastsContainer);

  setTimeout(function (){
    div.className = div.className.replace("show", "hide");
    div.parentNode.removeChild(div);
  }, 3000);
}

// Create custom event and handle the listener

const BUTTONS = document.querySelectorAll('button');
//console.log(BUTTONS);
for (let bIdx = 0; bIdx < BUTTONS.length; bIdx++) {
  let button = BUTTONS[bIdx];

  button.addEventListener('click', function () {
    dispatchEvent(new CustomEvent('toast'));
  })
};

window.addEventListener('toast', function () {
  setTimeout (function () {
    createToasts('Succes Message', 'attention');
  },200);
});
