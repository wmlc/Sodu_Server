var express = require('express');
var update = require('../api/api-update')
import axios from 'axios';

var router = express.Router();
router.get('/', function(req, res) {
    var data = update.getLastUpdate().then(result => {
        res.send(result)
    })
})

module.exports = router;