var mongoose = require('mongoose');

//
var fruitSchema = mongoose.Schema({
	name:{
		type:String,
		required : true
	},
	price:{
		type:String,
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
};
module.exports.addFruit = function(fruit,callback){
	fruits.create(fruit,callback);
};
