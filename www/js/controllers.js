angular.module('app.controllers', ['app.services'])
 .run(function($rootScope){
	$rootScope.localStorage = localStorage
	$rootScope.localStorage.fontSize = localStorage.fontSize || 13
	$rootScope.fontSizeChange = function(fontSize){
		$rootScope.localStorage.fontSize = fontSize
	}
	$rootScope.giuSang = str2bool(localStorage.giuSang) || false
	
	$rootScope.keepScreenAwake = function(){
		if ($rootScope.giuSang) {
			$rootScope.giuSang = false
			window.plugins.insomnia.allowSleepAgain()
		}
		else {
			$rootScope.giuSang = true
			window.plugins.insomnia.keepAwake()
		}
		$rootScope.localStorage.giuSang = $rootScope.giuSang
	}
	
 })
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', 'danhSachMenu', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, danhSachMenu,  $ionicScrollDelegate) {
	$scope.danhSachMenu = danhSachMenu
	$scope.localStorage = localStorage
	$scope.updateTitle = function(menu){
		$scope.localStorage.currentPage = menu.title
		$scope.localStorage.currentUrl = menu.sref.replace("menu.", "")
	}
}])
.controller('noiDungCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
	$scope.localStorage = localStorage
}])
.controller('caiDatPageCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
	
}])
 
 
 function str2bool(strvalue){
	  return (strvalue && typeof strvalue == 'string') ? (strvalue.toLowerCase() == 'true' || strvalue == '1') : (strvalue == true);
}
function isPhoneGap() {
    return (window.cordova || window.PhoneGap || window.phonegap) 
    && /^file:\/{3}[^\/]/i.test(window.location.href) 
    && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
}
document.addEventListener("deviceready", function(){
	str2bool(localStorage.giuSang) ? window.plugins.insomnia.keepAwake() : window.plugins.insomnia.allowSleepAgain()
}, false);
