var express = require('express')
var rank = require('../api/api-rank')

var router = express.Router()
router.get('/', function (req, res) {
  let index = req.query.index
  index = index ? parseInt(index) : 1
  rank.getRank(index).then(result => {
    res.send(result)
  })
})

module.exports = router
