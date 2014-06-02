(function(document, window, undefined){
	
  "use strict";

	var MoonwalkNav = (function(opts){

		var nav = document.getElementById('Moonwalk-nav'),
			 toggler = document.getElementById('Moonwalk-toggle'),
			 cnt = document.getElementById('Moonwalk-cnt'),
			 openClass = 'nav-moonwalk-full',
			 mobileOpenClass = 'nav-mobile-open',
			 mobileActivatedClass = 'nav-mobile-on',
			 mobileMenuOpen = true;

		var init = function(){
			// Close Mobile menu (if js is disabled the nav will still be visible)
			_classController('add', mobileActivatedClass);
			mobileMenuOpen = false;
			// mouse events are easy to detect and they're directly sent
			// to their relevant function.
			_addEvt(nav, 'mouseover', _openNav);
			_addEvt(nav, 'mouseleave', _closeNav);
			_addEvt(toggler, 'click', _toggleMobileNav);
		},
		_openNav = function(){
			_classController('add', openClass);
		},
		_closeNav = function(){
			_classController('remove', openClass);
		},
		_toggleMobileNav = function(){

			_classController('toggle', mobileOpenClass);
	
		},
		_addEvt = function(el, evt, callback){
				el.addEventListener(evt, callback, false);				
		},
		_classController = function(action, classNm){
			document.body.classList[action](classNm);
		};

		return {
			init : init
		};
	})();

	window.MoonwalkNav = MoonwalkNav;

})(document, window);
