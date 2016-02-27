var Principle = require('../models/principle'),
    db = require('../models/principle');

// GET
function getAll(request, response) {
  db.Principle.find(function(error, principles) {
    if(error) response.json({message: 'Could not find any principle'});

    // response.json({message: principles});
    response.render('principles/index', {principles: principles});
  });
}


function createPrinciple(request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var principle = db.Principle.create();

  principle.order = request.body.order;
  principle.title = request.body.title;
  principle.subTitle = request.body.subTitle;
  principle.explanation = request.body.explanation;

  console.log('Principle object');
  console.log(principle)

  // principle.save(function(error) {
  //   if(error) response.json({messsage: 'Could not create principle b/c:' + error});
  //
  //   response.redirect('/principles');
  // });
}

// GET
function getPrinciple(request, response) {
  var id = request.params.id;

  Principle.findById({_id: id}, function(error, principle) {
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

  Principle.remove({_id: id}, function(error) {
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
