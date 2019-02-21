$(document).ready(function(){

    //ready

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //jScrollPane
    var scrollPane = function() {
        var pane = $('.scroll-pane');
        pane.jScrollPane(
            {
                showArrows: false,
                autoReinitialise: true
            }
        );
    }
    var scrollPaneResize = function() {
        $('.scroll-pane').each(function(index, el) {
            $(this).jScrollPane({showArrows: false, autoReinitialise: true}).data('jsp').destroy();
        });
        $('.scroll-pane').each(function(index, el) {
            $(this).jScrollPane({showArrows: false, autoReinitialise: true}).data('jsp').reinitialise();
        });
    }

    //------------------------------------------------------------------------//

    //drop
    activePop = null;
    dropClass = $('.drop');

    $('.contact-info-callback').on('click', function(event) {
        event.preventDefault();
        $('.header-phone').addClass('active');
        activePop = 1;
    });

    function closeInactivePop() {
        dropClass.each(function (i) {
            if ($(this).hasClass('active') && i!=activePop) {
                $(this).removeClass('active');
            }
        });
        return false;
    }
    dropClass.on('mouseover', function(event) {
        activePop = dropClass.index(this);
    });
    dropClass.on('mouseout', function(event) {
        activePop = null;
    });
    $(document).on('click', function(event) {
        closeInactivePop();
    });
    $('.drop-close').on('click', function(event) {
        activePop = null;
        closeInactivePop();
    });

    var sliderJsArrowsNavInit = false;
    $('.drop-toggle').on('click', function(event) {
        event.preventDefault();
        var thisParent = $(this).parent(dropClass);
        thisParent.toggleClass('active');
        //
        if ( $(thisParent).find('.scroll-pane').length ) {
            scrollPane();
            scrollPaneResize();
        }
        //
        if ( $(thisParent).find('.slider-js-arrows-nav').length ) {
            $('.slider-js-arrows-nav').on('init', function () {
                sliderJsArrowsNavInit = true;
            });
            if (sliderJsArrowsNavInit) {
                $('.slider-js-arrows-nav').slick('setPosition');
            } else {
                $('.slider-js-arrows-nav').slick({
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    swipeToSlide: true
                });
            }
        }
        //
        if ( $(thisParent).find('.phone-mask').length ) {
            $('.phone-mask').mask('+7 (999) 999-99-99');
        }
    });

    //extra
    var activeExtraPop = null;
    dropExtraClass = $('.drop-extra-block');
    $('.drop-extra-toggle').on('click', function(event) {
        event.preventDefault();
        activePop = null;
        closeInactivePop();
        $(this).parents('.drop').find('.drop-extra-block').show();
        activeExtraPop = 1;
    });
    $('.drop-extra-close').on('click', function(event) {
        event.preventDefault();
        dropExtraClass.hide();
    });
    dropExtraClass.on('mouseover', function(event) {
        activeExtraPop = 1;
    });
    dropExtraClass.on('mouseout', function(event) {
        activeExtraPop = null;
    });
    $(document).on('click', function(event) {
        if ( $(this).parents('.drop-extra-block:visible') && !activeExtraPop ) {
            dropExtraClass.hide();
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            activePop = null;
            closeInactivePop();
            dropExtraClass.hide();
        }
    });

    //------------------------------------------------------------------------//

    //tab
    $('.tabs').delegate('li:not(.active)','click',function(){$(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);});

    //------------------------------------------------------------------------//

    //slider no navigation
    $('.slider-js-no-nav').slick({
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
        swipeToSlide: true
    });

    //------------------------------------------------------------------------//

    //slider full navigation
    $('.slider-js-full-nav').slick({
        dots: true,
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

    //------------------------------------------------------------------------//

    //slider outside navigation
    $('.slider-js-outside-nav').slick({
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
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.outside-slider-prev'),
        nextArrow: $('.outside-slider-next'),
        responsive: [
            {
                breakpoint: 1326,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    //------------------------------------------------------------------------//

    $('.header-cart-product-delete').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.header-cart-product').fadeOut(1, function() {
            scrollPaneResize();
        });
    });

    //------------------------------------------------------------------------//

    $('.header-favorite-product-delete').on('click', function(event) {
        event.preventDefault();
        var deleteIndex = $(this).parents('.slick-slide').index();
        $('.slider-js-arrows-nav').slick('slickRemove', deleteIndex);
    });

    //------------------------------------------------------------------------//

    //search toggle
    $('.nav-search-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.nav-search').addClass('nav-search-focus');
        $('.nav-search-input-text').focus();
    });
    $('.nav-search-input-text').on('focusin', function(event) {
        $('.nav-search').addClass('nav-search-focus');
    });
    $('.nav-search-input-text').on('focusout', function(event) {
        if ( !$('.nav-search-open').length ) {
            $('.nav-search').removeClass('nav-search-focus');
            $('.nav-search-panel').slideUp('100');
        }
    });
    $('.nav-search-input-text').on('keyup', function(event) {
        if ( $(this).val() != '' && event.keyCode != 27 ) {
            $('.nav-search').addClass('nav-search-open').addClass('nav-search-focus');
            $('.nav-search-panel').slideDown('200');
        } else {
            $('.nav-search').removeClass('nav-search-open');
            $('.nav-search-panel').slideUp('100');
        }

        if ( event.keyCode == 27 ) {
            $('.nav-search').removeClass('nav-search-open');
            $('.nav-search-panel').slideUp('100');
            $('.nav-search').removeClass('nav-search-focus');
        }
    });
    $('.nav-search-panel').on('click', function(event) {
        event.stopPropagation();
        $('.nav-search-input-text').focus();
        $('.nav-search').addClass('nav-search-focus');
    });
    $('.nav-search-delete').on('click', function(event) {
        event.preventDefault();
        $('.nav-search').removeClass('nav-search-open');
        $('.nav-search-panel').slideUp('100');
        $('.nav-search-input-text').val('').focus();
    });

    //------------------------------------------------------------------------//

    //menu tab
    $(document).on('click', '.header-menu li:not(".active") a', function(event) {
        event.preventDefault();
        $(this).parents('li').addClass('active').siblings('li').removeClass('active');
        var hash = $(this).prop('href').split('#')[1];
        $('#'+hash).addClass('visible').siblings('.menu-wrapper').removeClass('visible');
    });

    //------------------------------------------------------------------------//

    //menu hover
    var timer;
    $('.menu > li').hover(function() {
        thisLi = $(this);
        timer = setTimeout(function(){ openSubmenu(thisLi); }, 150);
    }, function() {
        clearTimeout(timer);
        closeSubmenu($(this));
    });
    function openSubmenu(value) {
        $(value).addClass('hover');
    }
    function closeSubmenu(value) {
        $(value).removeClass('hover');
    }

    //------------------------------------------------------------------------//

    //subscribe
    $('.subscribe-button .button').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.subscribe').addClass('subscribe-success');
    });

    //------------------------------------------------------------------------//

    //info panel
    $('.info-panel-close').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.info-panel').hide();
    });

    //------------------------------------------------------------------------//

});//document ready