
/*
*1其中的参数320根据自己的实际情况进行修改，这里的320代表设计页面的原始宽度，可以参考psd的标准宽度，这是后字体使用rem也有了标准，psd上的字号如：40点 对应css中的rem的换算方式为40/100=0.4rem。
*/
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
      };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);

/**
* 2 
*/
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.2 + "px";