const express = require('express')
const fs = require('fs')
const app = express()

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.post('/upload', (req, res) => {
  res.end(JSON.stringify({
    msg: '成功'
  }))
})

app.listen(8888)