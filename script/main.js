let openMenu = document.querySelector('.header__sidebar--btn');
let headerShade = document.querySelector('.header__shade');
let headerSidebar = document.querySelector('.header__sidebar');


openMenu.addEventListener('click', () => {
    headerShade.classList.toggle('show');
    headerSidebar.classList.toggle('sidebar');
})
headerShade.addEventListener('click', () => {
    headerShade.classList.remove('show');
    headerSidebar.classList.remove('show');
})