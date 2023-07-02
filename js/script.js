// navbar-hover
// shop
const shop = document.querySelector('.shop');
const navHoverShop = document.querySelector('.nav-hover-shop');

shop.addEventListener('mouseover', () => {
    navHoverShop.style.display = 'block';
})

shop.addEventListener('mouseleave', () => {
    navHoverShop.style.display = 'none';
});

// trending
const trending = document.querySelector('.trending');
const navHoverTrending = document.querySelector('.nav-hover-trending');

trending.addEventListener('mouseover', () => {
    navHoverTrending.style.display = 'block';
})

trending.addEventListener('mouseleave', () => {
    navHoverTrending.style.display = 'none';
});

// more
const more = document.querySelector('.more');
const navHoverMore = document.querySelector('.nav-hover-more');

more.addEventListener('mouseover', () => {
    navHoverMore.style.display = 'block';
})

more.addEventListener('mouseleave', () => {
    navHoverMore.style.display = 'none';
});


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

// let swiper = new Swiper(".swiper-product", {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     slidesPerGroup: 4,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     }
// })