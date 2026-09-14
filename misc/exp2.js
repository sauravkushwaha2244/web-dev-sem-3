const fs= require('node:fs');
// fs.writeFileSync('test.txt','learning the fs module in node js');
// console.log('file created successfully');
// const r=fs.readFileSync('test.txt','utf-8');
// console.log(r);
// fs.appendFileSync('test.txt','\nappending the data in the file');
// console.log('data appended successfully');
// fs.unlinkSync('test.txt');
// console.log('file deleted successfully');
// fs.mkdirSync('test');
// console.log('directory created successfully');
fs.rmdirSync('test');
console.log('directory deleted successfully');
if(fs.existsSync('test.txt')){
    console.log('file exists');
}else{
    console.log('file doesnot exists');
}
