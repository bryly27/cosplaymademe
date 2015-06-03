// make the factory call it FriendFactory and pass it a callback function telling us that we are going to use $http functionality
cosplay.factory('news_factory', function($http) {
	var factory= {};


	// factory.get_user = function(callback){
	// 	$http.post('/users/get_user').success(function(results){
	// 		callback(results)
	// 	});
	// };
	factory.get_cons = function(callback){
		$http.get('/news/get_cons').success(function(results){
			callback(results);
		});
	};

	factory.add_admin = function(data, callback){
		$http.post('/admin/add_admin', data).success(function(results){
			callback(results);
		})
	}

	factory.get_users = function(callback){
		console.log('here');
		$http.get('/admin/get_users').success(function(results){
			callback(results);
		})
	}


	return factory;
})

