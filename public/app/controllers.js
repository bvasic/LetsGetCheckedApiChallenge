angular.module('app.controllers', [
	'app.directives'
])

	//GET request for listing all posts
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('http://localhost:9001/posts').success(function(data){
			$scope.posts = data;
		});
	}])

	//Controller for handling individual posts
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', '$window', function($scope, $http, $routeParams, $window){
		//Getting data for specific post based on its ID
		$http.get('http://localhost:9001/posts').success
			(function(data){
				$scope.post = data[$routeParams.id];
			}
		);
		//Getting comments for specific post based on its ID
		$http.get('http://localhost:9001/posts/'+ $routeParams.id +'/comments').success
			(function(data){
				$scope.comments = data;
			}
		);

		//Submitting comments with POST method
        $scope.Submit =function(){
		 	var data = {
		 			user: $scope.comments.user,
	            	content: $scope.comments.content,
	            	date: $scope.date = new Date()
	            }
	        //Submit comment for a specific post based on its ID
	        $http.post('http://localhost:9001/posts/'+ $routeParams.id +'/comments', data)
	        .success(function (data) {
	            //Getting data for specific post based on its ID
				$http.get('http://localhost:9001/posts/').success
					(function(data){
						$scope.post = data[$routeParams.id];
					}
				);
				//Getting comments for specific post based on its ID
				$http.get('http://localhost:9001/post/'+ $routeParams.id +'/comments').success
					(function(data){
						$scope.comments = data;
					}
				);
	        })
	        .error(function (data) {
	            $scope.ResponseDetails = "Data: " + data +
	                "<hr />status: " + status +
	                "<hr />headers: " + header +
	                "<hr />config: " + config;
        	});
		 }
}]);