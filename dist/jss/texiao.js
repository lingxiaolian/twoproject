'use strict';

//随机验证码
function Sui(wei) {
    //传参数：多少位验证码
    var arr1 = "1234567890poiuytrewqasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM";
    var num = '';
    for (var j = 0; j < wei; j++) {
        num += arr1[parseInt(Math.random() * arr1.length)];
    }
    return num;
}

//选项卡的插件
function Tab(id) {
    //构造函数
    //加了new，会自动做原料和出厂
    //var this = new Object();
    this.oBox = document.getElementById(id);
    this.aInputs = this.oBox.getElementsByTagName('input'); //通过标签名查找元素
    this.aDivs = this.oBox.getElementsByClassName('con'); //通过类名查找元素
    this.init();
}

//构造函数名.原型.方法名
Tab.prototype.init = function () {
    //循环绑定事件
    var _this = this; //this:Object
    for (var i = 0; i < this.aInputs.length; i++) {
        this.aInputs[i].index = i; //添加索引，做一个标识，点击的时候就可以知道我点的是第几个了

        this.aInputs[i].onclick = function () {
            _this.show(this);
        }; //this指向的是？aInputs 出错了，修正指向
    }
};

Tab.prototype.show = function (now) {
    //排他:清空
    for (var i = 0; i < this.aInputs.length; i++) {
        this.aInputs[i].className = '';
        this.aDivs[i].style.display = 'none';
    }
    now.className = 'active'; //添加类名
    this.aDivs[now.index].style.display = 'block';
};

//轮播图
/*
 	 1）、开定时器，让图片运动：旧图挪走，新图进入可视区
	 2）、点击上下按钮：可以切换下一张和上一张
	 3）、焦点跟随，点击焦点可以切到对应的图片

 */
function lunbo(ele, clsn) {
    //大盒子的id和高亮的class名

    var box = getid(ele); //最外层的节点
    var ul = box.getElementsByClassName('ul')[0];
    var alis = ul.getElementsByTagName('li');
    var iW = alis[0].offsetWidth;
    var light = box.getElementsByClassName('light')[0];
    var aspans = light.getElementsByTagName('span');
    var prevBtn = box.getElementsByClassName('prev')[0];
    var nextBtn = box.getElementsByClassName('next')[0];

    console.log(iW);

    //1.所有的图片放在右侧，第一张放在可视区
    for (var i = 0; i < alis.length; i++) {
        css(alis[i], 'left', iW + 'px');
    }
    //第一张放在可视区
    css(alis[0], 'left', 0);

    //2.开定时器，让图片自动轮播：旧图挪走，新图进入可视区
    var num = 0; //可视区的图片下标
    var timer = null;

    var next = function next() {
        //旧图挪走 alis[now]
        startMove(alis[num], {
            'left': -iW
        });
        //新图进入可视区
        num = ++num >= alis.length ? 0 : num; //临界值的判断
        //快速把新图放在右侧：不需要过渡
        css(alis[num], 'left', iW + 'px');
        startMove(alis[num], {
            'left': 0
        });
        spanNow(); //调用
    };

    //焦点跟随
    var spanNow = function spanNow() {
        for (var i = 0; i < aspans.length; i++) {
            aspans[i].className = '';
        }
        aspans[num].className = clsn;
    };

    timer = setInterval(next, 2000); //每隔两秒切换一个图片

    //3.点击上下按钮：可以切换下一张和上一张

    //鼠标进入可视区，停止定时器，移开又开始自动轮播
    box.onmouseover = function () {
        clearInterval(timer);
    };

    box.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(next, 2000); //每隔两秒切换一个图片
    };

    //防止傻瓜操作行为 : 两次点击的时间太短，500毫秒内，就视为无效
    var old = new Date();
    nextBtn.onclick = function () {
        //点击切换下一张
        if (new Date() - old > 500) {
            //新旧时间差间隔
            next();
        }
        old = new Date();
    };

    var prev = function prev() {
        //旧图挪走：挪到右侧
        startMove(alis[num], {
            'left': iW
        });
        //新图：快速放在左侧，挪进可视区
        num = --num < 0 ? alis.length - 1 : num;
        css(alis[num], 'left', -iW + 'px');
        startMove(alis[num], {
            'left': 0
        });
        spanNow();
    };

    //点击切换上一张
    prevBtn.onclick = function () {
        prev();
    };

    //4.点击焦点可以切到对应的图片
    for (var i = 0; i < aspans.length; i++) {
        aspans[i].index = i;
        aspans[i].onclick = function () {
            console.log(this.index);
            if (num < this.index) {
                //新图从右侧切入可视区
                startMove(alis[num], {
                    'left': -iW
                });
                css(alis[this.index], 'left', iW + 'px');
            }

            if (num > this.index) {
                //新图从左侧切入可视区
                startMove(alis[num], {
                    'left': iW
                });
                css(alis[this.index], 'left', -iW + 'px');
            }
            startMove(alis[this.index], {
                'left': 0
            });
            num = this.index; //新图进入到可视区后，变旧图
            spanNow();
        };
    }
}

