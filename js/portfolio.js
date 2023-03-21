$(function () {
    var fullpageOption = {
        anchors: [
            'main',
            'portfolio01',
            'portfolio02',
            'portfolio03',
            'portfolio04',
            'portfolio05'
        ],
        onLeave: function (origin, destination, direction) {
            console.log(origin, destination, direction);
            $('.gnb li').eq(destination - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(destination - 1).addClass('on').siblings().removeClass('on');
        },

        afterRender: function () {
            $('.gnb li').eq(0).addClass('on')
            $('.section').eq(0).addClass('on')
        }
    }

    $('.main').fullpage(fullpageOption)

    // function gnb () {
    // var gnbHeight = $('.gnb').height();
    // $('.gnb').css({
    //    transform:`translage(0,$(gnbHeight/2))`
    //})
    // }
    // gnb ()

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
        $('.header').toggleClass('on');
    })

    $('.cover li').on('click', function () {
        $('.cover').removeClass('on');
        $('.mopen').removeClass('on');
        $('.header').removeClass('on');
    })

    $('.cover').on('wheel', function (e) {
        e.stopPropagation()
    })
})