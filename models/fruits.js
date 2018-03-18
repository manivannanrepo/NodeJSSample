var mongoose = require('mongoose');

//
var fruitSchema = mongoose.Schema({
	name:{
		type:String,
		required : true
	},
	price:{
		type:Number,
		required : true
	},
	create_date:{
		type:Date,
		default: Date.now	
	}
});

var fruits = module.exports = mongoose.model("fruits",fruitSchema);

module.exports.getFruits = function(callback,limit){
	fruits.find(callback).limit(limit);
}