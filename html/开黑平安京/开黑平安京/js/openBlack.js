

$(function () {
    // part1
    var index = 0;
    // 式神选择'手风琴'鼠标移入特效
    $('.part1 li .head-num').mouseenter(function (event) {
        // 鼠标移入,显示该 head-num 标签子元素中,有img-default类名标签的样式
        $(this).children('.img-default').css('display', 'block');

        // 鼠标移入,显示其余 head-num 标签子元素中,有img-hover类名的样式,隐藏它们有img-default标签类名的的样式
        $(this).parent().siblings().find('.img-hover').css('display', 'block').siblings().css('display', 'none');

        // 鼠标移入, 将该 head-num 标签的父元素(li)宽度变成 3.328125rem 
        $(this).siblings().parent().stop(true, false).animate({ width: '3.328125rem' }, 'linear');
        // 鼠标移入, 将其余的 li 标签的宽度变成 0.604167rem
        $(this).parent().siblings().stop(true, false).animate({ width: '.604167rem' }, 'linear').find('.img-text');
        // 根据移入的页面改变index的值
        index = $(this).parent().index();
        event.stopPropagation();
    });


    // 式神选择'轮播'效果

    // 创建自动触发鼠标移入事件的函数
    var enter = function (i) {
        $('.part1 li .head-num').eq(i).trigger('mouseenter');
    }

    // 自动轮播函数
    function nextNum() {
        if (index == $('.head-num').length - 1) {
            index = -1;
        }
        index++;
        enter(index);
        // console.log(ob);
    }

    // 设置计时器,实现轮播
    var ob = {};
    // ob.timeID = setInterval(nextNum, 3000);
    // var introduce.timeID = setInterval(nextNum,2000);
    // 给大盒子'introduce'设置鼠标移入和移出事件
    // 移入时移出计时器
    // $('.introduce').mouseenter(function () {
    //     clearInterval(ob.timeID);
    // });

    // // 移出时,恢复计时器
    // $('.introduce').mouseleave(function () {
    //     ob.timeID = setInterval(nextNum, 2000);
    //     // console.log(ob.timeID);
    // });


    // --------------------------------------------------------------------------------

    // part2

    // 阴阳术选择
    // 声明一个数组用来储存小图标的定位属性
    var arr = [];

    var $arr1 = $('.part2 .lz-nav .shi').siblings();

    for (var i = 0; i < $arr1.length; i++) {
        // 声明一个对象,储存每个小图标的定位属性
        var obj = {};
        obj.left = getStyle($arr1[i], 'left');
        obj.top = getStyle($arr1[i], 'top');
        // 按遍历顺序添加进数组
        arr.push(obj);
    }

    // 声明一个对象, 用来存储大图标的定位属性
    var objBig = {};
    objBig.left = $('.part2 .lz-nav .shi').css('left');
    objBig.top = $('.part2 .lz-nav .shi').css('top');



    // 守 祝 射 侍 巫 忍 各项的点击效果
    $('.part2 .lz-nav .lz-icon').click(function () {
        // 给当前点击项,加上'big'类名, 同时赋予objBig中的定位属性
        $(this).addClass('big').css({ 'left': objBig.left, 'top': objBig.top })
            // 给其余兄弟项除掉'big'类名, 同时按顺序赋予arr中储存的定位属性
            .siblings().removeClass('big').each(function (index, ele) {
                $(ele).css({ 'left': arr[index].left, 'top': arr[index].top });
            });

        // 如果点击的是 '守' 或 '祝' 或 '射',则清除'侍'的'shi-right'属性,并添加'shi-left属性' 
        if ($(this).hasClass('shou') || $(this).hasClass('zhu') || $(this).hasClass('she')) {
            $('.part2 .lz-nav .shi').removeClass('shi-right').addClass('shi-left');
        } else { // 反之,清除'侍'的'shi-left'属性,并添加'shi-right属性'
            $('.part2 .lz-nav .shi').removeClass('shi-left').addClass('shi-right');
        }
    });


    /**
    * 获取元素属性值
    * @param ele 元素
    * @param attribute 属性名字符串
    */
    function getStyle(ele, attribute) {
        //能力检测
        if (window.getComputedStyle) {//谷歌火狐
            /*注意：这里不能使用点语法。这个语法含义：取style对象的一个叫做attribute的属性值，得到undefined*/
            // return style.attribute;
            /*含义：字符串语法取attribute变量中存储的字符串对应的属性的值 */
            return window.getComputedStyle(ele, null)[attribute];
        } else {//IE8
            return ele.currentStyle[attribute];
        };
    };


    // --------------------------------------------------------------------------------

    // part3

    // 对线技巧部分
    $('.part3Tag').click(function () {
        // 当前被点击的'tag'标签对应的'txt'标签设置'show'类名,同时清除其余'txt'标签的'show'类名
        $('.dxSkill>div').eq($(this).index() + 3).addClass('show').siblings().removeClass('show');
    });


    // --------------------------------------------------------------------------------

    // part4
    // 滚动条

    var part4 = document.querySelector('#part4');
    var skillTxt = document.querySelector('.skillTxt');
    var content = document.querySelector('.content');
    var scrollTool = document.querySelector('.scrollTool');
    var scrollBar = document.querySelector('.scrollBar');

    // 按下滚动条后的操作
    scrollBar.onmousedown = function (e) {
        // 获取事件的必备操作, 保证事件被获取
        var oEvent = e || event;

        // 保证只有被按下滚动条后才能执行函数
        document.onmousemove = function (e) {
            var oEvent = e || event;

            var h = oEvent.pageY - (skillTxt.offsetTop + part4.offsetTop);
            // 获取滚动条可活动的高度范围
            var height = scrollTool.offsetHeight - scrollBar.offsetHeight;
            // 控制滚动条, 不让它跑出'轨道'
            if (h < 0) {
                h = 0;
            } else if (h > height) {
                h = height;
            }
            // 位置定位
            scrollBar.style.top = h + 'px';

            // 根据滚动条位置获得比例
            var scale = h / height

            // 内容的可移动范围
            var moveY = content.offsetHeight - skillTxt.offsetHeight;
            // 拖动滑动条时,改变'content'的top值
            content.style.top = -(moveY * scale) + 'px';
        }

        // 保证鼠标松开后事件不再执行
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmousedown = null
        }
    }


    // --------------------------------------------------------------------------------

    // 右导航栏部分
    // 点击关闭按钮('offBtn'),收起'rightSidebar',同时显示'rightOpen'
    $('.offBtn').click(function () {
        $(this).parent().animate({ right: '-1.854167rem' }, 300, 'linear', function () {
            $('.rightOpen').show();
        });
    });

    // 点击'rightOpen',收起'rightOpen',同时显示'rightSidebar'
    $('.rightOpen').click(function () {
        $(this).hide().siblings('.rightSidebar').animate({ right: '-0.3125rem' }, 300, 'linear');
    });

    // 设置a标签锚点定位为滑动效果
    $(".a-box a, .kh-btn, .khpajBtn").click(function () {
        // $(this).attr("href") 获取被点击的a标签的href属性值
        // $($(this).attr("href")).offset().top 是获取id等于$(this).attr("href")块所在的位置
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);

        return false;//不要这句会有点卡顿(闪屏)
    });


    // --------------------------------------------------------------------------------

    // 页面滚动事件
    // 获取元素
    var rightSidebar = document.querySelector('.rightSidebar');
    var showRight = document.querySelector('#showRight');
    var showRightTop = showRight.offsetTop;
    // var part1TOP = document.querySelector('#part1').offsetTop;
    
    document.addEventListener('scroll', function () {
        // 控制'rightSidebar'的显示和隐藏
        if (window.pageYOffset < showRightTop) {
            rightSidebar.style.display = 'none';
        } else {
            rightSidebar.style.display = 'block';
        }


    });

});


