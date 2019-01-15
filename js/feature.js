	$(window).scroll(function(){

		yScroll = $(window).scrollTop();

		if (yScroll > $('.first_section').offset().top) {
		$(".feature1").addClass('reveal');
		$(".feature2").addClass('reveal');
		
		}

		if (yScroll > $('.welcome_content').offset().top) {
		$(".feature3").addClass('reveal');
		$(".feature4").addClass('reveal');
		
		}

		if (yScroll > $('.splash').offset().top) {
		$(".feature5").addClass('reveal');
		$(".feature6").addClass('reveal');
		
		}

		if (yScroll > $('.map').offset().top ) {
		$(".feature7").addClass('reveal');
		$(".feature8").addClass('reveal');
		
		}



	});

	$(window).ready(function(){
				$('.menu').click(function(){
			$('.banner_container1').toggleClass('show_height');
			
		})

						$('.play_button').click(function(){
			$('video').css({'display':'block'});
			$('.play_button').css({'display':'none'});
			
		})


	});

	




		





