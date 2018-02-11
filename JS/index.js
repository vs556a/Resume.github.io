$(function () {
    var navOffset = $('.nav').offset().top;

    $(window).scroll(function () {
        //    console.log($('.nav').height());
        var scrollScreen = $(window).scrollTop();
        if (scrollScreen > navOffset) {
            $('.nav').addClass('nav-move');
        } else {
            $('.nav').removeClass('nav-move');
        }
    })

    for (var i = 0; i < $('.project>.row').children().length; i++) {
        $('.project>.row').children()[i].onmouseenter = function () {
            $(this).css({
                'box-shadow': '-2px 10px 20px',
                'transform': 'scale(1)'
            }).siblings().css('box-shadow', 'none')
        }
        $('.project>.row').children()[i].onmouseleave = function () {
            $(this).css({
                'box-shadow': 'none',
                'transform': 'scale(0.9)'
            })
        }
    }

    $('header .row .col-md-4:eq(0) span').click(function () {
        $('html,body').animate({
            scrollTop: $('.content').offset().top - 50,         
        },500)
        $(this).css('text-decoration','none')
    })

    $('header .row .col-md-4:eq(1) span').click(function () {
        $('html,body').animate({
            scrollTop: $('#project').offset().top-5
        },500)
    })
    
    $('header .row .col-md-4:eq(2) span').click(function () {
        $('html,body').animate({    
            scrollTop: $('.appraisal').offset().top
        },500)
   
    })
})