angular.module('app.directives',[])
	.directive('navbar',[function(){
		return {
			controller: ['$scope', '$http', function($scope, $http){
				$http.get('http://localhost:9001/posts/').success(function(data){
					$scope.pages = data.pages;
				});
			}],
			restrict: 'E',
			templateUrl: 'partials/navigationbar.html',
			replace: true,
		};
	}]);