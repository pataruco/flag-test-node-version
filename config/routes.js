var express = require('express'),
    router  = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    Principle = require('../models/principle'),
    db = require('../models/principle'),
    Flag = require('../models/flag');


// Root
router.get('/', function(request, response) {
  console.log("Root");
  db = require('../models/principle');
  db.Principle.find(function(error, principles) {
    if(error) response.json({message: 'Could not find any principle'});
    response.render('root', {principles});
  });
});

// Quiz
router.get('/quiz', function(request, response){
  console.log("Quiz");
  response.render('quiz');
});

// Flags AJAX request
router.get('/flags', function(request, response){
  console.log("Quiz");
  db = require('../models/flag');
  db.Flag.find(function(error, flags) {
    if(error) response.json({message: 'Could not find any flag'});
    response.json(flags);
  });
});

// Watch
router.get('/watch', function(request, response){
  console.log('watch');
  response.render('watch');
});

// About
router.get('/about', function(request, response){
  console.log('Admin');
  response.render('about');
});

// Making available for all
module.exports = router;
