// var http = require ('http');         // For serving a basic web page.
var mongoose = require ("mongoose");

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/flags';


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

var Flag = mongoose.model("Flag", flagSchema);
// var Comment = mongoose.model("Comment", CommentSchema);
module.exports.Flag = Flag;
// module.exports.Comment = Comment;
