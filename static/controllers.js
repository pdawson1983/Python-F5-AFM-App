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
f5appControllers.newDeviceController = function($scope, $http, $window, $location){
	$scope.url = '';
	$scope.device = {};
	$scope.processForm = function(path) {
		$http({
			method: 'POST',
			url: $scope.url,
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify($scope.device),
		});
		$window.location.href = path;
	};
};

f5appControllers.newStatController = function($scope, $http, $window, $location){
	$scope.vectors = [
	{ name: "Bad UDP checksum", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20UDP%20checksum/stats", isChecked: false},
	{ name: "SYN && FIN set", value: "https://localhost/mgmt/tm/security/dos/device-config/SYN%20&&%20FIN%20set/stats", isChecked: false},
	{ name: "TCP SYN/ACK flood", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20SYN~ACK%20flood/stats", isChecked: false},
	{ name: "Bad IP Option", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20IP%20Option/stats", isChecked: false},
	{ name: "IPv6 extension header too large", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20extension%20header%20too%20large/stats", isChecked: false},
	{ name: "IP fragment flood", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20fragment%20flood/stats", isChecked: false},
	{ name: "IPv6 extended headers wrong order", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20extended%20headers%20wrong%20order/stats", isChecked: false},
	{ name: "TTL <= 1", value: "https://localhost/mgmt/tm/security/dos/device-config/TTL%20%3c=%201/stats", isChecked: false},
	{ name: "TCP Option present with illegal length", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20Option%20present%20with%20illegal%20length/stats", isChecked: false},
	{ name: "IPv6 duplicate extension headers", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20duplicate%20extension%20headers/stats", isChecked: false},
	{ name: "Bad IPv6 hop count", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20IPv6%20hop%20count/stats", isChecked: false},
	{ name: "Sweep attack", value: "https://localhost/mgmt/tm/security/dos/device-config/Sweep%20attack/stats", isChecked: false},
	{ name: "No L4", value: "https://localhost/mgmt/tm/security/dos/device-config/No%20L4/stats", isChecked: false},
	{ name: "Bad IPv6 version", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20IPv6%20version/stats", isChecked: false},
	{ name: "Ethernet MAC SA == DA", isChecked: false},
	{ name: "Bad TCP checksum", isChecked: false},
	{ name: "TCP ACK flood", isChecked: false},
	{ name: "ICMP frame too large", isChecked: false},
	{ name: "ICMPv4 flood", isChecked: false},
	{ name: "IPv6 hop count <= 1", isChecked: false},
	{ name: "Unknown TCP option type", isChecked: false},
	{ name: "IPv6 length > L2 length", isChecked: false},
	{ name: "Bad IP version", isChecked: false},
	{ name: "LAND attack", isChecked: false},
	{ name: "No L4 (extension headers go to or past the end of frame)", isChecked: false},
	{ name: "Bad ICMP frame", isChecked: false},
	{ name: "ICMPv6 flood", isChecked: false},
	{ name: "IP length > L2 length", isChecked: false},
	{ name: "ICMP fragmented", isChecked: false},
	{ name: "IPv6 overlapped fragment", isChecked: false},
	{ name: "IP Header length > L2 length", isChecked: false},
	{ name: "L2 length >> IP length", isChecked: false},
	{ name: "TCP option overruns TCP header", isChecked: false},
	{ name: "TCP header length > L2 length", isChecked: false},
	{ name: "TCP header length too short (length < 5)", isChecked: false},
	{ name: "IP overlapped fragment", isChecked: false},
	{ name: "IP fragment error", isChecked: false},
	{ name: "ARP flood", isChecked: false},
	{ name: "UDP flood", isChecked: false},
	{ name: "FIN only set", isChecked: false},
	{ name: "Routing header type 0", isChecked: false},
	{ name: "Ethernet multicast packet", isChecked: false},
	{ name: "IP option frames", isChecked: false},
	{ name: "TIDCMP attack", isChecked: false},
	{ name: "Bad TCP flags (all cleared)", isChecked: false},
	{ name: "Bad UDP header (UDP length > IP length or L2 length)", isChecked: false},
	{ name: "TCP RST flood", isChecked: false},
	{ name: "Payload length < L2 length", isChecked: false},
	{ name: "Bad TCP flags (all flags set)", isChecked: false},
	{ name: "IP short fragment", isChecked: false},
	{ name: "IPv6 fragment flood", isChecked: false},
	{ name: "IP Header length too short", isChecked: false},
	{ name: "IPv6 extended header frames", isChecked: false},
	{ name: "IPv6 fragment error", isChecked: false},
	{ name: "Host unreachable", isChecked: false},
	{ name: "IPv6 short fragment", isChecked: false},
	{ name: "Ethernet broadcast packet", isChecked: false},
	{ name: "Bad IP TTL value", isChecked: false},
	{ name: "IP error checksum", isChecked: false},
	{ name: "IPv6 too many extension headers", isChecked: false},
	{ name: "TCP SYN flood", isChecked: false},
	{ name: "Flood attack", isChecked: false}
	];
	$scope.url = '';
	$scope.stats = {};
	$scope.processForm = function(path) {
		$http({
			method: 'POST',
			url: $scope.url,
			headers: { 'Content-Type': 'application/json' },
			data: JSON.stringify($scope.device),
		});
		$window.location.href = path;
	};
};
//Link list of controllers to app
f5app.controller(f5appControllers);

