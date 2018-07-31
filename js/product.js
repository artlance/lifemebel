$(document).ready(function(){

    //fancybox
    $('[data-fancybox]').fancybox({
        infobar: false,
        transitionEffect: "slide",
        buttons: [
            "close"
        ]
    });

    //------------------------------------------------------------------------//

    //product gallery
    $('.product-gallery-thumbs-slider').slick({
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
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.product-gallery-slider'
    });

    $('.product-gallery-slider').slick({
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
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-gallery-thumbs-slider',
        fade: true
    });

    //------------------------------------------------------------------------//

    //product favorite
    $('.product-favorite').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //product number
    $('.product-number-text').on('keypress', function(event) {
        event = event || window.event;
        if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) ) return false;
    });

    $('.product-number-minus').on('click', function(event) {
        event.preventDefault();
        var quantityInput = $(this).parent('.product-number').find('.product-number-text');
        var quantityValue = quantityInput.val();
        quantityValue = --quantityValue;
        if ( quantityValue < 0 ) { quantityValue = 0; }
        quantityInput.val(quantityValue);
    });

    $('.product-number-plus').on('click', function(event) {
        event.preventDefault();
        var quantityInput = $(this).parent('.product-number').find('.product-number-text');
        var quantityValue = quantityInput.val();
        quantityInput.val(++quantityValue);
    });

    //------------------------------------------------------------------------//

    //product sizes
    $('.product-sizes-more').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.product-sizes-wrapper').addClass('show');
    });

    $('.product-size').on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    //------------------------------------------------------------------------//

    //product parameters
    $('.product-parameters-more').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.product-parameters').toggleClass('show');
    });

    //------------------------------------------------------------------------//

    //product photos
    $('.product-photos-slider').slick({
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

    //------------------------------------------------------------------------//

    //scroll pane products
    var scrollPane = function() {
        var pane = $('.scroll-pane-products');
        pane.jScrollPane(
            {
                showArrows: false,
                autoReinitialise: true
            }
        );
    }
    scrollPane();

    var scrollPaneResize = function() {
        $('.scroll-pane-products').each(function(index, el) {
            $(this).jScrollPane({showArrows: false, autoReinitialise: true}).data('jsp').destroy();
        });
        $('.scroll-pane-products').each(function(index, el) {
            $(this).jScrollPane({showArrows: false, autoReinitialise: true}).data('jsp').reinitialise();
        });
    }
    $(window).resize(function(){
        scrollPaneResize();
    });

    //------------------------------------------------------------------------//

});//document ready