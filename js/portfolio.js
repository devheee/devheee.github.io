$(function () {
    var $this = $(".section");
    var $this_s = $(".slide");

    var fullpageOption = {
        controlArrows: false,
        loopHorizontal: false,
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
        },
        // afterLoad: function (destination) {
        //     $this.eq(destination.index).addClass("on").siblings().removeClass("on");
        //     if (destination.index == 1) {
        //         $this_s.eq(0).addClass("on");
        //     }
        //     $this.eq(destination.index).addClass("on").siblings().removeClass("on");
        // }
    }

    $('.main').fullpage(fullpageOption)

    $('.pf01').on('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            $.fn.fullpage.moveSlideLeft();
        }
        else {
            $.fn.fullpage.moveSlideRight();
        }
    });

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