'use strict';

window.onload = function () {
    //缓慢回到顶部

    //滚动滑轮到300px才出现
    window.onscroll = function () {
        var box = document.getElementById('menu');
        var box3 = document.getElementsByClassName('float_bar');
        var box4 = document.getElementsByClassName('float_active');
        var box1 = getid('right_nav');
        var scrollTop = window.scrollY;
        if (scrollTop >= 600) {
            box.style.transform = 'scale(1)';
            box1.style.transform = 'scale(1)';
            // css(box3,'transform', 'scale(1)');
            // css(box,'transform', 'scale(1)');
        } else {
            box.style.transform = 'scale(0)';
            box1.style.transform = 'scale(0)';
            // css(box3,'transform', 'scale(0)');
            // css(box4,'transform', 'scale(0)');
        }
    };
};