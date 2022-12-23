(function(){
	'use strict';

app.module('public')

	.component('svgImport', {
		templateUrl: 'src/public/component/svg.html'
})
	.component('navbarList', {
		templateUrl: 'src/public/component/navbar_list.html'
})
	.component('navbarDownStart', {
		templateUrl: 'src/public/component/navbardown_start.html'
})
	.component('navbarDownList', {
		templateUrl: 'src/public/component/navbardown_list.html'
})
	.component('navSocial', {
		templateUrl: 'src/public/component/nav_social.html'
})
	.component('navbarDownEnd', {
		templateUrl: 'src/public/component/navbardown_end.html'
})
	.component('navLang', {
		templateUrl: 'src/public/component/nav_lang.html'
})
	.component('arrowUp', {
		templateUrl: 'src/public/component/arrow_up.html'
})	
	.component('homeCard', {
		templateUrl: 'src/public/component/home_card.html'
})
	.component('mainCategory', {
		templateUrl: 'src/public/component/main_category.html'
})
	.component('mainCarousel', {
		templateUrl: 'src/public/component/main_carousel.html'
});


})();