window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        $('.spotlight-box').show();
    }
    else if ($("#collapsibleNavbar").is( ":visible" )) {
        $('.spotlight-box').hide();
    }
});