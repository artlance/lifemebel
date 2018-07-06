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

    var numSlick = 0;
    $('.catalog-product').each(function(index, el) {
        numSlick++;
        var thisElement = $(this);
        var thisSlider = thisElement.find('.catalog-product-img-slider');
        var thisNav = thisElement.find('.catalog-product-img-nav');
        var thisAsNavFor = null;
        if ( thisNav.length ) {
            thisSlider.addClass('slider-' + numSlick).slick({
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
                slidesToScroll: 1,
                asNavFor: '.slider-nav-' + numSlick
            });
            thisNav.addClass('slider-nav-' + numSlick).slick({
                dots: false,
                arrows: false,
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
                slidesToShow: 4,
                slidesToScroll: 1,
                swipeToSlide: true,
                focusOnSelect: true,
                vertical: true,
                verticalSwiping: true,
                asNavFor: '.slider-' + numSlick
            });
        } else {
            thisSlider.slick({
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
    });

    $('.catalog-product').on('mouseenter', function(event) {
        event.preventDefault();
        var thisNavRefresh = $(this).find('.catalog-product-img-nav');
        if (thisNavRefresh) {
            thisNavRefresh.slick('setPosition');
        }
    });

    //------------------------------------------------------------------------//

    //catalog favorite
    $('.catalog-product-favorite').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

});//document ready