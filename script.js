const button = document.querySelector('button');
const body = document.querySelector('body');
const path = document.querySelector('path');

button.addEventListener('click', (e) => {
  body.classList.toggle('body-day');
  path.classList.toggle('svg-day');
}); 
