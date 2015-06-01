// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
cosplay.controller('news_controller', function($scope, news_factory) {


  news_factory.get_cons(function(results){
    $scope.cons = results;
  })

 


})

