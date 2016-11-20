var express = require('express')
var router = express.Router()
var beers = require('rogue-beer-list')
var pull = require('pull-stream')
/* GET users listing. */
router.get('/', function(req, res) {
  pull(
    beers(),
    pull.drain(beers => res.json({beers})) 
  )
});

module.exports = router;
