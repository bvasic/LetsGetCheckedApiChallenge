angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('http://localhost:9001/posts').success(function(data){
			$scope.posts = data;
		});
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

		$http.get('http://localhost:9001/posts').success
			(function(data){
				$scope.post = data[$routeParams.id];
				}
			);
		 $http.get('http://localhost:9001/posts/'+ $routeParams.id +'/comments').success
		 	(function(data){
		 		$scope.comments = data;
		 	}
		 );
	}])
	// .controller('SinglePostCommentController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	// 	$http.get('http://localhost:9001/posts/'+id+'/comments').success(function(data){
	// 		$scope.comments = data[$routeParams.id];
	// 	});}]);