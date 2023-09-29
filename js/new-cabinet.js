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

    //new cabinet modal promocode
    $('#new-cabinet-modal-promocode').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-promocode.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-promocode').load('./new-cabinet-modal-promocode.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new cabinet modal promocode apply
    $('#new-cabinet-modal-promocode-apply').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-promocode-apply.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-promocode-apply').load('./new-cabinet-modal-promocode-apply.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new cabinet datepicker
    if ($('.new-cabinet-datepicker').length) {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);

        $('.new-cabinet-datepicker').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            changeYear: true,
            yearRange: 'c-100:c',
            maxDate: 0,
        });
    }

    //------------------------------------------------------------------------//

    //new cabinet phone
    if ($('.new-cabinet-phone-mask').length) {
        $('.new-cabinet-phone-mask').mask('8 999 999-99-99', { autoclear: false });
    }

    //------------------------------------------------------------------------//

    //new cabinet date
    if ($('.new-cabinet-date-mask').length) {
        $('.new-cabinet-date-mask').mask('99.99.9999');
    }

    //------------------------------------------------------------------------//

    //modal mask close
    $(document).on('click', '.modal.in', function (event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal.in').modal('hide');
        }
    });

    //------------------------------------------------------------------------//

    //new cabinet modal confirm phone
    $('#new-cabinet-modal-confirm-phone').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-confirm-phone.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-confirm-phone').load('./new-cabinet-modal-confirm-phone.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new cabinet modal confirm email
    $('#new-cabinet-modal-confirm-email').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-confirm-email.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-confirm-email').load('./new-cabinet-modal-confirm-email.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new cabinet modal confirm email success
    $('#new-cabinet-modal-confirm-email-success').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-confirm-email-success.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-confirm-email-success').load('./new-cabinet-modal-confirm-email-success.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //new cabinet modal change phone
    $('#new-cabinet-modal-change-phone').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-change-phone.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-change-phone').load('./new-cabinet-modal-change-phone.html', function (response, status, xhr) {
                    centerModal();
                    if ($('.new-cabinet-phone-mask').length) {
                        $('.new-cabinet-phone-mask').mask('8 999 999-99-99', { autoclear: false });
                    }
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //пример переключения блоков для дизайнера
    $(document).on('click', '.new-cabinet-modal-change-phone-button .button', function (event) {
        event.preventDefault();
        $(this).addClass('disabled');
        $(this).parents('.new-cabinet-modal-change-phone-content').find('.new-cabinet-input-wrapper').addClass('error');
        $(this).parents('.new-cabinet-modal-change-phone-content').find('.new-cabinet-input-note').removeClass('hidden');
        centerModal();
    });

    //------------------------------------------------------------------------//

    //new cabinet modal verify phone
    $('#new-cabinet-modal-verify-phone').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-verify-phone.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-verify-phone').load('./new-cabinet-modal-verify-phone.html', function (response, status, xhr) {
                    centerModal();
                    if ($('.new-cabinet-code-mask').length) {
                        $('.new-cabinet-code-mask').mask('9 9 9 9');
                    }
                });
            }
        });
    });

    //------------------------------------------------------------------------//

    //пример переключения блоков для дизайнера
    $(document).on('click', '#new-cabinet-modal-verify-phone-step1 .button', function (event) {
        event.preventDefault();
        $(this).parents('#new-cabinet-modal-verify-phone-step1').addClass('hidden');
        $('#new-cabinet-modal-verify-phone-step2').removeClass('hidden');
        centerModal();
    });

    $(document).on('click', '#new-cabinet-modal-verify-phone-step2 .button', function (event) {
        event.preventDefault();
        $(this).parents('#new-cabinet-modal-verify-phone-step2').addClass('hidden');
        $('#new-cabinet-modal-verify-phone-step3').removeClass('hidden');
        centerModal();
    });

    $(document).on('click', '#new-cabinet-modal-verify-phone-step3 .button', function (event) {
        event.preventDefault();
        $(this).parents('#new-cabinet-modal-verify-phone-step3').addClass('hidden');
        $('#new-cabinet-modal-verify-phone-step4').removeClass('hidden');
        centerModal();
    });

    $(document).on('click', '#new-cabinet-modal-verify-phone-step4 .button', function (event) {
        event.preventDefault();
        $(this).parents('#new-cabinet-modal-verify-phone-step4').addClass('hidden');
        $('#new-cabinet-modal-verify-phone-step5').removeClass('hidden');
        centerModal();
    });

    $(document).on('click', '#new-cabinet-modal-verify-phone-step5 .button', function (event) {
        event.preventDefault();
        $(this).parents('.new-cabinet-modal-verify-phone-content').addClass('hidden');
        $('.new-cabinet-modal-verify-phone-success').removeClass('hidden');
        centerModal();
    });

    //------------------------------------------------------------------------//

    //new cabinet modal verify phone success
    $('#new-cabinet-modal-verify-phone-success').on('shown', function () {
        $.ajax({
            url: './new-cabinet-modal-verify-phone-success.html',
            cache: false,
            success: function () {
                $('#new-cabinet-modal-verify-phone-success').load('./new-cabinet-modal-verify-phone-success.html', function (response, status, xhr) {
                    centerModal();
                });
            }
        });
    });

    //------------------------------------------------------------------------//

});//document ready