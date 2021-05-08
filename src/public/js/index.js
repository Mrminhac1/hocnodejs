/*
Navigation
*/

//

const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".navbar__menu");

navOpen.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;
  if (navLeft < 0) {
    menu.style.left = "0";
    document.body.classList.add("active");
  } else {
    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

navClose.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;
  if (navLeft > 0) {
    menu.style.left = "0";
  } else {
    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});



 // check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.getElementById('user-theme');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});