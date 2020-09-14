$(document).ready(function(){

    //new product gallery
    var newProductGalleryCurrent = 0;
    var newProductGallery,
        newProductGalleryLength = $('.new-product-gallery').length;
    if ( newProductGalleryLength ) {
        newProductGallery = new Swiper ('.new-product-gallery', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            watchOverflow: true,
            speed: 500,
            on: {
                slideChange: function () {
                    newProductGalleryCurrent = newProductGallery.activeIndex
                },
            },
        });
    }

    //------------------------------------------------------------------------//

    //new product favorite
    $(document).on('click', '.new-product-favorite', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //popover
    if ( $('.popover-target').length ) {
        $('.popover-target').popover({
            trigger: 'hover',
            html: true
        });
    }

    //------------------------------------------------------------------------//

    //countdown
    if ( $('.countdown').length ) {
        $('.countdown').downCount({
            date: '11/04/2020 24:00:00',
            offset: +3
        }, function () {
            //callback
        });
    }

    //------------------------------------------------------------------------//

    //new other products
    var newOtherProducts,
        newOtherProductsLength = $('.new-other-products').length;
    if ( newOtherProductsLength ) {
        newOtherProducts = new Swiper ('.new-other-products', {
            navigation: {
                nextEl: '.new-other-products-wrapper .swiper-button-next',
                prevEl: '.new-other-products-wrapper .swiper-button-prev',
            },
            watchOverflow: true,
            speed: 500,
            spaceBetween: 16,
            slidesPerView: 3,
            centerInsufficientSlides: true
        });
    }

    //------------------------------------------------------------------------//

    //new similar products
    var newSimilarProducts,
        newSimilarProductsLength = $('.new-similar-products').length;
    if ( newSimilarProductsLength ) {
        newSimilarProducts = new Swiper ('.new-similar-products', {
            navigation: {
                nextEl: '.new-similar-products-wrapper .swiper-button-next',
                prevEl: '.new-similar-products-wrapper .swiper-button-prev',
            },
            watchOverflow: true,
            speed: 500,
            spaceBetween: 16,
            slidesPerView: 3,
            centerInsufficientSlides: true,
            breakpoints: {
                1326: {
                    slidesPerView: 5
                }
            }
        });
    }

    //------------------------------------------------------------------------//

    //new recently products
    var newRecentlyProducts,
        newRecentlyProductsLength = $('.new-recently-products').length;
    if ( newRecentlyProductsLength ) {
        newRecentlyProducts = new Swiper ('.new-recently-products', {
            navigation: {
                nextEl: '.new-recently-products-wrapper .swiper-button-next',
                prevEl: '.new-recently-products-wrapper .swiper-button-prev',
            },
            watchOverflow: true,
            speed: 500,
            spaceBetween: 16,
            slidesPerView: 5,
            centerInsufficientSlides: true,
            breakpoints: {
                1326: {
                    slidesPerView: 7
                }
            }
        });
    }

    //------------------------------------------------------------------------//

    //new product specs
    $(document).on('click', '.new-product-specs-more-button', function(event) {
        event.preventDefault();
        $(this).parents('.new-product-specs-more').addClass('hidden');
        $(this).parents('.new-product-specs').find('.new-product-specs-item').removeClass('hidden');
    });

    //------------------------------------------------------------------------//

    //fancybox
    if ( $('[data-fancybox]').length ) {
        $('[data-fancybox]').fancybox({
            infobar: false,
            transitionEffect: "slide",
            animationEffect: "fade",
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
    }

    //------------------------------------------------------------------------//

    //new product reviews
    $(document).on('click', '.new-product-reviews-more-button', function(event) {
        event.preventDefault();
        $(this).parents('.new-product-reviews-more').addClass('hidden');
        $(this).parents('.new-product-reviews').find('.new-product-review').removeClass('hidden');
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
    $(document).on('click', '[data-toggle="modal"]', function(event) {
        centerModal();
    });
    $(window).resize(function(){
        centerModal();
    });

    //------------------------------------------------------------------------//

    //new product modal certificate
    function newProductModalCertificate_init() {

        var newProductModalCertificate,
            newProductModalCertificateLength = $('.new-product-modal-certificate').length;
        if ( newProductModalCertificateLength ) {
            newProductModalCertificate = new Swiper ('.new-product-modal-certificate', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                watchOverflow: true,
                speed: 500,
                on: {
                    imagesReady: function () {
                        centerModal();
                    },
                },
            });
        }

    }

    $('#new-product-modal-certificate').on('shown', function () {
        $.ajax({
            url: '../new-product-modal-certificate.html',
            cache: false,
            success: function() {
                $('#new-product-modal-certificate').load( '../new-product-modal-certificate.html', function( response, status, xhr ) {
                    newProductModalCertificate_init();
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product modal credit
    $('#new-product-modal-credit').on('shown', function () {
        $.ajax({
            url: '../new-product-modal-credit.html',
            cache: false,
            success: function() {
                $('#new-product-modal-credit').load( '../new-product-modal-credit.html', function( response, status, xhr ) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product modal gallery
    function newProductModalGallery_init() {

        var newProductModalGallery,
            newProductModalGalleryLength = $('.new-product-modal-gallery-slider').length;
        if ( newProductModalGalleryLength ) {
            newProductModalGallery = new Swiper ('.new-product-modal-gallery-slider', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                watchOverflow: true,
                speed: 500,
                on: {
                    slideChange: function () {
                        newProductGallery.slideTo(newProductModalGallery.activeIndex, 0)
                    },
                },
            });
            newProductModalGallery.slideTo(parseInt(newProductGalleryCurrent), 0);
        }

    }

    $('#new-product-modal-gallery').on('shown', function () {
        $.ajax({
            url: '../new-product-modal-gallery.html',
            cache: false,
            success: function() {
                $('#new-product-modal-gallery').load( '../new-product-modal-gallery.html', function( response, status, xhr ) {
                    newProductModalGallery_init();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product modal review
    $('#new-product-modal-review').on('shown', function () {
        $.ajax({
            url: '../new-product-modal-review.html',
            cache: false,
            success: function() {
                $('#new-product-modal-review').load( '../new-product-modal-review.html', function( response, status, xhr ) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product set
    $(document).on('keypress', '.new-product-set-number-text', function(event) {
        event = event || window.event;
        if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) ) return false;
    });

    $(document).on('change', '.new-product-set-number-text', function(event) {
        var thisParent = $(this).parents('.new-product-set-item');
        var quantityValue = $(this).val();
        if ( quantityValue == 0 ) {
            thisParent.find('.new-product-set-checkbox input').prop('checked', false);
        } else {
            thisParent.find('.new-product-set-checkbox input').prop('checked', true);
        }
    });

    $(document).on('click', '.new-product-set-number-minus', function(event) {
        event.preventDefault();
        var thisParent = $(this).parents('.new-product-set-item');
        var quantityInput = $(this).parent('.new-product-set-number').find('.new-product-set-number-text');
        var quantityValue = quantityInput.val();
        quantityValue = --quantityValue;
        if ( quantityValue < 0 ) { quantityValue = 0; }
        quantityInput.val(quantityValue);
        if ( quantityValue == 0 ) {
            thisParent.find('.new-product-set-checkbox input').prop('checked', false);
        }
    });

    $(document).on('click', '.new-product-set-number-plus', function(event) {
        event.preventDefault();
        var thisParent = $(this).parents('.new-product-set-item');
        var quantityInput = $(this).parent('.new-product-set-number').find('.new-product-set-number-text');
        var quantityValue = quantityInput.val();
        quantityInput.val(++quantityValue);
        thisParent.find('.new-product-set-checkbox input').prop('checked', true);
    });

    $(document).on('change', '.new-product-set-checkbox input', function(event) {
        var thisParent = $(this).parents('.new-product-set-item');
        if( $(this).is(':checked') ) {
            thisParent.find('.new-product-set-number-text').val('1');
        } else {
            thisParent.find('.new-product-set-number-text').val('0');
        }
    });

    //------------------------------------------------------------------------//

    //new product set delete
    $(document).on('click', '.new-product-set-total-item-delete', function(event) {
        event.preventDefault();
        $(this).parents('.new-product-set-total-item').remove();
    });

    //------------------------------------------------------------------------//

    //new product set buy
    var newProductSetBuy,
        newProductSetBuyLength = $('.new-product-set-buy-slider').length;
    if ( newProductSetBuyLength ) {
        newProductSetBuy = new Swiper ('.new-product-set-buy-slider', {
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                draggable: true,
                snapOnRelease: false
            },
            speed: 500,
            spaceBetween: 16,
            slidesPerView: 'auto',
            watchOverflow: true,
        });
    }

    //------------------------------------------------------------------------//

});//document ready