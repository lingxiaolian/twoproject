'use strict';

//需求：写好html结构，css样式，然后注释掉
//js:渲染数据到第一页（初始化）；根据总数量和每页显示的数量，计算总共需要分多少页（创建节点）；点击页码，跳转到对应的内容（接口，实现跳转内容）
//1.获取节点
function ajax(method, url, data, fn) {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //告诉对象，要什么
    if (method == 'get' && data) {
        //如果是get的方式，data接在url后面
        //如果请求的地址是同一个地址，浏览器自动缓存
        url = url + '?day=' + new Date() + '&' + data;
    }

    xhr.open(method, url, true);

    //2.发送请求
    if (method == 'get') {
        xhr.send(null);
    } else {
        //设置请求头
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    //3.3号线去后台制作

    //4.号线。接收数据，做渲染

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //个性需求
                if (fn) {
                    fn(xhr.responseText); //实参
                }
            } else {
                alert('出错了，因为：' + xhr.status); //404找不到
            }
        }
    };
}
var D_top2_right = getid('D_top2_right');
var moren = getid('moren');
var price = getid('price');
price.onclick = function () {
    var url = '../src/api/order.php';
    //传两个参数进去，参数一：页数；参数二：每页显示多少条
    var data = 'page=1&qty=32'; //键值对的形式
    ajax('get', url, data, function (str) {
        // console.log(str);
        var arr = JSON.parse(str);
        show(arr.list);
        var total = arr.total;
        var page1 = arr.page;
        var num = Math.ceil(total / arr.qty);
        var html = '';
        for (var i = 0; i < num; i++) {
            html += '<span>' + (i + 1) + '</span>';
        }
        page.innerHTML = '<a href="javascript:;" class=\'one\'>\u9996\u9875</a>\n    <a href="javascript:;" class="pre-page">\u4E0A\u4E00\u9875</a>' + html + ('<a href="" class="next-page">\u4E0B\u4E00\u9875</a>\n    <a href="">\u5C3E\u9875</a>\n</div>\n<i>\u5171<i>' + num + '</i>\u9875<i>');
        pagenum.innerHTML = '<span>' + page + '/' + total + '</span>';
        var b3 = getid('b3');
        b3.innerHTML = page1;
        var b4 = getid('b4');
        b4.innerHTML = num;
        D_top2_right.innerHTML = total;
        page.children[0].className = 'active';
    });
    page.onclick = function (ev) {
        var ev = ev || window.event; //用事件委托实现点击功能，因为是创建出来的节点，绑定在它的父元素身上
        if (ev.target.tagName.toLowerCase() == 'span') {
            //缩小范围，利用target把事件绑定在span身上
            var num2 = ev.target.innerHTML;
            var url = '../src/api/order.php';
            var data = 'qty=32&page=' + num2;
            ajax('get', url, data, function (str) {
                console.log(str);
                var arr = JSON.parse(str);
                console.log(arr);
                var total = arr.total;
                var num = Math.ceil(total / arr.qty);
                show(arr.list);
                for (var i = 0; i < page.children.length; i++) {
                    page.children[i].className = '';
                }
                var page1 = arr.page;
                var b3 = getid('b3');
                b3.innerHTML = page1;
                console.log(page1);
                var b4 = getid('b4');
                b4.innerHTML = num;
                ev.target.className = 'active';
            });
        } else if (ev.target.className == 'pre-page') {
            //缩小范围，利用target把事件绑定在span身上
            var num2 = ev.target.innerHTML;
            var url = '../src/api/03goodslist.php';
            var one = 1;
            var data = 'qty=32&page=' + num2 - 1;
            ajax('get', url, data, function (str) {
                console.log(str);
                var arr = JSON.parse(str);
                console.log(arr);
                var total = arr.total;
                var num = Math.ceil(total / arr.qty);
                show(arr.list);
                for (var i = 0; i < page.children.length; i++) {
                    page.children[i].className = '';
                }
                var page1 = arr.page;
                var b3 = getid('b3');
                b3.innerHTML = page1;
                console.log(page1);
                var b4 = getid('b4');
                b4.innerHTML = num;
                ev.target.className = 'active';
            });
        }
    };
};
moren.onclick = function () {
    var url = '../src/api/oderid.php';
    //传两个参数进去，参数一：页数；参数二：每页显示多少条
    var data = 'page=1&qty=32'; //键值对的形式
    ajax('get', url, data, function (str) {
        // console.log(str);
        var arr = JSON.parse(str);
        show(arr.list);
        var total = arr.total;
        var page1 = arr.page;
        var num = Math.ceil(total / arr.qty);
        var html = '';
        for (var i = 0; i < num; i++) {
            html += '<span>' + (i + 1) + '</span>';
        }
        page.innerHTML = '<a href="javascript:;" class="one">\u9996\u9875</a>\n    <a href="javascript:;" class="pre-page">\u4E0A\u4E00\u9875</a>' + html + ('<a href="javascript:;" class="next-page">\u4E0B\u4E00\u9875</a>\n    <a href="javascript:;" class="two">\u5C3E\u9875</a>\n</div>\n<i>\u5171<i>' + num + '</i>\u9875<i>');
        pagenum.innerHTML = '<span>' + page + '/' + total + '</span>';
        var b3 = getid('b3');
        b3.innerHTML = page1;
        var b4 = getid('b4');
        b4.innerHTML = num;
        D_top2_right.innerHTML = total;
        page.children[0].className = 'active';
    });
    // page.onclick = function (ev) {
    //     var ev = ev || window.event;//用事件委托实现点击功能，因为是创建出来的节点，绑定在它的父元素身上
    //     if (ev.target.tagName.toLowerCase() == 'span') {//缩小范围，利用target把事件绑定在span身上
    //         var num2 = ev.target.innerHTML;

    //         var url = '../src/api/oderid.php';
    //         var data = 'qty=32&page=' + num2;
    //         ajax('get', url, data, function (str) {
    //             console.log(str);
    //             var arr = JSON.parse(str);
    //             console.log(arr);
    //             var total = arr.total;
    //             var num = Math.ceil(total / arr.qty);
    //             show(arr.list);
    //             for (var i = 0; i < page.children.length; i++) {
    //                 page.children[i].className = ''
    //             }
    //             var page1 = arr.page;
    //             var b3 = getid('b3');
    //             b3.innerHTML = page1;
    //             console.log(page1);
    //             var b4 = getid('b4');
    //             b4.innerHTML = num;
    //             ev.target.className = 'active';
    //         });

    //     }
    //     else if (ev.target.className == 'pre-page') {//缩小范围，利用target把事件绑定在span身上
    //         alert(123);
    //         var num2 = document.getElementsByClassName('active');
    //         console.log(num2);
    //         // var url = '../src/api/oderid.php';
    //         // var one = 1;
    //         // var data = 'qty=32&page=' + num2 - 1;
    //         // ajax('get', url, data, function (str) {
    //         //     console.log(str);
    //         //     var arr = JSON.parse(str);
    //         //     console.log(arr);
    //         //     var total = arr.total;
    //         //     var num = Math.ceil(total / arr.qty);
    //         //     show(arr.list);
    //         //     for (var i = 0; i < page.children.length; i++) {
    //         //         page.children[i].className = ''
    //         //     }
    //         //     var page1 = arr.page;
    //         //     var b3 = getid('b3');
    //         //     b3.innerHTML = page1;
    //         //     console.log(page1);
    //         //     var b4 = getid('b4');
    //         //     b4.innerHTML = num;
    //         //     ev.target.className = 'active';
    //         // });
    //     }

    // }
};
// moren.onclick=function () {
//     var url = '../src/api/oderid.php';
//     //传两个参数进去，参数一：页数；参数二：每页显示多少条
//     var data = 'page=1&qty=32';//键值对的形
//     ajax('get', url, data, function (str) {
//         var url = '../src/api/oderid.php';
//         //传两个参数进去，参数一：页数；参数二：每页显示多少条
//         var data = 'page=1&qty=32';//键值对的形式
//         ajax('get', url, data, function (str) {
//             // console.log(str);
//             var arr = JSON.parse(str);
//             show(arr.list);
//             var total = arr.total;
//             var page1 = arr.page;
//             var num = Math.ceil(total / arr.qty);
//             var html = '';
//             for (var i = 0; i < num; i++) {
//                 html += `<span>${i + 1}</span>`;
//             }
//             page.innerHTML = `<a href="javascript:;" class='one'>首页</a>
//             <a href="javascript:;" class="pre-page">上一页</a>`+ html + `<a href="" class="next-page">下一页</a>
//             <a href="">尾页</a>
//         </div>
//         <i>共<i>${num}</i>页<i>`;
//             pagenum.innerHTML = `<span>${page}/${total}</span>`;
//             var b3 = getid('b3');
//             b3.innerHTML = page1;
//             var b4 = getid('b4');
//             b4.innerHTML = num;
//             D_top2_right.innerHTML = total;
//             page.children[0].className = 'active';
//         });
//     });
//     page.onclick = function (ev) {
//         var ev = ev || window.event;//用事件委托实现点击功能，因为是创建出来的节点，绑定在它的父元素身上
//         if (ev.target.tagName.toLowerCase() == 'span') {//缩小范围，利用target把事件绑定在span身上
//             var num2 = ev.target.innerHTML;
//             var url = '../src/api/orderid.php';
//             var data = 'qty=32&page=' + num2;
//             ajax('get', url, data, function (str) {
//                 console.log(str);
//                 var arr = JSON.parse(str);
//                 console.log(arr);
//                 var total = arr.total;
//                 var num = Math.ceil(total / arr.qty);
//                 show(arr.list);
//                 for (var i = 0; i < page.children.length; i++) {
//                     page.children[i].className = ''
//                 }
//                 var page1 = arr.page;
//                 var b3 = getid('b3');
//                 b3.innerHTML = page1;
//                 console.log(page1);
//                 var b4 = getid('b4');
//                 b4.innerHTML = num;
//                 ev.target.className = 'active';
//             });

