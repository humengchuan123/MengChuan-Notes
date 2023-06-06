/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-06-06 12:48:12
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-06-06 13:01:53
 * @FilePath: \projecte:\学习\interview\MengChuan-Notes\tools\intersectionObserver.js
 * @Description: 滚动懒加载
 */
 
/** 视频滚动加载播放 */
// const ob = new IntersectionObserver((ent) => {
//     const entry = ent[0]
//     const vdo = entry.target
//     if (entry.isIntersecting) {
//         vdo.play()
//     } else {
//         vdo.pause()
//     }
// },{
//     threshold: 0.8
// })

// ob.observe(document.querySelector('video'))


/** 图片滚动懒加载 */
const ob = new IntersectionObserver((entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            ob.unobserve(img)
        }
    }
},{
    threshold: 0
})

const imgs = document.querySelectorAll('img[data-src]')
imgs.forEach(e => {
    ob.observe(e)
})