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

    //reviews sorting
    $('.reviews-sorting a').on('click', function(event) {
        event.preventDefault();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

    //------------------------------------------------------------------------//

    //reviews audio
    $('.reviews-audio audio').audioPlayer();

    //------------------------------------------------------------------------//

});//document ready