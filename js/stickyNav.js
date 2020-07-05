window.addEventListener("scroll", function () {
    if (window.scrollY >= 625) {
        $('.navbar').css('background-color', 'black');
    }
    else {
        $('.navbar').css('background-color', 'transparent');
    }
});