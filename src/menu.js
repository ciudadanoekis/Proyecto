$(document).ready(function() {
    function animateHamburger() {
        $('#hamburger-button').toggleClass('open');
    }
    
    function slideMenu() {
        $('.navbar').toggleClass('open');
    }
    
    $('#hamburger-button').click(function() {
        animateHamburger();
        slideMenu();
    });
});