// 引入fs模块
// const fs = require('fs');

// 2.调用方法读取文件
// fs.readFile('./js知识点/好好学习.md',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });

// 3.使用Promise 封装
// const p = new Promise(function(resolve,reject){
//     fs.readFile("./js知识点/好好学习.md",(err,data)=>{
//             if(err) throw err;
//             console.log(data.toString());
//         });
// });

// p.then(function(value){
//     console.log(value.toString());
// },function(reson){
//     console.log('读取失败')
// })

// 多文件读取
const p = new Promise(function(resolve,reject){
    fs.readFile("./js知识点/好好学习.md",(err,data)=>{
            resolve(data);
        });
});

p.then(value => {
    return new Promise((resolve,reject) =>{
        fs.readFile('',(err,data) =>{
            resolve([value,data]);21
        })
    })
}).then(value => {
    return new Promise((resolve,reject) =>{
        fs.readFile('',(err,data) =>{
            // 压入
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})
