(function(document, window, undefined){
	
  "use strict";

	var MoonwalkNav = (function(opts){

		var nav = document.getElementById('Moonwalk-nav'),
			 toggler = document.getElementById('Moonwalk-toggle'),
			 wideClass = 'nav-moonwalk-full',
			 toggleClass = 'nav-mobile-open';

		var init = function(){
			addEvt(nav, 'mouseover', 'add', wideClass);
			addEvt(nav, 'mouseleave', 'remove', wideClass);
			addEvt(nav, 'click', 'toggle', toggleClass);
		},
		addEvt = function(el, evt, action, classNm){
			el.addEventListener(evt, function(){
				document.body.classList[action](classNm);
			}, false);
		};

		return {
			init : init
		};
	})();

	window.MoonwalkNav = MoonwalkNav;

})(document, window);
