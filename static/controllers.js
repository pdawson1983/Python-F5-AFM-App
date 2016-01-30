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
f5appControllers.HeaderController = function($scope, $window, $location){
	$scope.home = function (path) {
		$window.location.href = path;
	};

};

f5appControllers.newDeviceController = function($scope){
	$scope.device = {
		hostName: '',
		ipAddress: '',
		apiUserName: '',
		apiPassword: ''
	};
};

//Link list of controllers to app
f5app.controller(f5appControllers);

