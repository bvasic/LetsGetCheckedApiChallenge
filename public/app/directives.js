angular.module('app.directives',[])
	.directive('navbar',[function(){
		return {
			controller: ['$scope', '$http', function($scope, $http){
				$http.get('api/db.json').success(function(data){
					$scope.pages = data.pages;
				});
			}],
			restrict: 'E',
			templateUrl: 'partials/navigationbar.html',
			replace: true,
		};
	}]);