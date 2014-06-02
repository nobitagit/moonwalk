(function(document, window, undefined){
	
  "use strict";

  	var Utils = {
		// check if touch is supported
  		// see: http://stackoverflow.com/a/15439809/1446845
  		isTouch : (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))
  	};


	var MoonwalkNav = (function(){

		var nav = document.getElementById('Moonwalk-nav'),
			 toggler = document.getElementById('Moonwalk-toggle'),
			 cnt = document.getElementById('Moonwalk-cnt'),
			 openClass = 'nav-moonwalk-full',
			 mobileOpenClass = 'nav-mobile-open',
			 mobileActivatedClass = 'nav-mobile-on',
			 i,
			 // Defaults, overridable by the user
			 settings = {
			 	addTouchClass : false,
			 	touchClass : 'moonwalk-touch'
			 };

		var init = function(opts){
			// Close Mobile menu (if js is disabled the nav will still be visible)
			_classController('add', mobileActivatedClass);
			// mouse events are easy to detect and they're directly sent
			// to their relevant function.
			_addEvt(nav, 'mouseover', _openNav);
			_addEvt(nav, 'mouseleave', _closeNav);
			_addEvt(toggler, 'click', _toggleMobileNav);
			// if options are passed override default settings
			if(opts){ _updateOpts(opts); }
			// if addTouchClass is set to true add the touch class 
			_classController('add', settings.touchClass);
		},
		_updateOpts = function(opts){
			// iterate over the options passed and override default settings
			for ( i in opts ) {
				settings[i] = opts[i];
			}
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
