var express = require('express');
var app = express();
var rank = require('./router/rank')

app.use('/rank', rank)

app.listen(40002, '127.0.0.1', function() {
    console.log('server isrun');
})