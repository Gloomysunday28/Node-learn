const buf = new Buffer(10)

console.log(buf.write('www.google.com', 0, 10, 'utf-8'))
console.log(buf.toString('utf-8'));
console.log(buf.toJSON());