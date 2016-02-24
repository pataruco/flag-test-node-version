var express = require('express');
var app = express();
var routes = require("./config/routes");
// var server = require('http').createServer(app);
var morgan = require('morgan');
var request = require('request');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
// var db = require('models/models');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

app.set('views', './views');
app.set('view engine', 'ejs');


app.use('/', routes);
// app.use('/principles', principlesRouter)

//Server
app.listen(port);
console.log('Flag test is working on port  ' + port);
// Server
// server.listen(port, function () {
//   console.log('Flag test is working on port ' + port);
// });

// app.get('/pins', function(req, res){
//    db.Pin.find({}, function(err, pins){
//     res.send(pins);
//   })
// })

// app.post('/pins', function(req, res){
//   db.Pin.create(req.body, function(err, comment){
//     res.send(201, comment); //success, object created
//   })
// })

// app.delete("/pins/:id", function (req, res){
//   var pinId = req.params.id;
//   db.Pin.findByIdAndRemove({
//     _id: pinId
//   }, function(err, comment){
//     res.send(204); //Success, no content
//   })
// });
