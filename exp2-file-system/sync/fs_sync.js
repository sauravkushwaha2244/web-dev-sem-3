const fs = require('fs');

// fs.writeFileSync('example.txt','This is Experiment 2 in FSD Workshop','utf8');

// console.log('created file run successfully');

// const r = fs.readFileSync('example.txt','utf8');
// console.log('File Content is :',r);

// fs.appendFileSync('example.txt','\n This is new Line');

// fs.writeFileSync('student.txt','This is Experiment 2 in FSD Workshop','utf8');
// console.log('created file run successfully');
// fs.unlinkSync('student.txt');
// console.log("Deleted");

fs.mkdirSync('New');
console.log('Created');
if(fs.existsSync('New')){
    console.log('file exists');
}
fs.rmdirSync('New');
console.log('Deleted');

