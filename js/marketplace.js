$(document).ready(function(){

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $(document).on('click', 'a[href="#"]', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //marketplace document
    $(document).on('change', '.marketplace-document-upload input', function(event) {
        var thisValue = $(this).val(),
            thisParents = $(this).parents('.marketplace-document-upload');
        if ( thisValue ) {
            thisParents.addClass('active').find('.marketplace-document-upload-text').text('Загружен');
        }
    });

    //------------------------------------------------------------------------//

});//document ready