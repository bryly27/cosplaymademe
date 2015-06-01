// we want to create a file that has the schema for our friends

var mongoose = require('mongoose');

// create a schema for our friends
var UsersSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
});



// create the model using that schema
// console.log("just created the model")
mongoose.model('user', UsersSchema)
// mongoose.model('bucket', BucketsSchema)