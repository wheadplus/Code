const fs = require('fs')
let p = new Promise((resolve,reject) => {
    fs.readFile('./resource/content.txt',(err,data) => {
        // 失败
        if(err) reject(data)
        // 成功
        resolve(data)
    })
})

p.then(value => {
    console.log(value)
}).catch(reason => {
    console.log(reason)
})