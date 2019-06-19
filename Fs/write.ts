const fs = require('fs')

// fs.writeFile('output.txt', 'lalal', {
//   encoding: 'utf-8',
//   mode: '0666',
//   flag: 'w'
// }, err => {
//   console.log(err);
// })

// const data = fs.readFileSync('output.txt', {
//   encoding: 'utf-8',
//   flag: 'r'
// })

// console.log(data);

// fs.readFile('output.txt', {
//   encoding: 'utf-8',
//   flag: 'r'
// }, (err, buf) => {
//   console.log(err);
//   console.log(buf);
// })

fs.unlink('output.txt')