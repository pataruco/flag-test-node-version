// var http = require ('http');         // For serving a basic web page.
var mongoose = require ("mongoose");

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost:27017/flags';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var flagSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  isoCode: {
    type: String,
    default: ""
  },
  GoodFlag: {
    type: Boolean,
    default: true
  },
  url: {
    type: String,
    default: true
  }
});

var principleSchema = new mongoose.Schema({
  order: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ""
  },
  subTitle: {
    type: String,
    default: ""
  },
  explanation: {
    type: String,
    default: ""
  }
});

var Flag = mongoose.model("Flag", flagSchema);
var Principle = mongoose.model("Principle", principleSchema);
module.exports.Flag = Flag;
module.exports.Principle = Principle;
