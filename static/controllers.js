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
	{ name: "Ethernet MAC SA == DA", value: "https://localhost/mgmt/tm/security/dos/device-config/Ethernet%20MAC%20SA%20==%20DA/stats", isChecked: false},
	{ name: "Bad TCP checksum", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20TCP%20checksum/stats", isChecked: false},
	{ name: "TCP ACK flood", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20ACK%20flood/stats", isChecked: false},
	{ name: "ICMP frame too large", value: "https://localhost/mgmt/tm/security/dos/device-config/ICMP%20frame%20too%20large/stats", isChecked: false},
	{ name: "ICMPv4 flood", value: "https://localhost/mgmt/tm/security/dos/device-config/ICMPv4%20flood/stats", isChecked: false},
	{ name: "IPv6 hop count <= 1", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20hop%20count%20%3c=%201/stats", isChecked: false},
	{ name: "Unknown TCP option type", value: "https://localhost/mgmt/tm/security/dos/device-config/Unknown%20TCP%20option%20type/stats", isChecked: false},
	{ name: "IPv6 length > L2 length", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20length%20%3e%20L2%20length/stats", isChecked: false},
	{ name: "Bad IP version", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20IP%20version/stats", isChecked: false},
	{ name: "LAND attack", value: "https://localhost/mgmt/tm/security/dos/device-config/LAND%20attack/stats", isChecked: false},
	{ name: "No L4 (extension headers go to or past the end of frame)", value: "https://localhost/mgmt/tm/security/dos/device-config/No%20L4%20(extension%20headers%20go%20to%20or%20past%20the%20end%20of%20frame)/stats", isChecked: false},
	{ name: "Bad ICMP frame", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20ICMP%20frame/stats", isChecked: false},
	{ name: "ICMPv6 flood", value: "https://localhost/mgmt/tm/security/dos/device-config/ICMPv6%20flood/stats", isChecked: false},
	{ name: "IP length > L2 length", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20length%20%3e%20L2%20length/stats", isChecked: false},
	{ name: "ICMP fragmented", value: "https://localhost/mgmt/tm/security/dos/device-config/ICMP%20fragmented/stats", isChecked: false},
	{ name: "IPv6 overlapped fragment", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20overlapped%20fragment/stats", isChecked: false},
	{ name: "IP Header length > L2 length", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20Header%20length%20%3e%20L2%20length/stats", isChecked: false},
	{ name: "L2 length >> IP length", value: "https://localhost/mgmt/tm/security/dos/device-config/L2%20length%20%3e%3e%20IP%20length/stats", isChecked: false},
	{ name: "TCP option overruns TCP header", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20option%20overruns%20TCP%20header/stats", isChecked: false},
	{ name: "TCP header length > L2 length", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20header%20length%20%3e%20L2%20length/stats", isChecked: false},
	{ name: "TCP header length too short (length < 5)", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20header%20length%20too%20short%20(length%20%3c%205)/stats", isChecked: false},
	{ name: "IP overlapped fragment", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20overlapped%20fragment/stats", isChecked: false},
	{ name: "IP fragment error", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20fragment%20error/stats", isChecked: false},
	{ name: "ARP flood", value: "https://localhost/mgmt/tm/security/dos/device-config/ARP%20flood/stats", isChecked: false},
	{ name: "UDP flood", value: "https://localhost/mgmt/tm/security/dos/device-config/UDP%20flood/stats", isChecked: false},
	{ name: "FIN only set", value: "https://localhost/mgmt/tm/security/dos/device-config/FIN%20only%20set/stats", isChecked: false},
	{ name: "Routing header type 0", value: "https://localhost/mgmt/tm/security/dos/device-config/Routing%20header%20type%200/stats", isChecked: false},
	{ name: "Ethernet multicast packet", value: "https://localhost/mgmt/tm/security/dos/device-config/Ethernet%20multicast%20packet/stats", isChecked: false},
	{ name: "IP option frames", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20option%20frames/stats", isChecked: false},
	{ name: "TIDCMP attack", value: "https://localhost/mgmt/tm/security/dos/device-config/TIDCMP%20attack/stats", isChecked: false},
	{ name: "Bad TCP flags (all cleared)", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20TCP%20flags%20(all%20cleared)/stats", isChecked: false},
	{ name: "Bad UDP header (UDP length > IP length or L2 length)", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20UDP%20header%20(UDP%20length%20%3e%20IP%20length%20or%20L2%20length)/stats", isChecked: false},
	{ name: "TCP RST flood", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20RST%20flood/stats", isChecked: false},
	{ name: "Payload length < L2 length", value: "https://localhost/mgmt/tm/security/dos/device-config/Payload%20length%20%3c%20L2%20length/stats", isChecked: false},
	{ name: "Bad TCP flags (all flags set)", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20TCP%20flags%20(all%20flags%20set)/stats", isChecked: false},
	{ name: "IP short fragment", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20short%20fragment/stats", isChecked: false},
	{ name: "IPv6 fragment flood", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20fragment%20flood/stats", isChecked: false},
	{ name: "IP Header length too short", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20Header%20length%20too%20short/stats", isChecked: false},
	{ name: "IPv6 extended header frames", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20extended%20header%20frames/stats", isChecked: false},
	{ name: "IPv6 fragment error", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20fragment%20error/stats", isChecked: false},
	{ name: "Host unreachable", value: "https://localhost/mgmt/tm/security/dos/device-config/Host%20unreachable/stats", isChecked: false},
	{ name: "IPv6 short fragment", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20short%20fragment/stats", isChecked: false},
	{ name: "Ethernet broadcast packet", value: "https://localhost/mgmt/tm/security/dos/device-config/Ethernet%20broadcast%20packet/stats", isChecked: false},
	{ name: "Bad IP TTL value", value: "https://localhost/mgmt/tm/security/dos/device-config/Bad%20IP%20TTL%20value/stats", isChecked: false},
	{ name: "IP error checksum", value: "https://localhost/mgmt/tm/security/dos/device-config/IP%20error%20checksum/stats", isChecked: false},
	{ name: "IPv6 too many extension headers", value: "https://localhost/mgmt/tm/security/dos/device-config/IPv6%20too%20many%20extension%20headers/stats", isChecked: false},
	{ name: "TCP SYN flood", value: "https://localhost/mgmt/tm/security/dos/device-config/TCP%20SYN%20flood/stats", isChecked: false},
	{ name: "Flood attack", value: "https://localhost/mgmt/tm/security/dos/device-config/Flood%20attack/stats", isChecked: false}
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

