/**
 * Created by lawrence on 2017/1/17.
 */

'use strict';

import React, { Component } from 'react';

const HOST = 'https://www.baidu.com';

export default class RequestUtil extends Component {
    /**
     * post 请求
     * @param url 请求地址
     * @param data 参数
     * @param callBack 回调函数
     */
    static postFrom(url, data, callBack) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-wwww-from-urlencoded'
            },
            body: 'data=' + data + ''
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
              callBack(JSON.parse(responseText));
            }).done();
    }

    /**
     * post 请求
     * @param url 请求地址
     * @param data 参数
     * @param callBack 数据回调
     */
    static postJson(url, data, callBack) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
              callBack(JSON.parse(responseText));
            }).done();
    }

    /**
     * get 请求
     * @param url 请求地址
     * @param params 请求参数
     * @param callBack 数据回调
     */
    static get(url, params, callBack) {
        var fetchOptions = {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: params,
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
              callBack(responseText);
            }).done();
    }
}

