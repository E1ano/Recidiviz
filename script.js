"use strict";

window.addEventListener('DOMContentLoaded', function() {
    // go-top arrow
    const topButton = document.querySelector('.go-top__button');

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }

    topButton.addEventListener("click", () => window.scrollTo({
        top:0,
        behavior: 'smooth',
    }));

    // burger action
    const burgerButton = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu__nav')
    const body = document.querySelector('body');

    burgerButton.addEventListener('click', ()=> {
        burgerButton.classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });
})
