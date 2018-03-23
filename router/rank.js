var express = require('express');
var router = express.Router();

function getNum(fuc) {
    fuc
}


router.get('/', function(req, res) {
    getNum(() => {
        res.send('pageIndex = 0');
    })

});

router.get('/:pageIndex', function(req, res) {
    res.send('pageIndex != 0');
});

module.exports = router;