//         }
//        else if (ev.target.className == 'pre-page') {//缩小范围，利用target把事件绑定在span身上
//             var num2 = ev.target.innerHTML;
//             var url = '../src/api/03goodslist.php';
//             var one=1;
//             var data = 'qty=32&page=' +  num2-1;
//             ajax('get', url, data, function (str) {
//                 console.log(str);
//                 var arr = JSON.parse(str);
//                 console.log(arr);
//                 var total = arr.total;
//                 var num = Math.ceil(total / arr.qty);
//                 show(arr.list);
//                 for (var i = 0; i < page.children.length; i++) {
//                     page.children[i].className = ''
//                 }
//                 var page1 = arr.page;
//                 var b3 = getid('b3');
//                 b3.innerHTML = page1;
//                 console.log(page1);
//                 var b4 = getid('b4');
//                 b4.innerHTML = num;
//                 ev.target.className = 'active';
//             });

//         }

//     }
// }
var pagenum = document.getElementsByClassName('pagenum');
var list = getid('list'); //要渲染数据的节点
var page = getid('page'); //要渲染页数的节点
var list2 = list.getElementsByTagName('img');
function show(arr) {
    var res = arr.map(function (item) {
        return '<li class="item" data-id="' + item.id + '">\n            <ol>\n                <div class="pic">\n                    <a href="javascript:;">\n                        <img alt="' + item.show + '"\n                            src="' + item.img + '" style="display: inline;">\n                        <div class="name" style="bottom: 0px;">\n                            <p>' + item.man + '\n                                <span></span>\n                            </p>\n                        </div>\n                    </a>\n                    <div class="sold_size" style="top: 0px;">\n                        <p class="sold_size_tit">\u53EF\u552E\u5C3A\u7801\uFF1A</p>\n                        <ul class="sold_size_list clearfix J_sizeArea">\n                            <div class="ssl_item">\n                                <span>' + item.size + '</span>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n                \n                <div class="tit">\n                    <span>\n                       ' + item.pinpai + '\n                    </span>\n                    <a href="javascript:;"\n                        target="_blank">' + item.show + '</a>\n                </div>\n                <div class="price">\n                    <span class="showprice ">' + item.price + '</span>\n                </div>\n            </ol>\n            <div class="cl"></div>\n        </li>';
    }).join('');
    list.innerHTML = res;
}
//2.渲染第一页的内容,用ajax请求数据,不能直接向json文件请求数据，因为只要一部分的数据，所以用php文件截取，然后再返回回来
var url = '../src/api/03goodslist.php';
//传两个参数进去，参数一：页数；参数二：每页显示多少条
var data = 'page=1&qty=32'; //键值对的形式

