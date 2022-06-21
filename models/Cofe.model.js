const mongoose = require('mongoose');

const cofeSchema = mongoose.Schema({
  name : String,
  price : Number,
  inStock : Boolean,
  isThereCaffeine: Boolean,
  volume : Number,
  description: String
})

const Cofe = mongoose.model('Cofe', cofeSchema);


module.exports = Cofe


