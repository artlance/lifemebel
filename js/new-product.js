$(document).ready(function () {

    //new product gallery
    var newProductGalleryCurrent = 0;
    var newProductGallery,
        newProductGalleryLength = $('.new-product-gallery').length;
    if (newProductGalleryLength) {
        newProductGallery = new Swiper('.new-product-gallery', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // убираем свайп
            // simulateTouch: false,
            // allowTouchMove: false,
            watchOverflow: true,
            speed: 500,
            on: {
                init: function () {
                    console.log("Инициализация слайдера, текущий слайд: 0");
                },
                slideChange: function (swiper) {

                    var thisActiveIndex = newProductGallery.activeIndex,
                        thisPreviousIndex = newProductGallery.previousIndex,
                        thisSlides = $('.new-product-gallery').find(".swiper-slide");
                    newProductGalleryCurrent = thisActiveIndex;

                    //Предыдущий
                    console.log("Предыдущий слайд: " + thisPreviousIndex);
                    var previousSlide = thisSlides.eq(thisActiveIndex);

                    //Текущий
                    console.log("Меняем слайд на: " + thisActiveIndex);
                    var currentSlide = thisSlides.eq(thisActiveIndex);

                },
                slideChangeTransitionStart: function () {
                    console.log("Начало смены слайда: " + newProductGallery.activeIndex);
                },
                slideChangeTransitionEnd: function () {
                    console.log("Конец смены слайда: " + newProductGallery.activeIndex);
                }
            },
        });
    }

    //------------------------------------------------------------------------//

    //new product favorite
    $(document).on('click', '.new-product-favorite', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    //------------------------------------------------------------------------//

    //popover
    if ($('.popover-target').length) {
        $('.popover-target').popover({
            trigger: 'hover',
            html: true
        });
    }

    //popover color
    if ($('.popover-target-color').length) {
        $('.popover-target-color').popover({
            trigger: 'hover',
            html: true,
            template: '<div class="popover popover-color" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>'
        });
    }

    //------------------------------------------------------------------------//

    //countdown
    if ($('.countdown').length) {
        $('.countdown').downCount({
            date: '11/04/2020 12:00:00',
            offset: +3
        }, function () {
            //callback
        });
    }

    //------------------------------------------------------------------------//

    //new other products
    var newOtherProducts,
        newOtherProductsLength = $('.new-other-products').length;
    if (newOtherProductsLength) {
        newOtherProducts = new Swiper('.new-other-products', {
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
    if (newSimilarProductsLength) {
        newSimilarProducts = new Swiper('.new-similar-products', {
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
    if (newRecentlyProductsLength) {
        newRecentlyProducts = new Swiper('.new-recently-products', {
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
    $(document).on('click', '.new-product-specs-more-button', function (event) {
        event.preventDefault();
        $(this).parents('.new-product-specs-more').addClass('hidden');
        $(this).parents('.new-product-specs').find('.new-product-specs-item').removeClass('hidden');
    });

    //------------------------------------------------------------------------//

    //fancybox
    if ($('[data-fancybox]').length) {
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
    $(document).on('click', '.new-product-reviews-more-button', function (event) {
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
        modalName.each(function () {
            var modalOuterWidth = $(this).outerWidth();
            var modalOuterHeight = $(this).outerHeight();
            $(this).css({
                margin: 0
            });
            if (windowHeight > modalOuterHeight) {
                $(this).css({
                    top: (windowHeight - modalOuterHeight) / 2
                });
            } else {
                $(this).css({
                    top: 0
                });
            }
            if (windowWidth > modalOuterWidth) {
                $(this).css({
                    left: (windowWidth - modalOuterWidth) / 2
                });
            } else {
                $(this).css({
                    left: 0
                });
            }
        });
    }
    $(document).on('click', '[data-toggle="modal"]', function (event) {
        centerModal();
    });
    $(window).resize(function () {
        centerModal();
    });

    //------------------------------------------------------------------------//

    //new product modal certificate
    function newProductModalCertificate_init() {

        var newProductModalCertificate,
            newProductModalCertificateLength = $('.new-product-modal-certificate').length;
        if (newProductModalCertificateLength) {
            newProductModalCertificate = new Swiper('.new-product-modal-certificate', {
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
            url: './new-product-modal-certificate.html',
            cache: false,
            success: function () {
                $('#new-product-modal-certificate').load('./new-product-modal-certificate.html', function (response, status, xhr) {
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
            url: './new-product-modal-credit.html',
            cache: false,
            success: function () {
                $('#new-product-modal-credit').load('./new-product-modal-credit.html', function (response, status, xhr) {
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
        if (newProductModalGalleryLength) {
            newProductModalGallery = new Swiper('.new-product-modal-gallery-slider', {
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
            url: './new-product-modal-gallery.html',
            cache: false,
            success: function () {
                $('#new-product-modal-gallery').load('./new-product-modal-gallery.html', function (response, status, xhr) {
                    newProductModalGallery_init();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product modal review
    $('#new-product-modal-review').on('shown', function () {
        $.ajax({
            url: './new-product-modal-review.html',
            cache: false,
            success: function () {
                $('#new-product-modal-review').load('./new-product-modal-review.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product set
    $(document).on('keypress', '.new-product-set-number-text', function (event) {
        event = event || window.event;
        if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57)) return false;
    });

    $(document).on('change', '.new-product-set-number-text', function (event) {
        var thisParent = $(this).parents('.new-product-set-item');
        var quantityValue = $(this).val();
        if (quantityValue == 0) {
            thisParent.find('.new-product-set-checkbox input').prop('checked', false);
        } else {
            thisParent.find('.new-product-set-checkbox input').prop('checked', true);
        }
    });

    $(document).on('click', '.new-product-set-number-minus', function (event) {
        event.preventDefault();
        var thisParent = $(this).parents('.new-product-set-item');
        var quantityInput = $(this).parent('.new-product-set-number').find('.new-product-set-number-text');
        var quantityValue = quantityInput.val();
        quantityValue = --quantityValue;
        if (quantityValue < 0) { quantityValue = 0; }
        quantityInput.val(quantityValue);
        if (quantityValue == 0) {
            thisParent.find('.new-product-set-checkbox input').prop('checked', false);
        }
    });

    $(document).on('click', '.new-product-set-number-plus', function (event) {
        event.preventDefault();
        var thisParent = $(this).parents('.new-product-set-item');
        var quantityInput = $(this).parent('.new-product-set-number').find('.new-product-set-number-text');
        var quantityValue = quantityInput.val();
        quantityInput.val(++quantityValue);
        thisParent.find('.new-product-set-checkbox input').prop('checked', true);
    });

    $(document).on('change', '.new-product-set-checkbox input', function (event) {
        var thisParent = $(this).parents('.new-product-set-item');
        if ($(this).is(':checked')) {
            thisParent.find('.new-product-set-number-text').val('1');
        } else {
            thisParent.find('.new-product-set-number-text').val('0');
        }
    });

    //------------------------------------------------------------------------//

    //new product set delete
    $(document).on('click', '.new-product-set-total-item-delete', function (event) {
        event.preventDefault();
        $(this).parents('.new-product-set-total-item').remove();
        $('.new-product-set-total').stickySidebar('updateSticky');
    });

    //------------------------------------------------------------------------//

    //new product set buy
    var newProductSetBuy,
        newProductSetBuyLength = $('.new-product-set-buy-slider').length;
    if (newProductSetBuyLength) {
        newProductSetBuy = new Swiper('.new-product-set-buy-slider', {
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

    //new product customer photos
    var newProductCustomerPhotos,
        newProductCustomerPhotosLength = $('.new-product-customer-photos-slider').length;
    if (newProductCustomerPhotosLength) {
        newProductCustomerPhotos = new Swiper('.new-product-customer-photos-slider', {
            navigation: {
                nextEl: '.new-product-customer-photos .swiper-button-next',
                prevEl: '.new-product-customer-photos .swiper-button-prev',
            },
            watchOverflow: true,
            speed: 500,
            spaceBetween: 5,
            slidesPerView: 'auto',
        });
    }

    //------------------------------------------------------------------------//

    //new product quick view
    function newProductQuickView_init() {

        var newProductQuickView,
            newProductQuickViewLength = $('.new-product-quick-view-gallery').length;
        if (newProductQuickViewLength) {
            newProductQuickView = new Swiper('.new-product-quick-view-gallery', {
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

    $('#new-product-quick-view').on('shown', function () {
        $.ajax({
            url: './new-product-quick-view.html',
            cache: false,
            success: function () {
                $('#new-product-quick-view').load('./new-product-quick-view.html', function (response, status, xhr) {
                    newProductQuickView_init();
                    centerModal();
                    if ($('.popover-target').length) {
                        $('.popover-target').popover({
                            trigger: 'hover',
                            html: true
                        });
                    }
                    if ($('.countdown').length) {
                        $('.countdown').downCount({
                            date: '11/04/2020 12:00:00',
                            offset: +3
                        }, function () {
                            //callback
                        });
                    }
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //sticky sidebar
    if ($('.new-product-set-total').length) {
        $('.new-product-set-total').stickySidebar({
            containerSelector: '.new-product-set',
            innerWrapperSelector: '.new-product-set-total-inner',
            topSpacing: 16,
            bottomSpacing: 16,
            resizeSensor: true,
        });
    }

    //------------------------------------------------------------------------//

    //new product delivery
    $(document).on('click', '.new-product-delivery-type-filials-link', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.new-product-delivery-info').find('.new-product-delivery-filials').toggleClass('visible');
    });

    $(document).on('click', '.new-product-delivery-filials-close', function (event) {
        event.preventDefault();
        $(this).parents('.new-product-delivery-filials').removeClass('visible');
        $(this).parents('.new-product-delivery-info').find('.new-product-delivery-type-filials-link').removeClass('active');
    });

    //------------------------------------------------------------------------//

    //new product modal city
    $('#new-product-modal-city').on('shown', function () {
        $.ajax({
            url: './new-product-modal-city.html',
            cache: false,
            success: function () {
                $('#new-product-modal-city').load('./new-product-modal-city.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product modal city clear
    $(document).on('click', '.new-product-modal-city-clear', function (event) {
        event.preventDefault();
        $(this).parents('.new-product-modal-city-input').find('.input-text').val('').focus();
    });

    //------------------------------------------------------------------------//

    //new product modal city choose
    $(document).on('click', '.new-product-modal-city-list a', function (event) {
        event.preventDefault();
        $(this).parents('.new-product-modal-city-list').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.new-product-modal-city-input').find('.input-text').val($(this).text());
    });

    //------------------------------------------------------------------------//

    //new product modal call
    $('#new-product-modal-call').on('shown', function () {
        $.ajax({
            url: './new-product-modal-call.html',
            cache: false,
            success: function () {
                $('#new-product-modal-call').load('./new-product-modal-call.html', function (response, status, xhr) {
                    centerModal();
                    if ($('.form-phone-mask').length) {
                        $('.form-phone-mask').mask('+7 (999) 999-99-99');
                    }
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new product advantages more
    $(document).on('click', '.new-product-advantages-more', function (event) {
        event.preventDefault();
        $(this).parents('.new-product-advantages-item').toggleClass('active').find('.new-product-advantages-detail').slideToggle(200);
    });

    //------------------------------------------------------------------------//

    //new product advantages video
    function productAdvantagesVideoPlay(element) {
        element.find('.new-product-advantages-video-play').fadeOut(0);
        element.find('.new-product-advantages-video-pause').fadeIn(0);
    }

    function productAdvantagesVideoPause(element) {
        element.find('.new-product-advantages-video-play').fadeIn(0);
        element.find('.new-product-advantages-video-pause').fadeOut(0);
    }

    // $('.new-product-advantages-video').hover(function () {
    //     var thisVideo = $(this).find('video');
    //     if (thisVideo.length && !$(this).hasClass('manual-changed')) {
    //         thisVideo[0].play();
    //         productAdvantagesVideoPlay($(this));
    //     }
    // }, function () {
    //     var thisVideo = $(this).find('video');
    //     if (thisVideo.length && !$(this).hasClass('manual-changed')) {
    //         thisVideo[0].pause();
    //         productAdvantagesVideoPause($(this));
    //     }
    // });

    $(document).on('click', '.new-product-advantages-video-play', function (event) {
        event.preventDefault();
        var thisParent = $(this).parents('.new-product-advantages-video');
        thisParent.addClass('manual-changed');
        var thisVideo = thisParent.find('video');
        if (thisVideo.length) {
            thisVideo[0].play();
            productAdvantagesVideoPlay(thisParent);
        }
    });

    $(document).on('click', '.new-product-advantages-video-pause', function (event) {
        event.preventDefault();
        var thisParent = $(this).parents('.new-product-advantages-video');
        thisParent.addClass('manual-changed');
        var thisVideo = thisParent.find('video');
        if (thisVideo.length) {
            thisVideo[0].pause();
            productAdvantagesVideoPause(thisParent);
        }
    });

    //------------------------------------------------------------------------//

    //new product modal showroom
    $('#new-product-modal-showroom').on('shown', function () {
        $.ajax({
            url: './new-product-modal-showroom.html',
            cache: false,
            success: function () {
                $('#new-product-modal-showroom').load('./new-product-modal-showroom.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product image sticky
    if ($('.v3-product-specs-img').length) {
        $('.v3-product-specs-img').stickySidebar({
            containerSelector: '.v3-product-specs',
            innerWrapperSelector: '.v3-product-specs-img-inner',
            topSpacing: 16,
            bottomSpacing: 0,
            resizeSensor: true,
        });
    }

    //------------------------------------------------------------------------//

    //v3 product specs more
    $(document).on('click', '.v3-product-specs-more', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.v3-product-specs-text-hidden').slideToggle(200, function () {
            $('.v3-product-specs-img').stickySidebar('updateSticky');
            $('.v3-product-info-video').stickySidebar('updateSticky');
        });
    });

    //------------------------------------------------------------------------//

    //v3 product video sticky
    if ($('.v3-product-info-video').length) {
        $('.v3-product-info-video').stickySidebar({
            containerSelector: '.v3-product-info',
            innerWrapperSelector: '.v3-product-info-video-inner',
            topSpacing: 16,
            bottomSpacing: 0,
            resizeSensor: true,
        });
    }

    //------------------------------------------------------------------------//

    //v3 product info more
    $(document).on('click', '.v3-product-info-more', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.v3-product-info-text-hidden').slideToggle(200, function () {
            $('.v3-product-specs-img').stickySidebar('updateSticky');
            $('.v3-product-info-video').stickySidebar('updateSticky');
        });
    });

    //------------------------------------------------------------------------//

    //v3 product reviews
    var v3ProductReviews,
        v3ProductReviewsLength = $('.v3-product-reviews-list').length;
    if (v3ProductReviewsLength) {
        v3ProductReviews = new Swiper('.v3-product-reviews-list', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            watchOverflow: true,
            speed: 500,
            spaceBetween: 16,
            slidesPerView: 2,
            centerInsufficientSlides: true,
            breakpoints: {
                1326: {
                    slidesPerView: 3
                }
            }
        });
    }

    //------------------------------------------------------------------------//

    //v3 product reviews modal
    $('#v3-product-reviews-modal').on('shown', function () {
        $.ajax({
            url: './v3-product-reviews-modal.html',
            cache: false,
            success: function () {
                $('#v3-product-reviews-modal').load('./v3-product-reviews-modal.html', function (response, status, xhr) {
                    centerModal();
                    //fancybox
                    if ($('[data-fancybox]').length) {
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
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product payment modal
    $('#v3-product-payment-modal').on('shown', function () {
        $.ajax({
            url: './v3-product-payment-modal.html',
            cache: false,
            success: function () {
                $('#v3-product-payment-modal').load('./v3-product-payment-modal.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.modal.in', function (event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal.in').modal('hide');
        }
    });

    //------------------------------------------------------------------------//

    //v3 product color scroll
    $(document).on('click', '.v3-product-color-scroll', function () {
        $('html, body').animate({
            scrollTop: $('#v3-product-color-detail').offset().top
        }, 400);
        $('.tabs li#v3-product-color-detail').addClass('active').siblings('li').removeClass('active').parents('.tab').find('.box').hide().eq($('#v3-product-color-detail').index()).fadeIn(250);
    });

    //------------------------------------------------------------------------//

    //v3 product customer modal
    var v3ProductCustomerPhoto;
    var v3ProductCustomerPhotoIndex;
    function v3ProductCustomerPhoto_init(indexTo = 0) {
        var v3ProductCustomerPhotoLength = $('.v3-product-customer-review-photo-slider').length;
        if (v3ProductCustomerPhotoLength) {
            v3ProductCustomerPhoto = new Swiper('.v3-product-customer-review-photo-slider', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                watchOverflow: true,
                speed: 500,
                on: {
                    init: function () {
                        let thisElement = this;
                        thisElement.slideTo(indexTo, 0);
                        v3ProductCustomerPhotoGridChange(thisElement.activeIndex);
                        $('.v3-product-customer-counter-current').text(thisElement.activeIndex + 1);
                        $('.v3-product-customer-counter-all').text(thisElement.slides.length);

                        $(document).on('click', '.v3-product-customer-photo', function (event) {
                            event.preventDefault();
                            const thisIndex = $(this).parents('.v3-product-customer-photo-item').index();
                            thisElement.slideTo(thisIndex - 1, 0);
                            $('#v3-product-customer-modal').animate({ scrollTop: 0 }, '500');
                        });

                        printV3productReview(thisElement.activeIndex);
                    },
                    slideChange: function () {
                        v3ProductCustomerPhotoGridChange(this.activeIndex);
                        $('.v3-product-customer-counter-current').text(this.activeIndex + 1);
                        printV3productReview(this.activeIndex);
                    }
                },
            });
        }
    }

    function v3ProductCustomerPhotoGridChange(index) {
        $('.v3-product-customer-photo-list .v3-product-customer-photo.active').removeClass('active');
        $('.v3-product-customer-photo-list .v3-product-customer-photo-item').eq(index).find('.v3-product-customer-photo').addClass('active');
    }

    $('#v3-product-customer-modal').on('shown', function () {
        $.ajax({
            url: './v3-product-customer-modal.html',
            cache: false,
            success: function () {
                $('#v3-product-customer-modal').load('./v3-product-customer-modal.html', function (response, status, xhr) {
                    v3ProductCustomerPhoto_init(v3ProductCustomerPhotoIndex);
                    if ($('.v3-product-customer-photo-list').length) {
                        var v3ProductCustomerGrid = $('.v3-product-customer-photo-list').imagesLoaded(function () {
                            v3ProductCustomerGrid.masonry({
                                itemSelector: '.grid-item',
                                columnWidth: '.grid-sizer',
                                percentPosition: true
                            });
                        });
                    }
                });
            }
        });
    });

    $(document).on('click', '.new-product-customer-photo', function (event) {
        event.preventDefault();
        v3ProductCustomerPhotoIndex = $(this).parents('.swiper-slide').index();
    });

    function printV3productReview(thisID = 0) {
        //убрать if, он для примера дизайнеру
        if (thisID > 2) { thisID = 0; }
        $('.v3-product-customer-review-overflow').html($('.new-product-review-template[data-id="' + thisID + '"]').html());
    }


    //------------------------------------------------------------------------//

    //v3 product promocode copy
    $(document).on('click', '.v3-product-promocode', function (event) {
        event.preventDefault();
        $(this).addClass('active');
        navigator.clipboard.writeText($(this).find('.v3-product-promocode-text').text());
    });

    //------------------------------------------------------------------------//

    //v3 product color custom modal
    $('#v3-product-color-custom-modal').on('shown', function () {
        $.ajax({
            url: './v3-product-color-custom-modal.html',
            cache: false,
            success: function () {
                $('#v3-product-color-custom-modal').load('./v3-product-color-custom-modal.html', function (response, status, xhr) {
                    centerModal();
                    if ($('.form-phone-mask').length) {
                        $('.form-phone-mask').mask('+7 (999) 999-99-99');
                    }
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //пример переключения блоков для дизайнера
    $(document).on('click', '.v3-product-color-custom-modal-button .button', function (event) {
        event.preventDefault();
        $(this).addClass('button-disabled');
        $(this).parents('.v3-product-color-custom-modal-content').find('.v3-product-color-custom-modal-row').addClass('error');
        centerModal();
    });

    $(document).on('click', '.v3-product-color-custom-modal-button .button-disabled', function (event) {
        event.preventDefault();
        $(this).parents('.v3-product-color-custom-modal-content').hide();
        $(this).parents('.v3-product-color-custom-modal').find('.v3-product-color-custom-modal-success').show();
        centerModal();
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal overflow
    function v3ProductShowroomModalOverflow() {
        //v3 product showroom modal text overflow
        $('.v3-product-showroom-modal-text-overflow').on('scroll', function () {
            if ($(this).scrollTop() > 0) {
                $(this).parents('.v3-product-showroom-modal-text').addClass('shadow');
            } else {
                $(this).parents('.v3-product-showroom-modal-text').removeClass('shadow');
            }
        });

        //v3 product showroom modal panel overflow
        $('.v3-product-showroom-modal-panel-overflow').on('scroll', function () {
            if ($(this).scrollTop() > 0) {
                $(this).parents('.v3-product-showroom-modal-panel-content').addClass('shadow');
            } else {
                $(this).parents('.v3-product-showroom-modal-panel-content').removeClass('shadow');
            }
        });
    }

    //v3 product showroom modal
    $('#v3-product-showroom-modal').on('shown', function () {
        $.ajax({
            url: './v3-product-showroom-modal.html',
            cache: false,
            success: function () {
                $('#v3-product-showroom-modal').load('./v3-product-showroom-modal.html', function (response, status, xhr) {
                    centerModal();
                    v3ProductShowroomModalOverflow();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal 2
    $('#v3-product-showroom-modal-2').on('shown', function () {
        $.ajax({
            url: './v3-product-showroom-modal-2.html',
            cache: false,
            success: function () {
                $('#v3-product-showroom-modal-2').load('./v3-product-showroom-modal-2.html', function (response, status, xhr) {
                    centerModal();
                    v3ProductShowroomModalOverflow();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal 3
    $('#v3-product-showroom-modal-3').on('shown', function () {
        $.ajax({
            url: './v3-product-showroom-modal-3.html',
            cache: false,
            success: function () {
                $('#v3-product-showroom-modal-3').load('./v3-product-showroom-modal-3.html', function (response, status, xhr) {
                    centerModal();
                    v3ProductShowroomModalOverflow();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal 4
    $('#v3-product-showroom-modal-4').on('shown', function () {
        $.ajax({
            url: './v3-product-showroom-modal-4.html',
            cache: false,
            success: function () {
                $('#v3-product-showroom-modal-4').load('./v3-product-showroom-modal-4.html', function (response, status, xhr) {
                    centerModal();
                    v3ProductShowroomModalOverflow();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal 5
    $('#v3-product-showroom-modal-5').on('shown', function () {
        $.ajax({
            url: './v3-product-showroom-modal-5.html',
            cache: false,
            success: function () {
                $('#v3-product-showroom-modal-5').load('./v3-product-showroom-modal-5.html', function (response, status, xhr) {
                    centerModal();
                    v3ProductShowroomModalOverflow();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal 6
    $('#v3-product-showroom-modal-6').on('shown', function () {
        $.ajax({
            url: './v3-product-showroom-modal-6.html',
            cache: false,
            success: function () {
                $('#v3-product-showroom-modal-6').load('./v3-product-showroom-modal-6.html', function (response, status, xhr) {
                    centerModal();
                    v3ProductShowroomModalOverflow();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //v3 product showroom modal panel
    $(document).on('click', '.v3-product-showroom-modal-item-cta a', function (event) {
        event.preventDefault();
        var thisId = $(this).attr('href');
        thisId = thisId.substr(1);
        $('[data-showroom="' + thisId + '"]').addClass('show');
    });

    $(document).on('click', '.v3-product-showroom-modal-panel-back', function (event) {
        event.preventDefault();
        $(this).parents('.v3-product-showroom-modal-panel').removeClass('show');
    });

    //------------------------------------------------------------------------//

});//document ready