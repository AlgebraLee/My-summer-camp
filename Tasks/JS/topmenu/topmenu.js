window.onload = function () {
    var nav = document.getElementById('nav');
    var shoes = document.getElementById('shoes');
    scrollMenu(nav, shoes);
}

function scrollMenu(obj, target) {
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop;
        var top = target.offsetTop;
        //当滚动高度大于目标元素的位置，导航条显示
        if (scrollTop >= top) {
            obj.className = "fixed";
        }
        else {
            obj.className = "";
        }
    }
}
