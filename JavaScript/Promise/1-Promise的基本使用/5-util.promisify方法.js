const fs = require('fs')
const { resolve } = require('path')
/*
 封装一个函数 mineReadFile 读取文件内容
 parmas path 文件路径
 return promise 对象
*/

function mineReadFile(path) {
    return new Promise((resolve,reject) => {
        require('fs').readFile(path, (err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}


mineReadFile('./resource/content.txt').then(value => {
    console.log(value)
},reason => {
    console.log(reason)
})