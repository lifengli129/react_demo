/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 15:48:40
 * @LastEditTime: 2019-09-16 15:48:40
 * @LastEditors: your name
 */
//格式化
const parseParam = (obj) => {
    return Object.keys(obj)
    .map(k => k + '=' + encodeURIComponent(obj[k]) )
    .join('&')
}