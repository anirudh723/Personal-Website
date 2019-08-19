$(document).ready(function () {
        $('h2.intro-text').fadeIn(2000);
        $('h1.intro-text').fadeIn(4000);
});


window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        $('.spotlight-box').show();
    }
    else if ($("#collapsibleNavbar").is( ":visible" )) {
        $('.spotlight-box').hide();
    }
});