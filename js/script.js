$(document).ready(function() {
    const burgerButton = $('.burger__button');
    const mMenu = $('.m__menu');
    const tab = $('.tab');
    const tabsContent = $('.tabs__content');

    burgerButton.on('click', function() {
        mMenu.toggleClass('active');
        burgerButton.toggleClass('open');
        $('body').toggleClass('no__scroll');
    });

    tab.on('click', function() {
        tab.removeClass('active');
        $(this).toggleClass('active');
        let activeTabContent = $(this).attr('data-target');
        $(tabsContent).removeClass('visible');
        $(activeTabContent).toggleClass('visible');
    });

    const mySwiper = new Swiper ('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.button__next',
        },
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        effect: "slide",
        preventClicks: true,
        breakpoints: {
            1201: {
                slidesPerView: 4,
            },
            961: {
                slidesPerView: 3,
            },
            651: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            }
        }
    });

});




