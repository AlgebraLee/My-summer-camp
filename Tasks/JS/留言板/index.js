window.onload = function () {
    var oUl = document.getElementById("list");
    var oLi = oUl.getElementsByTagName("li");
    var inp = document.getElementsByTagName("input");

    //按下回车键发送消息
    inp[0].onkeyup = function (ev) {
        if (this.value != "") {
            //检测是否按下Enter键
            if (ev.key == "Enter") {
                addInfo();
            }
        }
    }
    //按下留言按钮发送消息
    inp[1].onclick = addInfo;
    //批量删除
    inp[2].onclick = function () {
        for (var i = 0; i < oLi.length; ++i) {
            if (!oLi[i].onOff) {
                oUl.removeChild(oLi[i]);
                --i;
            }
        }
    }

    function addInfo() {
        var li = document.createElement("li");
        //判断输入框是否输入内容
        if (inp[0].value) {
            li.innerHTML = inp[0].value;
            li.onOff = true;
            if (oUl.children[0]) {
                oUl.insertBefore(li.oUl.children[0]);
            }
            else {
                oUl.appendChild(li);
            }
        }
        else {
            alert("请输入内容！");
        }
        //点击隔行变色
        for (var i = 0; i < oLi.length; ++i) {
            (function (j) {
                //鼠标移入颜色
                oLi[j].onmouseover = function () {
                    this.style.background = "#999";
                    this.style.color = "#fff";
                }
                //鼠标移开颜色消失
                oLi[j].onmouseover = function () {
                    this.style.background = "";
                    this.style.color = "";
                }
                oLi[j].onclick = function () {
                    if (j % 2 == 0) {
                        this.style.background = "pink";
                        oLi[j].onmouseout = function () {
                            this.style.background = "#3c9";
                        }
                    }
                    else {
                        this.style.background = "#3c9";
                        oLi[j].onmouseout = function () {
                            this.style.background = "#3c9";
                        }
                    }
                    this.onOff = !this.onOff;
                }
            })(i);
        }
        //清空文本框信息
        inp[0].value = "";
    }
}
