var express = require('express');
    router  = express.Router();
    db = require('../models/models');
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
    principlesController = require('../controllers/principles')

// Root
router.get('/', function(req, res) {
  console.log("Root");
  res.render("root");
});

// Principles roots
router.route('/principles')

  //GET all principles
  .get(principlesController.getAll)

  //POST a new principle
  .post(principlesController.createPrinciple);


router.route('/principles/:id')

  // GET return specific principle
  .get(principlesController.getPrinciple)

  // PATCH update existing principle
  .patch(principlesController.updatePrinciple)

  // DELETE remove specific principle from DB
  .delete(principlesController.removePrinciple);


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



// Making available for all
module.exports = router;
