const btn = document.querySelectorAll('.menu-mobile__button');
const burger = document.querySelector('.hamburger');
const arrow = document.querySelector('.fa-arrow-right');
const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu-mobile');

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

$('.menu-mobile__button').on('click', function () {
    const $goToSection = '[data-section=' + $(this).attr('data-section') + ']';
    $('body, html').animate({
        scrollTop: $($goToSection).offset().top
    })
})

$(function($) {
    const $arrow = $('.fa-arrow-circle-up');
    $(window).scroll(function(event) {
        const $current = $(this).scrollTop();
        if($current > 0) {
            $arrow.addClass('active');
        } else {
            $arrow.removeClass('active');
        }
    })
})

$('.up-top-arrow').on('click', () => {
    $('body, html').animate({
        scrollTop: '0px'
    })
})