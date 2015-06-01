// Where you create the angular app and sp?ecify its options
var cosplay = angular.module('cosplay', ['ngRoute', 'LocalStorageModule']);
		cosplay.config(['$httpProvider', function($httpProvider){
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}])
cosplay.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
		})
		.when('/news',{
			templateUrl: '../partials/news.html',
		})
		.when('/blog',{
			templateUrl: 'partials/blog.html',
		})
		.when('/cosplayers',{
			templateUrl: 'partials/cosplayers.html',
		})
		.when('/admin_login',{
			templateUrl: 'partials/admin_login.html',
		})
		.otherwise({
			redirectTo: '/'
		})
})
