var mongoose = require ("mongoose");

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