ajax('get', url, data, function (str) {
    // console.log(str);
    var arr = JSON.parse(str);
    show(arr.list);
    var total = arr.total;
    var page1 = arr.page;
    var num = Math.ceil(total / arr.qty);
    var html = '';
    for (var i = 0; i < num; i++) {
        html += '<span>' + (i + 1) + '</span>';
    }
    page.innerHTML = '<a href="javascript:;" class=\'one\'>\u9996\u9875</a>\n    <a href="javascript:;" class="pre-page">\u4E0A\u4E00\u9875</a>' + html + ('<a href="" class="next-page">\u4E0B\u4E00\u9875</a>\n    <a href="">\u5C3E\u9875</a>\n</div>\n<i>\u5171<i>' + num + '</i>\u9875<i>');
    pagenum.innerHTML = '<span>' + page + '/' + total + '</span>';
    var b3 = getid('b3');
    b3.innerHTML = page1;
    var b4 = getid('b4');
    b4.innerHTML = num;
    D_top2_right.innerHTML = total;
    page.children[0].className = 'active';
});
//点击实现跳转到对应的内容
page.onclick = function (ev) {
    var ev = ev || window.event; //用事件委托实现点击功能，因为是创建出来的节点，绑定在它的父元素身上
    if (ev.target.tagName.toLowerCase() == 'span') {
        //缩小范围，利用target把事件绑定在span身上
        var num2 = ev.target.innerHTML;
        var url = '../src/api/03goodslist.php';
        var data = 'qty=32&page=' + num2;
        ajax('get', url, data, function (str) {
            console.log(str);
            var arr = JSON.parse(str);
            console.log(arr);
            var total = arr.total;
            var num = Math.ceil(total / arr.qty);
            show(arr.list);
            for (var i = 0; i < page.children.length; i++) {
                page.children[i].className = '';
            }
            var page1 = arr.page;
            var b3 = getid('b3');
            b3.innerHTML = page1;
            console.log(page1);
            var b4 = getid('b4');
            b4.innerHTML = num;
            ev.target.className = 'active';
        });
    }
    // else if (ev.target.className == 'pre-page') {//缩小范围，利用target把事件绑定在span身上
    //     var num2 = document.getElementsByClassName('active').innerHTML;
    //     console.log(num2);
    //     alert(123);
    //     var url = '../src/api/03goodslist.php';
    //     var data = 'qty=32&page=' + num2 - 1;
    //     ajax('get', url, data, function (str) {
    //         console.log(str);
    //         var arr = JSON.parse(str);
    //         console.log(arr);
    //         var total = arr.total;
    //         var num = Math.ceil(total / arr.qty);
    //         show(arr.list);
    //         for (var i = 0; i < page.children.length; i++) {
    //             page.children[i].className = ''
    //         }
    //         var page1 = arr.page;
    //         var b3 = getid('b3');
    //         b3.innerHTML = page1;
    //         console.log(page1);
    //         var b4 = getid('b4');
    //         b4.innerHTML = num;
    //         ev.target.className = 'active';
    //     });

    // }
};
//点击跳转
ajax('get', url, data, function (str) {
    var arr = JSON.parse(str);
    console.log(list2);
    console.log(arr);
    for (var i in list2) {
        list2[i].index = i;
        list2[i].onclick = function () {
            console.log(this.index); //取到下标
            console.log(arr.list[this.index]); //获取里面的内容
            //将的得到的对象转成字符串
            var res = '';
            for (var key in arr.list[this.index]) {
                //遍历到里面的内容，用字符串拼接起来
                res += key + '=' + arr.list[this.index][key] + '&'; //后面要加上&
            }
            res = res.slice(0, -1); //减掉最后一个&
            console.log(res);
            location.href = '../html/goods.html?' + res;
        };
    }
});