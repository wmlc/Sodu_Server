var express = require('express');
var rank = require('../api/api-rank')
import axios from 'axios';
import url from '../api/url';

var router = express.Router();
router.get('/', function(req, res) {
    let index = req.query.page
    index = index ? parseInt(index) : 0
    var data = rank.getRank(index).then(result => {
        res.send(result)
    })
})

module.exports = router;