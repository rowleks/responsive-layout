
 // JavaScript to trigger the animation after the page is loaded
 document.addEventListener("DOMContentLoaded", function() {
  // Triggering the animation for each h1 with the 'typewriter' class
  const typewriters = document.querySelectorAll('.typewriter h1');
  typewriters.forEach(function(element) {
    element.style.animationPlayState = 'running';
  });
});






const menu = document.querySelector('nav ul');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function scrollToSection(sectionId) {
const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
  closeMenu();
}

function toggleMenu() {
  menu.classList.toggle('show');
  hamburgerMenu.classList.toggle('open');
}

function closeMenu() {
  menu.classList.remove('show');
  hamburgerMenu.classList.remove('open');
}
