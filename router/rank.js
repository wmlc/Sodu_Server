var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('pageIndex = 0');
});

router.get('/:pageIndex', function(req, res) {
    res.send('pageIndex != 0');
});

module.exports = router;