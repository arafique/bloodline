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

/**
 * This function masquerade the post request and change the method to 'GET'. This way the request 
 * will be handled by the following methos as static content. For more details see the following 
 * link
 * http://stackoverflow.com/questions/12005442/express-static-cannot-response-to-post-requests
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
app.post('/', function(req, res, next){
	req.method = "GET";
	next();
});

/**
 * The contents to be servered from 'dist' directory.
 */
app.use(gzippo.staticGzip("" + __dirname + "/dist"));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});