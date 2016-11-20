var express = require('express')
var router = express.Router()

const styles = require('../styles').styles

router.get('/', function(req, res) {
  const q = req.query.q
  requiredStyles = q 
    ? styles.filter(style => {
      const {description, name, shortName} = style   
      const keys = [description, name, shortName]
      return keys.some(key => key ? key.match(q) : false)
    })
    : styles

  res.json({styles: requiredStyles}) 
});

module.exports = router;

