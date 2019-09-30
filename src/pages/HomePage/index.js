/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 15:08:21
 * @LastEditTime: 2019-09-29 14:31:40
 * @LastEditors: Please set LastEditors
 */
import React from 'react' 
import { Fetch } from '../../utils'
const API = {
    Test: `/users`
}
export default class TestDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'test'
        }
    }
    componentDidMount() {
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
