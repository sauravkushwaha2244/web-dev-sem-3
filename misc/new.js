const fs= require('node:fs');
fs.writeFileSync('test.txt','learning the fs module in node js');
console.log('file created successfully');
const r=fs.readFileSync('tests.txt','utf-8');
console.log(r);
fs.appendFileSync('tests.txt','\nappending the data in the file');
console.log('data appended successfully');
fs.unlinkSync('tests.txt');
console.log('file deleted successfully');
