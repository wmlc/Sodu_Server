var express = require('express');
var shelf = require('../api/api-shelf')


var router = express.Router();
router.post('/check', function(req, res) {
    var data = shelf.checkUpdate(req.body.list).then(result => {
        res.send(result)
    })
})

module.exports = router;