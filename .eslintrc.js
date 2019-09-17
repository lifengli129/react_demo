/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 16:08:13
 * @LastEditTime: 2019-09-17 16:08:13
 * @LastEditors: your name
 */
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": [
            "error",
            "single"        // 改成字符串必须由单引号括起来而不是双引号，'string'不报错，"string"报错
        ],
    }
};