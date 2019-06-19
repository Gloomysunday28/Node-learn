const http = require('http')
const router = require('./router')
const util = require('util')
const url = require('url')
const qs = require('qs')

http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  // let post = ''
  // req.on('data', chunk => { // post 获取body的参数
  //   post += chunk
  // })

  // req.on('end', _ => {
  //   res.end(util.inspect(qs.parse(post)))
  //   // res.end(1)
  // })
  res.end('返回成功')
  // if (pathname) {
  //   router(pathname, req, res)
  // }
}).listen(8888)

process.on('exit', code => {
  console.log(code);
})
