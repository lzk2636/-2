
    $(function(){

         // 妖怪出没
        var yaoguaiBox = document.querySelector('.yaoguai');
        yaoguaiAllMove(yaoguaiBox);
        // 当鼠标移动了.妖怪消失
        var body = document.querySelector('body');
        // 当鼠标移入body触发妖怪消失
        body.onmousemove = function(e) {
            clearInterval(body.timeID);
            // 妖怪淡出效果
           $('.yaoguai').fadeOut(1000);
            // 声明lastX和lastY来存鼠标的上一个坐标
            var lastX = getPagePoint(e).pageX;
            var lastY = getPagePoint(e).pageY;
            // 声明count来记录重新开始妖怪出没需要的秒数
            var count = 0;
            body.timeID = setInterval(function(){
                // 判断鼠标现在的坐标跟上一个坐标是否一样,一样就说明鼠标没动
                if(getPagePoint(e).pageX == lastX && getPagePoint(e).pageY == lastY){
                    count++;
                    // 鼠标每不动一秒count就+1,到3时妖怪出没
                    if(count == 3){
                        // 妖怪重新出没后重置count
                        count = 0;
                        // 妖怪淡入效果
                        $('.yaoguai').fadeIn(1000);
                    };
                };
            } ,1000);
        };

        // 封装妖怪盒子移动动画
        function yaoguaiAllMove (obj){
            obj.style.left = -parseInt( $(obj).css('width')) + 'px';
            // 妖怪盒子每一个时间间隔动10px
            var step = 10;
            // 妖怪盒子的初始left值
            var left = -parseInt( $(obj).css('width')) *2;
            // 妖怪盒子移动计时器
            obj.timeID = setInterval(function(){
                // 当妖怪盒子跑到body的最右边时重置妖怪盒子的left回到最左边
                if(parseInt(obj.style.left )> parseInt(($('body').css('width')))){
                    left = -parseInt( $(obj).css('width'));
                };
                left += step;
                obj.style.left = left + 'px'; 
            } ,75);
            // 获取妖怪
            
            var yao1 = document.querySelector("#yao1");
            var yao2 = document.querySelector('#yao2');
            var yao3 = document.querySelector('#yao3');
            var yao4 = document.querySelector('#yao4');
            yaoguaiMove(yao1);
            yaoguaiMove(yao2);
            yaoguaiMove(yao3);
            yaoguaiMove(yao4);
      
         // 封装妖怪动画   
         function yaoguaiMove (obj){
            var i = -1;
                clearInterval(obj.timeID);
                obj.timeID = setInterval(function(){
                   
                    if(i == -1){
                        obj.style.left = 0;
                        i++;
                        return 0;
                   }else {
                   obj.style.left = -165 + 'px';
                    i = -1;
                   };
                },200);
            };
        };
        // 获取鼠标的坐标函数
        function getPagePoint(e) {
            e = e || window.event;
            return {
                pageX : e.pageX || e.clientX,
                pageY : e.pageY || e.clientY
            }
        }

        // -------------------------------------------------------

        // 固定导航栏
        var nav = document.querySelector('.topBar');
        // 2. 获取顶部元素的高度
        var headerHeight = nav.previousElementSibling.offsetHeight;
        window.onscroll = function(){
            // 1. 获取滚动出去的高度
            var sTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            
            if(sTop >= headerHeight){
                // 当滚动距离超出顶部区域的高度时，给导航元素添加一个 fixed 类名
                nav.className = ' topBar fixed'
            }
        };
        // -------------------------------------------------------

          // 头部花瓣随机掉落
        // 获取花瓣盒子
        var huaban = document.querySelector('.huaban');

         timeID2 = setInterval(function(){
            var h1 = new Hua();
            h1.start(huaban);
        } ,500);
    
        // 花瓣函数封装
        function Hua (num,x,y,deg,interval,width){
            this.num = num || 1;
            this.x = x || 1 ;
            this.y = y || 1;
            this.deg = deg || 0;
            this.interval = interval || 10;
            this.width = width || 60;
        };
        Hua.prototype.start = function(huaban){
            // 随机生成花瓣的x坐标
            this.x = Math.floor( Math.random() * huaban.offsetWidth / this.width) * this.width;
            // 随机生成花瓣的种类
            this.num = Math.ceil(Math.random() * 3);
            // 创建一个新花瓣
            var img = document.createElement('img');
           img.src = '../img/hb' + this.num + '.png';
           img.style.position = 'absolute';
           img.style.left = this.x + 'px';
           img.style.top = this.y + 'px';
           img.style.transform = 'rotate(' + this.deg + 'deg)';
           img.style.width = 30 +'px';
           img.style.height = 30 +'px';
            //把新花瓣添加到box里    
           huaban.appendChild(img);
           var deg = 0;
            // 每个img元素的x,y和deg通过定时器修改
           var timeID = setInterval(function(){
                var hua = document.querySelector('img');
                // 获取花瓣的初始位置
                var nowX = img.offsetLeft;
                var nowY = img.offsetTop;
                var step = 10;
                // 修改x,y和deg
                nowX -= step;
                nowY += step;
                deg += 5;
                // 把修改后的x,y,deg重新赋值上去
                img.style.left = nowX + 'px';
                img.style.top = nowY + 'px';
                img.style.transform = 'rotate(' + deg + 'deg)';
                // 判断花瓣是否到边界,到了就删除这个元素
                if(nowX <= 0){
                    clearInterval(timeID);
                    huaban.removeChild(huaban.firstElementChild);
                }
            } ,100);
        };
        //------------------------------------------------------------

        // 式神搜索
        // 通过indexof检索得到对应式神的下标再用存入一个数组中,
        // 最后先隐藏所有的式神再遍历显示存入数组的式神

        // 分类按钮
        var searchBtn = document.querySelector('.content-search>.icon');
        // 搜索框
        var searchInput = document.querySelector('.content-search>input');
        // 所有式神
        var shishen = document.querySelectorAll('.content-show>ul>li');
        // 所有式神名字
        var shishenName = document.querySelectorAll('.content-show>ul>li>p');
        // 点击搜索按钮搜索式神
        searchBtn.onclick = function(){
            // 声明一个res数组用于存放符合条件的式神
            var res = [];
            // 判断搜索框是否有内容,如果没有就不执行下面的代码
            if(searchInput.value == ''){
                return;
            };
            // 先遍历res数组,把他们全部display设为none
            for(var i = 0 ; i < res.length ; i++){
                res[i].style.display = 'none';
            };
            // 再遍历所有式神的名字
            for(var i = 0; i < shishen.length;i++){
                shishen[i].style.display = 'none';
                // 通过indexof来筛选符合搜索内容的对应式神的下标,再通过push方法存入res数组中
                if(shishenName[i].innerText.indexOf(searchInput.value) != -1){
                    res.push(shishen[i]);
                };
                // 最后遍历res数组,把式神的display设为block
                for(var j = 0; j < res.length ; j++){
                   res[j].style.display = 'block';
                };
            };
        };

        // -----------------------------------------------------------------        
         // 通过类名实现分组效果
        //  全类
         $('.tab-quan').click(function(){
             $('.content-show li').css('display','block');
         });
        //  巫类
         $('.tab-wu').click(function(){
             $('.content-show li').css('display','none');
             $('.content-show>ul>.wu').css('display','block');
         });
        //  式类
         $('.tab-shi').click(function(){
             $('.content-show li').css('display','none');
             $('.content-show>ul>.shi').css('display','block');
         });
        //  忍类
         $('.tab-ren').click(function(){
             $('.content-show li').css('display','none');
             $('.content-show>ul>.ren').css('display','block');
         });
        //  射类
         $('.tab-she').click(function(){
             $('.content-show li').css('display','none');
             $('.content-show>ul>.she').css('display','block');
         });
        //  守类
         $('.tab-shou').click(function(){
             $('.content-show li').css('display','none');
             $('.content-show>ul>.shou').css('display','block');
         });
        //  祝类
         $('.tab-zhu').click(function(){
             $('.content-show li').css('display','none');
             $('.content-show>ul>.zhu').css('display','block');
         });

        //  --------------------------------------------------------------------

        // 头部导航条鼠标移入移出效果
         $('.topBar').find('.nav-item').mouseenter(function(){
             $(this).find('.nav-bg').stop(true,false).fadeIn(500);
             $(this).find('a').css('color',"#fff").find('.underline').css('display','block');
         });

         $('.topBar').find('.nav-item').mouseleave(function(){
             $(this).find('.nav-bg').stop(true,false).fadeOut(500);
             $(this).find('a').css('color',"").find('.underline').css('display','none');
         });

        //  ---------------------------------------------------------------------
         
        // 轮播图
        // 获取轮播图盒子
        var lunBoBox = document.querySelector('.zm-lunbo');
        // 获取左箭头
        var arrowLeft = document.querySelector('.left-arrow');
        // 获取右箭头
        var arrowRight = document.querySelector('.right-arrow');
        // 获取轮播图的ul
        var lunBoUl = document.querySelector('.zm-lunbo>ul');
        // 声明page用于记录当前页数
        var page = 0;
        // 点击左箭头事件
        arrowRight.onclick = function(){
            // 判断是不是最后一页,如果是就回到第一页
            if(page == Math.ceil(lunBoUl.children.length/5)-1) {
                page = 0;
                lunBoUl.style.left = 0 + 'px';
            };
            page++;
            animationMove(lunBoUl,-lunBoBox.offsetWidth * page);
        };
        // 点击右箭头事件
        arrowLeft.onclick = function(){
            // 判断当前页是不是第一页,如果是就滚到最后一页
            if(page == 0) {
                page =  Math.ceil(lunBoUl.children.length/5)-1;
                lunBoUl.style.left = lunBoUl.offsetWidth + 'px';
            };
            page--;
            // 调用移动动画
            animationMove(lunBoUl,-lunBoBox.offsetWidth * page);
        };

        // 封装移动动画
        function animationMove (obj,target){
            clearInterval(obj.timeID);
             obj.timeID = setInterval(function (){
                var nowPosition = obj.offsetLeft;
                
                
                if(nowPosition < target) {
                    var step = Math.ceil(target - nowPosition) / 10;
                };
                if(nowPosition > target) {
                    var step = -Math.ceil(nowPosition - target) / 10;
                };
                nowPosition += step;
                obj.style.left = nowPosition + 'px';
                // console.log(nowPosition);
                if(step >0? nowPosition >= target : nowPosition <= target) {
                    obj.style.left = target + 'px';
                    clearInterval(obj.timeID);
                };
            } ,10);
        };

        // -------------------------------------------------------------
    
    });





   
    
   
    
    
    
    

