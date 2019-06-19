const fs = require('fs')

fs.open('./Buffer/input.txt', 'r', '0666', (err, fd) => { // 是否可以打开文件
  console.log(err);
  console.log(fd);
  console.log('文件打开成功');
})

fs.stat('./Buffer/input.txt', (err, stats) => { // 记录文件是哪种类型
  console.log(err);
  console.log(stats.isBlockDevice());
})