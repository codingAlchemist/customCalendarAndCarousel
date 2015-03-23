var index = 0;
function moveImgOneThroughImgs() {
	var x = $('#img_container0').offset().left;
	console.log("off set is" + x);
	setTimeout(function(){
		flipImgIndexBack('#img_container1','#img_container0');
		setTimeout(function(){
			$('#img_container0').addClass('img_Container5').removeClass('img_Container0');
			var y = $('#img_container0').offset().left;
			console.log("off set is" + y);
			$('#img_container0').animate({
				'left': y - 273
			},1000,function(){
				setTimeout(function(){
					$('#img_container0').animate({'left': y - 473},1000,function(){});
				},1000);
			});
		},1000);
	},1000);
}

function flipImgIndexBack(imgDiv1 , imgDiv2){
	$(imgDiv1).css('z-index','1');
	$(imgDiv2).css('z-index','2');
}
function flipImgIndexForward(imgDiv1 , imgDiv2){
	$(imgDiv1).css('z-index','2');
	$(imgDiv2).css('z-index','1');
}

//moveImgOneThroughImgs();
function algorithmTest(){
	index = (index % 5) + 1;
	var newIndex = (index % 5) +1; 
	var newIndex2 = (newIndex % 5) + 1;
	console.log("index ->"+index+" newIndex ->"+newIndex+" newIndex2 ->"+newIndex2); 
}

setInterval(function(){
	algorithmTest();
},1000);