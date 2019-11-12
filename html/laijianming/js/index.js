//轮播图
$(function () {
  //遮罩层淡出
  $('.shade').fadeOut(2000);
  //页面初始化
  setTimeout(function(){
    $('.slideShow').fadeIn().animate({
      right:180
    });
    $('.moon').fadeIn().animate({
      top:40
    })
    $('.wrapper').fadeIn().animate({
      bottom:100
    })
    $('.news').fadeIn()
  }, 300);

  //声明一个变量,用来记录当前显示的图片的索引
  var index = 0;

  //给右边焦点设置点击事件
  $('.arrow-right').click(function () {
    index++;
    //判断
    if (index == 3) { //3也不要写死,3是轮播图片的个数
      index = 0;
    }
    console.log(index)
    //找到轮播的li标签们,再找到索引一致的li标签动画显示(fadeIn),其他的兄弟lifadeOut
    $('.slideShow li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
  })


  //给左边焦点设置一个点击事件
  $('.arrow-left').click(function () {
    index--;
    //判断
    if (index < 0) {
      index = 3; //3是最大的索引. 
    }
    console.log(index);

    //找到轮播的li标签们,再找到索引一致的li标签动画显示(fadeIn),其他的兄弟lifadeOut
    $('.slideShow li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
  });

  //tab栏
  $('.wrapper li.tab-item').mouseenter(function () {
    var idx = $(this).index();
    $('.products div.main').eq(idx).addClass('selected').animate({
      top: 10
    }, 200).siblings('div').removeClass('selected').animate({
      top: 0
    });
  });
})

