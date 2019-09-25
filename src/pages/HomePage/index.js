/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 15:08:21
 * @LastEditTime: 2019-09-25 16:05:12
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
// import axios from 'axios'
import { Fetch } from '../../utils'
const API = {
    Test: `http://localhost:3000/api/getName`
}
export default class TestDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'test'
        }
    }
    componentDidMount() {
        // axios.get(API.Test).then(res => {
        //     console.log(res)
        // })
        Fetch(API.Test, {
            method: 'GET',
            data: {
                id:'1'
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div> textInComponent </div>
        );
    }
}
