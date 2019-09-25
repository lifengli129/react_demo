
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 15:48:40
 * @LastEditTime: 2019-09-18 16:19:26
 * @LastEditors: Please set LastEditors
 */
//格式化
const parseParam = (obj) => {
    return Object.keys(obj)
        .map(k => k + '=' + encodeURIComponent(obj[k]))
        .join('&')
}
const getDefaultHeader = function (token = '15_3D8Nwe041_uke2qNHZvZ') {
    return {
        'Authorization': 'Token token=' + token,
        'Token': token,
        'appname': 'test',
        '_security_token': token,
        'User-Agent': navigator.userAgent,
        'Version': '1.0.0'
    };
};
const Fetch = function () {
    debugger
    var options;
    if (arguments[1]) {
        options = arguments[1]
    } else {
        options = {}
    }
    if(!options.headers){
        options.headers = {}
    }
    var timeout = options.timeout || 60000
    var _args = arguments
    return new Promise((resolve, reject) => {
        var hasResolved = false;
        var hasRejected = false;
        options.headers = Object.assign(options.headers, getDefaultHeader())
        var method = options.method ? options.method.toUpperCase() : 'GET'
        if (method === 'POST') {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if(options.json){
            options.headers['Content-Type'] = 'application/json'
            options.body = JSON.stringify(options.json, undefined, 0)
        }else if(options.data){
            if(method === 'GET'){
                _args[0] = _args[0] + (_args[0].indexOf('?') === -1 ? '?' : '&') + parseParam(options.data);
            }else if(method === 'POST'){
                if(typeof(options.data) == 'object') {
                    var formdata = new FormData();
                    for(var i in options.data) {
                        formdata.append(i, options.data[i]);
                    }
                    options.body = parseParam(options.data);
                } else {
                    options.body = options.data;
                }
            }
        }else{
            options.body = options.data
        }
        _args[1] = options;
        var fetchStatus = 200;
        
        if(timeout) {
            setTimeout(() => {
                if(!hasResolved && !hasRejected) {
                    hasRejected = true;
                    var e = new Error('请求超时，请稍后再试');
                    e.code = 408;
                    reject(e);
                }
            }, timeout);
        }
        fetch(_args[0], options).then((res) => {
            fetchStatus = res.status;
            return res.json();
        }).then(data => {
            if(fetchStatus != 200){
                var e = new Error('系统错误，请稍后重试');
                e.code = fetchStatus;
                throw e; 
            }else{
                if(typeof(data.code) == 'undefined' && typeof(data.success) == 'undefined') {
                    // 兼容一些不标准的返回结构，直接抛出整个data
                    if(!hasResolved && !hasRejected) {
                        hasResolved = true;
                        resolve(data);
                    }
                }else{
                    console.log(data)
                    // 标准结构的处理
                    if(parseInt(data.code) === 10000 || data.success) {
                        if(!hasResolved && !hasRejected) {
                            hasResolved = true;
                            resolve(data);
                        }

                    }else{
                        if((parseInt(data.code) == 10001 || parseInt(data.code) == 10004) ) {
                            //重新登录
                            hasRejected = true;
                            throw new Error('登录超时，请重新登录');
                            
                        } else {
                            data.message = data.msg;
                            throw data;
                        }
                    }
                }
            }
        }).catch( e => {
            if(e instanceof SyntaxError) {
                e.message = '网络错误：解析出错';
            }else{
                if (e.message === "Network request failed") {
                    e.message = "网络信号异常，连接网络失败";
                }
            }
            if(!hasResolved && !hasRejected) {
                hasRejected = true;
                reject(e);
            }
        })

    })
}
export default Fetch
