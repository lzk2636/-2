$(function(){
  //技能介绍
    $('.box a').click(function () {
        var index = $(this).index();
        for (var i = 0; i < $('.content>.text').length;i++){
           $( $('.content>.text')).eq(i).hide();
        }
        $($('.content>.text')).eq(index).show();
       
        
       return false;
    })
//技能建议
    $('.box1 a').mouseenter(function(){
        $('.box1 a').children('.text').show();
        
       
    })
    $('.box1 a').mouseleave(function () {
        $('.box1 a').children('.text').hide();
     
       
    })
    $('.box2 a').mouseenter(function () {
        $('.box2 a').children('.text').show();
    })
        
    $('.box2 a').mouseleave(function () {
        $('.box2 a').children('.text').hide();
    
      
    })
        $('.jineng a').click(function () {
         
            
            return false;
        })

    //灵咒建议
    $('.jineng>a.pt').mouseenter(function () {
        $('.jineng>a.pt').children('.text').show();
        
        
    })
    $('.jineng>a.pt').mouseleave(function () {
        $('.jineng>a.pt').children('.text').hide();
    })
    $('.jineng>a.pt1').mouseenter(function () {
        $('.jineng>a.pt1').children('.text').show();


    })
    $('.jineng>a.pt1').mouseleave(function () {
        $('.jineng>a.pt1').children('.text').hide();
    })
//出装建议
    $('.jineng1 a').click(function () {
        return false;
    })
    $('.jineng1>.text>a').click(function(){
        var index = $(this).index();
        $(this).addClass('clolr').siblings().removeClass('clolr');
        for (var i = 0; i < $('.bss').children().length; i++) {
          
            
            $($('.bss').children()).eq(i).hide();
        }
        $($('.bss').children()).eq(index).show();
      
    })

    $('.list>a').mouseenter(function(){
        var index = $(this).index();
        var $cloneP = $('.description').clone(true);
       
        $(this).append($cloneP);
        $(this).siblings('a').children('.description').remove();
        $(' .description').show();
        
    })
    $('.list>a').mouseleave(function () {
        $('.description').hide();
    })

//上一个式神 下一个式神


//  浮动窗口
$('.btn1').click(function(){

    $('.folat').animate({ 
        right: '-1.166667rem'
    }, 500,function(){
        $('.btn2').show();
    });
    
    return false;
})
    $('.btn2').click(function () {+
        $('.btn2').hide();
        $('.folat').animate({
            right: 0
        }, 500 );

        return false;
    })
})
