angular.module('app', [
	'ngRoute',
	'app.controllers'
])
	
	//routing configurations
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'views/post.html',
			controller: 'PostController'
		}).when('/post/:id', {
			templateUrl: 'views/singlepost.html',
			controller: 'SinglePostController'
		}).otherwise({
			redirectTo: '/'
		});
	}])

	//filtering because of json data which containst html elements inside it
	.filter('trustHtml',function($sce){
	  return function(html){
	    return $sce.trustAsHtml(html)
	  }
	})