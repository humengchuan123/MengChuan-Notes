/**
 * 防抖函数
 * @param func 想要防抖的函数
 * @param delay 防抖延迟的时间
 */

function debounce(func,delay) {

    let timer;

    return function () {
        let _this = this;
        let _arg = arguments;

        clearTimeout(timer); //重置定时器
        timer = setTimeout(function() {
            func.apply(_this,_arg);
        },delay)
    }
}

// 调用方式

debounceFunc = debounce(func,300);
// tips: 使用防抖debounceFunc()就代替了func