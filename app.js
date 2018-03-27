const express = require('express');
const app = express();
const rank = require('./router/rank')
const update = require('./router/update')
const axios = require('axios')
const bodyParser = require('body-parser');

axios.defaults.headers.common["User-Agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36"
axios.defaults.timeout = 15000;
app.use('/rank', rank)
app.use('/update', update)
app.use(bodyParser.json({ limit: '1mb' })); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

app.listen(40002, '127.0.0.1', function() {
    console.log('server is run');
})