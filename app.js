var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var beers = require('./routes/beers')
var styles = require('./routes/styles')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/beers', beers);
app.use('/api/v1/styles', styles);

module.exports = app;
