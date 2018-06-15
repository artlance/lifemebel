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

    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    //------------------------------------------------------------------------//

    //phone mask
    $('.phone-mask').mask('+7 (999) 999-99-99');

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
    scrollPane();
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
    $('.drop-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parent(dropClass).toggleClass('active');
        if ( $('.scroll-pane').length ) {
            scrollPane();
            scrollPaneResize();
        }
        if ( $('.slider-js-arrows-nav').length ) {
            $('.slider-js-arrows-nav').slick('setPosition');
        }
    });

    //extra
    var activeExtraPop = null;
    dropExtraClass = $('.drop-extra-block');
    $('.drop-extra-toggle').on('click', function(event) {
        event.preventDefault();
        activePop = null;
        closeInactivePop();
        dropExtraClass.show();
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

    //------------------------------------------------------------------------//

    //tab
    $('.tabs').delegate('li:not(.active)','click',function(){$(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);});

    //------------------------------------------------------------------------//

    //slider arrows navigation
    $('.slider-js-arrows-nav').slick({
        dots: false,
        arrows: true,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.slide-js',
        slidesToShow: 4,
        slidesToScroll: 1
    });

    //------------------------------------------------------------------------//

    //slider no navigation
    $('.slider-js-no-nav').slick({
        dots: false,
        arrows: false,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.slide-js',
        slidesToShow: 4,
        slidesToScroll: 1
    });

    //------------------------------------------------------------------------//

    //slider full navigation
    $('.slider-js-full-nav').slick({
        dots: true,
        arrows: true,
        draggable: true,
        infinite: true,
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
        infinite: true,
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
        prevArrow: $('.outside-slider-prev'),
        nextArrow: $('.outside-slider-next')
    });

    //------------------------------------------------------------------------//

});//document ready

//*********************************************************************//

$(window).load(function() {

    //load

});//window load

//*********************************************************************//

$(window).resize(function() {

    //resize

});//window resize