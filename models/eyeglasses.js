const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eyeglassesSchema  = new Schema({
  name : String,
  price : Number,
  length : String,
  width : String,
  height : String,
  colors : Array,
  rating : Number,
  reviews : Array,
  power: String
},{timestamps : true})


const Eyeglasses = mongoose.model('Eyeglasse',eyeglassesSchema)

module.exports = Eyeglasses;
