$(document).ready(function(){

    //order buy
    $('.order-buy-begin').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.order-buy-block').addClass('active');
    });

    //------------------------------------------------------------------------//

    //order delete
    $('.order-product-delete').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.order-product').addClass('deleted');
    });

    $('.order-product-return-link').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.order-product').removeClass('deleted');
    });

    //------------------------------------------------------------------------//

    //order set
    $('.order-product-set-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.order-product-set').toggleClass('open').find('.order-product-set-list').slideToggle(200);
    });

    //------------------------------------------------------------------------//

    //order change
    $('.order-product-change-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.order-product-change').toggleClass('open').find('.order-product-change-list').slideToggle(200);
    });

    $('.order-product-change-item-link').on('click', function(event) {
        event.preventDefault();
        $(this).parent('.order-product-change-item').addClass('active').siblings('.order-product-change-item').removeClass('active');
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

});//document ready