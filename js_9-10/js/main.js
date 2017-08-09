$(function() {
    // ===========CAROUSEL===================
    var carousel = $('.jcarousel').jcarousel({
        wrap: 'both',
    });

    carousel.jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel-pagination').jcarouselPagination({});

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    carousel.on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    });

    carousel.on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });

    // ===============SELECT BOX=======================

    $('input, select').styler();

    // =================MENU===================
    $(document).ready(function() {
        $('.dropdown').hover(function() {
            $(this).children('.sub-menu').slideDown(400);
        }, function() {
            $(this).children('.sub-menu').slideUp(400);
        });
    });
});
