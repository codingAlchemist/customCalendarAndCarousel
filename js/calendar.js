var calendar = function(Month){

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	
	var today = new Date();
	var dd = today.getDate();
	var mm;
	if (Month == "" ) {
		console.log("month is null");
		mm = today.getMonth();
	}else{
		console.log("month = " + Month);
		mm = Month;
	}
	
	var day_name = today.getDay();
	var yyyy = today.getFullYear();

	var startDay = new Date(2015,mm,1);	
	
	$('<div/>',{
		id: 'calendar'
	}).appendTo('#theCalendar');
	
	
	$('<div/>',{
		id:'month'
	}).appendTo('#calendar').addClass('month');
	$('#month').text(months[mm]);

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
		
	var theDay = startDay.getDay();
	var dayNamed = days[theDay];
	var dayInc = 0;

	function daysInMonth(month,year){
		return new Date(year,month,0).getDate();
	}

	var dayNum = daysInMonth(mm+1,yyyy);

	for (var i = startDay.getDay()+1; i <= dayNum + theDay; i++) {
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
	}else{
		$('#calendar_mobile').css('display', 'none');
		$('#calendar').css('display','block');
	}
});


