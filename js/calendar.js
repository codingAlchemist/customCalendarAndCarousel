var calendar = function(Month){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var day_name = today.getDay();
	var yyyy = today.getFullYear();
	

	console.log('Today is ' + today);

	$('<div/>',{
		id: 'calendar'
	}).appendTo('body');
	
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	$('<div/>',{
		id:'month'
	}).appendTo('#calendar').addClass('month');
	//$('#month').text(months[mm]);

	$('<div/>',{
		id: 'day_row'
	}).appendTo('#calendar');

	for (var i = 0; i < days.length; i++) {
		$('<div/>',{
			id : 'weekday' + i
		}).appendTo('#day_row').addClass('weekday').text(days[i]);
	};

	$('<div/>',{
		id:'calendar_body'
	}).appendTo('#calendar');


	for (var i = 1; i < 43; i++) {
		if (i % 7 == 0) {
			
			$('<div/>',{
				id: 'day' + i
			}).appendTo('#calendar_body').addClass('day');
			$('<br/>',{
			}).appendTo('#calendar_body');

		}else{
			
			$('<div/>',{
				id: 'day' + i
			}).appendTo('#calendar_body').addClass('day');

		}

		if (i == dd) {
			$('#day'+i).removeClass('day').addClass('current_day');
		};
	}	
	var setYear = 2015;
	var setMonth = 1;
	var setDay = 1;

	var test = new Date(setYear,setMonth +1,setDay);
	var theDay = test.getDay();
	var dayNamed = days[theDay];
	var dayNum = Math.round((test - new Date(test.getFullYear(),test.getMonth()-1))/8640000) / 10;
	var dayInc = 0;

	$('#month').text(months[setMonth]);
	console.log("number of days ->"+dayNum);
	console.log("the day will be " + dayNamed);
	
	for (var i = theDay+1; i <= dayNum + theDay; i++) {
		dayInc = dayInc + 1;
		$('#day'+i).text(dayInc);
	};

	$('<div/>',{
		id: 'calendar_mobile'
	}).appendTo('body');
	
}

$(window).resize(function(){
	var windowWidth = $(window).width();
	if (windowWidth < 767) {
		$('#calendar_mobile').css('display', 'block');
		$('#calendar').css('display','none');
		// for (var i = 0; i < 7; i++) {
		// 	$('.weekday' + i).
		// };
	}else{
		$('#calendar_mobile').css('display', 'none');
		$('#calendar').css('display','block');
	}
});

$(window).load(function(){
	var windowWidth = $(window).width();
	if (windowWidth < 767) {
		$('#calendar_mobile').css('display', 'block');
		$('#calendar').css('display','none');
		// for (var i = 0; i < 7; i++) {
		// 	$('.weekday' + i).
		// };
	}else{
		$('#calendar_mobile').css('display', 'none');
		$('#calendar').css('display','block');
	}
});

test
