// import * as fs from 'node:fs/promises';

// import * as fs from 'node:fs';
const fs =require('fs');
/*
fs.readFileSync('file.txt','utf8',(err,data)=>{
console.log(err,data)
})

console.log("Finished reading file")
*/
// fs.writeFile('file.txt',"This is data statement added by writeFile",()=>{
//     console.log("written to the file successfully")
// })
// console.log("do this work 1st")
 const b=fs.writeFileSync('file1.txt',"this data added by writefilesync")
console.log(b)
console.log("an operation")
