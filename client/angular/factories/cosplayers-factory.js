// make the factory call it FriendFactory and pass it a callback function telling us that we are going to use $http functionality
cosplay.factory('cosplayers_factory', function($http) {
	var factory= {};

	factory.get_cosplayers = function(callback){
		$http.post('/users/get_cosplayers').success(function(results){
			callback(results);
		})
	}

	return factory;
})

