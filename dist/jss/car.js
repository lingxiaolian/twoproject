'use strict';

window.onload = function () {
    var order_content = document.getElementById('order_content');
    function show(arr) {
        var res = arr.map(function (item) {
            return '<ul class="order_lists " data-id=' + item.id + '>\n        <li class="list_chk">\n            <input type="checkbox" id="checkbox_2" class="son_check" style="  position: absolute;top: 65px;left: 12px;">\n        </li>\n        <li class="list_con">\n            <div class="list_img">\n                <a href="javascript:;">\n                    <img src="' + item.img + '" alt="" style="width: 80px;height: 90px;">\n                </a>\n            </div>\n            <div class="list_text" style="margin: 35px 0 0 10px;">\n                <a href="">' + item.pinpai + '</a>\n                <a href="javascript:;">' + item.show + '</a>\n                <a href=""style="color:#888;" >\n                    <span>\u989C\u8272\uFF1A' + item.color + '</span>\n                    <span>\u5C3A\u7801\uFF1A' + item.size + '</span>\n                </a>\n            </div>\n        </li>\n        <li class="list_price">\n            <p class="price12">\uFFE5<span class="pri">' + item.price + '</span></p>\n        </li>\n        <li class="list_amount">\n            <div class="amount_box">\n                <a href="javascript:;" class="reduce reSty" >-</a>\n                <input type="text" value="' + item.shuliang + '" class="sum"  id="text2">\n                <a href="javascript:;" class="plus">+</a>\n            </div>\n        </li>\n        <li class="list_sum">\n            <p class="sum_price" style="margin: 40px 0 0 10px;">\uFFE5<span class="price13">' + item.sum + '</span></p>\n        </li>\n        <li class="list_op">\n            <p class="del">\n                <a href="javascript:;" class="delBtn1">\u79FB\u5165\u6536\u85CF\u5939</a>\n                <a href="javascript:;" class="delBtn">\u5220\u9664</a>\n            </p>\n        </li>\n    </ul>';
        }).join('');
        order_content.innerHTML = res;
    }
    var url = '../src/api/cartlist.php';
    //传两个参数进去，参数一：页数；参数二：每页显示多少条
    var data = 'qty='; //键值对的形式
    ajax('get', url, data, function (str) {
        // console.log(str);
        var arr = JSON.parse(str);
        console.log(arr);
        show(arr.list);
    });

    // console.log(order_content);
    function jia() {
        var url = '../src/api/list2_1.php';
        var data = 'one=' + k + '&id=' + id;
        console.log(k);
        ajax('post', url, data, function (str) {
            // console.log(str);
            var arr = JSON.parse(str);
            var url = '../src/api/cartlist.php';
            //传两个参数进去，参数一：页数；参数二：每页显示多少条
            var data = 'qty='; //键值对的形式
            ajax('get', url, data, function (str) {
                // console.log(str);
                var arr = JSON.parse(str);
                console.log(arr);
                show(arr.list);
            });
        });
    }
    order_content.onclick = function (ev) {
        // console.log(order_content);
        var ev = ev || window.event;
        var id = ev.target.parentNode.parentNode.parentNode.dataset.id;
        if (ev.target.className == 'delBtn') {
            console.log(id);
            var url = '../src/api/guestbook/index.php';
            var data = 'm=index&a=sendtt&id=' + id;
            ajax('post', url, data, function (str) {
                console.log(str);
                var url = '../src/api/cartlist.php';
                //传两个参数进去，参数一：页数；参数二：每页显示多少条
                var data = 'qty='; //键值对的形式
                ajax('get', url, data, function (str) {
                    console.log(str);
                    var arr = JSON.parse(str);
                    console.log(arr);
                    show(arr.list);
                });
            });
        } else if (ev.target.className == 'plus') {
            var k = document.getElementById("text2").value;
            if (k > 1 || k == 1) {
                k++;
                document.getElementById("text2").value = k;
                var url = '../src/api/list2_1.php';
                var data = 'one=' + k + '&id=' + id;
                ajax('post', url, data, function (str) {
                    // console.log(str);
                    var arr = JSON.parse(str);
                    var url = '../src/api/cartlist.php';
                    //传两个参数进去，参数一：页数；参数二：每页显示多少条
                    var data = 'qty='; //键值对的形式
                    ajax('get', url, data, function (str) {
                        // console.log(str);
                        var arr = JSON.parse(str);
                        console.log(arr);
                        show(arr.list);
                    });
                });
            } else {
                document.getElementById("text2").value = k;
                var url = '../src/api/list2_1.php';
                var data = 'one=' + k + '&id=' + id;
                ajax('post', url, data, function (str) {
                    // console.log(str);
                    var arr = JSON.parse(str);
                    var url = '../src/api/cartlist.php';
                    //传两个参数进去，参数一：页数；参数二：每页显示多少条
                    var data = 'qty='; //键值对的形式
                    ajax('get', url, data, function (str) {
                        // console.log(str);
                        var arr = JSON.parse(str);
                        console.log(arr);
                        show(arr.list);
                    });
                });
            }
        } else if (ev.target.className == 'reduce reSty') {
            var k = document.getElementById("text2").value;
            if (k > 1 && k != 1) {
                k--;
                document.getElementById("text2").value = k;
                var url = '../src/api/list2_1.php';
                var data = 'one=' + k + '&id=' + id;
                ajax('post', url, data, function (str) {
                    // console.log(str);
                    var arr = JSON.parse(str);
                    var url = '../src/api/cartlist.php';
                    //传两个参数进去，参数一：页数；参数二：每页显示多少条
                    var data = 'qty='; //键值对的形式
                    ajax('get', url, data, function (str) {
                        // console.log(str);
                        var arr = JSON.parse(str);
                        console.log(arr);
                        show(arr.list);
                    });
                });
            } else {
                document.getElementById("text2").value = k;
                var url = '../src/api/list2_1.php';
                var data = 'one=' + k + '&id=' + id;
                console.log(k);
                ajax('post', url, data, function (str) {
                    // console.log(str);
                    var arr = JSON.parse(str);
                    var url = '../src/api/cartlist.php';
                    //传两个参数进去，参数一：页数；参数二：每页显示多少条
                    var data = 'qty='; //键值对的形式
                    ajax('get', url, data, function (str) {
                        // console.log(str);
                        var arr = JSON.parse(str);
                        console.log(arr);
                        show(arr.list);
                    });
                });
            }
        }

        var url = '../src/api/list2_1.php';
        var data = 'one=' + k + '&id=' + id;
        ajax('post', url, data, function (str) {
            // console.log(str);
            var arr = JSON.parse(str);
            var url = '../src/api/cartlist.php';
            //传两个参数进去，参数一：页数；参数二：每页显示多少条
            var data = 'qty='; //键值对的形式
            ajax('get', url, data, function (str) {
                // console.log(str);
                var arr = JSON.parse(str);
                console.log(arr);
                show(arr.list);
            });
        });
    };
};