const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
  const readFile = fs.createReadStream('./Stream/index.html')

  readFile.pipe(res)
}).listen(8080)