var mongoose = require ("mongoose");

uristring = process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost:27017/flags';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
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

var Principle = mongoose.model("Principle", principleSchema);
module.exports.Principle = Principle;
