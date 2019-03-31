$(document).ready(function(){

    //fancybox
    $('[data-fancybox]').fancybox({
        infobar: false,
        transitionEffect: "slide",
        buttons: [
            "close"
        ],
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
                NEXT: "Следующая",
                PREV: "Предыдущая",
                ERROR: "Запрошенный контент не может быть загружен. <br/> Повторите попытку позже.",
                PLAY_START: "Включить слайд-шоу",
                PLAY_STOP: "Остановить слайд-шоу",
                FULL_SCREEN: "Полноэкранный режим",
                THUMBS: "Эскизы",
                DOWNLOAD: "Скачать",
                SHARE: "Поделиться",
                ZOOM: "Увеличить"
            }
        }
    });

    //------------------------------------------------------------------------//

    var galleryThumbsNum = $('.product-gallery-thumbs-slider .slide-js').length;
    var galleryDraggHeight = 100/galleryThumbsNum;
    //console.log(galleryThumbsNum);
    $('<div class="product-gallery-scroll-panel"><div class="product-gallery-scroll-dragg" style="height: '+galleryDraggHeight+'%;"></div></div>').appendTo('.modal-gallery-thumbs');

    var pressed, pressX, pressY,
        dragged, draggedDir,
        offset = 3;

    $(document)
    .on('mousedown', '.product-gallery-scroll-dragg', function(e) {
        pressX = e.pageX;
        pressY = e.pageY;
        pressed = true;
    })
    .on('mousemove', '.product-gallery-scroll-dragg', function(e) {
        if (!pressed) return;
        dragged = Math.abs(e.pageY - pressY) > offset;
        if (dragged) {
            draggedDir = e.pageY - pressY;
            $('.product-gallery-scroll-dragg').css({
                'transform': 'translateY(' + draggedDir + 'px)'
            });
        }
    })
    .on('mouseup', function() {
        if (dragged) {
            if (draggedDir < 0) {
                $('.modal-gallery-thumbs-slider').slick('slickPrev');
            } else {
                $('.modal-gallery-thumbs-slider').slick('slickNext');
            }
        }
        pressed = dragged = false;
        $('.product-gallery-scroll-dragg').css({
            'transform': 'translateY(0px)'
        });
    });

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
        asNavFor: '.product-gallery-slider',
        responsive: [
            {
                breakpoint: 1326,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    $('.product-gallery-slider').on('init', function(event, slick){
        var thisFirst = $(this).find('.slide-js').eq(0);
        var has3D = thisFirst.find('.threesixty');
        var hasVideo = thisFirst.find('.youtube-video');
        var hasSet = thisFirst.find('.set-gallery');
        if ( has3D.length || hasVideo.length || hasSet.length ) {
            $('.product-gallery-slider').addClass('product-gallery-no-arrows');
        }
    });

    $('.product-gallery-slider').slick({
        dots: false,
        arrows: true,
        draggable: false,
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
        fade: true,
        adaptiveHeight: true
    });


    $('.product-gallery-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var hasVideo = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.youtube-video');
        if (hasVideo.length) {
            hasVideo[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });

    var active3D = 0;
    $('.product-gallery-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var has3D = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.threesixty');
        var hasVideo = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.youtube-video');
        var hasSet = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.set-gallery');
        if (has3D.length && !active3D) {
            //threesixty
            $('.product-gallery-slider .threesixty').threeSixty({
                dragDirection: 'horizontal',
                useKeys: true,
                draggable: true
            });
            active3D = 1;
        }
        if ( has3D.length || hasVideo.length || hasSet.length ) {
            $('.product-gallery-slider').addClass('product-gallery-no-arrows');
        } else {
            $('.product-gallery-slider').removeClass('product-gallery-no-arrows');
        }
    });

    var lastSlideChange = 0;
    $(document).on('mousewheel DOMMouseScroll', '.product-gallery-slider, .product-gallery-thumbs-slider', function(event) {
        event.preventDefault();
        var timeNow = new Date().getTime();
        if (!(timeNow - lastSlideChange < 500)) {
            lastSlideChange = timeNow;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                $('.product-gallery-slider').slick('slickPrev');
            } else {
                $('.product-gallery-slider').slick('slickNext');
            }
        }
    });

    //------------------------------------------------------------------------//

    //modal gallery
    $('.modal-gallery-thumbs-slider').slick({
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
        asNavFor: '.modal-gallery-slider'
    });

    $('.modal-gallery-thumbs-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.product-gallery-scroll-dragg').css({'top': galleryDraggHeight*nextSlide+'%'});
    });

    var lastSlideChange = 0;
    $(document).on('mousewheel DOMMouseScroll', '.modal-gallery', function(event) {
        event.preventDefault();
        var timeNow = new Date().getTime();
        if (!(timeNow - lastSlideChange < 500)) {
            lastSlideChange = timeNow;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                $('.modal-gallery-thumbs-slider').slick('slickPrev');
            } else {
                $('.modal-gallery-thumbs-slider').slick('slickNext');
            }
        }
    });

    $('.modal-gallery-slider').on('init', function(event, slick){
        var thisFirst = $(this).find('.slide-js').eq(0);
        var has3D = thisFirst.find('.threesixty');
        var hasVideo = thisFirst.find('.youtube-video');
        if ( has3D.length || hasVideo.length ) {
            $('.modal-gallery-slider').addClass('modal-gallery-no-arrows');
        }
    });

    $('.modal-gallery-slider').slick({
        dots: false,
        arrows: true,
        draggable: false,
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
        asNavFor: '.modal-gallery-thumbs-slider',
        fade: true,
        adaptiveHeight: true
    });

    $('#modal-gallery').on('shown', function () {
        $('.modal-gallery-thumbs-slider, .modal-gallery-slider').slick('setPosition');
        centerModal();
        var currentSlide = $('.product-gallery-slider').slick('slickCurrentSlide');
        $('.modal-gallery-thumbs-slider').slick( 'slickGoTo', parseInt(currentSlide) );
    });
    $('#modal-gallery').on('hidden', function () {
        var currentSlide = $('.modal-gallery-thumbs-slider').slick('slickCurrentSlide');
        $('.product-gallery-slider').slick( 'slickGoTo', parseInt(currentSlide) );
    });

    $('.modal-gallery-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var hasVideo = $('.modal-gallery-slider').find('.slide-js').eq(currentSlide).find('.youtube-video');
        if (hasVideo.length) {
            hasVideo[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });

    var active3Dmodal = 0;
    $('.modal-gallery-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var has3D = $('.modal-gallery-slider').find('.slide-js').eq(currentSlide).find('.threesixty');
        var hasVideo = $('.modal-gallery-slider').find('.slide-js').eq(currentSlide).find('.youtube-video');
        if (has3D.length && !active3Dmodal) {
            //threesixty
            $('.modal-gallery-slider .threesixty').threeSixty({
                dragDirection: 'horizontal',
                useKeys: true,
                draggable: true
            });
            active3Dmodal = 1;
        }
        if ( has3D.length || hasVideo.length ) {
            $('.modal-gallery-slider').addClass('modal-gallery-no-arrows');
        } else {
            $('.modal-gallery-slider').removeClass('modal-gallery-no-arrows');
        }
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

    $(document).on('click', '.product-number-minus', function(event) {
        event.preventDefault();
        var quantityInput = $(this).parent('.product-number').find('.product-number-text');
        var quantityValue = quantityInput.val();
        quantityValue = --quantityValue;
        if ( quantityValue < 0 ) { quantityValue = 0; }
        quantityInput.val(quantityValue);
    });

    $(document).on('click', '.product-number-plus', function(event) {
        event.preventDefault();
        var quantityInput = $(this).parent('.product-number').find('.product-number-text');
        var quantityValue = quantityInput.val();
        quantityInput.val(++quantityValue);
    });

    //------------------------------------------------------------------------//

    //product color
    $('.product-color-item').on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
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

    var lastAnimation = 0;
    $(document).on('mousewheel DOMMouseScroll', '.scroll-pane-products', function(event) {
        var timeNow = new Date().getTime();
        var pane = $(this);
        pane.jScrollPane({showArrows: false,autoReinitialise: true});
        var api = pane.data('jsp');
        if (!(timeNow - lastAnimation < 20)) {
            lastAnimation = timeNow;
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                var currentPosition = api.getContentPositionX();
                api.scrollToX(currentPosition-30);
            } else {
                var currentPosition = api.getContentPositionX();
                api.scrollToX(currentPosition+30);
            }
        }
    });

    //------------------------------------------------------------------------//

    //counter
    $('.countdown').downCount({
        date: '09/09/2019 12:00:00',
        offset: +10
    }, function () {
        //callback
    });

    //------------------------------------------------------------------------//

    $('.product-comments-more-button').on('click', function(event) {
        event.preventDefault();
        var buttonNum = parseInt($('.product-comments-more-num').text());
        $(this).find('.product-comments-more-num').text(--buttonNum);
        //change to AJAX
        var template = $('.product-comment').eq(1).clone();
        $('.product-comments-list .col-11').append(template);
    });

    //------------------------------------------------------------------------//

    var productCheckboxIndex = 1;

    $('.product-set-all-button').on('click', function(event) {
        event.preventDefault();
        var buttonNum = parseInt($('.product-set-all-button-num').text());
        $(this).find('.product-set-all-button-num').text(--buttonNum);
        //change to AJAX
        var template = '<div class="product-set-item"><div class="row"><div class="col-16"><div class="product-set-item-wrapper"><div class="product-set-item-products"><div class="product-set-item-products-content scroll-pane-products"><div class="product-set-item-products-wrapper"><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set1.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product1'+productCheckboxIndex+'" name="set-item" checked><label for="set-item-product1'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Стол раскладной <br>Ford Dark Oak</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="1"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="nowrap">8 540 ₽</div></div></div></div><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set2.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product2'+productCheckboxIndex+'" name="set-item"><label for="set-item-product2'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Кашпо Lechuza 16020 <br>LS 21 Белый</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="1"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="nowrap">2 650 ₽</div></div></div></div><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set3.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product3'+productCheckboxIndex+'" name="set-item" checked><label for="set-item-product3'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Стол раскладной <br>Ford Dark Oak</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="2"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="nowrap">3 350 ₽</div></div></div></div><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set4.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product4'+productCheckboxIndex+'" name="set-item" checked><label for="set-item-product4'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Подвесной светильник Cucina&nbsp;A3320SP-1WH</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="1"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="nowrap">1 050 ₽</div></div></div></div><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set5.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product5'+productCheckboxIndex+'" name="set-item"><label for="set-item-product5'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Настенное зеркало Utility&nbsp;овальное</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="1"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="nowrap">21 050 ₽</div></div></div></div><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set3.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product6'+productCheckboxIndex+'" name="set-item" checked><label for="set-item-product6'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Стол раскладной <br>Ford Dark Oak</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="1"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="product-set-item-product-price-new">8 540 ₽</div><div class="product-set-item-product-price-old">10 540 ₽</div></div></div></div><div class="product-set-item-product"><div class="product-set-item-product-img-wrapper"><a href="#" class="product-set-item-product-img"><img src="upload/images/product_set2.jpg" width="227" height="227" alt=""></a><div class="product-set-item-product-plus"></div><div class="product-set-item-product-checkbox"><div class="checkbox"><input type="checkbox" id="set-item-product7'+productCheckboxIndex+'" name="set-item"><label for="set-item-product7'+productCheckboxIndex+'"></label></div></div></div><div class="product-set-item-product-content"><div class="product-set-item-product-title"><a href="#">Кашпо Lechuza 16020 <br>LS 21 Белый</a></div><div class="product-number clearfix"><a href="#" class="product-number-minus"></a><input type="text" class="input-text product-number-text" value="1"><a href="#" class="product-number-plus"></a></div><div class="product-set-item-product-price"><div class="nowrap">2 650 ₽</div></div></div></div></div></div></div><div class="product-set-item-total"><div class="product-set-item-total-wrapper"><div class="product-set-item-total-content"><div class="product-set-item-total-title">Цена за комплект</div><div class="product-set-item-total-price"><div class="product-set-item-total-price-old">21 285 ₽</div><div class="product-set-item-total-price-new">16 280 ₽</div></div><div class="product-set-item-total-saving">Вы сэкономите: <strong>5000 ₽</strong></div></div><div class="product-set-item-total-equal"></div></div></div></div></div></div></div>';
        $('.product-set-items').append(template);
        scrollPaneResize();
        productCheckboxIndex++;
    });

    //------------------------------------------------------------------------//

    //centerModal
    function centerModal() {
        var modalName = $('.modal-center');
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        modalName.each(function() {
            var modalOuterWidth = $(this).outerWidth();
            var modalOuterHeight = $(this).outerHeight();
            $(this).css({
                margin: 0
            });
            if (windowHeight > modalOuterHeight) {
                $(this).css({
                    top: (windowHeight - modalOuterHeight) /2
                });
            } else {
               $(this).css({
                    top: 0
                });
            }
            if (windowWidth > modalOuterWidth) {
                $(this).css({
                    left: (windowWidth - modalOuterWidth) /2
                });
            } else {
               $(this).css({
                    left: 0
                });
            }
        });
    }
    $('[data-toggle="modal"], .set-position-modal').on('click', function() {
        centerModal();
    });
    $(window).resize(function(){
        centerModal();
    });
    centerModal();

    //------------------------------------------------------------------------//

    //product material
    $('.product-material-more-button').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.product-material-content').addClass('open');
    });

    //------------------------------------------------------------------------//

    //scroll to
    $('.scroll-link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 400);
                return false;
            }
        }
    });

    //------------------------------------------------------------------------//

});//document ready