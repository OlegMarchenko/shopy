$(document).ready(function () {

    if ($('.top-slider-init').length) {
        $('.top-slider-init').slick({
            dots: false,
            arrows: false,
            slideToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.bottom-slider-init'
        });
    }

    if ($('.bottom-slider-init').length) {
        $('.bottom-slider-init').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: '.top-slider-init',
            autoplay:true
        });
    }

    $(".navbar-toggler").click(function () {
        $(".navbar-nav").slideToggle(function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    })

    if ($('.main-section').length) {
        $('.main-section').slick({
            dots: true,
            vertical: true,
            verticalSwiping: true,
            infinite: false,
            mobileFirst: true,
            appendDots: '.appendDots'
        });
    }

    $('.range-slider').jRange({
        from: 0,
        to: 1100,
        isRange: true,
        width: 186
    });

    $('.range-slider').jRange('updateRange', '0,1100', '100,1000');

    $(".navbar-toggler").click(function () {
        $(".navbar-nav").slideToggle(function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    })

    if ($('.top-slider-init').length) {
        $('.top-slider-init').slick({
            dots: false,
            arrows: false,
            slideToShow: 1
        });
    }

});