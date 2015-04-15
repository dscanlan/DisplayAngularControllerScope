'use strict';
(function(){


	var app = window.prompt('Enter ng-App name', '');
	var contrler = window.prompt('Enter ng-controller name', '');
	console.log(angular.element(
		document.querySelector('[ng-app='+app+']')
		.querySelector('[data-ng-controller='+contrler+']'))
	.scope());

})();