
$(function () {

    // 适配rem的js代码
    (function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
  
    // adjust body font size
    function setBodyFontSize () {
      if (document.body) {
        document.body.style.fontSize = (12 * dpr) + 'px'
      }
      else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    setBodyFontSize();
  
    // set 1rem = viewWidth / 10 
    function setRemUnit () {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    }
  
    setRemUnit()
  
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit()
      }
    })
  
    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }
    }(window, document));
  
    // 下载区域
    (function downModel(){
        var $dowLine = $(".ZH-section1 #dow-line");
        $dowLine.animate({
            "top": ".75rem",
        }, 2000, function () {
            $dowLine.animate({
                "top": "0.14rem"
            }, 2000)
        });
        setInterval(function () {
            $dowLine.animate({
                "top": ".75rem",
            }, 2000, function () {
                $dowLine.animate({
                    "top": "0.14rem"
                }, 2000)
            });
        }, 4000);
    }());

    // 咨询模块轮播图
    (function carousel() {
        var box = document.querySelector(".carousel");
        var images = document.querySelector(".images");
        var btn = document.querySelector(".btn");
        var left = document.querySelector(".left");
        var right = document.querySelector(".right");
        var ol = document.querySelector("ol");
        var index = 0;
    
    
        box.onmouseover = function () {
            btn.style.display = "block";
            clearInterval(autotimeID);
        }
    
        box.onmouseout = function () {
            btn.style.display = "none";
            autotimeID = setInterval(function () {
                autoright();
            }, 1000)
        }
    
        left.onclick = function () {
            if (index == 0) {
                index = images.children.length - 1;
                images.style.left = -box.offsetWidth * index + "px";
            }
            index--;
            animationMove(images, -box.offsetWidth * index);
            for (var i = 0; i < ol.children.length; i++) {
                if (i == index) {
                    ol.children[i].className = "bg";
                } else {
                    ol.children[i].className = "";
                }
            }
        }
    
        right.onclick = function () {
            autoright();
        }
    
        ol.onclick = function (event) {
            index = event.target.getAttribute("idx") - 1;
            
            images.style.left = -box.offsetWidth * index + "px";
            for (var i = 0; i < ol.children.length; i++) {
                if (i == index) {
                    ol.children[i].className = "bg";
                } else {
                    ol.children[i].className = "";
                }
            }
        }
    
        var autotimeID = setInterval(function () {
            autoright();
        }, 1000)
    
    
    
        function autoright() {
            if (index == images.children.length - 1) {
                index = 0;
                images.style.left = -box.offsetWidth * index + "px";
            }
    
            index++;
            animationMove(images, -box.offsetWidth * index);
            for (var i = 0; i < ol.children.length; i++) {
                if (i == index) {
                    ol.children[i].className = "bg";
                } else {
                    ol.children[i].className = "";
                }
            }
            if (index == images.children.length - 1) {
                ol.children[0].className = "bg";
            }
        }
    
    
        function animationMove(ele, target) {
            clearInterval(ele.timeId);
            ele.timeId = setInterval(function () {
                var current = ele.offsetLeft;
                // console.log();
    
                if (current < target) {
                    current += 100;
                    ele.style.left = current + "px";
                    if (current >= target) {
                        ele.style.left = target + "px";
                        clearInterval(ele.timeId);
                    }
                } else {
                    current -= 100;
                    ele.style.left = current + "px";
                    if (current <= target) {
                        ele.style.left = target + "px";
                        clearInterval(ele.timeId);
                    }
                }
                
            }, 50)
        }
    }());

    // 咨询模块新闻页
    (function(){
        var $newsBtn = $(".ZH-section1 .news .item1");
        var $newPanne = $(".ZH-section1 .news .pannel")
        $newsBtn.mouseenter(function(){
            $(this).addClass("outline").siblings().removeClass("outline");
            $newPanne.eq($(this).index()).stop(true,false).fadeIn(300).siblings().stop(true,false).fadeOut(300);
        })
    }());

    // 音频函数封装
    (function audiosModel() {
            var i = 0;
            var oPlayEy = document.getElementsByClassName("audio-PlayEy")[0];
            var oPlay = document.getElementsByClassName("audio-Play")[0];
            var audios = document.getElementById('audios');
            oPlay.onclick = function () {
                var seii = setInterval(function () {
                    (i == 360) ? i = 0 : i++;
                    oPlayEy.style.transform = "rotate(" + i + "deg)";
                    if (audios.paused) {
                        clearInterval(seii)
                    }
                }, 30);
                if (audios.paused) {
                    audios.play();
                    oPlay.style.backgroundImage = "url(img/img/play.png)";
                    oPlay.style.backgroundSize = "100% 100%";
                    // oPlay.style.width = .494792+"rem";
                    // oPlay.style.height = .494792+"rem";
                } else {
                    audios.pause();
                    oPlay.style.backgroundImage = "url(img/img/pause.png)";
                    oPlay.style.backgroundSize = "100% 100%";
                    // oPlay.style.width = .494792 + "rem";
                    // oPlay.style.height = .494792+"rem";
                }
            }
    }());

    // 赛事板块,广告轮播
    (function saishiBan() {
        var $banBtn = $(".wzw-section2 #ban-btn p");
        var $banBox = $(".wzw-section2 #ban-move");
        var move = 0;
        var timeID = "";
        $($banBtn[0]).mouseenter(function () {
            move = 0;
            banMove();
            clearInterval(timeID);
        })

        $($banBtn[1]).mouseenter(function () {
            move = 1;
            banMove();
            clearInterval(timeID);
        })

        $(".wzw-section2 #ban-box").mouseenter(function(){
            clearInterval(timeID);
        }).mouseleave(function(){
            timeID = setInterval(function () {
                if (move == 0) {
                    move = 1;
                    banMove();
                } else {
                    move = 0;
                    banMove();
                }
            }, 2000)
        })

        $($banBtn).mouseleave(function () {
            timeID = setInterval(function () {
                if (move == 0) {
                    move = 1;
                    banMove();
                } else {
                    move = 0;
                    banMove();
                }
            }, 2000)
        })

        timeID = setInterval(function () {
            if (move == 0) {
                move = 1;
                banMove();
            } else {
                move = 0;
                banMove();
            }
        }, 2000)

        // 广告动画封装
        function banMove() {
            if (move == 0) {
                $($banBox[0]).animate({
                    "left": "0px"
                }, 500);

                $($banBtn[0]).css({
                    "background": "url(./img/img/ia_100000742.png)",
                    "backgroundSize": "100% 100%"
                });
                $($banBtn[0]).siblings("p").css({
                    "background": "url(./img/img/ia_100000749.png) center center no-repeat",
                    "backgroundSize": "80% 80%"
                })
            } else {
                $($banBox[0]).animate({
                    "left": "-100%"
                }, 500);

                $($banBtn[1]).css({
                    "background": "url(./img/img/ia_100000742.png)",
                    "backgroundSize": "100% 100%"
                });
                $($banBtn[1]).siblings("p").css({
                    "background": "url(./img/img/ia_100000749.png) center center no-repeat",
                    "backgroundSize": "80% 80%"
                })
            }
        }
    }());

    // 平安京赛事按钮
    (function saishiBtn() {
        var $saiShiBtn = $(".wzw-section2 #ss-btn");
        var $saiShiList = $(".wzw-section2 #ss-list");
        // 更改赛事列表
        $($saiShiBtn).mouseenter(function () {
            $(this).addClass("outline").siblings("a").removeClass("outline");
            $($saiShiList).children("div").eq($(this).index(".wzw-section2 #ss-btn")).stop(true, true).fadeIn(100).siblings("div").stop(true, false).fadeOut(100);
        })
    }());

    // 赛事战报
    (function saishiScore() {
        var $scoBtn = $(".wzw-section2 #sco-btn a");    //获取战报按钮
        var scoIndex = 1;
        $($scoBtn[0]).click(function () {
            scoIndex--;
            if (scoIndex <= 0) {
                scoIndex = 4;
            }
            scoListInfo();
        })
        $($scoBtn[1]).click(function () {
            scoIndex++;
            if (scoIndex > 4) {
                scoIndex = 1;
            }
            scoListInfo();
        })

        // 战报列表信息函数封装
        function scoListInfo() {
            var $scoList = $(".wzw-section2 .score-item");   //获取战队列表
            // 战报时间
            var scoTime = [
                "10-27 18:30", "10-27 16:30", "10-27 14:30", "10-26 18:30",
                "10-26 16:30", "10-26 14:30", "10-25 18:30", "10-25 16:30",
                "10-25 14:30", "10-24 18:30", "10-24 16:30", "10-24 14:30",
                "10-20 18:30", "10-20 16:30", "10-19 18:30", "10-19 16:30"
            ];
            // 战报比赛类型
            var scoType = [
                "OPL秋季赛常规赛", "OPL秋季赛常规赛", "OPL秋季赛常规赛", "OPL秋季赛常规赛",
                "OPL职业联赛", "OPL职业联赛", "OPL职业联赛", "OPL职业联赛",
                "OPL秋季赛常规赛", "OPL秋季赛常规赛", "OPL秋季赛常规赛", "OPL秋季赛常规赛",
                "OPL职业联赛", "OPL职业联赛", "OPL职业联赛", "OPL职业联赛"
            ];
            // 战报左边logo
            var scoLeftLogo = [
                "./img/img/GH.png", "./img/img/XROCK.png", "./img/img/LF.png", "./img/img/OMG.png",
                "./img/img/ESG.png", "./img/img/MIE.png", "./img/img/EG.png", "./img/img/BLG.M.png",
                "./img/img/TOT.png", "./img/img/WF.png", "./img/img/ESG.png", "./img/img/MIE.png",
                "./img/img/OG.png", "./img/img/LUX.png", "./img/img/EG.png", "./img/img/XROCK.png"
            ];
            // 战报左边队名
            var scoLeftName = [
                "GH", "XROCK", "LF", "OMG",
                "ESG", "MIE", "EG", "BLG.M",
                "TOT", "WF", "ESG", "MIE",
                "OG", "LUX", "EG", "XROCK"
            ];
            // 战报左边分数
            var scoLeftscore = [
                "0", "3", "3", "0",
                "0", "1", "2", "1",
                "0", "2", "3", "0",
                "0", "3", "3", "0"
            ];
            // 战报右边logo
            var scoRightLogo = [
                "./img/img/TOT.png", "./img/img/LUX.png", "./img/img/EG.png", "./img/img/WF.png",
                "./img/img/OG.png", "./img/img/BLG.M.png", "./img/img/OG.png", "./img/img/OMG.png",
                "./img/img/LF.png", "./img/img/XROCK.png", "./img/img/GH.png", "./img/img/LUX.png",
                "./img/img/LF.png", "./img/img/WF.png", "./img/img/GH.png", "./img/img/BLG.M.png"
            ];
            // 战报右边队名
            var scoRightName = [
                "TOT", "LUX", "EG", "WF",
                "OG", "BLG.M", "OG", "OMG",
                "LF", "XROCK", "GH", "LUX",
                "LF", "WF", "GH", "BLG.M"
            ];
            // 战报右边分数
            var scoRightscore = [
                "3", "0", "1", "0",
                "3", "3", "3", "3",
                "3", "3", "0", "3",
                "3", "0", "0", "0"
            ];
            // 战报双方队名
            var scoTwoName = [
                "GH vs TOT", "XROCK vs LUX", "LF vs EG", "OMG vs WF",
                "ESG vs OG", "MIE vs BLG.M", "EG vs OG", "BLG.M vs OMG",
                "TOT vs LF", "WF vs XROCK", "ESG vs GH", "MIE vs LUX",
                "OG vs LF", "LUX vs WF", "EG vs GH", "XROCK vs BLG.M"
            ];

            // 更新战报数据函数
            (function setInfo(scoIndex) {
                $scoList.each(function (index, ele) {
                    // 修改战报时间
                    $(ele).children(".time").text(scoTime[index + (scoIndex - 1) * 4]);
                    // 修改战报比赛类型
                    $(ele).children(".race").text(scoType[index + (scoIndex - 1) * 4]);
                    // 修改战报左边logo
                    $(ele).find(".score-box .left img").attr("src", scoLeftLogo[index + (scoIndex - 1) * 4]);
                    // 修改战报左边队名
                    $(ele).find(".score-box .left span").text(scoLeftName[index + (scoIndex - 1) * 4]);
                    // 修改战报左边分数
                    $(ele).find(".score-box .score-vs span:eq(0)").text(scoLeftscore[index + (scoIndex - 1) * 4]);
                    // 修改战报右边logo
                    $(ele).find(".score-box .right img").attr("src", scoRightLogo[index + (scoIndex - 1) * 4]);
                    // 修改战报右边队名
                    $(ele).find(".score-box .right span").text(scoRightName[index + (scoIndex - 1) * 4]);
                    // 修改战报右边分数
                    $(ele).find(".score-box .score-vs span:eq(1)").text(scoRightscore[index + (scoIndex - 1) * 4]);
                    // 修改战报双方队名
                    $(ele).children(".fight").text(scoTwoName[index + (scoIndex - 1) * 4]);
                })
            }(scoIndex));


        }
    }());

    // 赛事视频
    (function ssaishiVideo() {
        var $vidBtn = $(".wzw-section2 #vid-btn");
        var $vidLink = $(".wzw-section2 .video-link");
        $($vidBtn).mouseenter(function () {
            $(this).addClass("outline").siblings("a").removeClass("outline");
            $($vidLink).eq($(this).index(".wzw-section2 #vid-btn")).stop(true, true).fadeIn(500).siblings(".video-link").stop(true, false).fadeOut(0);
        })
    }());


})

