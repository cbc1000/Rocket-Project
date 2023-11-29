const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Counter schema
const CounterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
const Counter = mongoose.model('Counter', CounterSchema);

let rocketSchema = new Schema({

  _id:      { type: Number },
  LaunchId: { type: Number },
  failed:   { type: Boolean },
  topheight:{ type: Number },
  topspeed: { type: Number },
  temperature: { type: Number },
});


// Function to get the next sequence
function getNextSequence(name) {
  var ret = Counter.findOneAndUpdate(
      { _id: name },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
  );
  return ret.seq;
}
// Use the function before saving a new Rocket
let newRocket = new Rocket({
  _id: getNextSequence('rocketid'),
  // other fields...
});
newRocket.save();

const Rocket = mongoose.model('Rocket', RocketSchema);
module.exports = mongoose.model("rocket", rocketSchema);
