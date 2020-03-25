$(document).ready(function(){

    //filter range

    maxValue = 15000;

    $('.filter-range-slider').nstSlider({
        "rounding": {
            "10": "1"
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

    function filterPanelLeft(thisTargetPanelLeft, thisTargetPanelWidth, docWidth, thisTargetPanel){
        if (thisTargetPanelLeft < 39) {
            thisTargetPanel.css({
                'margin-left': Math.abs(thisTargetPanelLeft) + 39
            });
        } else if (docWidth - 39 < thisTargetPanelWidth + thisTargetPanelLeft) {
            thisTargetPanel.css({
                'margin-left': docWidth - thisTargetPanelWidth - thisTargetPanelLeft - 39
            });
        }
    }

    $(window).resize(function() {
        if ($('.catalog-filter-sorting-panel').is(':visible')) {
            var thisTargetPanel = $('.drop.active').find('.catalog-filter-sorting-panel');
                thisTargetPanel.css({'margin-left': 0});
            var thisTargetPanelWidth = thisTargetPanel.innerWidth(),
                thisTargetPanelLeft = thisTargetPanel.offset().left,
                docWidth = $('body').innerWidth();
            filterPanelLeft(thisTargetPanelLeft, thisTargetPanelWidth, docWidth, thisTargetPanel);
        }
    });

    $(document).on('click', '.drop-toggle', function(event) {
        event.preventDefault();
        var thisParent = $(this).parent('.drop');
        if ( thisParent.find('.filter-range-slider').length ) {
            $('.filter-range-slider').each(function(index, el) {
                $(el).nstSlider('refresh');
            });
        }
        //
        if (thisParent.hasClass('active') && thisParent.hasClass('catalog-filter-sorting-drop')) {

            var thisTargetPanel = thisParent.find('.catalog-filter-sorting-panel');
                thisTargetPanel.css({'margin-left': 0});

            var thisTargetPanelWidth = thisTargetPanel.innerWidth(),
                thisTargetPanelLeft = thisTargetPanel.offset().left,
                docWidth = $('body').innerWidth();

            filterPanelLeft(thisTargetPanelLeft, thisTargetPanelWidth, docWidth, thisTargetPanel);
        }
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
                dots: true,
                arrows: false,
                draggable: false,
                infinite: false,
                centerMode: false,
                centerPadding: '0px',
                autoplay: false,
                autoplaySpeed: 5000,
                speed: 0,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                slide: '.slide-js',
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true
            });
            $(document).on('mouseenter', '.catalog-product-img-slider .slick-dots li, .catalog-product-colors-list li', function(event) {
                event.preventDefault();
                var thisParent = $(this).parents('.catalog-product');
                var thisParentColors = $(this).parents('.catalog-product').find('.catalog-product-colors-list');
                thisParent.find('.catalog-product-img-slider').slick('slickGoTo', $(this).index());

                if (thisParentColors) {
                    thisParentColors.find('li').eq($(this).index()).find('.catalog-product-color').addClass('hover');
                    thisParentColors.find('li').eq($(this).index()).siblings('li').find('.catalog-product-color').removeClass('hover');
                }
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

    //catalog-product-info
    function catalogInit() {
        $('.catalog-product-info').each(function(index, el) {
            var thisElement = $(el),
                thisParentBg = thisElement.parents('.catalog-product').find('.catalog-product-bg');
            thisElement.css({
                'opacity': '0',
                'display': 'block'
            });
            var thisHeight = thisElement.innerHeight();
            thisParentBg.css({
                'bottom': -thisHeight
            });
            thisElement.attr({'style': ''});
        });
    }
    catalogInit();
    $(window).resize(function() {
        catalogInit();
    });

    //------------------------------------------------------------------------//

    //catalog filter toggle active
    $(document).on('click', '.catalog-filter-category-item, .catalog-filter-sorting-link', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //catalog filter item reset
    $(document).on('click', '.catalog-filter-sorting-item-reset', function(event) {
        event.preventDefault();
        $(this).parents('.catalog-filter-sorting-drop').removeClass('selected');
    });

    //------------------------------------------------------------------------//

});//document ready