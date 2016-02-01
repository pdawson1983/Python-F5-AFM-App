//Create App
var f5app = angular.module('f5app', ['ngAnimate']);
//Modify Angular config to change angular bindings.
f5app.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('{&');
  	$interpolateProvider.endSymbol('&}');
}]);


