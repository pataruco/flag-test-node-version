var Principle = require('../models/principle'),
    db = require('../models/principle');

// GET (index)
function getAll(request, response) {
  db.Principle.find(function(error, principles) {
    if(error) response.json({message: 'Could not find any principle'});

    // response.json({message: principles});
    response.render('principles/index', {principles: principles});
  });
}

//Create (new)
function createPrinciple(request, response) {
  db.Principle.create(request.body, function(error, principle){
    principle.order = request.body.principle.order;
    principle.title = request.body.principle.title;
    principle.subTitle = request.body.principle.subTitle;
    principle.explanation = request.body.principle.explanation;
    principle.save();
    response.status(201).redirect('/principles'); //success, object created
  })
}

// GET
function getPrinciple(request, response) {
  var id = request.params.id;

  db.Principle.findById({_id: id}, function(error, principle) {
    if(error) response.json({message: 'Could not find principle b/c:' + error});

    response.json({principle: principle});
  });
}

function updatePrinciple(request, response) {
  var id = request.params.id;

  Principle.findById({_id: id}, function(error, principle) {
    if(error) response.json({message: 'Could not find principle b/c:' + error});

    if(request.body.order) principle.order = request.body.order;
    if(request.body.title) principle.title = request.body.title;
    if(request.body.subTitle) principle.subTitle = request.body.subTitle;
    if(request.body.explanation) principle.explanation = request.body.explanation;

    principle.save(function(error) {
      if(error) response.json({messsage: 'Could not update principle b/c:' + error});

      response.json({message: 'Principle successfully updated'});
    });
  });
}

function removePrinciple(request, response) {
  var id = request.params.id;

  db.Principle.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete principle b/c:' + error});

    response.json({message: 'Principle successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createPrinciple: createPrinciple,
  getPrinciple: getPrinciple,
  updatePrinciple: updatePrinciple,
  removePrinciple: removePrinciple
}
