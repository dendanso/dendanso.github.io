	$(document).ready(function(){

		$('nav ul li:nth-child(4)').click(function(){

			$('html,body').animate({
				scrollTop: $('.content').offset().top + 250
			},2000,);

		});

		$('.menu1').click(function(){
			$('.banner_container1').toggleClass('drop');
		})

		

	});

	




		





