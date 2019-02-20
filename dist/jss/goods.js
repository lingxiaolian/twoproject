'use strict';

window.onload = function () {
    var list1 = document.getElementById('list1');
    var top1_q = document.getElementById('top1_q');
    var cpmx_tt = document.getElementById('cpmx_tt');

    var MagnifierWrap2 = document.getElementById('MagnifierWrap2');
    var date = decodeURI(location.search);
    var res1 = date.slice(1);
    function show(res1) {
        var obj = {};
        var arr1 = res1.split('&');
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split('=');
            obj[arr2[0]] = arr2[1];
        }
        return obj;
    }
    var res2 = show(res1);
    var arr = [];
    arr.push(res2);
    // console.log(arr);
    var numbe = 0;
    var res3 = arr.map(function (item) {
        numbe = item.num;
        // console.log('shijain:' + numbe);
        return ' \n        <!-- \u4EA7\u54C1\u56FE\u7247  \u7ED3\u675F-->\n        <!-- \u4EA7\u54C1\u4EF7\u683C  \u5F00\u59CB-->\n                <div class="p_title">\n                    <span>\n                        <h1 style="font-size:14px;">\n                          ' + item.show + '\n                            <i class="name_pre">[ \u53C2\u52A0\u6EE1\u51CF ]</i>\n                            <i class="name_post"></i>\n                        </h1>\n                    </span>\n                    <span class="cp">\n                        <font>\u54C1\u3000\u3000\u724C\uFF1A</font>\n                        <a href="" target="_blank">\n                            ' + item.paizi + '\n                        </a>\n                        <a href="#" id="toComment" style="color: #005BA1;margin-left:10px;">' + item.pinlun + '</a>\n                        <i>' + item.bianhao + '</i>\n                    </span>\n                </div>\n                <img src="" alt="\u8F7D\u5165\u4E2D" id="productLoading" style="display: none;">\n                <div id="prd_price_div">\n                    <div id="prd_price_div" class="xxjx">\n                        <div class="clearfix"></div>\n                        <div class="col1 z1">\n                            <span class="spw">\u8D70 \u79C0 \u4EF7\uFF1A</span>\n                            <span class="style3">' + item.price + '</span>\n                        </div>\n                        <div class="clearfix"></div>\n                        <div class="col1 cx_tips">\n                            <div class="spw">\u4FC3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u9500\uFF1A</div>\n                            <div class="cx_detail">\n                                <p>\n                                    <em class="cx_icon">\u6EE1\u51CF</em>\u6EE12\u4E07\u51CF5\u5343\uFF0C\u6EE11\u4E07\u51CF2\u5343\uFF0C\u6EE15\u5343\u51CF750</p>\n                            </div>\n                        </div>\n                        <p class="col1 myf layer13">\n                            <span class="spw">\u53D1 \u8D27 \u5730\uFF1A</span>\n                            <b>\u9999\u6E2F</b>\n                            <b class="stime">\u9884\u8BA17-14\u4E2A\u5DE5\u4F5C\u65E5\u9001\u8FBE</b>\n                            <a class="liucheng">\u67E5\u770B\u914D\u9001\u6D41\u7A0B\n                                <i class="tiptools">\n                                    <img src="http://m.xiu.com/H5/shipMents/pc-HONGKONG5-9.jpg">\n                                </i>\n                            </a>\n                        </p>\n                        <p class="col1">\n                            <span class="spw">\u7A0E&nbsp;&nbsp;&nbsp;\u8D39\uFF1A</span>\u7531\u6D77\u5916\u5356\u5BB6\u627F\u62C5\n                            <a href="javascript:;" class="seedet">\u8BE6\u7EC6\u8BF4\u660E\n                                <em>\u672C\u5546\u54C1\u4E3A\u6D77\u5916\u5546\u54C1\uFF0C\u5173\u7A0E\u7531\u6D77\u5916\u5356\u5BB6\u627F\u62C5\uFF0C\u5982\u987E\u5BA2\u63A5\u6D77\u5173\u6216\u7269\u6D41\u5546\u901A\u77E5\u7F34\u7EB3\u7A0E\u8D39\uFF0C\u8BF7\u5148\u884C\u6309\u56FD\u5BB6\u89C4\u5B9A\u652F\u4ED8\uFF0C\u518D\u51ED\u7EB3\u7A0E\u51ED\u8BC1\u8054\u7CFB\u8D70\u79C0\u5BA2\u670D\u627E\u6D77\u5916\u5356\u5BB6\u62A5\u9500\u3002</em>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n                <div id="prd_attr_div" class="cm">\n                    <div class="modleDiv">\n                        <div class="cm_hz" id="colorsArea">\n                            <div class="xsxm">\u989C&nbsp;&nbsp;&nbsp;&nbsp;\u8272\uFF1A</div>\n                            <div class="cmxs noLimit">\n                                <ul>\n                                    <li class="selected">\n                                        <a href="#" rel="color" id="c-0" class="">' + item.color + '</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="cm_hz" id="sizesArea">\n                            <div class="xsxm">\u5C3A&nbsp;&nbsp;&nbsp;&nbsp;\u7801\uFF1A</div>\n                            <div class="cmxs noLimit">\n                                <ul>\n                                    <li class="selected">\n                                        <a href="#" rel="size" id="s-0" class="">F</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="cm_hz" id="J_amount">\n                            <div class="xsxm">\u6570&nbsp;&nbsp;&nbsp;&nbsp;\u91CF\uFF1A</div>\n                            <div class="cmxs">\n                                <span class="down dis" id="minusAmount"></span>\n                                <input type="text" id="inputQuantity" name="inputQuantity" value="' + item.shuliang + '">\n                                <span class="up" id="plusAmount"></span>\u4EF6\n                                <span id="J_stockCon" class="stock-con" style="display: none;">\u8FD8\u5269\n                                    <b id="J_stockNum" class="stock_num"></b>\u4EF6\u5566\uFF0C\u4E0D\u62A2\u767D\u4E0D\u62A2\uFF01</span>\n                            </div>\n                        </div>\n                        </div>                   \n   ';
    });
    var res4 = res3.join('');
    list1.innerHTML = res4;
    var res6 = arr.map(function (item) {
        return '<div class="dh">\u60A8\u7684\u4F4D\u7F6E\uFF1A\n        <span id="positionBox">\n            <a href="">\u8D70\u79C0\u9996\u9875</a> &gt;\n            <a href=""> \u5973\u5305 </a> &gt;\n            <a href=""> \u624B\u63D0\u5305 </a> &gt;\n            <a href=""> \u624B\u63D0\u5305 </a> &gt;\n            <span id="positionPrdName">' + item.show + '</span>\n        </span>\n    </div>';
    });
    var res7 = res6.join('');
    top1_q.innerHTML = res7;

    var res8 = arr.map(function (item) {
        return '<div class="cpmx_tt">\n        <ul id="container_ul">\n            <li class="on"><a href="javascript:void(0);" hidefocus="true">\u5546\u54C1\u4FE1\u606F</a></li>\n            <li class="pdo_pl"><a href="javascript:void(0);" hidefocus="true" id="comment_total_num">\u54C1\u724C\u8BC4\u8BBA(1605)<i></i></a></li>\n        </ul>\n        <div class="cp_bags"><span onsale="1" saletype="">2720</span><a href="javascript:;" id="float_buy_add"></a></div>\n   </div>\n    <section class="">\n    <img src="' + item.img6 + '" alt="">\n</section>\n<section>\n    <img src="' + item.img7 + '" alt="">\n</section>';
    });
    var res9 = res8.join('');
    cpmx_tt.innerHTML = res9;

    var res10 = arr.map(function (item) {
        return ' <div class="MagnifierMain" id=\'MagnifierMain\'>\n<img class="MagTargetImg" src="' + item.img1 + '" data-src="' + item.img1 + '"data-maxSrc="' + item.img1 + '"> \n    </div>\n    <span class="spe_leftBtn">&lt;</span>\n    <span class="spe_rightBtn">&gt;</span>\n    <div class="spec-items"> \n        <ul>\n  <li class="on"><img src="' + item.img1 + '" data-lsrc="' + item.img1 + '" data-maxSrc="' + item.img1 + '"></li>\n            <li><img src="' + item.img2 + '" data-lsrc="' + item.img2 + '" data-maxSrc="' + item.img2 + '"></li>\n            <li><img src="' + item.img3 + '" data-lsrc="' + item.img3 + '" data-maxSrc="' + item.img3 + '"></li>\n            <li><img src="' + item.img4 + '" data-lsrc="' + item.img4 + '" data-maxSrc="' + item.img4 + '"></li>\n            <li><img src="' + item.img5 + '" data-lsrc="' + item.img5 + '" data-maxSrc="' + item.img5 + '"></li>\n        </ul>\n    </div>';
    });
    var res11 = res10.join('');
    MagnifierWrap2.innerHTML = res11;
    var btnPost = document.getElementById('user_buy_btn');
    var Num = document.getElementById('num');
    var url = '../src/api/cartlist.php';
    //传两个参数进去，参数一：页数；参数二：每页显示多少条
    var data = 'qty='; //键值对的形式
    var arr3 = [];
    ajax('get', url, data, function (str) {
        // console.log(str);
        var arr = JSON.parse(str);
        console.log(arr);
        arr.list.map(function (item) {
            var str2 = 0;
            str2 += item.shuliang * 1;
            console.log(str2);
            arr3.push(str2);
        });
        console.log(arr3);
        var str3 = 0;
        for (var i = 0; i < arr3.length; i++) {
            str3 += arr3[i];
        }
        console.log(str3);
        Num.innerHTML = str3;
    });
    var plusAmount = document.getElementById('plusAmount');
    plusAmount.onclick = function () {
        var k = document.getElementById("inputQuantity").value;
        console.log(k);
        if (k > 1 || k == 1) {
            k++;
            console.log(k);
            document.getElementById("inputQuantity").value = k;
            // var url = '../src/api/list2_1.php';
            // var data = 'one=' + k + '&id=' + id;
            // ajax('post', url, data, function (str) {
            //     // console.log(str);
            //     var arr = JSON.parse(str);
            //     var url = '../src/api/cartlist.php';
            //     //传两个参数进去，参数一：页数；参数二：每页显示多少条
            //     var data = 'qty=';//键值对的形式
            //     ajax('get', url, data, function (str) {
            //         // console.log(str);
            //         var arr = JSON.parse(str);
            //         console.log(arr);
            //         show(arr.list);
            //     });
            // });
        } else {
            document.getElementById("inputQuantity").value = k;
            // var url = '../src/api/list2_1.php';
            // var data = 'one=' + k + '&id=' + id;
            // ajax('post', url, data, function (str) {
            //     // console.log(str);
            //     var arr = JSON.parse(str);
            //     var url = '../src/api/cartlist.php';
            //     //传两个参数进去，参数一：页数；参数二：每页显示多少条
            //     var data = 'qty=';//键值对的形式
            //     ajax('get', url, data, function (str) {
            //         // console.log(str);
            //         var arr = JSON.parse(str);
            //         console.log(arr);
            //         show(arr.list);
            //     });
            // });
        }
    };
    // if (ev.target.className == 'plus') {
    //     var k = document.getElementById("text2").value;
    //     if (k > 1 || k == 1) {
    //         k++;
    //         document.getElementById("text2").value = k;
    //         var url = '../src/api/list2_1.php';
    //         var data = 'one=' + k + '&id=' + id;
    //         ajax('post', url, data, function (str) {
    //             // console.log(str);
    //             var arr = JSON.parse(str);
    //             var url = '../src/api/cartlist.php';
    //             //传两个参数进去，参数一：页数；参数二：每页显示多少条
    //             var data = 'qty=';//键值对的形式
    //             ajax('get', url, data, function (str) {
    //                 // console.log(str);
    //                 var arr = JSON.parse(str);
    //                 console.log(arr);
    //                 show(arr.list);
    //             });
    //         });
    //     } else {
    //         document.getElementById("text2").value = k;
    //         var url = '../src/api/list2_1.php';
    //         var data = 'one=' + k + '&id=' + id;
    //         ajax('post', url, data, function (str) {
    //             // console.log(str);
    //             var arr = JSON.parse(str);
    //             var url = '../src/api/cartlist.php';
    //             //传两个参数进去，参数一：页数；参数二：每页显示多少条
    //             var data = 'qty=';//键值对的形式
    //             ajax('get', url, data, function (str) {
    //                 // console.log(str);
    //                 var arr = JSON.parse(str);
    //                 console.log(arr);
    //                 show(arr.list);
    //             });
    //         });
    //     }

    // }
    var minusAmount = document.getElementById('minusAmount');
    minusAmount.onclick = function () {
        var k = document.getElementById("inputQuantity").value;
        if (k > 1 && k != 1) {
            k--;
            document.getElementById("inputQuantity").value = k;
            // var url = '../src/api/list2_1.php';
            // var data = 'one=' + k + '&id=' + id;
            // ajax('post', url, data, function (str) {
            //     // console.log(str);
            //     var arr = JSON.parse(str);
            //     var url = '../src/api/cartlist.php';
            //     //传两个参数进去，参数一：页数；参数二：每页显示多少条
            //     var data = 'qty=';//键值对的形式
            //     ajax('get', url, data, function (str) {
            //         // console.log(str);
            //         var arr = JSON.parse(str);
            //         console.log(arr);
            //         show(arr.list);
            //     });
            // });
        } else {
            document.getElementById("inputQuantity").value = k;
            // var url = '../src/api/list2_1.php';
            // var data = 'one=' + k + '&id=' + id;
            // console.log(k);
            // ajax('post', url, data, function (str) {
            //     // console.log(str);
            //     var arr = JSON.parse(str);
            //     var url = '../src/api/cartlist.php';
            //     //传两个参数进去，参数一：页数；参数二：每页显示多少条
            //     var data = 'qty=';//键值对的形式
            //     ajax('get', url, data, function (str) {
            //         // console.log(str);
            //         var arr = JSON.parse(str);
            //         console.log(arr);
            //         show(arr.list);
            //     });
            // });
        }
    };
    //  if (ev.target.className == 'reduce reSty') {
    //     var k = document.getElementById("text2").value;
    //     if (k > 1 && k != 1) {
    //         k--;
    //         document.getElementById("text2").value = k;
    //         var url = '../src/api/list2_1.php';
    //         var data = 'one=' + k + '&id=' + id;
    //         ajax('post', url, data, function (str) {
    //             // console.log(str);
    //             var arr = JSON.parse(str);
    //             var url = '../src/api/cartlist.php';
    //             //传两个参数进去，参数一：页数；参数二：每页显示多少条
    //             var data = 'qty=';//键值对的形式
    //             ajax('get', url, data, function (str) {
    //                 // console.log(str);
    //                 var arr = JSON.parse(str);
    //                 console.log(arr);
    //                 show(arr.list);
    //             });
    //         });
    //     } else {
    //         document.getElementById("text2").value = k;
    //         var url = '../src/api/list2_1.php';
    //         var data = 'one=' + k + '&id=' + id;
    //         console.log(k);
    //         ajax('post', url, data, function (str) {
    //             // console.log(str);
    //             var arr = JSON.parse(str);
    //             var url = '../src/api/cartlist.php';
    //             //传两个参数进去，参数一：页数；参数二：每页显示多少条
    //             var data = 'qty=';//键值对的形式
    //             ajax('get', url, data, function (str) {
    //                 // console.log(str);
    //                 var arr = JSON.parse(str);
    //                 console.log(arr);
    //                 show(arr.list);
    //             });
    //         });
    //     }
    // }

    // btnPost.onclick = function () {
    //     //发送请求
    //     //location.reload();
    //     var inputQuantity = document.getElementById('inputQuantity');
    //     var sd = inputQuantity.value;
    //     var res5 = arr.map(function (item) {
    //         var url = '../src/api/list3_1.php';
    //         var data = 'id=' + item.id + '&img=' + item.img + '&pinpai=' + item.pinpai + '&show=' + item.show + '&size=' + item.size + '&man=' + item.man + '&color=' + item.color + '&price=' + item.price + '&paizi=' + item.paizi + '&pinlun=' + item.pinlun + '&bianhao=' + item.bianhao + '&img1=' + item.img1 + '&img2=' + item.img2 + '&img3=' + item.img3 + '&img4=' + item.img4 + '&img5=' + item.img5 + '&img6=' + item.img6 + '&img7=' + item.img7 + '&shuliang=' + sd + '&sum';
    //         ajax('post', url, data, function (str) {
    //             var arr = JSON.parse(str);
    //             console.log(arr);

    //         });
    //     });
    //     var Num = document.getElementById('num');
    //     var url = '../src/api/cartlist.php';
    //     //传两个参数进去，参数一：页数；参数二：每页显示多少条
    //     var data = 'qty=';//键值对的形式
    //     ajax('get', url, data, function (str) {
    //         var arr = JSON.parse(str);
    //         Num.innerHTML = arr.total;
    //     });

    // }
    MagnifierF("MagnifierWrap2");
};