"use strict";window.onload=function(){var s=document.getElementById("order_content");function i(t){var a=t.map(function(t){return'<ul class="order_lists " data-id='+t.id+'>\n        <li class="list_chk">\n            <input type="checkbox" id="checkbox_2" class="son_check" style="  position: absolute;top: 65px;left: 12px;">\n        </li>\n        <li class="list_con">\n            <div class="list_img">\n                <a href="javascript:;">\n                    <img src="'+t.img+'" alt="" style="width: 80px;height: 90px;">\n                </a>\n            </div>\n            <div class="list_text" style="margin: 35px 0 0 10px;">\n                <a href="">'+t.pinpai+'</a>\n                <a href="javascript:;">'+t.show+'</a>\n                <a href=""style="color:#888;" >\n                    <span>颜色：'+t.color+"</span>\n                    <span>尺码："+t.size+'</span>\n                </a>\n            </div>\n        </li>\n        <li class="list_price">\n            <p class="price12">￥<span class="pri">'+t.price+'</span></p>\n        </li>\n        <li class="list_amount">\n            <div class="amount_box">\n                <a href="javascript:;" class="reduce reSty" >-</a>\n                <input type="text" value="'+t.shuliang+'" class="sum"  id="text2">\n                <a href="javascript:;" class="plus">+</a>\n            </div>\n        </li>\n        <li class="list_sum">\n            <p class="sum_price" style="margin: 40px 0 0 10px;">￥<span class="price13">'+t.sum+'</span></p>\n        </li>\n        <li class="list_op">\n            <p class="del">\n                <a href="javascript:;" class="delBtn1">移入收藏夹</a>\n                <a href="javascript:;" class="delBtn">删除</a>\n            </p>\n        </li>\n    </ul>'}).join("");s.innerHTML=a}ajax("get","../src/api/cartlist.php","qty=",function(t){var a=JSON.parse(t);console.log(a),i(a.list)}),s.onclick=function(t){var a=(t=t||window.event).target.parentNode.parentNode.parentNode.dataset.id;if("delBtn"==t.target.className){console.log(a);var s="../src/api/guestbook/index.php",e="m=index&a=sendtt&id="+a;ajax("post",s,e,function(t){console.log(t);ajax("get","../src/api/cartlist.php","qty=",function(t){console.log(t);var a=JSON.parse(t);console.log(a),i(a.list)})})}else if("plus"==t.target.className){if(1<(n=document.getElementById("text2").value)||1==n){n++;s="../src/api/list2_1.php",e="one="+(document.getElementById("text2").value=n)+"&id="+a;ajax("post",s,e,function(t){JSON.parse(t);ajax("get","../src/api/cartlist.php","qty=",function(t){var a=JSON.parse(t);console.log(a),i(a.list)})})}else{s="../src/api/list2_1.php",e="one="+(document.getElementById("text2").value=n)+"&id="+a;ajax("post",s,e,function(t){JSON.parse(t);ajax("get","../src/api/cartlist.php","qty=",function(t){var a=JSON.parse(t);console.log(a),i(a.list)})})}}else if("reduce reSty"==t.target.className){var n;if(1<(n=document.getElementById("text2").value)&&1!=n){n--;s="../src/api/list2_1.php",e="one="+(document.getElementById("text2").value=n)+"&id="+a;ajax("post",s,e,function(t){JSON.parse(t);ajax("get","../src/api/cartlist.php","qty=",function(t){var a=JSON.parse(t);console.log(a),i(a.list)})})}else{s="../src/api/list2_1.php",e="one="+(document.getElementById("text2").value=n)+"&id="+a;console.log(n),ajax("post",s,e,function(t){JSON.parse(t);ajax("get","../src/api/cartlist.php","qty=",function(t){var a=JSON.parse(t);console.log(a),i(a.list)})})}}s="../src/api/list2_1.php",e="one="+n+"&id="+a;ajax("post",s,e,function(t){JSON.parse(t);ajax("get","../src/api/cartlist.php","qty=",function(t){var a=JSON.parse(t);console.log(a),i(a.list)})})}};