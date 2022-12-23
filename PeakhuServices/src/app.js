// Peakhu v1.0.0 | (c) CAMUNITED Team. Copyrights reserved.

const app = angular;

(function(){
	'use strict';

/**
 * Peakhu module that includes the public module as a dependency
 */

app.module('PeakhuApp', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}


})();

// Search Form
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function SearchList() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  window.$inputValue = input.value;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}