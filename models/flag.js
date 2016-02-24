var mongoose = require ("mongoose");

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
