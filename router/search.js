var express = require('express');
var api = require('../api/api-search')
const resultCode = require('../api/result-code');

import axios from 'axios';

var router = express.Router();
router.get('/', function(req, res) {
    let para = req.query.para
    if (!para) {
        let result = resultCode.createResult(resultCode.success, [])
        res.send(result)
        return
    }
    var data = api.getSearchResult(para).then(result => {
        res.send(result)
    })
})

module.exports = router;