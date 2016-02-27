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
module.exports.Flag = Flag;
