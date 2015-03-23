$(window).resize(function(){
	var windowWidth = $(window).width();
	if (windowWidth < 400) {
		$('.menuColumn').removeClass('col-xs-6');
	}else{
		$('.menuColumn').addClass('col-xs-6');
	}
});
$(window).load(function(){
	var windowWidth = $(window).width();
	if (windowWidth < 400) {
		$('.menuColumn').removeClass('col-xs-6');
	}else{
		$('.menuColumn').addClass('col-xs-6');
	}
});

var customCal = new calendar();