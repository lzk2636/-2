$(function () {

    // 鼠标移入函数  切换tab背景
    function tabboxNavMouseenter() {

        var $tabbox_nav = $(".tabbox_nav");
        var $spans = $(".tabbox_nav>span")
        $tabbox_nav.mouseenter(
            function () {
                // for(var i = 0;i<$tabbox_nav.length;i++){
                $spans.css("background", "none");
                //    } 
                $(this).children().css("background", "url(./img/ia_100000858.png)");
                $(this).children().css("background-size", "5.973958rem 4.21875rem");
                $(this).children().css("background-position", "-5.276042rem -2.182292rem");

            }
        );
    }
    tabboxNavMouseenter();
    // 旋转90

    function rotate(ele) {
        $(ele).mouseenter(function () {
            $(this).css("transition", "all 0.5s");
            $(this).css("transform", "rotate(90deg)");
        });
        $(ele).mouseleave(function () {
            $(this).css("transition", "all 0.5s");
            $(this).css("transform", "rotate(-90deg)");
        });


    }
    rotate(".rotate");

    //鼠标移入放大动画
    function scala(ele1, ele2) {
        if (arguments.length == 2) {
            $(ele1).mouseenter(function () {
                $(this).find(ele2).css("transform", "scale(1.2)");
                $(this).find(ele2).css("transition", "all 1s");
            });
            $(ele1).mouseleave(function () {
                $(this).find(ele2).css("transform", "scale(1.0)");
                $(this).find(ele2).css("transition", "all 1s");
            });
        }
    }

    scala(".aaaa", "i");
    //   向上移动   传递对象和移动的距离

    function moveup(ele1, ele2, distance) {
        
        if (arguments.length == 3) {
            $(ele1).mouseenter(function () {
               
                $(this).find(ele2).stop(true,false).animate({
                    top:distance
                },1000,'linear');
            }
            
            );
            $(ele1).mouseleave(function(){
                $(this).find(ele2).stop(true,false).animate(
                    {
                        top:.572917+"rem"
                    },1000,'linear'
                );
            }); 
        }
    }
    moveup(".wall_model", "img", 30);

    
    
        var index = 0;
        setInterval(function () {
            index++;
            //判断
            if(index == 6){ //8也不要写死,8是轮播图片的个数
                index = 0;
            }
        
            //找到轮播的li标签们,再找到索引一致的li标签动画显示(fadeIn),其他的兄弟lifadeOut
            $('.mian_waller li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
        }, 2000);


        // 封装移动动画
function ainimation(ele,target,step) {
    var current = ele.offsetLeft;
    var step = step;
    if (current > target) {
        step = - step;
    } else {
        step =  step;
    }
    var timeID   = setInterval(function(){
       
        current+=step; 
        document.getElementById("center_img").style.left=current+"px";
        var jiejin = Math.abs(current-target)<Math.abs(step);
        if(jiejin){
            document.getElementById("center_img").style.left = target+"px";
            clearInterval(timeID);
        }
    },30);
}

});

