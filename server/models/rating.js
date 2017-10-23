var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"username":String,
    "rateTime":String,
    "deliveryTime":String,
    "score":Number,
    "rateType":String,
    "text":String,
    "avator":String,
    "recommend":[]
})

module.exports = mongoose.model('rating',productSchema,'ratings');