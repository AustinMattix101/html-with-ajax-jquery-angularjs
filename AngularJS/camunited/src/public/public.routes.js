(function() {
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
            templateUrl: 'src/public/states/home/home.html'
        })

            // Authentication Sign in | Sign up
        .state('public.signin', {
            url: '/signin',
            templateUrl: 'src/public/states/signin/signin.html'
        })
        .state('public.signup', {
            url: '/signup',
            templateUrl: 'src/public/states/signup/signup.html'
        })

            // Top Navigations States
                // Assets
        .state('public.assets', {
            url: '/assets',
            templateUrl: 'src/public/states/assets/assets.html'
        })
        .state('public.applications', {
            url: '/applications',
            templateUrl: 'src/public/states/assets/applications/applications.html'
        })
        .state('public.expertises', {
            url: '/expertises',
            templateUrl: 'src/public/states/assets/expertises/expertises.html'
        })
        .state('public.intelligences', {
            url: '/intelligences',
            templateUrl: 'src/public/states/assets/intelligences/intelligences.html'
        })

                // Services
        .state('public.services', {
            url: '/services',
            templateUrl: 'src/public/states/services/services.html'
        })
        .state('public.computing-programmings', {
            url: '/computing-programmings',
            templateUrl: 'src/public/states/services/computing-programmings/computing-programmings.html'
        })
        .state('public.ethical-hackings', {
            url: '/ethical-hackings',
            templateUrl: 'src/public/states/services/ethical-hackings/ethical-hackings.html'
        })
        .state('public.web-developments', {
            url: '/web-developments',
            templateUrl: 'src/public/states/services/web-developments/web-developments.html'
        })

            // Buttom Navigations States
        .state('public.developers', {
            url: '/developers',
            templateUrl: 'src/public/states/developers/developers.html'
        })
        .state('public.careers', {
            url: '/careers',
            templateUrl: 'src/public/states/careers/careers.html'
        })
        .state('public.termspolicy', {
            url: '/termspolicy',
            templateUrl: 'src/public/states/termspolicy/termspolicy.html'
        })
        .state('public.credits', {
            url: '/credits',
            templateUrl: 'src/public/states/credits/credits.html'
        })
        .state('public.about', {
            url: '/about',
            templateUrl: 'src/public/states/about/about.html'
        })
        .state('public.faqs', {
            url: '/faqs',
            templateUrl: 'src/public/states/faqs/faqs.html'
        })
}

})();