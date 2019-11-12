$(function () {
    var positionX = null;
    var positionY = null;
    var timeId = null;
    var index = 0;
    timeId = setInterval(move, 2000)
    function WYDS() {

    }
    WYDS.prototype.getMouseLeave = function (ele) {
        $(ele).mouseleave(function () {
            $(this).css({
                "background-position-x": positionX,
                'background-position-y': positionY
            })
        })
    }
    WYDS.prototype.getMouseEnter = function (ele, x, y) {
        $(ele).mouseenter(function () {
            positionX = $(this).css('background-position-x');
            positionY = $(this).css('background-position-y');
            $(this).css({
                "background-position-x": x,
                'background-position-y': y
            })
        })

        WYDS.prototype.ermaShow = function (ele) {
            $(ele).mouseenter(function () {
                $(this).children().show(200)
            })
        }
        WYDS.prototype.ermaHide = function (ele) {
            $(ele).mouseleave(function () {
                $(this).children().hide(200)
            })
        }
    }



    $('header>ul>li').mouseenter(function () {
        $('header>ul>li').eq(0).css('border-bottom', '0px')
        $(this).children('a').css('color', '#1ca0f3').parent().siblings('li').children('a').css('color', '#000')
        $(this).children('a').css('border-bottom', ' 5px solid #1ca0f3').parent().siblings('li').children('a').css('border-bottom', '')
    })
    $('header>ul').mouseleave(function () {
        $(this).children('li').eq(0).find('a').css('color', '#1ca0f3').parent().siblings('li').children('a').css('color', '#000')
        $(this).children('li').eq(0).find('a').css('border-bottom', ' 5px solid #1ca0f3').parent().siblings('li').children('a').css('border-bottom', '')
        // $(this).children('a').css('border-bottom',' 5px solid #1ca0f3').parent().siblings('li').children('a').css('border-bottom','')
    })


    var wyds = new WYDS();
    console.log(wyds)
    wyds.getMouseEnter('.download>#andriod', 0, -187)
    wyds.getMouseLeave('.download>#andriod');
    wyds.getMouseEnter('.download>#apple', 0, -247);
    wyds.getMouseLeave('.download>#apple');
    wyds.ermaShow('.download>#erma')
    wyds.ermaHide('.download>#erma')


    $('#play_slides>#arrow-right').click(function () {
        clearInterval(timeId)
        move()
    });

    $('#play_slides>#arrow-left').click(function () {
        clearInterval(timeId);
        if (index == 0) {
            index = $('#play_slides>ul>li').length - 1;
            // $('#play_slides>ul').offset().left = -index * $('#play_slides>ul>li').width();
            index++;
        }
        index--;
        $('#play_slides>ul').animate({
            left: -index * $('#play_slides>ul>li').width()
        }, 2000, 'linear')

    })

    $('#play_slides').mouseenter(function () {
        clearInterval(timeId)
        clearInterval(timeOver)
    })
    $('#play_slides').mouseleave(function () {
        timeId = setInterval(move, 2000)
        timeOver = setInterval(getAllPost().afterMove, 5000)
    });


    var timeOver = setInterval(getAllPost().afterMove, 5000)
    function getAllPost() {
        var i = 0;
        var str = [' 建起希望，筑造窝巢，我来教你平地起塔',
            '美丽人生不需要解释', '活在现实社会之中', '天色直爽的米子大幅度发'];


        function afterMove() {
            //     console.log($('#position>.after').css('border-left'))
            //     var str= $('#position>.after').css('border-left');
            //    var newStr= str.split(/px/)
            //    console.log(newStr[0])

            if (i == 4) {
                i = 0;
                $('#position>.after').offset().left = 0;
                i--;
            }
            i++;
            $('#position>.after').stop(true, false).animate(
                {
                    left: ($('#position').width() - 20) / 4 * i,
                }, 5000,'linear'
            )

            $('#position>.title').text(str[i])


        }
        return {
            i: i,
            str: str,
            afterMove: afterMove
        }

    }

    function move() {

        var length = $('#play_slides>ul>li').length - 1;
        if (index == length) {
            index = 0;
            $('#play_slides>ul').offset().left = index;
            index--;

        }

        index++;
        //console.log(index)
        $('#play_slides>ul').stop(true, false).animate({
            left: -index * $('#play_slides>ul>li').width()
        }, 2000, 'linear')
    }

    function getColor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`
    }
    function getHeight() {
        //play_slides
        var top = Math.floor(Math.random()*($('#play_slides').height()-20));
        return top;
    }
    $('#play_bottom>button').click(function () {
        var txt = $('.input_test').val().trim();
        console.log(txt)
        if (txt == '') {
            return false;
        }

        $('<span></span>').text(txt).css({
            position: 'absolute',
            top: getHeight(),
            right: 0,
            fontSize: 20,
            color: getColor(),
            zIndex:6

        }).appendTo($('#play_slides'))
            .animate({ right: 1280 }, 9000, function () {
                $(this).remove()
            })
    })


   

})