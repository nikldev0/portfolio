let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let aboutCloseNav = document.querySelector('.about-close-nav');
let projectsCloseNav = document.querySelector('.projects-close-nav');
let homeCloseNav = document.querySelector('.home-close-nav');

hamburger.addEventListener('click', function(){
  mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
  mobileNav.classList.remove('open');
});

aboutCloseNav.addEventListener('click', function(){
  mobileNav.classList.remove('open');
});

projectsCloseNav.addEventListener('click', function(){
  mobileNav.classList.remove('open');
});

homeCloseNav.addEventListener('click', function(){
  mobileNav.classList.remove('open');
});