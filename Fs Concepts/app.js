// fs file system concepts in the node js

const express = require('express');
const fs = require('fs');
const path = require('path')
const dirPath = path.join(process.cwd(), "crud");
const filePath = `${dirPath}/new.txt`
// fs.mkdir(dirPath, () => {                         // create folder function

// }); 


// fs.writeFileSync(filePath, 'my file')     //  create file from fs


// fs.rename(filePath, `${dirPath}/new.txt`, () => {
//     console.log("\nFile Renamed\n");
// })


// fs.unlinkSync(filePath);   // delete  file from fs
