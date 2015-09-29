$(document).ready(function(){
	//Set Options
	var speed = 500;				// fade speed
	var autoSwitch = true;			// auto slider option
	var autoSwitch_speed = 4000;	// auto slider speed

	//Add initial active class
	$('.slide').first().addClass('active');

	//Hide all slides
	$('.slide').hide();

	//Show first slide
	$('.active').show();

	//Next slide function
	function nextSlide(){
		//Remove active class from image
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else{
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	//Prev slide function
	function prevSlide(){
		//Remove active class from image
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	//Event handler for next slider clicks
	$('#next').on('click', nextSlide);

	//Event handler for prev slider clicks
	$('#prev').on('click', prevSlide);

	//Auto Slider
	if(autoSwitch){
		setInterval(nextSlide, autoSwitch_speed);
	}

});