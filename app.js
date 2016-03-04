var express = require('express'),
    app = express(),
    routes = require("./config/routes"),
    morgan = require('morgan'),
    request = require('request'),
    bodyParser = require('body-parser'),
    mongoose = require ("mongoose"),
    expressLayouts = require('express-ejs-layouts'),
    uristring = process.env.MONGOLAB_URI ||
                process.env.MONGOHQ_URL ||
                'mongodb://localhost:27017/flags',
    port = process.env.PORT || 3000;

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Database connection
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// Server console
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

//Router
app.use('/', routes);

//Server
app.listen(port);
console.log('Flag test is working on port  ' + port);
