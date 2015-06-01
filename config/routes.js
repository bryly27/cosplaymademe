// we are requiring a controller file that will do stuff when a route is triggered
var users = require('./../server/controllers/users.js');

module.exports = function(app) {


app.get('/users/get_user', function(req, res){
	users.get_user(req, res);
});

app.get('/users/get_cosplay', function(req, res){
	users.get_cosplay(req, res);
});

app.get('/users/get_cosplayers', function(req, res){
	users.get_cosplayers(req, res);
});

app.get('/news/get_cons', function(req, res){
	users.get_cons(req, res);
})


	// app.post('/users/add_user', function(req, res) {
	// 	users.add_user(req, res);
	// });

	// app.post('/users/add_photo', function(req, res){
	// 	users.add_photo(req, res);
	// });



	// app.get('/users/show', function(req, res){
	// 	users.get_users(req, res);
	// });

	// app.post('/users/add_bucket', function(req, res){
	// 	users.add_bucket(req, res);
	// });

	// app.post('/buckets/show/:id', function(req, res){
	// 	users.get_buckets(req, res);
	// });

	// app.post('/buckets/info/:id', function(req, res){
	// 	users.get_info(req, res);
	// });

	// app.post('/buckets/update_complete', function(req, res){
	// 	users.update_complete(req, res);
	// });

	

	

	


	

}