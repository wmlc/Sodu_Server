var express = require('express');
var content = require('../api/api-content')


var router = express.Router();
router.post('/', function(req, res) {
    console.log(req.body);
    content.getContent(req.body).then(result => {
        res.send(result)
    })
})

module.exports = router;