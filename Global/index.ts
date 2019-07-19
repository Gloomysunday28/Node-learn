console.log(__filename);
// process.on('beforeExit', code => {
//   setTimeout(() => {
//     console.log(111);
//   }, 0)
//   console.log(code);
// })
console.log(process.argv);
process.on('exit', code => {
  setTimeout(() => {
    console.log(111);
  }, 0)
  console.log(code);
  console.log(process.pid)
  console.log(process.version)
  console.log(process.versions)
  console.log(process.platform)
})

process.on('uncaughtException', function(err) {
  console.log(err);
})