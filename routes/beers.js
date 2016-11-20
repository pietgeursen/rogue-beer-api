var express = require('express')
var router = express.Router()
var pull = require('pull-stream')

var beers = require('../scrape-beers')
/* GET users listing. */
router.get('/', function(req, res) {
  pull(
    beers(),
    pull.drain(beers => res.json({beers})) 
  )
});

module.exports = router;
