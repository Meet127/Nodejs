const fs = require('fs');

//read file------------------------------------------
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })


// const a = fs.readFileSync('file.txt')
// console.log(a.toString())


//writefile---------------------------------
// fs.writeFile('file2.txt',"This is a Data",()=>{
//     console.log("Written to the file")
// })


b = fs.writeFileSync('file2.txt',"This is a Data2");
console.log(b)
console.log("finish reading file")

