            // Scripts

(function (global) {

      var camunited = {};

      // var HomeXml = "index.html";
      var XlinkSVGHtml = "/../assets/svg/xlink-svg.html";
      var XlinkSVGsHtml = "/../assets/svg/xlink-svgs.html";

       // Accounts
      // var usersHtml = "users/index.html";
      var signupHtml = "src/public/users/signup/index.html";
      var signinHtml = "src/public/users/signin/index.html";

       // Navigations
      var homeHtml = "src/public/home/home.html";
      var gifloadingHtml = "src/supreme/loading/spinner.html";
      var productsHtml = "";
      var assetsHtml = "";
        var expertisesHtml = "src/public/navigations/Expertises/index.html";
        var applicationsHtml = "src/public/navigations/Applications/index.html";
        var intelligencesHtml = "src/public/navigations/Intelligences/index.html";
      var servicesHtml = "";
        var webdevelopmentsHtml = "src/public/navigations/Web-Developments/index.html";
        var computingprogrammingsHtml = "src/public/navigations/Computing-Programmings/index.html";
        var ethicalhackingsHtml = "src/public/navigations/Ethical-Hackings/index.html";
        

       // Footer Nav Sites
      var developersHtml = "src/public/sites/Developers/index.html";
      var careersHtml = "src/public/sites/Careers/index.html";
      var termspolicyHtml = "src/public/sites/Terms-Policy/index.html";
      var creditsHtml = "src/public/sites/Credits/index.html";
      var faqsHtml = "src/public/sites/FAQs/index.html";
      var aboutHtml = "src/public/sites/About/index.html";

      // Convenience function for inserting innerHTML for 'select'
      var insertHtml = function (selector, html) {
            var targetElem = document.querySelector(selector);
            targetElem.innerHTML = html;
      };

            // Show loading icon inside element identified by 'selector'.
      var showLoading = function (selector) {
            var html = global.$camunited.$gifloadingdb
            insertHtml(selector, html);
      };


      var showhomeHtml = function (selector) {
            var html = global.$camunited.$homedb
            insertHtml(selector, html);
      };


      // var showHomeXml = function (selector) {
      //       var html = global.$camunited.$homexmldb
      //       insertHtml(selector, html);
      // };


      // var camunited.signupclickEvents = function (bindshowPassword,signupshowPassword) {

      //     function signupshowPassword() {
      //     var document = global.$camunited.$signupnavdb
      //     var x = document.getElementById("floatingPassword");
      //     if (x.type === "password") {
      //       x.type = "text";
      //     } else {
      //       x.type = "password";
      //     }
      //   };
      //   function bindshowPassword() {
      //   document.querySelector("#customCheck1")
      //         .addEventListener("click", function () {
      //           signupshowPassword(); 
      //       });
      //     };
      // };



            // Sign up Function()
      var switchNothingToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        
      };


            // Accounts Function()
      // var switchAccountsNavToActive = function () {

      //   // Remove 'active' from AccountsNav button
      //   var classes = document.querySelector("#AccountsNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#AccountsNav").className = classes;

      //   // Remove 'active' from Home button
      //   var classes = document.querySelector("#HomepageNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#HomepageNav").className = classes;

      //   // Remove 'active' from Products button
      //   var classes = document.querySelector("#ProductspageNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#ProductspageNav").className = classes;

      //   // Remove 'active' from Assets button
      //   var classes = document.querySelector("#AssetspageNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#AssetspageNav").className = classes;

      //   // Remove 'active' from Services button
      //   var classes = document.querySelector("#ServicespageNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#ServicespageNav").className = classes;

      //   // Remove 'active' from DevelopersNav button
      //   var classes = document.querySelector("#developersNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#developersNav").className = classes;

      //   // Remove 'active' from careersNav button
      //   var classes = document.querySelector("#careersNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#careersNav").className = classes;

      //   // Remove 'active' from termspolicyNav button
      //   var classes = document.querySelector("#termspolicyNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#termspolicyNav").className = classes;

      //   // Remove 'active' from creditsNav button
      //   var classes = document.querySelector("#creditsNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#creditsNav").className = classes;

      //   // Remove 'active' from faqsNav button
      //   var classes = document.querySelector("#faqsNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#faqsNav").className = classes;

      //   // Remove 'active' from aboutNav button
      //   var classes = document.querySelector("#aboutNav").className;
      //   classes = classes.replace(new RegExp(" active", "g"), "");
      //   document.querySelector("#aboutNav").className = classes;
        

      //   // Add 'active' to menu button if not already there
      //   classes = document.querySelector("#AccountsNav").className;
      //   if (classes.indexOf("active") == -1) {
      //     classes += " active";
      //     document.querySelector("#AccountsNav").className = classes;
      //   }
      // };


            // Navigation Objects
      var switchHomepageToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#HomepageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#HomepageNav").className = classes;
        }
      };


      var switchProductsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ProductspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ProductspageNav").className = classes;
        }
      };


      var switchAssetsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchExpertisesNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchApplicationsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchIntelligencesNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchServicesNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };


      var switchWebDevelopmentsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };


      var switchComputingProgrammingsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };


      var switchEthicalHackingsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };

            //Footer Navigation
      // Remove the class 'active' from home and switch to Menu button
      var switchDevelopersNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#developersNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#developersNav").className = classes;
        }
      };



      // Remove the class 'active' from home and switch to Menu button
      var switchCareersNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#careersNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#careersNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchTermsPolicyNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#termspolicyNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#termspolicyNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchCreditsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#creditsNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#creditsNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchFAQsNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#faqsNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#faqsNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchAboutNavToActive = function () {

        // Remove 'active' from AccountsNav button
        var classes = document.querySelector("#AccountsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AccountsNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#aboutNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#aboutNav").className = classes;
        }
      };


        // DOM
      // On page load (before images or CSS)
      document.addEventListener("DOMContentLoaded", function (event) {

            // On first load, show home view DOMLoaded


            $LocalajaxUtils = $ajaxUtils //For changing scope


              // AjaxUtils Request
            $ajaxUtils.sendGetRequest(
              gifloadingHtml,
              function (responseText) {
                  var gifloadingdb = responseText;
                  global.$camunited.$gifloadingdb = gifloadingdb
                document.querySelector("#main-jumbotron")
                  .innerHTML = gifloadingdb;
              },
              false);


            $ajaxUtils.sendGetRequest(
              XlinkSVGHtml,
              function (responseText) {
                  var xlinksvgdb = responseText;
                  global.$camunited.$xlinksvgdb = xlinksvgdb
                document.querySelector("#XlinkSVG")
                  .innerHTML = xlinksvgdb;
              },
              false);



            $ajaxUtils.sendGetRequest(
              XlinkSVGsHtml,
              function (responseText) {
                  var xlinksvgsdb = responseText;
                  global.$camunited.$xlinksvgsdb = xlinksvgsdb
                document.querySelector("#XlinkSVGs")
                  .innerHTML = xlinksvgsdb;
              },
              false);


            $ajaxUtils.sendGetRequest(
              homeHtml,
              function (responseText) {
                  var homedb = responseText;
                  global.$camunited.$homedb = homedb
                document.querySelector("#main-jumbotron")
                  .innerHTML = homedb;
              },
              false);



            // $ajaxUtils.sendGetRequest(
            //   HomeXml,
            //   function (responseText) {
            //       var homexmldb = responseText;
            //       global.$camunited.$homexmldb = homexmldb
            //   },
            //   false);





              // Navigations Objects
              //     Sign up Nav
            document.querySelector("#signup-button")
              .addEventListener("click", function (requestSignupHtml, 
                                                    signupshowPassword, 
                                                    bindshowPassword) {
                        function requestSignupHtml(){
                          showLoading("#main-jumbotron");
                          switchNothingToActive();

                          // Call server to get the name
                          $LocalajaxUtils
                            .sendGetRequest(signupHtml, 
                              function (responseText) {
                                var signupnavdb = responseText;
                                global.$camunited.$signupnavdb = signupnavdb
                                document.querySelector("#main-jumbotron")
                                  .innerHTML = signupnavdb;
                              },
                              false);  
                        };
           
                        function signupshowPassword(selector, onclick){
                            var targetElem = document.querySelector(selector);
                            function onclick (){
                                var document = signupnavdb
                                var x = document.getElementById("floatingPassword");
                                if (x.type === "password") {
                                  x.type = "text";
                                } else {
                                  x.type = "password";
                                }
                              };
                            };

                        function bindshowPassword(selector){
                          var onclick = function (){
                              document.querySelector("#customCheck1")
                              .addEventListener("click", function () {
                                bindshowPassword();
                            });
                          };
                          signupshowPassword(selector, onclick); 
                        };

                    return requestSignupHtml();

            });




              //     Sign in Nav
            document.querySelector("#signin-button")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchNothingToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(signinHtml, 
                    function (responseText) {
                      var signinnavdb = responseText;
                      global.$camunited.$signupnavdb = signinnavdb
                      document.querySelector("#main-jumbotron")
                        .innerHTML = signinnavdb;
                    },
                    false);
            });



            //   //     #customCheck1
            // document.querySelector("#customCheck1")
            //   .addEventListener("click", function () {
            //     signupshowPassword();
            // });



              // Navigations Objects
                  // Accounts Nav
            // document.querySelector("#AccountsNav")
            //   .addEventListener("click", function () {

            //     showLoading("#main-jumbotron");
            //     switchAccountsNavToActive();

            //     // Call server to get the name
            //     $LocalajaxUtils
            //       .sendGetRequest(usersHtml, 
            //         function (responseText) {
            //           var accountsnavdb = responseText;
            //           global.$camunited.$accountsnavdb = accountsnavdb
            //         },
            //         false);
            // });


            document.querySelector("#ProductspageNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchProductsNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(productsHtml, 
                //     function (responseText) {
                //       var productsnavdb = responseText;
                //       global.$camunited.$productsnavdb = productsnavdb
                //     },
                //     false);
            });
                       // Empty 

            document.querySelector("#assets-dropdown")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchAssetsNavToActive();

            //     // Call server to get the name
            //     $LocalajaxUtils
            //       .sendGetRequest(assetsHtml, 
            //         function (responseText) {
            //           var assetsnavdb = responseText;
            //           global.$camunited.$assetsnavdb = assetsnavdb
            //         },
            //         false);
            });



              // Dropdown
            document.querySelector("#expertisesNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchExpertisesNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(expertisesHtml, 
                //     function (responseText) {
                //       var expertisesnavdb = responseText;
                //       global.$camunited.$expertisesnavdb = expertisesnavdb
                //     },
                //     false);
            });

            document.querySelector("#applicationsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchApplicationsNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(applicationsHtml, 
                //     function (responseText) {
                //       var applicationsnavdb = responseText;
                //       global.$camunited.$applicationsnavdb = applicationsnavdb
                //     },
                //     false);
            });

            document.querySelector("#intelligencesNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchIntelligencesNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(intelligencesHtml, 
                //     function (responseText) {
                //       var intelligencesnavdb = responseText;
                //       global.$camunited.$intelligencesnavdb = intelligencesnavdb
                //     },
                //     false);
            });
              // End Dropdown


                      // Empty

            document.querySelector("#sevices-dropdown")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchServicesNavToActive();

            //     // Call server to get the name
            //     $LocalajaxUtils
            //       .sendGetRequest(servicesHtml, 
            //         function (responseText) {
            //           var servicesnavdb = responseText;
            //           global.$camunited.$intelligencesnavdb = servicesnavdb
            //         },
            //         false);
            });


                // Dropdown
            document.querySelector("#webdevelopmentsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchWebDevelopmentsNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(webdevelopmentsHtml, 
                //     function (responseText) {
                //       var webdevelopmentsnavdb = responseText;
                //       global.$camunited.$webdevelopmentsnavdb = webdevelopmentsnavdb
                //     },
                //     false);
            });

            document.querySelector("#computingprogrammingsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchComputingProgrammingsNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(computingprogrammingsHtml, 
                //     function (responseText) {
                //       var computingprogrammingsnavdb = responseText;
                //       global.$camunited.$computingprogrammingsnavdb = computingprogrammingsnavdb
                //     },
                //     false);
            });

            document.querySelector("#ethicalhackingsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchEthicalHackingsNavToActive();

                // Call server to get the name
                // $LocalajaxUtils
                //   .sendGetRequest(ethicalhackingsHtml, 
                //     function (responseText) {
                //       var ethicalhackingsnavdb = responseText;
                //       global.$camunited.$ethicalhackingsnavdb = ethicalhackingsnavdb
                //     },
                //     false);
            });
              // End Dropdown


              // Footer Navigation

            document.querySelector("#developersNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchDevelopersNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(developersHtml, 
                    function (responseText) {
                      var developersnavdb = responseText;
                      global.$camunited.$developersnavdb = developersnavdb
                    },
                    false);
            });

            document.querySelector("#careersNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchCareersNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(careersHtml, 
                    function (responseText) {
                      var careersnavdb = responseText;
                      global.$camunited.$careersnavdb = careersnavdb
                      document.querySelector("#main-jumbotron")
                        .innerHTML = careersnavdb;
                    },
                    false);
            });

            document.querySelector("#termspolicyNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchTermsPolicyNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(termspolicyHtml, 
                    function (responseText) {
                      var termspolicynavdb = responseText;
                      global.$camunited.$termspolicynavdb = termspolicynavdb
                      document.querySelector("#main-jumbotron")
                        .innerHTML = termspolicynavdb;
                    },
                    false);
            });

            document.querySelector("#creditsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchCreditsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(creditsHtml, 
                    function (responseText) {
                      var creditsnavdb = responseText;
                      global.$camunited.$creditsnavdb = creditsnavdb
                      document.querySelector("#main-jumbotron")
                        .innerHTML = creditsnavdb;
                    },
                    false);
            });

            document.querySelector("#faqsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchFAQsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(faqsHtml, 
                    function (responseText) {
                      var faqsnavdb = responseText;
                      global.$camunited.$faqsnavdb = faqsnavdb
                    },
                    false);
            });

            document.querySelector("#aboutNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchAboutNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(aboutHtml, 
                    function (responseText) {
                      var aboutnavdb = responseText;
                      global.$camunited.$aboutnavdb = aboutnavdb
                      document.querySelector("#main-jumbotron")
                        .innerHTML = aboutnavdb;
                    },
                    false);
            });

                // Recall Function
            document.querySelector("#HomepageNav")  
              .addEventListener("click", function () {
                showLoading("#main-jumbotron");
                showhomeHtml("#main-jumbotron");
                switchHomepageToActive();
            });

            document.querySelector("#header-brand")  
              .addEventListener("click", function () {
                showLoading("#main-jumbotron");
                showhomeHtml("#main-jumbotron");
                switchHomepageToActive();
            });

      });

      global.$camunited = camunited;

})(window);


      // Fixing Mobile Nav Menu Automatic Collapse

// $(function () { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbar-toggler").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 992) {
//       $("#offcanvasNavbar").collapse('hide');
//     }
//   });
//   // In Firefox and Safari, the click event doesn't retain the focus
//   // on the clicked button. Therefore, the blur event will not fire on
//   // user clicking somewhere else in the page and the blur event handler
//   // which is set up above will not be called.
//   // Refer to issue #28 in the repo.
//   // Solution: force focus on the element that the click event fired on
//   $("#navbarToggle").click(function (event) {
//     $(event.target).focus();
//   });
// });



