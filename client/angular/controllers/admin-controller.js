cosplay.controller('admin_controller', function($scope, news_factory) {


 $scope.add_admin = function(data){
 	news_factory.add_admin(data, function(results){
 		console.log(results);
 	})
 }


 news_factory.get_users(function(results){
 	console.log(results);
 })


})

