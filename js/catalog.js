$(document).ready(function(){

    //filter range

    maxValue = 15000;

    $('.filter-range-slider').nstSlider({
        "rounding": {
            "100": "1"
        },
        "crossable_handles": false,
        "left_grip_selector": ".filter-range-handle-min",
        "right_grip_selector": ".filter-range-handle-max",
        "value_bar_selector": ".filter-range-bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            $(this).parent().find('.filter-range-input-min').val(accounting.formatNumber(leftValue, 0, " "));
            $(this).parent().find('.filter-range-input-max').val(accounting.formatNumber(rightValue, 0, " "));
        }
    });

    $('.filter-range-input-min, .filter-range-input-max').on('change', function(event) {
        var minVal = $('.filter-range-input-min').val().replace(/\s/g, '');
        minVal = parseInt(minVal, 10);
        var maxVal = $('.filter-range-input-max').val().replace(/\s/g, '');
        maxVal = parseInt(maxVal, 10);
        if ( minVal >= maxVal ) {
            minVal = maxVal-1;
        }
        if ( maxVal > maxValue || !maxVal ) {
            maxVal = maxValue;
        }
        if ( !minVal ) {
            minVal = 0;
        }
        $('.filter-range-slider').nstSlider('set_position', maxVal, minVal);
        $('.filter-range-slider').nstSlider('refresh');
    });

    $(".filter-range-input-min, .filter-range-input-max").on('keypress', function(event) {
        event = event || window.event;
        if (event.charCode && event.charCode!=0 && event.charCode!=32 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) ) return false;
    });

    //------------------------------------------------------------------------//

    //filter item
    $('.filter-item-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.filter-item').toggleClass('open');
    });

    $('.filter-item-more').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.filter-item-block').toggleClass('show');
    });

    //------------------------------------------------------------------------//

    var catalogProductHover = false;
    $('.catalog-product').on('mouseenter', function(event) {
        if ( !catalogProductHover ) {
            $('.catalog-product-img-slider').slick({
                dots: false,
                arrows: true,
                draggable: true,
                infinite: false,
                centerMode: false,
                centerPadding: '0px',
                autoplay: false,
                autoplaySpeed: 5000,
                speed: 500,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                slide: '.slide-js',
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        catalogProductHover = true;
    });

    //------------------------------------------------------------------------//

    //catalog favorite
    $('.catalog-product-favorite').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //search results categories
    $('.search-results-categories-more-button').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.search-results-categories').toggleClass('open');
    });

    //------------------------------------------------------------------------//

});//document ready