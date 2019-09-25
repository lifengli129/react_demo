/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 10:48:15
 * @LastEditTime: 2019-09-18 14:49:55
 * @LastEditors: Please set LastEditors
 */
import Mock from 'mockjs'
const localUrl = 'http://localhost:3000'
Mock.mock(`${localUrl}/api/test`, {
    'name|3': 'fei', //这个定义数据的模板形式下面会介绍
    'age|20-30': 25
})
