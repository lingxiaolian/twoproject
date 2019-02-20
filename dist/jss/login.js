'use strict';

var username1 = getid('username1');
var verifyUserNameMsg = getid('verifyUserNameMsg');
var btnReg = getid('btnReg');
var password1 = getid('password1');

//1.验证用户名
/*
验证用户名
get
    guestbook/index.php
        m : index
        a : verifyUserName
        username : 要验证的用户名
    返回
        {
            code : 返回的信息代码 0 = 没有错误，1 = 有错误
            message : 返回的信息具体返回信息
        }
*/
username1.onblur = function () {
    var val = username1.value;
    if (val.trim()) {
        //发送请求
        var url = '../src/api/guestbook/index.php';
        var data = 'm=index&a=verifyUserName&username=' + val;
        ajax('get', url, data, function (str) {
            var arr = JSON.parse(str);
            //				console.log(arr);
            //				console.log(arr.code);
            if (!arr.code) {
                //正确，用户名不存在，可以注册
                //					css(verifyUserNameMsg,'color','green');
                verifyUserNameMsg.style.color = 'green';
            } else {
                //					css(verifyUserNameMsg,'color','red');
                verifyUserNameMsg.style.color = 'red';
            }

            verifyUserNameMsg.innerHTML = arr.message;
        });
    } else {
        alert('不能为空');
    }
};

//注册功能
/*
用户注册
get/post
    guestbook/index.php
        m : index
        a : reg
        username : 要注册的用户名
        password : 注册的密码
    返回
        {
            code : 返回的信息代码 0 = 没有错误，1 = 有错误
            message : 返回的信息 具体返回信息
        }
*/
btnReg.onclick = function () {
    var val1 = username1.value;
    var val2 = password1.value;

    if (val1.trim() && val2.trim()) {
        //发送请求
        var url = '../src/api/guestbook/index.php';
        var data = 'm=index&a=reg&username=' + val1 + '&password=' + val2;
        ajax('post', url, data, function (str) {
            var arr = JSON.parse(str);
            console.log(arr);
            alert(arr.message);
            //				console.log(arr.code);
        });
    } else {
        alert('不能为空');
    }
};
var btnLogin = getid('btnLogin');
var username2 = getid('username2');
var password2 = getid('password2');
var reg = getid('reg');
var login = getid('login');
var user = getid('user');
var userinfo = getid('userinfo');
var logout = getid('logout');

/*
用户登陆
get/post
    guestbook/index.php
        m : index
        a : login
        username : 要登陆的用户名
        password : 登陆的密码
    返回
        {
            code : 返回的信息代码 0 = 没有错误，1 = 有错误
            message : 返回的信息 具体返回信息
        }
*/
btnLogin.onclick = function () {
    var val1 = username2.value;
    var val2 = password2.value;
    var istrue = true;
    var text3 = text2.value.toLowerCase();
    var text4 = text1.value.toLowerCase();
    if (text4 == text3) {
        istrue = true;
        // alert('提交成功');
    } else if (text3 == '' || text4 == ' ') {
        istrue = false;
        alert('请输入验证码！');
    } else if (text3 != text4) {
        istrue = false;
        alert('验证码不正确');
    }
    if (val1.trim() && val2.trim() && istrue == true) {
        //发送请求
        var url = '../src/api/guestbook/index.php';
        var data = 'm=index&a=login&username=' + val1 + '&password=' + val2;
        var istrue = true;
        ajax('post', url, data, function (str) {
            var arr = JSON.parse(str);
            // console.log(arr);
            alert(arr.message);
            //登陆成功，后端帮写入cookie
            // update(); //刷新面板
            console.log(arr.code);
            if (arr.code == 0) {
                location.href = '../index.html';
            }
        });
    }
    // else {
    //     alert('不能为空');
    // }
};

// update(); //刷新面板

// function update() {
//     //如果已经登陆：那就隐藏登陆和注册面板
//     //如果是退出：隐藏退出面板
//     //是否是登陆状态，只需要查看cookie是否有该用户即可
//     var uid = cookie.get('uid'); //从cookie读出来的用户编号
//     var name = decodeURI(cookie.get('username'));
//     if (uid) {
//         //登陆中
//         reg.style.display = 'none';
//         login.style.display = 'none';
//         user.style.display = 'block';
//         userinfo.innerHTML = name;
//     } else {
//         //退出状态
//         reg.style.display = 'block';
//         login.style.display = 'block';
//         user.style.display = 'none';
//         userinfo.innerHTML = '';
//     }
// }