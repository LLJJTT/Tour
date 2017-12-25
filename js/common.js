//公用JS

mui.plusReady(function(){
	/*plus.navigator.setStatusBarBackground('#F7F7F7');*/
	if(mui('.mui-bar-nav')){
		mui('.mui-bar-nav')[0].style.paddingTop=Math.round(plus.navigator.getStatusbarHeight())+'px';
		mui('.mui-bar-nav')[0].style.height=44+Math.round(plus.navigator.getStatusbarHeight())+'px';
	}

	document.body.style.paddingTop=plus.navigator.getStatusbarHeight()+'px';
})