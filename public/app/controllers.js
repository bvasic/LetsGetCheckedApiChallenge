angular.module('app.controllers', [
	'app.directives'
])


	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('http://localhost:9001/posts').success(function(data){
			$scope.posts = data;
		});
	}])


	.controller('SinglePostController', ['$scope', '$http', '$routeParams', '$window', function($scope, $http, $routeParams, $window){
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

		//POST FORM SUBMIT
        $scope.Submit =function(){
		 	var data = {
		 			user: $scope.comments.user,
	            	content: $scope.comments.content,
	            	date: $scope.date = new Date()
	            }
	        
	        $http.post('http://localhost:9001/posts/'+ $routeParams.id +'/comments', data)
	        .success(function (data) {
	            $scope.comments = data;
	        })
	        .error(function (data) {
	            $scope.ResponseDetails = "Data: " + data +
	                "<hr />status: " + status +
	                "<hr />headers: " + header +
	                "<hr />config: " + config;
        	});
		 }


		

}]);