//遮罩：全部
/* <ul id="list">
	<li>		
	<p></p>
	</li> */
//传两个参数进来  参数一：大的id  参数二：类型  比如：p类型
function Zezhao(list, p) {
    var list = getid(list);
    var mask = list.getElementsByTagName(p);
    list.onmouseover = function (ev) {
        //鼠标经过
        var ev = ev || window.event;
        var now = ev.target;
        //					console.log(now);
        startMove(now, { 'opacity': 100 });
    };

    list.onmouseout = function (ev) {
        //鼠标离开
        var ev = ev || window.event;
        var now = ev.target;
        //					console.log(now);
        startMove(now, { 'opacity': 0 });
    };
}

//遮罩半边
/* <ul id="list">
	<li>		
	<p></p>
	</li> */
//传两个参数进来  参数一：大的id  参数二：类型  比如：p类型
function Zezhaoban(list, p) {
    var list = getid(list);
    var mask = list.getElementsByTagName(p);

    //事件委托
    list.onmouseover = function (ev) {
        //鼠标经过
        var ev = ev || window.event;
        if (ev.target.tagName.toLowerCase() == 'li') {
            var now = ev.target.children[0]; //li
            //					console.log(now);
        }
        if (ev.target.tagName.toLowerCase() == 'p') {
            var now = ev.target; //p
        }
        startMove(now, { 'bottom': 0 });
    };

    list.onmouseout = function (ev) {
        //鼠标离开
        var ev = ev || window.event;
        if (ev.target.tagName.toLowerCase() == 'li') {
            var now = ev.target.children[0]; //li
            //					console.log(now);
        }
        if (ev.target.tagName.toLowerCase() == 'p') {
            var now = ev.target; //p
        }
        startMove(now, { 'bottom': -50 });
    };
}

//回到顶部

function SocrollTop(top) {
    //参数：回到顶部那个盒子的id
    var num = 0;
    var up = document.getElementById(top);
    window.onscroll = function () {
        var up = document.getElementById(top);
        //当前页面滚动的距离？？
        var _top = document.body.scrollTop || document.documentElement.scrollTop;
        if (_top >= 1000) {
            up.style.display = "block";
        } else {
            up.style.display = "none";
        }
        up.onclick = function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        };
    };
}

//楼层跳跃

// 需求：
// * 楼层跳跃
// * 点击菜单
// * 可以跳转到对应楼层
{} /* <ul id="menu">
   <li class="active">娱乐</li>
   <li>游戏</li>
   <li>汽车</li>
   </ul>
   <div id="box">
   <div>娱乐</div>
   <div>游戏</div>
   <div>汽车</div>
   </div> */
// * */

function Tiao(menu, li, box, div) {
    var menu = document.getElementById(menu);
    var aLis = menu.getElementsByTagName(li); //标签名，数组
    var box = document.getElementById(box);
    var aDivs = box.getElementsByTagName(div);

    //都有点击事件,点击就可以当前高亮
    for (var i = 0; i < aLis.length; i++) {
        aLis[i].index = i; //绑定索引
        aLis[i].onclick = function () {
            //清空其他active，排他思想
            clearClass();
            this.className = 'active';
            console.log(this.index);
            window.scrollTo(0, aDivs[this.index].offsetTop); //设置页面跳转
        };
    }

    function clearClass() {
        for (var i = 0; i < aLis.length; i++) {
            aLis[i].className = '';
        }
    }

    //滚动到对应楼层的时候，li跟着高亮显示
    window.onscroll = function () {
        //					console.log(123);
        var scrollTop = window.scrollY;
        var divTop1 = aDivs[0].offsetTop;
        var divTop2 = aDivs[1].offsetTop;
        var divTop3 = aDivs[2].offsetTop;
        //					console.log(scrollTop);
        if (scrollTop >= divTop1) {
            //						console.log(123);
            clearClass();
            aLis[0].className = 'active';
        }
        //					
        if (scrollTop >= divTop2) {
            clearClass();
            aLis[1].className = 'active';
        }
        //					
        if (scrollTop >= divTop3) {
            clearClass();
            aLis[2].className = 'active';
        }
    };

    //				console.log(box.offsetTop);
}