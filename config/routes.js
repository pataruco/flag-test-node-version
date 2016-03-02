var express = require('express'),
    router  = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'), //used to manipulate POST
    principlesController = require('../controllers/principles'),
    Principle = require('../models/principle'),
    db = require('../models/principle'),
    Flag = require('../models/flag');


// Root
router.get('/', function(request, response) {
  console.log("Root");
  var data = {};
  db = require('../models/principle');
  db.Principle.find(function(error, principles) {
    if(error) response.json({message: 'Could not find any principle'});
    data.principles =  principles;
  });
    db = require('../models/flag');
    db.Flag.find(function(error, flags) {
      if(error) response.json({message: 'Could not find any flag'});
      data.flags =  flags;
      response.render('root', {data: data});
    });
});

router.get('/quiz', function(request, response){
  console.log("Quiz");
  var data = {};
  db = require('../models/flag');
  db.Flag.find(function(error, flags) {
    if(error) response.json({message: 'Could not find any flag'});
    data.flags =  flags;
    response.render('quiz', {data: data});
  });
});

router.get('/flags', function(request, response){
  console.log("Quiz");
  db = require('../models/flag');
  db.Flag.find(function(error, flags) {
    if(error) response.json({message: 'Could not find any flag'});
    response.json(flags);
  });
});



//Admin page
router.get('/admin', function(request, response){
  console.log('Admin');
  response.render('admin');
});



// Principles roots
// router.route('/principles')
//
//   //GET all principles
//   .get(principlesController.getAll)
//
//   //POST a new principle
//   .post(principlesController.createPrinciple);
//
// router.route('/principles/:id')
//
//   // GET return specific principle
//   .get(principlesController.getPrinciple)
//
//   // PATCH update existing principle
//   .patch(principlesController.updatePrinciple)
//
//   // DELETE remove specific principle from DB
//   .delete(principlesController.removePrinciple);

// router.route('/principles/new')
//   .get(principlesController.newPrinciple);
// router.get('/', function(req, res) {
//   console.log("Root");
//   res.render("index");
// });
//
// // Principles CRUD
// // Index
// router.get('/principles', function(req, res) {
//   console.log("index");
//   db.Principle.find({}, function(err, principles){
//     res.send(principles);
//     // res.render("principles/index")
//   })
// });
//
// // New
// router.get('/principles/new', function(req, res) {
//   console.log("new");
//   res.render("principles/new");
// });
//
// // Show
// router.get('/principles/:id', function(req, res) {
//   console.log("show");
//   res.send("SHOW");
// });
//
// // Create
// router.post('/principles', function(req, res) {
//   console.log("create");
//   console.log(req.body)
//   // res.send("CREATE");
// });
//
// // Edit
// router.get('/principles/:id/edit', function(req, res) {
//   console.log("edit");
//   res.send("EDIT");
// });
//
// // Update
// router.put('/principles/:id', function(req, res) {
//   console.log("update");
//   res.send("UPDATE");
// });
//
// // Delete
// router.delete('/posts/:id', function(req, res) {
//   console.log("delete");
//   res.send("DELETE");
// });

// Making available for all
module.exports = router;
