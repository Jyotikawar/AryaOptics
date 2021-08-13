const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sunglassesSchema  = new Schema({
  name : String,
  price : Number,
  length : String,
  width : String,
  height : String,
  imgpath : String,
  colors : Array,
  rating : Number,
  reviews : Array,
},{timestamps : true})

const Sunglasses = mongoose.model('sunglasse', sunglassesSchema)

module.exports = Sunglasses;
