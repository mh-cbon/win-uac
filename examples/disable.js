require('../index.js').disable(function (err) {
  console.log(arguments)
  err && console.log("error %s", err)
})
