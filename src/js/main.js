const swiperAbout = new Swiper('.swiper.about', {
    direction: 'vertical',
    grabCursor: true,
    navigation: false,
    pagination: {
        el: '.swiper-pagination-about',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    slideToClickedSlide: true,
    speed: 800,

});


// const swiperNews = new Swiper('.swiper.news', {
//     slidesPerView: 6,
//     spaceBetween: 30,
//     grabCursor: true,
//
//     navigation: {
//         nextEl: '.swiper-button-next-news',
//         prevEl: '.swiper-button-prev-news',
//     },
//
//     pagination: {
//         el: '.swiper-pagination-news',
//         clickable: true,
//     },
//
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true,
//     },
//
//     slideToClickedSlide: true,
//
//     autoplay: {
//         delay: 3000,
//         stopOnLastSlide: false,
//         disableOnInteraction: false,
//     },
//
//     speed: 800,
//
//     breakpoints:{
//         576: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 1,
//         },
//         1024: {
//             slidesPerView: 2,
//         },
//         1360: {
//             slidesPerView: 3,
//         }
//     },
// });



Fancybox.bind("[data-fancybox]", {
    Image: {
        zoom: true,
    },
});




document.addEventListener('DOMContentLoaded', () => {
    const trade = document.querySelector('.container-trade');
    const commerce = document.querySelector('.container-commerce');
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 1.25) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 1.25);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});



new WOW().init();