/**
 * The main JS file.
 */

var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

// Register ejs as .html. If we did not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);


// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

// exports.index = function(req, res){
//   res.render('index');
// };

app.get('/', function(request, response) {
    //response.send(fs.readFileSync('dist/index.html', 'utf-8'));
    response.render('index');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});