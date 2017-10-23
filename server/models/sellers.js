var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  "id":String,
	"name":String,
  "description":String, 
  "deliveryTime":String,
  "score":Number,
  "serviceScore":Number,
  "foodScore":Number,
  "rankRate":String,
  "minPrice":Number,
  "deliveryPrice":Number,
  "ratingCount":String,
  "sellCount":String,
  "bulletin":String,
  "supports":[],
  "avator":String,
  "pics":[],
  "infos":[]
})

module.exports = mongoose.model('seller',productSchema,'sellers');