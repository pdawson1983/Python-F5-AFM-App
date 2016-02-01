/*
 * This Document contains all controllers associated with the F5 App pages
 *
 *
 *
 *
 * */

// Here the list of controllers are grouped by application.
var f5appControllers = {}

//Controllers

//HeaderController
//Used for the header
f5appControllers.HeaderController = function($scope, $window, $location){
	//Redirects to path when clicked
	//In the App path is set to the home page location
	$scope.home = function (path) {
		$window.location.href = path;
	};

};

//newDeviceController
f5appControllers.newDeviceController = function($scope, $http){
	$scope.url = '';
	$scope.device = {};
	$scope.processForm = function() {
		$http({
			method: 'POST',
			url: $scope.url,
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify($scope.device),
		})

	};
};

//Link list of controllers to app
f5app.controller(f5appControllers);

