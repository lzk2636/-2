// 各导航条
$(function () {
    // 商店目录导航
    menuNav('.container>.shop>.shop-hd li', 'url(./imgs/ia_200000323.png) no-repeat', 'shop-hd-li');
    // 商店前菜单导航
    menuNav('.container>.shop>.shop-bd>.menu>.menu-top li', 'url(./imgs/ia_200000328.png) no-repeat', 'menu-top-li');
    // 商店后菜单导航
    menuNav('.container>.shop>.shop-bd>.menu>.menu-bottom>li a', 'url(./imgs/ia_200000335.png) no-repeat left center', 'menu-bottom-a');
    // 特色展示目录导航
    menuNav('.container>.message>.show li', 'url(./imgs/ia_200000536.png) no-repeat', 'show-li');
    //
})


// 商店物品
$(function () {
    $('.drop-down').find('li').each(function (index, ele) {
        // var index=0;
        if ((index + 21) < 100) {
            var str = './imgs/ia_2000000' + (21 + index) + '.png';

        } else if ((index + 21) >= 100 && (index + 21) <= 140) {
            var str = './imgs/ia_200000' + (index + 21) + '.png';
        }
        index++;
        $(ele).html('<img src="' + str + '" alt="" width="85px" height="85px">');
    });
});

// 商店
$(function () {
    // 装备
    $('.shop>.shop-hd .shop-hd-equip').click(function () {
        $('.shop .shop-bd').removeClass('hidden');
        $('.shop .magic').addClass('hidden');
        $('.shop .mantra').addClass('hidden');
    });
    // 灵咒
    $('.shop>.shop-hd .shop-hd-mantra').click(function () {
        $('.shop .mantra').removeClass('hidden');
        $('.shop .shop-bd').addClass('hidden');
        $('.shop .magic').addClass('hidden');
    });
    // 阴阳术
    $('.shop>.shop-hd .shop-hd-magic').click(function () {
        $('.shop .magic').removeClass('hidden');
        $('.shop .shop-bd').addClass('hidden');
        $('.shop .mantra').addClass('hidden');
    });
});

// 装备分类预览
$(function () {
    $('.shop-bd>.menu>.menu-top li').click(function () {
        var idx = $(this).index();
        var str = './imgs/装备大概/' + idx + '.jpg';
        if (idx == 0) {
            $('.drop-down .submenu').show();
            $('.wei-submenu').hide();
        } else {
            $('.drop-down .submenu').hide();
            $('.wei-submenu').show().html('<img src="' + str + '" width="1070px" height="470px">');
        }
    })
});

//搜索物品
$(function () {
    $('.menu-input .search').click(function () {
        var $input = $('.menu-input input').val();
        // 遍历每个li
        $('.drop-down li').each(function (index, ele) {
            var idx = $(this).index();
            if ($(ele).attr("alt") == $input) {
                $('.drop-down .submenu').hide();
                $('.drop-down>.equip div').eq(idx).show().siblings('div').hide();
            }
        });
    });

    //点击物品
    $('.drop-down li').click(function () {
        // 获取当前点击的li索引
        var idx = $(this).index();
        // 父盒子隐藏
        $('.drop-down .submenu').hide();
        // 对应子盒子显示
        $('.drop-down>.equip div').eq(idx).show().siblings('div').hide();


        // // var $imgs= $('.drop-down>.equip img').attr("alt");
        // // 遍历每个img
        // $('.drop-down>.equip img').each(function (index, ele) {
        //    var $imgs= $('.drop-down>.equip img').eq(index).attr("alt");
        //     if ($(ele).attr("alt") == $imgs) {
        //         $('.drop-down .submenu').addClass('hidden');
        //         $('.drop-down .equip').removeClass('hidden');
        //         $(ele).parent().removeClass('hidden').siblings().addClass('hidden');
        //     }
        // });

    });
    // $('.menu-input .search')
    // //得到焦点
    // $('.menu-input input').focur(function () {
    //     if ($(this).val() == this.defaultValue) {
    //         $(this).val("");
    //     }
    // })

    // //失去焦点
    // $('.menu-input input').blur(function () {
    //     if ($(this).val() == "") {
    //         $(this).val(this.defaultValue);
    //     }
    // });
});



