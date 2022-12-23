(function(global){



      var insertHtml = function (selector, html) {
            var targetElem = document.querySelector(selector);
               targetElem.innerHTML = html;
  	  };
      var showLoading = function (selector) {
            var html = global.$camunited.$gifloadingdbs
            insertHtml(selector, html);
      };
      var showHomeXml = function (selector) {
            var html = global.$camunited.$homexmldbs
            insertHtml(selector, html);
      };

      document.addEventListener("DOMContentLoaded", function(event) {

      	$LocalajaxUtils = $ajaxUtils


      	});



})(window);