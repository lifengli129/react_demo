/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:08:13
 * @LastEditTime: 2019-09-18 15:25:37
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        'node':true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "it": "readonly",
        "process": "readonly",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-unused-vars':0,
        'no-extra-semi':'error',
        'comma-dangle':["error", "never"],
        'comma-spacing': ["error", { "before": false, "after": true }],
       'eol-last': ["error", "always"],
       'jsx-quotes': ["error", "prefer-single"],
       'no-multiple-empty-lines': "error",
       'no-debugger':0
    }
};