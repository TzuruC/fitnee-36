

const navToggler = document.querySelector('.nav-toggler');
const navGroup = document.querySelector('#navGroup');


navToggler.addEventListener('click', () => {
    navGroup.classList.toggle('d-none');
    navGroup.classList.toggle('fixed-top');
    navGroup.setAttribute('style', 'top:7vh')
});
