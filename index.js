const express = require('express')
const app = express()
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    if (host == '::') {
        host = 'localhost:'
    }
    console.log("http://", host, port)
})
module.exports = app
