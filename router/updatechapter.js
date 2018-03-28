const express = require('express');
const api = require('../api/api-updatechapter')
const resultCode = require('../api/result-code');
const router = express.Router();

router.get('/', function(req, res) {
    let bookid = req.query.id
    let bookName = req.query.name
    if (!bookid) {
        let result = resultCode.createResult(resultCode.faild, e.message)
        res.send(result)
        return
    }
    var data = api.getUpdateChapters(bookid, bookName).then(result => {
        res.send(result)
    })
})

module.exports = router;