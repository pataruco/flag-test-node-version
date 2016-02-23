var express = require('express');
var app = express();
var server = require('http').createServer(app);
var morgan = require('morgan');
var request = require('request');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var i;
var tag;

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

server.listen(port, function () {
  console.log('Flag test is working in port ' + port);
});

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
