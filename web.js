var gzippo = require('gzippo');
var express = require('express');
var app = express();

// app.use(express.logger('dev'));
// app.use(gzippo.staticGzip("" + __dirname + "/www"));
app.use(express.static("" + __dirname + "/www"));
app.listen(process.env.PORT || 5000);
