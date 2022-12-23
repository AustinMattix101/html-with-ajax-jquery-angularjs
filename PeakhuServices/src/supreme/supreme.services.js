(function(){
	'use strict';
app.module('supreme')
// .factory('NavbarService', NavbarService)
.service('SearchArray', SearchArray);

// NavbarService.$inject = ['$http'];
// function NavbarService(lang){
// 	var navlist = [];
// 	return function ArrayService(lang)
// }

SearchArray.$inject = ['$http', 'GithubApiPath'];
function SearchArray($http, GithubApiPath){
	var service = this
		
	service.getSearchArray = function () {
    	return $http.get(GithubApiPath + '/searcharray.json').then(function (response) {
      		return response.data;
    });
  };
}


})();