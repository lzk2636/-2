var PAJ = document.querySelector('.PAJ')    //平安京
var hearoLeft = document.querySelector('.hearoLeft');   //荒川之怒
var hearoRight = document.querySelector('.hearoRight');  //序幕开启
var hearoMiddle = document.querySelector('.hearoMiddle');    //麻将棋
var arrow = document.querySelector('.header-top .arrow');   //头部箭头

// 移动的方法
/**
 * 
 * @param { 当前元素 ==> } elent 
 * @param { 最终位置 ==> } taget 
 * @param { 定时器的时间参数 ==> } time 
 */
var hearoMover = function (elent, taget, time) {
    clearInterval(elent.TimeID)
    elent.TimeID = setInterval(function () {
        var zzy_position = elent.offsetTop;
        if (zzy_position > taget) {
            var zzy_step = -2;
        }
        if (zzy_position < taget) {
            var zzy_step = 2;
        }
        zzy_position += zzy_step;
        elent.style.top = zzy_position + 'px'
        if (zzy_step < 0 ? zzy_position <= taget : zzy_position >= taget) {
            elent.style.top = taget + 'px'
            clearInterval(elent.TimeID)
        }
    }, time)
}

// 旋转木马样式
var zzy_style = [
    {   
        position: 'absolute',
        width: '4.395833rem',
        height: '2.510417rem' , 
        left: '180px',
        bottom : 0,
        zIndex: 5,
        opacity : 1
    },
    {   
        position: 'absolute',
        width: '4.395833rem',
        height: '1.822917rem',
        left : '350px',
        bottom : '80px',
        opacity: .4,
        zIndex: 4,
    },
    {   
        position: 'absolute',
        width: '2.395833rem',
        height: '1.510417rem',
        left: '400px',
        bottom:'100px',
        opacity :.6,
        zIndex : 3
    },
    {   
        position: 'absolute',
        width: '2.395833rem',
        height: '1.510417rem',
        left: '400px',
        bottom:'100px',
        opacity :.6,
        zIndex : 3
    },
    {   
        position: 'absolute',
        width: '4.395833rem',
        height: '1.822917rem',
        left: 0,
        bottom: '80px',
        opacity: .4,
        zIndex: 4,
    }]
//给图片增加样式
for(let i = 0; i < zzy_style.length; i++) {
    for(var key in zzy_style[i]) {
        var attrs = key;
        var attrsNume = zzy_style[i][key];
        var zzy_location = $('.warp > ul > li').eq(i).css(attrs);
        $('.warp > ul > li').eq(i).css(key,attrsNume)
    }
}
// 点击左箭头图片走动
$('.warp-right').click(function () {
    zzy_style.push(zzy_style.shift())
    for(var i = 0; i < $('.warp li').length; i++) {
        $('.warp li').eq(i).stop(true).animate(zzy_style[i])
    }
})
// 点击右箭头图片走动
$('.warp-left').click(function () {
    zzy_style.unshift(zzy_style.pop())
    for(var i = 0; i < $('.warp li').length; i++) {
        $('.warp li').eq(i).stop(true).animate(zzy_style[i])
    }
})
//封装自动轮播的方法
var timeID3
function zzy_auto() {
    clearInterval(timeID3)
    timeID3 = setInterval(function(){
        zzy_style.push(zzy_style.shift())
        for(var i = 0; i < $('.warp li').length; i++) {
            $('.warp li').eq(i).stop(true).animate(zzy_style[i])
        }
    },3000)
}
zzy_auto() //调用自动轮播
// 鼠标移入停止轮播
$('.warp').mouseenter(function(){
    clearInterval(timeID3)
})
// 鼠标移开开始轮播
$('.warp').mouseleave(function(){
    zzy_auto()
})



// 英雄背景出现方法
var hearoAppear = function (elent, bg) {
    elent.onclick = function () {
        bg.style.display = 'block';
        PAJ.style.opacity = '0.6';
        document.querySelector('body').style.overflow = 'hidden';
    }
}

// 英雄背景消失方法
$('.identical-1 .remove').click(function () {
    $(this).parent().hide();
    $('.PAJ').css('opacity', 1)
    document.querySelector('body').style.overflow = '';
})

//英雄背景切换
$('.identical-1 .HC-arrow').click(function () {
    $(this).parent().hide().next().show();
})



// 头部箭头事件
var a = 5;
var timeID = setInterval(function () {
    $(arrow).animate({
        bottom: a,
    }, 1000, 'swing')
    if (a >= 5) {
        a = 0;
    } else if (a <= 0) {
        a = 5
    }
}, 600)




// 荒川之怒鼠标事件
hearoLeft.onmouseenter = function () {
    hearoMover(hearoLeft, -20, 30);
}
hearoLeft.onmouseleave = function () {
    hearoMover(hearoLeft, 0, 30)
}

// 荒川之怒背景出现事件
hearoAppear(hearoLeft, document.querySelector('.HC-bg'))
// 荒川之怒技能光环
$('.index').click(function () {
    var idex = $(this).index()
    $(this).addClass('garden').siblings('li').removeClass('garden');
    $('.gif').html('<img src="./images/ia_10000002' + idex + '.gif" alt="">')
})




//序幕开启鼠标事件
hearoRight.onmouseenter = function () {
    hearoMover(hearoRight, -20, 30);
}
hearoRight.onmouseleave = function () {
    hearoMover(hearoRight, 0, 30)
}

//序幕开启背景出现事件
hearoAppear(hearoRight, document.querySelector('.XM-bg'))




//麻将棋鼠标事件
$(hearoMiddle).mouseenter(function () {
    $(hearoMiddle).stop(true).animate({
        bottom: 20,
    }, 500)
})
$(hearoMiddle).mouseleave(function () {

    $(hearoMiddle).animate({
        bottom: 0,
    }, 300)
})

//麻将棋背景出现事件
hearoAppear(hearoMiddle, document.querySelector('.MJ-bg'))