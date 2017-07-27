$(document).ready(function () {

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

    if ($('.range-slider').length) {
        $('.range-slider').jRange({
            from: 0,
            to: 1100,
            isRange: true,
            width: 186
        });
        $('.range-slider').jRange('updateRange', '0,1100', '100,1000');

        $('#from').on('keyup', function (event) {
            var minPrice = event.currentTarget.value;
            $('.range-slider').jRange('setValue', minPrice+','+'555');
        })
    }



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
            asNavFor: '.top-slider-init'
            // autoplay:true
        });
    }

    if ($('.min').length) {
        $('.min').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
    }

    if ($('.max').length) {
        $('.max').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    }

});