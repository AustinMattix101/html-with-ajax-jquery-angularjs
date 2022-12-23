(function() {
'use strict';

	angular.module('NumericValue', [])
		.controller('InputsController', function ($scope){
			$scope.inputValue = "";
			$scope.totalValue = 0;
			$scope.displayNumeric = function() {
				var totalNameValue = calulateNumericForString($scope.inputValue); // get the total value 
				$scope.totalValue = totalNameValue;

			};

			function calulateNumericForString (string) {
				var totalStringValue = 0;
				for (var i = 0; i < string.length; i++) {
					totalStringValue += string.charCodeAt(i);
				}
				return totalStringValue;
			};
		});
})();