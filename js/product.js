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
        fade: true
    });

    $('.product-gallery-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var hasVideo = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.youtube-video');
        if (hasVideo.length) {
            hasVideo[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });

    var active3D = 0;
    $('.product-gallery-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var has3D = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.threesixty-3d');
        var hasVideo = $('.product-gallery-slider').find('.slide-js').eq(currentSlide).find('.youtube-video');
        if (has3D.length && !active3D) {
            addSpinner();
            loadImage();
            active3D = 1;
        }
        if ( has3D.length || hasVideo.length ) {
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

    //threesixty
    var ready = false,
    dragging = false,
    pointerStartPosX = 0,
    pointerEndPosX = 0,
    pointerDistance = 0,
    monitorStartTime = 0,
    monitorInt = 10,
    ticker = 0,
    speedMultiplier = 10,
    spinner,
    totalFrames = 52,
    currentFrame = 0,
    frames = [],
    endFrame = 0,
    loadedImages = 0,

    $document = $(document),
    $container = $('#threesixty'),
    $images = $('#threesixty_images'),

    demoMode = false,
    fakePointer = {
        x: 0,
        speed: 4
    },
    fakePointerTimer = 0;

    function addSpinner () {
        spinner = new CanvasLoader("spinner");
        spinner.setShape("spiral");
        spinner.setDiameter(90);
        spinner.setDensity(90);
        spinner.setRange(1);
        spinner.setSpeed(4);
        spinner.setColor("#333333");
        spinner.show();
        $("#spinner").fadeIn("slow");
    };

    function loadImage() {
        var li = document.createElement("li");
        var imageName = "upload/img_3d/" + (loadedImages + 1) + ".png";
        var image = $('<img>').attr('src', imageName).addClass("previous-image").appendTo(li);
        frames.push(image);
        $images.append(li);
        $(image).load(function() {
            imageLoaded();
        });
    };

    function imageLoaded() {
        loadedImages++;
        $("#spinner span").text(Math.floor(loadedImages / totalFrames * 100) + "%");
        if (loadedImages == totalFrames) {
            frames[0].removeClass("previous-image").addClass("current-image");
            $("#spinner").fadeOut("slow", function(){
                spinner.hide();
                showThreesixty();
            });
        } else {
            loadImage();
        }
    };

    function showThreesixty () {
        $images.fadeIn("slow");
        ready = true;
        endFrame = -360;
        if(!demoMode) {
            refresh();
        } else {
            fakePointerTimer = window.setInterval(moveFakePointer, 100);
        }
    };

    function moveFakePointer () {
        fakePointer.x += fakePointer.speed;
        trackPointer();
    };

    function quitDemoMode() {
        window.clearInterval(fakePointerTimer);
        demoMode = false;
    };

    function render () {
        if(currentFrame !== endFrame)
        {
            var frameEasing = endFrame < currentFrame ? Math.floor((endFrame - currentFrame) * 0.1) : Math.ceil((endFrame - currentFrame) * 0.1);
            hidePreviousFrame();
            currentFrame += frameEasing;
            showCurrentFrame();
        } else {
            window.clearInterval(ticker);
            ticker = 0;
        }
    };

    function refresh () {
        if (ticker === 0) {
            ticker = self.setInterval(render, Math.round(1000 / 60));
        }
    };

    function hidePreviousFrame() {
        frames[getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
    };

    function showCurrentFrame() {
        frames[getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");
    };

    function getNormalizedCurrentFrame() {
        var c = -Math.ceil(currentFrame % totalFrames);
        if (c < 0) c += (totalFrames - 1);
        return c;
    };

    function getPointerEvent(event) {
        return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
    };

    $container.on("mousedown", function (event) {
        quitDemoMode();
        //event.preventDefault();
        pointerStartPosX = getPointerEvent(event).pageX;
        dragging = true;
    });

    $document.on("mouseup", function (event){
        //event.preventDefault();
        dragging = false;
    });

    $document.on("mousemove", function (event){
        if(demoMode) {
            return;
        }
        //event.preventDefault();
        trackPointer(event);
    });

    $container.on("touchstart", function (event) {
        quitDemoMode();
        //event.preventDefault();
        pointerStartPosX = getPointerEvent(event).pageX;
        dragging = true;
    });

    $container.on("touchmove", function (event) {
        //event.preventDefault();
        trackPointer(event);
    });

    $container.on("touchend", function (event) {
        //event.preventDefault();
        dragging = false;
    });

    function trackPointer(event) {
        var userDragging = ready && dragging ? true : false;
        var demoDragging = demoMode;
        if(userDragging || demoDragging) {
            pointerEndPosX = userDragging ? getPointerEvent(event).pageX : fakePointer.x;
            if(monitorStartTime < new Date().getTime() - monitorInt) {
                pointerDistance = pointerEndPosX - pointerStartPosX;
                endFrame = currentFrame + Math.ceil((totalFrames - 1) * speedMultiplier * (pointerDistance / $container.width()));
                refresh();
                monitorStartTime = new Date().getTime();
                pointerStartPosX = userDragging ? getPointerEvent(event).pageX : fakePointer.x;
            }
        } else {
            return;
        }
    };

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

});//document ready