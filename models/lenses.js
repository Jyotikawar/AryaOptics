const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lensesSchema  = new Schema({
  name : String,
  price : Number,
  color : String,
  diameter : String,
  basecurve : String,
  rating : Number,
  reviews : Array,
  power: String
},{timestamps : true})


const Lenses = mongoose.model('lense',lensesSchema)

module.exports = Lenses;
