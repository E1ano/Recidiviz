"use strict";

window.addEventListener('DOMContentLoaded', function() {
    let topButton = document.querySelector('.go-top__button');
    console.log(topButton);

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
})
