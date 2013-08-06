/**
 * The main JS file. This JS file is invokes through ProcFile
 * to run the application.
 */

var app, express, gzippo;
var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));

// app.listen(process.env.PORT || 5000);

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  console.log('__dirname : %s', __dirname);
  next();
});

app.post('/', function(req, res, next){
	req.method = "GET";
	next();
});

app.use(gzippo.staticGzip("" + __dirname + "/dist"));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});