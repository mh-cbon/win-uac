require('../index.js').enable(function (err) {
  console.log(arguments)
  err && console.log("error %s", err)
})
