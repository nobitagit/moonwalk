(function(document, window, undefined){
	
  "use strict";

	var MoonwalkNav = (function(opts){

		var nav = document.getElementById('Moonwalk-nav'),
			 toggler = document.getElementById('Moonwalk-toggle'),
			 cnt = document.getElementById('Moonwalk-cnt'),
			 wideClass = 'nav-moonwalk-full',
			 toggleClass = 'nav-mobile-open';
		var init = function(){
			// mouse events are easy to detect and they're directly sent
			// to their relevant function.
			addEvt(nav, 'mouseover', 'add', wideClass);
			addEvt(nav, 'mouseleave', 'remove', wideClass);
			addEvt(nav, 'click', 'toggle', toggleClass);
		},
		addEvt = function(el, evt, action, classNm){
				el.addEventListener(evt, classController.bind(null, action, classNm), false);				
		},
		classController = function(action, classNm){
			document.body.classList[action](classNm);
		};

		return {
			init : init
		};
	})();

	window.MoonwalkNav = MoonwalkNav;

})(document, window);
