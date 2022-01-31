const btn = document.querySelectorAll('button');
const burger = document.querySelector('.hamburger');
const arrow = document.querySelector('.fa-arrow-right');
const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('nav');

burger.addEventListener('click', () => {
    bars.classList.toggle('active')
    arrow.classList.toggle('active')
    menu.classList.toggle('active')
})

btn.forEach((item) => {
    item.addEventListener('click', () => {
        bars.classList.toggle('active')
        arrow.classList.toggle('active')
        menu.classList.toggle('active')
    })
})

$('.buttons button').on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})