"use strict";

$(function () {
    var offset = $("#right_new_bag").offset(); //结束的地方的元素
    $(".user_buy1").click(function (event) {
        //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
        var addcar = $(this);
        console.log(addcar);
        // var img = addcar.parent().find('img').attr('src');
        var img = addcar.parent().parent().parent().find('img').attr('src');
        console.log(img);
        var flyer = $('<img class="u-flyer" src="' + img + '">');
        console.log(flyer);
        flyer.fly({
            start: {
                left: event.clientX,
                top: event.clientY
            },
            end: {
                left: offset.left + 10,
                top: offset.top + 10,
                width: 0,
                height: 0
            }
            // onEnd: function(){
            //     $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
            //     addcar.css("cursor","default").removeClass('orange').unbind('click');
            //     this.destory();
            // }
        });
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
        console.log(arr);
        var inputQuantity = document.getElementById('inputQuantity');
        var sd = inputQuantity.value;
        var res5 = arr.map(function (item) {
            var url = '../src/api/list3_1.php';
            var data = 'id=' + item.id + '&img=' + item.img + '&pinpai=' + item.pinpai + '&show=' + item.show + '&size=' + item.size + '&man=' + item.man + '&color=' + item.color + '&price=' + item.price + '&paizi=' + item.paizi + '&pinlun=' + item.pinlun + '&bianhao=' + item.bianhao + '&img1=' + item.img1 + '&img2=' + item.img2 + '&img3=' + item.img3 + '&img4=' + item.img4 + '&img5=' + item.img5 + '&img6=' + item.img6 + '&img7=' + item.img7 + '&shuliang=' + sd + '&sum';
            ajax('post', url, data, function (str) {
                var arr = JSON.parse(str);
                // console.log(arr);
            });
        });
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
    });
});