const path = require('path')

console.log(path.normalize('Path/index.ts'));
console.log(path.resolve('Path/index.ts'));
console.log(path.join('Path/index.ts'));
console.log(path.basename('Path/index.ts'));
console.log(path.extname('Path/index.ts'));
console.log(path.parse('Path/index.ts'));
console.log(path.format(path.parse('Path/index.ts')));
console.log(path.sep);