$(document).ready(function () {

    //new cabinet status promocode list
    var newCabinetStatusPromocode,
        newCabinetStatusPromocodeLength = $('.new-cabinet-status-promocode-list').length;
    if (newCabinetStatusPromocodeLength) {
        newCabinetStatusPromocode = new Swiper('.new-cabinet-status-promocode-list', {
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
            spaceBetween: 30,
            slidesPerView: 1,
        });
    }

    //------------------------------------------------------------------------//

});//document ready