// 轮播图索引
$(function () {
    var $lits = $('.picture>ul li');
    var $spans = $('.feature_nav>ul li>span');

    //点击轮播
    // $spans.click(function () {

    // });

    //自动轮播
    var index = $('.feature_nav>ul li span[class=feature_nav-on]').parent().index();
    var timeID = setInterval(function () {
        index++;
        if (index == 5) {
            index = 0;
        }
        $spans.eq(index).addClass('feature_nav-on').parent().siblings('li').children('span').removeClass('feature_nav-on');
        $lits.eq(index).fadeIn(500).siblings('li').fadeOut(500);
    }, 2000);

    // // 当鼠标进入索引框时
    // $('.feature_nav>ul').on('mouseenter', function (e) {
    //     clearInterval(timeID);
    //     e.stopPropagetion();
    // })

    // // 当鼠标离开索引框时
    // $('.feature_nav>ul').on('mouseleave', function (e) {
    //     timeID = setInterval(function () {
    //         index++;
    //         if (index == 5) {
    //             index = 0;
    //         }
    //         $spans.eq(index).addClass('feature_nav-on').parent().siblings('li').children('span').removeClass('feature_nav-on');
    //         $lits.eq(index).fadeIn(500).siblings('li').fadeOut(500);
    //     }, 2000);
    //     e.stopPropagetion();
    // })

    //鼠标进入图片框时结束自动轮播
    $('.slideshow>.picture').on('mouseenter', function (e) {
        clearInterval(timeID);
        e.stopPropagetion();
    })

    //鼠标离开图片框时开始自动轮播
    $('.slideshow>.picture').on('mouseleave', function (e) {
        timeID = setInterval(function () {
            index++;
            if (index == 5) {
                index = 0;
            }
            $spans.eq(index).addClass('feature_nav-on').parent().siblings('li').children('span').removeClass('feature_nav-on');
            $lits.eq(index).fadeIn(500).siblings('li').fadeOut(500);
        }, 2000);
        e.stopPropagetion();
    })

    //给右边焦点设置点击事件
    $('.arrowii-right').click(function () {
        index++;
        //判断
        if (index == 5) { // 5也不要写死,5是轮播图片的个数
            index = 0;
        }
        $spans.eq(index).addClass('feature_nav-on').parent().siblings('li').children('span').removeClass('feature_nav-on');
        //找到轮播的li标签们,再找到索引一致的li标签动画显示(fadeIn),其他的兄弟lifadeOut
        $lits.eq(index).fadeIn(500).siblings('li').fadeOut(500);
    })

    //给左边焦点设置一个点击事件
    $('.arrowii-left').click(function () {
        index--;
        //判断
        if (index < 0) {
            index = 4; // 4是最大的索引. 
        }
        $spans.eq(index).addClass('feature_nav-on').parent().siblings('li').children('span').removeClass('feature_nav-on');
        //找到轮播的li标签们,再找到索引一致的li标签动画显示(fadeIn),其他的兄弟lifadeOut
        $lits.eq(index).fadeIn(500).siblings('li').fadeOut(500);
    });
});


// 特色展示
$(function () {
    $('.message>.show>li').click(function () {
        var idx = $(this).index();
        var str = './imgs/游戏特色/' + idx + '.jpg';
        if (idx == 0) {
            $('.message>.slideshow').show();
            $('.message>.wei-slideshow').hide();
        } else {
            $('.message>.slideshow').hide();
            $('.message>.wei-slideshow').show().html('<img src="' + str + '" width="1200px" height="680px">');
        }
    })
})

$(function () {
    // 鼠标点击水波样式
    $(document).click(function (e) {
        var size = 60 //自定义大小
        $('body').append("<div class='dianjixiaoguo'>") //创建一个div
        $('.dianjixiaoguo').css({ //设置初始样式
            position: 'fixed', //使用相对于浏览器进行定位(必须)
            left: e.clientX,
            top: e.clientY,
            borderRadius: size + 'px',
            border: '3px solid pink',
            backgroundColor: 'red'
        }).stop().animate({ //设置最终样式，用动画来表现(当点击过快时需要用stop来终止上一次未进行完的动画)
            width: size,
            height: size,
            left: e.clientX - size / 2,
            top: e.clientY - size / 2,
            opacity: '0.2'
        }, function () { //动画运行完毕后删除此div
            $('body .dianjixiaoguo').remove()
        })
    })
})

