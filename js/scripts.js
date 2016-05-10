$(document).ready(function($) {
    var $overlay = $('#overlay');

    // Modal Logic
    $overlay.click(function() {
        $('.m-active').removeClass('m-active');
        $(this).removeClass('m-active');
    });

    // Slider Config (Sticky)
    $('.b-slider.m-mobile-screens').slick({
        arrows: true,
        infinite: false,
        draggable: false,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
});
