var REPL = require('repl');
var db = require('./models');

var repl = REPL.start("Flags >");

repl.context.db = db;

db.Flag.collection.remove();


db.Flag.create({
  name: 'Andorra',
  isoCode: 'AD',
  GoodFlag: true,
  url: 'http://pataruco.s3.amazonaws.com/good-flag/flags/ad.png'
  },

  function(err, flag){
    console.log('*******FLAG CREATED******');
    console.log(flag.name);
    console.log(flag);
    flag.save();
    process.exit();
  }
);
