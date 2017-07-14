$(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-nav").slideToggle(function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
});