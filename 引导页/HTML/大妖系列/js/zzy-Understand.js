// 英雄播放动画
/**
 * @param { 需要移动的元素 ==> } elent 
 * @param { 目标位置 ==> } taget 
 * @param { 结束位置 ==> } end 
 * @param { 需要跳过的图片1 ==> } skip 
 * @param { 需要跳过的图片2 ==> } skip2 
 * @param { 需要跳过的图片3 ==> } skip3 
 */
var zzy_for = function (elent, taget, end, skip, skip2, skip3) {
    var i = taget;
    clearInterval(elent.timeID)
    elent.timeID = setInterval(function () {
        i++;
        if (i == skip || i == skip2 || i == skip3) {
            i++;
        }
        if (i < 100) {
            elent.src = "./imgae/ia_1000000000" + i + ".png";
        } else {
            elent.src = "./imgae/ia_100000000" + i + ".png";
        }
        if (i == end) {
            i = taget;
        }
    }, 200)
}


// 底部点击通告栏
var zzy_btn = true;
$('.banQuan').click(function () {
    if (zzy_btn) {
        $('footer').slideDown()
        $(this).animate({
            bottom: 73
        })
        $(this).children('i').toggleClass('toogld')
        zzy_btn = false
    } else {
        $('footer').slideUp()
        $(this).animate({
            bottom: 20
        })
        $(this).children('i').toggleClass('toogld')
        zzy_btn = true;
    }
})


// 背景出现
var zzy_ssr = 0
$('.hero .ssr').click(function () {
    zzy_ssr = $(this).index()
    $('header').css('display', 'none')
    $('.QJ-bg').fadeIn().find('.new').eq(zzy_ssr).fadeIn(1000, function () {
        $('.new').eq(zzy_ssr).find('.remove').addClass('remove-zhuan')
    })
})

//背景消失
$('.new .remove').click(function () {
    zzy_ssr = $(this).index()
    $('.QJ-bg').fadeOut()
    $(this).parent().fadeOut()
    $('header').css('display', 'block')
})



// 音乐
var zzy_audio = document.querySelector('.Audio > audio')
var box = document.querySelector('.box')
var zzy_swich = 0;
var zzy_btn = document.querySelector('.Audio > .btn')
// 点击按钮开启音乐
zzy_btn.onclick = function () {
    clearInterval(box.timeID2)
    if (zzy_swich == 1) {
        zzy_swich = 0;
        zzy_audio.pause();
        return;
    }

    zzy_swich++;
    zzy_music(box);
    zzy_audio.play();
}

// 音符动画
function zzy_music(elent) {
    elent.timeID2 = setInterval(function () {
        for (var i = 0; i < document.querySelectorAll('.zzy-Portal .box i').length; i++) {
            document.querySelectorAll('.zzy-Portal .box i')[i].style.transtion = 'all 0.3s';
            document.querySelectorAll('.zzy-Portal .box i')[i].style.height = Math.ceil(Math.random() * 20) + 'px'
        }
    }, 300)
}



//英雄-鸟人
zzy_for(document.querySelector('.hero-NR img'), 112, 132, 122);
$('hero-HR')

// 英雄-鸟人移动动画

$('.hero-NR').mouseenter(function () {

    $(this).stop(true).animate({
        top: -20
    })
})
$('.hero-NR').mouseleave(function () {
    $(this).animate({
        top: 0
    })

})




//英雄-恶魔
zzy_for(document.querySelector('.hero-EM img'), 90, 111, 97, 95);

// 英雄-恶魔移动动画
$('.hero-EM').mouseenter(function () {
    $(this).stop(true).animate({
        top: 200
    })
})
$('.hero-EM').mouseleave(function () {
    $(this).animate({
        top: 220
    })
})




// 英雄-女王
zzy_for(document.querySelector('.hero-NW img'), 70, 89, 74);

// 英雄-女王移动动画
$('.hero-NW').mouseenter(function () {
    $(this).stop(true).animate({
        top: 220
    })
})
$('.hero-NW').mouseleave(function () {
    $(this).animate({
        top: 240
    })
})




//英雄-狐狸
zzy_for(document.querySelector('.hero-HL img'), 48, 69, 50, 52, 54)

// 英雄-狐狸移动动画
$('.hero-HL').mouseenter(function () {
    $(this).stop(true).animate({
        top: 160
    })
})
$('.hero-HL').mouseleave(function () {
    $(this).animate({
        top: 180
    })
})




//英雄-守墓人
$('.hero-SMR').mouseenter(function () {
    $('.hero-SMR > i').fadeIn()
})
$('.hero-SMR').mouseleave(function () {
    $('.hero-SMR > i').fadeOut()
})

