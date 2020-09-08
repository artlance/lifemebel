$(document).ready(function(){

    //new product gallery
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

});//document ready