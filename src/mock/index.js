/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 14:52:35
 * @LastEditTime: 2019-09-25 15:48:30
 * @LastEditors: Please set LastEditors
 */
const Mock = require('mockjs')
module.exports = [
    Mock.mock('http://localhost:3000/api/getName', {
        'list|1-100': [{
            'id|+1': 1, // 序号 属性值自动加 1，初始值为 1
            'businesscode': /\d{1,10}/, // 商户ID
            'proversion|1': ['标准版', '企业版', '试用版'], // 产品版本 随机选取 1 个元素
            'storecode': /\d{1,10}/, // 门店编码
            'storename': '@cname', // 门店名称
            'status|1': ['试用', '使用', '续用'], //状态 随机选取 1 个元素
            'effectdate': '@DATETIME("yyyy-MM-dd HH:mm:ss")' // 有效日期
        }],
        'page': 1,
        'pageSize': 5,
        'totalRecords': 100
    })
]
