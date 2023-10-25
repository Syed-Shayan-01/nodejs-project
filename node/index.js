const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const dirPath = path.join(process.cwd(), "crud");
const filePath = `${dirPath}/data.txt`;

 fs.writeFileSync(filePath, "This is the name of file is app.txt");   //add file in crud directory


// fs.open(filePath, 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

fs.rename(filePath, `${dirPath}/new.txt`, () => { 
    console.log("\nFile Renamed!\n"); 
  });

app.listen(3000)