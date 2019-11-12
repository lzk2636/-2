// 菜单导航方法
function menuNav(obj, bgColor, className) {
    $(obj).mouseenter(function () {
        $(this).css("background", bgColor);
    });

    $(obj).click(function () {
        $(obj).removeClass(className);
        $(this).addClass(className);
    });

    $(obj).mouseleave(function () {
        $(this).css("background", "");
    });
};