document.addEventListener('DOMContentLoaded', function(){
  const button = document.querySelector('button');
  const body = document.querySelector('body');
  const path = document.querySelector('path');

  button.addEventListener('click', (e) => {
    body.classList.toggle('bodyDay');
    path.classList.toggle('svgDay');
  }); 
});
