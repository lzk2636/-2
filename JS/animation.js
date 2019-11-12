
//   匀速动画封装
//   @param: obj:元素
//   @param: target:目标位置
 
function carousel() {
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
}
carousel();


