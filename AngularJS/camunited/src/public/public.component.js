(function() {
	'use strict';

app.module('public')
	.component('svgImport', {
		templateUrl: 'src/public/components/svg.html'
})
	.component('svgCamunited', {
		templateUrl: 'src/public/components/svg-camunited.html'
})
	.component('navbarList', {
		templateUrl: 'src/public/components/navbar_list.html'
})
	.component('signinSignup', {
		templateUrl: 'src/public/components/signin_signup.html'
})
	.component('navbarDownStart', {
		templateUrl: 'src/public/components/navbardown_start.html'
})
	.component('navbarDownList', {
		templateUrl: 'src/public/components/navbardown_list.html'
})
	.component('navSocial', {
		templateUrl: 'src/public/components/nav_social.html'
})
	.component('navbarDownEnd', {
		templateUrl: 'src/public/components/navbardown_end.html'
})
	.component('navLang', {
		templateUrl: 'src/public/components/nav_lang.html'
})
	.component('arrowUp', {
		templateUrl: 'src/public/components/arrow_up.html'
});


})();