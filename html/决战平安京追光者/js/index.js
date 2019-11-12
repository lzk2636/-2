$(function() {
    // 鼠标经过某个小li 有两步操作：
    $("#photo_ul").children().mouseenter(function() { 
        // 1.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
        $(this).stop(true,false).animate({width: 300},200,"linear").siblings("li").stop(true,false).animate({width:60},200,"linear");
    });
    $("#photo_ul").children().mouseleave(function() {
        // 1.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
        $(this).stop(true,false).animate({width: 100},200,"linear").siblings("li").stop(true,false).animate({width:100},200,"linear");
    })

//  $(function() {
//             // 鼠标经过某个小li 有两步操作：
//             $("#photo_ul li").mouseenter(function() {
//                 // 1.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
//                 $(this).stop().animate({
//                     width: 300
//                 }).find("").stop().fadeOut().siblings("li").stop().fadeIn();
//                 // 2.其余兄弟小li宽度变为69px， 小图片淡入， 大图片淡出
//                 $(this).siblings("li").stop().animate({
//                     width: 100
//                 }).find(".small").stop().fadeIn().siblings("li").stop().fadeOut();
//             })



//         });

});

