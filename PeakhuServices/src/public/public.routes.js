( function(){
	'use strict';

app.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
    // Routes
    $stateProvider
        .state('public', {
            abstract: true,
            templateUrl: 'src/public/public.html'
        })
        // Home State
        .state('public.home', {
            url: '/',
            templateUrl: 'src/public/states/home/home.html',
        })
        .state('public.zhhans', {
            url: '/',
            templateUrl: 'src/public/states/home/home.html',
        })
        .state('public.km', {
            url: '/',
            templateUrl: 'src/public/states/home/home.html',
        })

        // NavBottom State
        .state('public.home.about', {
            url: 'about',
            templateUrl: 'src/public/states/about/about.html',
        })
        .state('public.home.credits', {
            url: 'credits',
            templateUrl: 'src/public/states/credits/credits.html',
        })
        .state('public.home.termspolicy', {
            url: 'termspolicy',
            templateUrl: 'src/public/states/termspolicy/termspolicy.html',
        })
        .state('public.home.contact', {
            url: 'contact',
            templateUrl: 'src/public/states/contact/contact.html',
        })
        .state('public.home.faqs', {
            url: 'faqs',
            templateUrl: 'src/public/states/faqs/faqs.html',
        })

        // Services States
        .state('public.home.services', {
            url: 'services',
            templateUrl: 'src/public/states/services/services.html',
        })
        .state('public.home.advertserve', {
            url: 'advertserve',
            templateUrl: 'src/public/states/services/advertserve.html',
        })
        .state('public.home.mediaphographer', {
            url: 'mediaphographer',
            templateUrl: 'src/public/states/services/mediaphographer.html',
        })
        .state('public.home.graphicdesign', {
            url: 'graphicdesign',
            templateUrl: 'src/public/states/services/graphicdesign.html',
        })
        .state('public.home.inexdesign', {
            url: 'inexdesign',
            templateUrl: 'src/public/states/services/inexdesign.html',
        })
        .state('public.home.realestdeal', {
            url: 'realestdeal',
            templateUrl: 'src/public/states/services/realestdeal.html',
        })
        .state('public.home.taxdeeserve', {
            url: 'taxdeeserve',
            templateUrl: 'src/public/states/services/taxdeeserve.html',
        })
        .state('public.home.jobopport', {
            url: 'jobopport',
            templateUrl: 'src/public/states/services/jobopport.html',
        })
            // And more Navigation
        // .state('public.home.action', {
        //     url: 'action',
        //     templateUrl: 'src/public/states/services/action.html',
        // })

        // Skills States
        .state('public.home.skills', {
            url: 'skills',
            templateUrl: 'src/public/states/skills/skills.html',
        })
        .state('public.home.civileng', {
            url: 'civileng',
            templateUrl: 'src/public/states/skills/civileng.html',
        })
        .state('public.home.techniceng', {
            url: 'techniceng',
            templateUrl: 'src/public/states/skills/techniceng.html',
        })
        .state('public.home.vcreator', {
            url: 'vcreator',
            templateUrl: 'src/public/states/skills/vcreator.html',
        })
        .state('public.home.comteacher', {
            url: 'comteacher',
            templateUrl: 'src/public/states/skills/comteacher.html',
        })
        .state('public.home.chiinter', {
            url: 'chiinter',
            templateUrl: 'src/public/states/skills/chiinter.html',
        })
        .state('public.home.enginter', {
            url: 'enginter',
            templateUrl: 'src/public/states/skills/enginter.html',
        })
        .state('public.home.chiteacher', {
            url: 'chiteacher',
            templateUrl: 'src/public/states/skills/chiteacher.html',
        })
        .state('public.home.engteacher', {
            url: 'engteacher',
            templateUrl: 'src/public/states/skills/engteacher.html',
        })
        .state('public.home.creativechef', {
            url: 'creativechef',
            templateUrl: 'src/public/states/skills/creativechef.html',
        })

        // Psar States
        .state('public.home.psar', {
            url: 'psar',
            templateUrl: 'src/public/states/psar/psar.html',
        })
        .state('public.home.car', {
            url: 'car',
            templateUrl: 'src/public/states/psar/car.html',
        })
        .state('public.home.motor', {
            url: 'motor',
            templateUrl: 'src/public/states/psar/motor.html',
        })
        .state('public.home.simcard', {
            url: 'simcard',
            templateUrl: 'src/public/states/psar/simcard.html',
        })


        // Places States
        .state('public.home.places', {
            url: 'place',
            templateUrl: 'src/public/states/places/places.html',
        })
        .state('public.home.cafe', {
            url: 'cafe',
            templateUrl: 'src/public/states/places/cafe.html',
        })
        .state('public.home.restaurant', {
            url: 'restaurant',
            templateUrl: 'src/public/states/places/restaurant.html',
        })
        .state('public.home.resort', {
            url: 'resort',
            templateUrl: 'src/public/states/places/resort.html',
        })

        
}

})();