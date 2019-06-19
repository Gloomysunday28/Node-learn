const http = require('http')

const req = http.request({
  host: 'localhost',
  port: '8888',
  path: '/'
}, res => {
  let msg = ''
  res.on('data', chunk => {
    msg += chunk
  })

  res.on('end', _ => {
    console.log(msg);
  })
})

req.end()