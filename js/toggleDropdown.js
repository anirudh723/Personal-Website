function toggleDropdown() {
    var isVisible = $("#collapsibleNavbar").is(":visible");
    var isHidden = $("#collapsibleNavbar").is(":hidden");
    if (isVisible) {
        $('.spotlight-box').show();
    }
    else if (isHidden) {
        $('.spotlight-box').hide();
    }
}