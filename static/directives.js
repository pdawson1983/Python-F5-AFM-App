/*
 * This Document contains all custom directives associated with the F5 App pages
 *
 *
 *
 *
 * */

// Here is the list of directives grouped by application
var f5appDirectives = {}

//directives


f5appDirectives.ipValidate = function() {
	return {
		//argument only
		restrict: 'A',

		require: 'ngModel',

		link: function (scope, element, attr, ctrl){

			function ipValidator(inputValue){
				if (/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(inputValue)){
					ctrl.$setValidity('validIpAddress', true);
				}else{
					ctrl.$setValidity('validIpAddress', false);
				}
				return inputValue;
			}
			ctrl.$parsers.push(ipValidator);
		}
	};
};


//Link list of directives to app
f5app.directive(f5appDirectives);
