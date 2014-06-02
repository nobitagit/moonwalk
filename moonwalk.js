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
			 open = true,
			 i,
			 // Defaults, overridable by the user
			 settings = {
			 	addTouchClass : false,
			 	touchClass : 'moonwalk-touch'
			 };

		var init = function(opts){

			// if options are passed override default settings
			if(opts){ _updateOpts(opts); }

			// Close Mobile menu (if js is disabled the nav will still be visible)
			_classController('add', mobileActivatedClass);
			open = false;

			// It's useless and wasteful to track events if they're not supported
			// so we try to add event listeners only when needed. 
			if ( !Utils.isTouch) {
				// if touch is supported we're not interested in hover states, so we
				// add listeners for mouse events only where they're needed
				_addEvt(nav, 'mouseover', _openNav);
				_addEvt(nav, 'mouseleave', _closeNav);
				_addEvt(toggler, 'click', _toggleMobileNav);				
			}
			// listen to click/tap on toggler in any case
			_addEvt(toggler, 'click', _toggleMobileNav);

			if ( Utils.isTouch && settings.addTouchClass ) { 
				_classController('add', settings.touchClass);
			}
		},
		_updateOpts = function(opts){
			// iterate over the options passed and override default settings
			for ( i in opts ) {
				settings[i] = opts[i];
			}
		},
		_openNav = function(){
			_classController('add', openClass);
			open = true;
		},
		_closeNav = function(){
			_classController('remove', openClass);
			open = false;
		},
		_toggleMobileNav = function(){
			_classController('toggle', mobileOpenClass);
			if(open){ 
				_closeNav();
			} else{
				_openNav();
			}
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
