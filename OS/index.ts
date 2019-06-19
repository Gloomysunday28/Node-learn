const os = require('os')

console.log(os.arch()); // 几位操作系统
console.log(os.type()); // 操作系统名称
console.log(os.hostname());
console.log(os.release());
console.log(os.uptime());
console.log(os.networkInterfaces());
console.log(os.cpus()); // cpu每个核的信息
console.log(os.platform());