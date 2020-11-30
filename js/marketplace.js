$(document).ready(function () {

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $(document).on('click', 'a[href="#"]', function (event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //marketplace document
    $(document).on('change', '.marketplace-document-upload input', function (event) {
        var thisValue = $(this).val(),
            thisParents = $(this).parents('.marketplace-document-upload');
        if (thisValue) {
            thisParents.addClass('active').find('.marketplace-document-upload-text').text('Загружен');
        }
    });

    //------------------------------------------------------------------------//

    //datepicker
    // if ($("#marketplace-datepicker-from").length) {

    //     $.datepicker.regional['ru'] = {
    //         closeText: 'Закрыть',
    //         prevText: 'Предыдущий',
    //         nextText: 'Следующий',
    //         currentText: 'Сегодня',
    //         monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    //             'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    //         monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
    //             'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    //         dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    //         dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    //         dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    //         weekHeader: 'Не',
    //         firstDay: 1,
    //         isRTL: false,
    //         showMonthAfterYear: false,
    //         yearSuffix: ''
    //     };
    //     $.datepicker.setDefaults($.datepicker.regional['ru']);

    //     var dateFormat = "mm/dd/yy",
    //         from = $("#marketplace-datepicker-from").datepicker({
    //             numberOfMonths: 1,
    //             //minDate: 0
    //         }).on("change", function () {
    //             to.datepicker("option", "minDate", getDate(this));
    //             dateState(from.datepicker("getDate"), to.datepicker("getDate"));
    //         });

    //     var to = $("#marketplace-datepicker-to").datepicker({
    //         defaultDate: "+1m",
    //         numberOfMonths: 1,
    //         minDate: 0
    //     }).on("change", function () {
    //         from.datepicker("option", "maxDate", getDate(this));
    //         dateState(from.datepicker("getDate"), to.datepicker("getDate"));
    //     });

    //     $('#marketplace-datepicker-to .ui-corner-all, #marketplace-datepicker-from .ui-corner-all').on('click', function (event) {
    //         dateState(from.datepicker("getDate"), to.datepicker("getDate"));
    //     });


    //     function dateState(thisDateFrom, thisDateTo) {
    //         $(".marketplace-datepicker .ui-datepicker-calendar td.date-highlighted").removeClass('date-highlighted');
    //         setTimeout(function () {
    //             var loop = new Date(thisDateFrom);
    //             while (loop <= thisDateTo) {
    //                 var thisYear = loop.getFullYear();
    //                 var thisMonth = loop.getMonth();
    //                 var thisDate = loop.getDate();

    //                 $(".marketplace-datepicker .ui-datepicker-calendar").each(function (index, el) {
    //                     $(el).find('td[data-month="' + thisMonth + '"][data-year="' + thisYear + '"]').each(function (index, el) {
    //                         if ($(el).text() == thisDate) {
    //                             $(el).addClass('date-highlighted');
    //                         }
    //                     });
    //                 });

    //                 var newDate = loop.setDate(loop.getDate() + 1);
    //                 loop = new Date(newDate);
    //             }
    //         }, 50);
    //     }

    //     dateState(from.datepicker("getDate"), to.datepicker("getDate"));


    //     function getDate(element) {
    //         var date;
    //         try {
    //             date = $.datepicker.parseDate(dateFormat, element.value);
    //         } catch (error) {
    //             date = null;
    //         }
    //         return date;
    //     }

    // }

    //------------------------------------------------------------------------//

    //marketplace statistics
    $(document).on('click', '.marketplace-statistics-toggle', function (event) {
        event.preventDefault();
        $(this).parents('.marketplace-statistics-row').toggleClass('active');
    });

    //------------------------------------------------------------------------//


    if ($("#marketplace-daterangepicker").length) {

        $("#marketplace-daterangepicker").daterangepicker(
            {
                "locale": {
                    "format": "dd, DD MMMM, YYYY",
                    "separator": " – ",
                    "applyLabel": "Применить",
                    "cancelLabel": "Отменить",
                    "fromLabel": "От",
                    "toLabel": "До",
                    "customRangeLabel": "Произвольный",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "Вс",
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Май",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 1
                },
                "alwaysShowCalendars": true,
                "autoUpdateInput": true,
                "startDate": "Ср, 29 Ноябрь, 2020",
                "endDate": "Чт, 10 Декабрь, 2020",
                "template":
                    '<div class="daterangepicker marketplace-period-panel">' +
                        '<div class="marketplace-period-content">' +
                            '<div class="marketplace-period-calendar">' +
                                '<div class="ranges"></div>' +
                                '<div class="marketplace-period-columns">' +
                                    '<div class="drp-calendar left">' +
                                        '<div class="calendar-table"></div>' +
                                        '<div class="calendar-time"></div>' +
                                    '</div>' +
                                    '<div class="drp-calendar right">' +
                                        '<div class="calendar-table"></div>' +
                                        '<div class="calendar-time"></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="marketplace-period-menu">' +
                                '<ul>' +
                                    '<li><a class="daterange-today" href="#">Сегодня</a></li>' +
                                    '<li><a class="daterange-yesterday" href="#">Вчера</a></li>' +
                                    '<li><a class="daterange-this-week" href="#">Эта неделя</a></li>' +
                                    '<li><a class="daterange-this-month" href="#">Этот месяц</a></li>' +
                                    '<li><a class="daterange-last-month" href="#">Прошлый месяц</a></li>' +
                                    '<li><a class="daterange-custom" href="#">Произвольный диапазон</a></li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +
                        '<div class="marketplace-period-footer drp-buttons">' +
                            '<div class="marketplace-period-date"><span class="drp-selected"></span></div>' +
                            '<div class="marketplace-period-options">' +
                                '<button class="cancelBtn button secondary" type="button"></button>' +
                                '<button class="applyBtn button primary" disabled="disabled" type="button"></button> ' +
                            '</div>' +
                        '</div>' +
                    '</div>'
            },
            function (start, end, label) {
            }
        );

        var DateRangePicker = $('#marketplace-daterangepicker').data('daterangepicker');

        $(document).on('click', '.daterange-today', function(event) {
            event.preventDefault();
            DateRangePicker.setStartDate(moment());
            DateRangePicker.setEndDate(moment());
            DateRangePicker.updateView();
        });

        $(document).on('click', '.daterange-yesterday', function(event) {
            event.preventDefault();
            DateRangePicker.setStartDate(moment().subtract(1, 'days'));
            DateRangePicker.setEndDate(moment().subtract(1, 'days'));
            DateRangePicker.updateView();
        });

        $(document).on('click', '.daterange-this-week', function(event) {
            event.preventDefault();
            DateRangePicker.setStartDate(moment().startOf('isoWeek'));
            DateRangePicker.setEndDate(moment().endOf('isoWeek'));
            DateRangePicker.updateView();
        });

        $(document).on('click', '.daterange-this-month', function(event) {
            event.preventDefault();
            DateRangePicker.setStartDate(moment().startOf('month'));
            DateRangePicker.setEndDate(moment().endOf('month'));
            DateRangePicker.updateView();
        });

        $(document).on('click', '.daterange-last-month', function(event) {
            event.preventDefault();
            DateRangePicker.setStartDate(moment().subtract(1, 'month').startOf('month'));
            DateRangePicker.setEndDate(moment().subtract(1, 'month').endOf('month'));
            DateRangePicker.updateView();
        });

    }

});//document ready

