let openMenu = document.querySelector('.header__sidebar--btn');
let headerShade = document.querySelector('.header__shade');
let headerSidebar = document.querySelector('.header__sidebar');
let headerMenu = document.querySelector('.header__menu');
let moreBtn = document.querySelector('.about__content--btn');
let descMore = document.querySelector('.about__content--desc-more');


openMenu.addEventListener('click', () => {
    headerShade.classList.toggle('show');
    headerSidebar.classList.toggle('sidebar');
    openMenu.classList.toggle('close-btn');
})
headerShade.addEventListener('click', () => {
    headerShade.classList.remove('show');
    headerSidebar.classList.remove('sidebar');
    openMenu.classList.remove('close-btn');
})

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        headerMenu.classList.add('box__shadow')
    }
    else {
        headerMenu.classList.remove('box__shadow')
    }
}

moreBtn.addEventListener('click', () => {
    descMore.classList.toggle('show');
    if(moreBtn.textContent == 'Read More') {
        moreBtn.textContent = 'Read Less';
    }
    else {
        moreBtn.textContent = 'Read More';
    }
})




let infoItemQuantity = document.querySelectorAll('.info__item--quantity');

let startCount = (el) => {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        +el.textContent++;
        if (+el.textContent == goal) {
            clearInterval(count);
        }
    }, 7);
}

infoItemQuantity.forEach((item) => {
    startCount(item);
})

var swiper = new Swiper(".appointment__swiper", {
    slidesPerView: 1,
});