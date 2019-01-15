	
	var elementCount = 3;
	var move = 0;
	var value = 2;
	var current = 1;

	$(document).ready(function() {

		

		function slide(){

		if (current < elementCount) {
			

			$('.banner_img3').css({

				
				'opacity':move

			});

			$('.circle1').css({

				
				'background':'rgba(0,0,0,0)',
				

			});

			

			if (current ==2) {

					$('.banner_img2').css({

				
				'opacity':move,



			});

			$('.circle2').css({

				
				'background':'rgba(0,0,0,0)',
				

			});

			$('.circle3').css({

				
				'background':'rgba(255,255,255,1)',
				

			});

			}else{
				$('.banner_img2').css({

				
				'opacity':'1'


			});
				$('.circle2').css({

				
				'background':'rgba(255,255,255,1)',
				

			});

			}
			current++;

		}else{
			
			current=1;
			
			$('.banner_img3').css({

				
				'opacity':'1'

			});

			$('.circle1').css({

				
				'background':'rgba(255,255,255,1)',
				

			});

			$('.circle3').css({

				
				'background':'rgba(0,0,0,0)',
				

			});


			


		}

		

		}

		var replay = setInterval(slide,4000);

		          //click functions
		
		$('.circle1').click(function(){

			current=1;

			$('.banner_img3').css({

				
				'opacity':'1'

			});

			$(this).css({

				
				'background':'rgba(255,255,255,1)',
				

			});

			$('.circle2,circle3').css({

				
				'background':'rgba(0,0,0,0)',
				

			});

			


		});

		$('.circle2').click(function(){

			current=2;

			$('.banner_img3').css({

				
				'opacity':move

			});

				$('.banner_img2').css({

				
				'opacity':'1'

			});

			$(this).css({

				
				'background':'rgba(255,255,255,1)',
				

			});

			$('.circle1,.circle3').css({

				
				'background':'rgba(0,0,0,0)',
				

			});





		});

		$('.circle3').click(function(){
			current=3;
			$('.banner_img3').css({

				
				'opacity':move

			});

				$('.banner_img2').css({

				
				'opacity':move

			});

			$(this).css({

				
		 		'background':'rgba(255,255,255,1)',
				

			});

			$('.circle1,.circle2').css({

				
				'background':'rgba(0,0,0,0)',
				

			});

		});

		$('.video_container svg').click(function(){
			$('.video_container').css({

				
				'opacity':'0',
				'visibility': 'hidden'

			});

			$('video')[0].pause();
			

			
		})
		$('.video_poster').click(function(){

			$('.video_container').css({

				
				'opacity':'1',
				'visibility': 'visible'


			});

			

			setTimeout(function(){

				$('#try1').attr('transform','rotate(45 60 100)');

				$('#try').attr('transform','rotate(-45 60 100)');



			}, 1000);
				

			});

		$('.menu').click(function(){
			$('nav ul li ').each(function(i){

				setTimeout(function(){
					$('nav ul li').eq(i).toggleClass('menu_reveal');
				}, 150 * (i+1));
			})

		})

		$('.menu').click(function(){
			$('.banner_dark').toggleClass('show');
		})

			


			




		
	});


