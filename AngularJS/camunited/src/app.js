// Camunited v1.0.1 | (c) CAMUNITED Team. Copyrights reserved.

const app = angular;

(function(){
	'use strict';

/**
 * Peakhu module that includes the public module as a dependency
 */

app.module('CamunitedApp', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}


})();