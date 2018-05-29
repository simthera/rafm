$('document').ready(function () {
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            captions: true,
            slideWidth: 700,
            responsive: true,
            auto: true
        });
    });
    $('#toogle-icon').click(function () {
        $('.drop-down').toggle();
    });
    $('.footer-header').click(function (event) {
        event.preventDefault();
        $(this).parent().find('.footer-links').slideToggle();
    });

});