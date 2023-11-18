

const navToggler = document.querySelector('.nav-toggler span');
const navGroup = document.querySelector('#navGroup');
const transNav = document.querySelector('#transNav');
let lastKnownScrollPosition = 0;

navToggler.addEventListener('click', () => {
    navGroup.classList.toggle('d-none');
    navGroup.classList.toggle('fixed-top');
    navGroup.classList.add('bg-dark');    
    navGroup.setAttribute('style', 'top:7vh'); 
    navGroup.setAttribute('transition', 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'); 
    navToggler.textContent = (navToggler.textContent === 'close') ? 'menu' : 'close';    
});

document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if(lastKnownScrollPosition > 0){
        transNav.classList.add('bg-dark-7');
    }else if(lastKnownScrollPosition == 0){
        transNav.classList.remove('bg-dark-7');
    }
});