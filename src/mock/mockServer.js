/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:49:23
 * @LastEditTime: 2019-09-25 15:55:07
 * @LastEditors: Please set LastEditors
 */
const express = require('express')
const Mock = require('mockjs')

let app = express()
app.use('/api/getName', (req, res) => {
    res.json(Mock.mock({
        'status': 200,
        'dataSource|1-9': [{
            'key|+1': 1,
            'mockTitle|1': ['肆无忌惮'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
})
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen('3000', () => {
    console.log(`监听3000端口`)
})
