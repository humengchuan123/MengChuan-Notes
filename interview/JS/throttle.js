/**
 * 节流函数
 * @param func 想要节流的函数
 * @param th 节流延迟的时间
 */

function throttle(func,th) {
    let timer;
    let last; // 上次执行时间，计算两次实践触发的时间差

    return function() {
        let now = new Date().getTime();
        let _this = this;
        let _arg = arguments;

        if(last && (now - last) < th) {
            clearTimeout(timer);
            timer = setTimeout(function() {
                func.apply(_this, _arg);
            },th)
        }else{
            last = now
            func.apply(_this, _arg); 
        }
    }
}

throttleFunc = throttle(func,300);
// tips: 使用防抖throttleFunc()就代替了func