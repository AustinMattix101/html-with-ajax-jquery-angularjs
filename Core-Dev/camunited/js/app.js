(function(global){
	'use strict';
	angular.module('CamunitedApps', [])
		.controller('SignupControl', Signup);

	Signup.$inject = ['$scope'];
	function Signup($scope){
		$scope.signupnavdbs = "";
	};

})(window);