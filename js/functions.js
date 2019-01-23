$(window).scroll(function(){

	yScroll = $(window).scrollTop();
	var moveit = Math.min(0, (yScroll -($('.cars').offset().top)) + $(window).height()-500);

	if (yScroll > $('.big_idea').offset().top) {
		$(".description1").addClass('reveal');
		$(".brief_description h2").css({
			'opacity':'1'
		})
	}

	if (yScroll > $('.buildings_container').offset().top) {
		$(".description").addClass('reveal');
		$(".brief_description h1").css({
			'opacity':'1',
			'transform': 'translateY(0px)'
		})
	}

	if (yScroll > $('.brief_description h2').offset().top) {
		$(".trans1,.sub_trans2").addClass('reveal');
		$(".arrow").addClass('revealX');
		$(".fares").css({
			'opacity':'1',
			'transform': 'translateY(0px)'
		})

		$(".stk1").addClass('motion_lines');
		$(".stk2").addClass('motion_lines');
		$(".arrow2").addClass('reveal');
		$(".fuel_container").css({
			'opacity':'1',
			'transform': 'translateY(0px)'
		})
		$(".fuel_arrow").addClass('reveal');

	}

	if (yScroll > $('.sub_trans2').offset().top) {
		$(".traffic h1").addClass('reveal');
		$(".traffic p").addClass('reveal');
		

	}

	if (yScroll > $('.traffic h1').offset().top) {
		$(".pollute_container h1").addClass('reveal');
		$(".pollute_sub").addClass('reveal');
		$(".smoke").addClass('reveal');
		$('.content3').css({'background-image':'linear-gradient(180deg, grey, white)'})

		

	}

	if (yScroll > $('.pollute_container').offset().top) {
		$(".wait_container h1").addClass('reveal');
		$(".local_sub").addClass('reveal');
		

	}

		if (yScroll > $('.blue_content').offset().top - $(window).height()) {
		$(".blue_content h1").addClass('reveal');
		
		

	}

	if (yScroll > $('.big_idea').offset().top - $(window).height()) {
			$('.bus').css({
				'transform':'translateX('+ moveit/4 +'px)'
			})

			$('.beatle').css({
				'transform':'translateX('+ moveit/6 +'px)'
			})

			$('.saloon').css({
				'transform':'translateX('+ moveit/2 +'px)'
			})

	}

	if (yScroll > $('.cars_container').offset().top - $(window).height()) {
			$('.bus').css({
				'transform':'translateX('+ moveit +'px)'
			})

			$('.beatle').css({
				'transform':'translateX('+ moveit +'px)'
			})

			$('.saloon').css({
				'transform':'translateX('+ moveit +'px)'
			})

	}


});