const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const buf = new Buffer(20)
let data = ''
const readStream = fs.createReadStream(path.resolve(__filename, '../input.txt'))
const writeStream = fs.createWriteStream(path.resolve(__filename, '../out.txt'))

readStream.on('data', (chunk) => {
  console.log(chunk);
  data += chunk
})

readStream.on('end', (chunk) => {
  buf.write(data, 0, buf.length, 'utf-8')
  console.log(buf.toString('utf-8', 0, buf.length))
})

readStream.on('error', (error) => {
  console.log(error);
})

writeStream.on('error', (error) => {
  console.log(error);
})

// 将readSteam输入到writeSteam里, 管道流
// readStream.pipe(writeStream)

// 链式流
console.log(zlib.createGunzip);
// fs.createReadStream(path.resolve(__filename, '../input.txt')).pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
fs.createReadStream(path.resolve(__dirname, '../input.txt.gz')).pipe(zlib.createGunzip()).pipe(writeStream)