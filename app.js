var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
fruits = require('./models/fruits')
// Connect to Mongoose
mongoose.connect('mongodb://localhost/mani');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('1. /api/fruits 2. /api/fruitbyprice 3. /api/fruitbyname 4. /api/insertfruit 5. /api/updatedfruit 6. /api/deletefruit');
});

app.get('/api/fruits',function(req,res){
	
	fruits.getFruits(function(err,fruits){
		if (err) {
			throw err;
		}
		res.json(fruits);
	});

});

app.post('/api/addfruit',function(req,res){

	var fruit = req.body;

	fruits.addFruit(fruit, function(err,fruit){
		if (err) {
			throw err;
		}
		res.json(fruit);
	});

});



app.listen(3000);
console.log('Running on port 3000...');
