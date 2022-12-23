// Camunited v1.0.0 | (c) CAMUNITED Team. Copyrights reserved.
(function(){
	'use strict';

/**
 * Camunited module that includes the public module as a dependency
 */

angular.module('CamunitedApp', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}


})();