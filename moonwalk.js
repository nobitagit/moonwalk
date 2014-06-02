(function(document, window, undefined){
	
  "use strict";

  	var Utils = {
  		// see: http://stackoverflow.com/a/15439809/1446845
  		isTouch : (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)),
  		speedDelta : function(a, b){
  			if ( (a - b) > 20 ){
  				return 'left';
  			} else if( (b - a ) > 20 ){
				return 'right';
  			}

  		}
  	}

	var MoonwalkNav = (function(opts){

		var nav = document.getElementById('Moonwalk-nav'),
			 toggler = document.getElementById('Moonwalk-toggle'),
			 cnt = document.getElementById('Moonwalk-cnt'),
			 wideClass = 'nav-moonwalk-full',
			 toggleClass = 'nav-mobile-open',
			 touchEvt = {},

			 action, classNm;

		var init = function(){
			// mouse events are easy to detect and they're directly sent
			// to their relevant function.
			_addEvt(nav, 'mouseover', 'add', wideClass);
			_addEvt(nav, 'mouseleave', 'remove', wideClass);
			_addEvt(nav, 'click', 'toggle', toggleClass);

			// touch evts are treated differently, we need a few checks before 
			// starting the animation. Is the user trying to open the menu or
			// is he just scrolling?
			cnt.addEventListener('touchstart', _checkTouchStart, false);
			cnt.addEventListener('touchend', _checkTouchEnd, false);

		},
		_checkTouchStart = function(evt){
			// cache time and coords of the event
			touchEvt.start = {
				t : evt.timeStamp, // timing
				x : evt.touches[0].clientX,
				y : evt.touches[0].clientY
			}
		},
		_checkTouchEnd = function(evt){
			touchEvt.end = {
				t : evt.timeStamp, // timing
				x : evt.changedTouches[0].clientX,
				y : evt.changedTouches[0].clientY
			};
			
			_touchAction();

				// var speed = ( Math.abs( swipeStartX - swipeEndX ) )/ ( ts2 - ts1 );
				// console.log(speed)
				// if ( Utils.calcDelta(swipeStartX, swipeEndX) === 'right' ) {
				// 	document.body.classList.add(wideClass);
				// } else if ( Utils.calcDelta(swipeStartX, swipeEndX) === 'left' ) {
				// 	document.body.classList.remove(wideClass);
				// }
		},
		_isSwipingX = function(){
			// check whether the user intent is to open the menu
			// or if he's scrolling the page, i.e. the movement
			// is on the x axis rather than in the the y axis. 
			return (touchEvt.start.x + touchEvt.end.x) > (touchEvt.start.y + touchEvt.end.y) ? true :  false;
		},
		_swipeDir = function(){

		},
		_hasIntent = function(){
			var speed = Math.abs( (touchEvt.start.x - touchEvt.end.x  ) / ( touchEvt.start.t - touchEvt.end.t ) );
			console.log(speed);
			return ( speed > 0.04 ) ? true : false;
		},
		_touchAction = function(){
			// continue only after checking if the user *really* wants to open the menu
			if ( _isSwipingX() &&  _hasIntent() ){
				console.log('open or close nav');
			}
		},
		_addEvt = function(el, evt, action, classNm){
				el.addEventListener(evt, _classController.bind(null, action, classNm), false);				
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
