const nameElement = document.getElementById('name');
const nameText = "Drea Martin"; 
let index = 0;
let deleting = false;

function typeEffect() {
  if (!deleting && index <= nameText.length) {
    nameElement.textContent = nameText.substring(0, index++) + '|'; 
  } else if (deleting && index >= 0) {
    nameElement.textContent = nameText.substring(0, index--) + '|';
  }

  if (index === nameText.length) {
    deleting = true;
  } else if (index === 0) {
    deleting = false;
  }

  setTimeout(typeEffect, deleting ? 100 : 200); 
}


typeEffect();

const navLinks = document.querySelector('.nav-links')
    function onToggleMenu(e){
        e.name = e.name === 'menu' ? 'close' : 'menu'
        navLinks.classList.toggle('top-[9%]')
    }
