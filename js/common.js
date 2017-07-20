$(document).ready(function() {
    $(".navbar-toggler").click(function(){
        $(".navbar-nav").slideToggle(function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })

    if($('.main-section').length) {
        $('.main-section').slick({
            dots: true,
            vertical: true,
            verticalSwiping: true,
            appendDots: '.appendDots'
        });
    }

    $('.range-slider').jRange({
        from: 0,
        to: 1100,
        isRange : true,
        width: 186
    });

    $('.range-slider').jRange('updateRange', '0,1100', '100,1000');

    $(".navbar-toggler").click(function(){
        $(".navbar-nav").slideToggle(function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
});