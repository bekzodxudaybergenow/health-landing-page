let openMenu = document.querySelector('.header__sidebar--btn');
let headerShade = document.querySelector('.header__shade');
let headerSidebar = document.querySelector('.header__sidebar');
let headerMenu = document.querySelector('.header__menu');


openMenu.addEventListener('click', () => {
    headerShade.classList.toggle('show');
    headerSidebar.classList.toggle('sidebar');
})
headerShade.addEventListener('click', () => {
    headerShade.classList.remove('show');
    headerSidebar.classList.remove('sidebar');
})

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        headerMenu.classList.add('box__shadow')
    }
    else {
        headerMenu.classList.remove('box__shadow')
    }
}