var mysql = require('mysql');
connection = require('express-myconnection');
var crypto = require('crypto');
var fs = require('fs');
var ig = require('instagram-node').instagram();
ig.use({ access_token: '2058512314.c1a259a.39f555661f114d2993bdb09beb057a60' });
ig.use({ client_id: 'c1a259af42144c39b49b09908b3c3666',
         client_secret: '2e2c30d9e3344923a372af3352ded75e' });

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'cosplaymademe',
	port: 3306,
});

// var Bucket = mongoose.model('bucket');
module.exports = (function() {
	// return because we want to put an object into the variable for whatever requires this
	return {

		// login: function(req, res){
		// 	var query = connection.query("INSERT INTO users (name, password) VALUES (?, ?)", [req.body.name, req.body.password], function(err, results){
		// 		console.log('controller', results);
		// 	})
		// },

		get_user: function(req, res){
			ig.user('2058512314', function(err, result, remaining, limit) {
				if(err){
					console.log('error', err);
				}else{
					res.json(result);
				}
			});
		},

		get_cosplay: function(req, res){
			 ig.user_media_recent('2058512314', function(err, medias, pagination, remaining, limit) {
			 	if(err){
			 		console.log('error', err);
			 	}else{
			 		res.json(medias);
			 	}
			 });

		},

		get_cosplayers: function(req, res){
			ig.user_follows('2058512314', function(err, users, pagination, remaining, limit) {
				if(err){
					console.log('error', err);
				}else{
					res.json(users);
				}
			});
		},

		get_cons: function(req, res){
			var query = connection.query("SELECT * FROM cons", function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				}
			})
		},

		add_admin: function(req, res){
			var query = connection.query("INSERT INTO users (username, password) VALUES (?,?)", [req.body.username, req.body.password], function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(req.body);
				}
			})
		},

		get_users: function(req, res){
			var query = connection.query("SELECT * FROM users", function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				}
			})
		}





		// add_user: function(req, res) {

		// 	var password = crypto.createHmac('sha1', 'codingdojo').update(req.body.password).digest('hex');
		//  	console.log(password);
		//  	var confirm_password = crypto.createHmac('sha1', 'codingdojo').update(req.body.confirm_password).digest('hex');
		//  	console.log(confirm_password);

		//  	req.body.password = password;

		// 	if(req.body.email !== req.body.confirm_email){
		// 		res.json({result: 'Emails need to match', display: true});
		// 		console.log('emails do not match');
		// 	}else if(password !== confirm_password){
		// 		res.json({result: 'Password needs to match', display: true});
		// 		console.log('password do not match');
		// 	}else{
		// 		console.log('ladjkfajsdf', req.body);
		// 		var query = connection.query(
		// 			"Insert INTO users(first_name, last_name, email, password) VALUES (?,?,?,?)",[req.body.first_name, req.body.last_name, req.body.email, req.body.password] , function(err, result, fields){
		// 				if(err){
		// 					res.json({result: 'Please choose a unique email', display: true});
		// 				}else{
		// 					res.json({result: 'Go log in now', display: true});
		// 				}
		// 				console.log('result', result);
		// 				console.log('fields', fields);
		// 				// if(err) throw err;
		// 				console.log('result', result);
		// 		});
				
		// 		console.log('ruslkt');
		// 	}	
		// },

		// add_photo: function(req, res){
		// 	console.log('djkflsd', req.files);
		// 	console.log(req.files.pic.path);
		// 	console.log(req.body);
		// }

		// get_users: function(req, res){
		// 	// connection.connect();
		// 	var query = connection.query(
		// 		"Insert INTO users(first_name, last_name, email, password) Values (?,?,?,?)",(req.body.first_name, req.body.last_name, req.body.email, req.body.password), function(err, result, fields){
		// 			if(err) throw err;
		// 			console.log('result', result);
		// 	});
		// 	// connection.end()
		// }

		// get_users: function(req, res){
		// 	User.find({}, function(err, results){
		// 		if(err){
		// 			consol.log(err);
		// 		}else{
		// 			res.send(JSON.stringify(results));
		// 		}
		// 	})
		// },

		// add_bucket: function(req, res){
		// 	var new_bucket = new Bucket(req.body);
		// 	new_bucket.save(function(err){
		// 		if(err) {
		// 			console.log("err");
		// 		} else {
		// 			res.json({result: "success!"});
		// 		}
		// 	})
		// },

		// get_buckets: function(req, res){
		// 	Bucket.find({created_by: req.params.id}, function(err, results){
		// 		if(err){
		// 			consol.log(err);
		// 		}else{
		// 			res.send(JSON.stringify(results));
		// 		}
		// 	})
		// },

		// get_info: function(req, res){
		// 	console.log(req.params.id);
		// 	Bucket.find({$or: [{created_by: req.params.id}, {tagged_user: req.params.id}]}, function(err, results){
		// 		if(err){
		// 			consol.log(err);
		// 		}else{
		// 			res.send(JSON.stringify(results));
		// 		}
		// 	})
		// },

		// update_complete: function(req, res){
		// 	console.log('server', req.body);
		// 	Bucket.update({_id: req.body._id}, {$set:{complete: req.body.complete}}, function(err, results){
		// 		if(err) {
		// 			console.log("err");
		// 		} else {
		// 			res.json({result: "success!"});
		// 		}
		// 	})
		// }
		

	}
})();


