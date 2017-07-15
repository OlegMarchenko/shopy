$(document).ready(function() {
    $(".navbar-toggler").click(function(){
        $(".navbar-nav").slideToggle(function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
    $('.main-section').slick({
        dots: true,
        vertical: true,
        verticalSwiping: true,
        appendDots: '.appendDots'
    });
});