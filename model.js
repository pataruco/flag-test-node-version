var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/flagdb");

// var CommentSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     default: ''
//   }
// });

var flagSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  isoCode: {
    type: String,
    default: ""
  },
  GoodFlag {
    type: Boolean,
    default: true
  }
});

var Flag = mongoose.model("Flag", flagSchema);
// var Comment = mongoose.model("Comment", CommentSchema);
module.exports.Flag = Flag;
// module.exports.Comment = Comment;
