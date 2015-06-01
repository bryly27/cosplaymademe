// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
cosplay.controller('users_controller', function($window, $scope, $rootScope, $location, $routeParams, users_factory, localStorageService) {


  users_factory.get_user(function(results){
    $scope.user = results;
  });

  users_factory.get_cosplay(function(results){
    $scope.profiles = results;
  });

  users_factory.get_cosplayers(function(results){
    $scope.cosplayers = results;
  })
   
  // $rootScope.loginUser = $routeParams.id;
  // console.log($rootScope.user);

//   $rootScope.name = localStorageService.get('user');
//   console.log($rootScope.name);

//   if(localStorageService.get('user')){
//   	$location.path('/dashboard');
//   }


// 	function update_users(){
// 		users_factory.update_users(function(output, user){
// 			$scope.users = output;
// 		});
// 	};

// 	$scope.add_bucket = function(data){
// 		data.date = new Date();
// 		data.created_by = $routeParams.id;
// 		data.complete = false;
// 		users_factory.add_bucket(data, function(){
// 			update_buckets($routeParams.id);
// 			$scope.new_bucket = {};
// 		});
// 	};

// 	function update_buckets(data){
// 		users_factory.update_buckets(data, function(output){
// 			$scope.buckets = output;
// 			// console.log(output);
// 		});
// 	};

// 	$scope.logout = function(){
// 		localStorageService.remove('user');
// 	};

// });



})

