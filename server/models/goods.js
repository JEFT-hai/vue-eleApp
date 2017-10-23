var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"name":String,
    "type":String,
    "foods":[
    {
          "name":String,
          "price":String,
          "oldPrice":String,
          "description":String,
          "sellCount":String,
          "rating":String,
          "info":String,
          "ratings":[],
          "icon":String,
          "image":String
    }
    ]
})

module.exports = mongoose.model('good',productSchema,'goods');