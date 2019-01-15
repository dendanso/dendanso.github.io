var elementCount = 5;
var current = 1;
var move = 0;
var value = 400;

	$(document).ready(function(){
		$('#arrow2').click(function(){

			if (current < elementCount) {

				move+=value;

				$('.slide').css({'transform':'translateX(-'+move+'px)'});

				if (current==1) {

					$('.pearl_bio').css({'visibility':'hidden'});
					$('.pearl_bio').css({'opacity':'0'});
					$('.esi_bio').css({'visibility':'visible'});
					$('.esi_bio').css({'opacity':'1'});

				}

				if (current==2) {

					$('.esi_bio').css({'visibility':'hidden'});
					$('.esi_bio').css({'opacity':'0'});
					$('.carl_bio').css({'visibility':'visible'});
					$('.carl_bio').css({'opacity':'1'});

				}

				if (current==3) {

					$('.carl_bio').css({'visibility':'hidden'});
					$('.carl_bio').css({'opacity':'0'});
					$('.brian_bio').css({'visibility':'visible'});
					$('.brian_bio').css({'opacity':'1'});

				}

				if (current==4) {

					$('.brian_bio').css({'visibility':'hidden'});
					$('.brian_bio').css({'opacity':'0'});
					$('.ekow_bio').css({'visibility':'visible'});
					$('.ekow_bio').css({'opacity':'1'});

				}
				current++;
			}else{
				current=1;
				move=0;

				$(".slide").css(

				'transform' , 'translateX('+move+'%)'
				);

				$('.ekow_bio').css({'visibility':'hidden'});
				$('.ekow_bio').css({'opacity':'0'});
				$('.pearl_bio').css({'visibility':'visible'});
				$('.pearl_bio').css({'opacity':'1'});
			}



		});

		$('#arrow1').click(function(){

			if(current > 0 < 6 ){
				move-=value;

				$('.slide').css({'transform':'translateX(-'+move+'px)'})

				if (current==2) {

					$('.brian_bio').css({'visibility':'hidden'});
					$('.brian_bio').css({'opacity':'0'});
					$('.ekow_bio').css({'visibility':'hidden'});
					$('.ekow_bio').css({'opacity':'0'});
					$('.esi_bio').css({'visibility':'hidden'});
					$('.esi_bio').css({'opacity':'0'});
					$('.carl_bio').css({'visibility':'hidden'});
					$('.carl_bio').css({'opacity':'0'});
					$('.pearl_bio').css({'visibility':'visible'});
					$('.pearl_bio').css({'opacity':'1'});

				}

					if (current==3) {

					$('.brian_bio').css({'visibility':'hidden'});
					$('.brian_bio').css({'opacity':'0'});
					$('.ekow_bio').css({'visibility':'hidden'});
					$('.ekow_bio').css({'opacity':'0'});
					$('.carl_bio').css({'visibility':'hidden'});
					$('.carl_bio').css({'opacity':'0'});
					$('.esi_bio').css({'visibility':'visible'});
					$('.esi_bio').css({'opacity':'1'});
					$('.pearl_bio').css({'visibility':'hidden'});
					$('.pearl_bio').css({'opacity':'0'});

				}

				if (current==4) {
						
					$('.brian_bio').css({'visibility':'hidden'});
					$('.brian_bio').css({'opacity':'0'});
					$('.ekow_bio').css({'visibility':'hidden'});
					$('.ekow_bio').css({'opacity':'0'});
					$('.carl_bio').css({'visibility':'visible'});
					$('.carl_bio').css({'opacity':'1'});
					$('.esi_bio').css({'visibility':'hidden'});
					$('.esi_bio').css({'opacity':'0'});
					$('.pearl_bio').css({'visibility':'hidden'});
					$('.pearl_bio').css({'opacity':'0'});

				}

				if (current==5) {
						
					$('.brian_bio').css({'visibility':'visible'});
					$('.brian_bio').css({'opacity':'1'});
					$('.ekow_bio').css({'visibility':'hidden'});
					$('.ekow_bio').css({'opacity':'0'});
					$('.carl_bio').css({'visibility':'hidden'});
					$('.carl_bio').css({'opacity':'0'});
					$('.esi_bio').css({'visibility':'hidden'});
					$('.esi_bio').css({'opacity':'0'});
					$('.pearl_bio').css({'visibility':'hidden'});
					$('.pearl_bio').css({'opacity':'0'});

				}




					current--;

			}

			
			

		});

		$('.face ').mouseover(function(){

			$('.pop-up').css({'opacity':'1'})
		});

		$('.face ').mouseleave(function(){

			$('.pop-up').css({'opacity':'0'})
		});

		$('.tweet ').mouseover(function(){

			$('.pop-up1').css({'opacity':'1'})
		});

		$('.tweet ').mouseleave(function(){

			$('.pop-up1').css({'opacity':'0'})
		});

		$('.insta img').mouseover(function(){

			$('.pop-up2').css({'opacity':'1'})
		});

		$('.insta img').mouseleave(function(){

			$('.pop-up2').css({'opacity':'0'})
		});

		//brians mouseover

		$('.brian_face').mouseover(function(){

			$('.pop-up_brian').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.brian_face ').mouseleave(function(){

			$('.pop-up_brian').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.brian_tweet').mouseover(function(){

			$('.pop-up_brian_tweet').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.brian_tweet').mouseleave(function(){

			$('.pop-up_brian_tweet').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.brian_insta').mouseover(function(){

			$('.pop-up_brian_insta').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.brian_insta').mouseleave(function(){

			$('.pop-up_brian_insta').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		//pearl mouseover

		$('.pearl_face').mouseover(function(){

			$('.pop-up_pearl').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.pearl_face ').mouseleave(function(){

			$('.pop-up_pearl').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.pearl_tweet').mouseover(function(){

			$('.pop-up_pearl_tweet').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.pearl_tweet').mouseleave(function(){

			$('.pop-up_pearl_tweet').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.pearl_insta').mouseover(function(){

			$('.pop-up_pearl_insta').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.pearl_insta').mouseleave(function(){

			$('.pop-up_pearl_insta').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		//Esi mouseover

		$('.esi_face').mouseover(function(){

			$('.pop-up_pearl').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.esi_face ').mouseleave(function(){

			$('.pop-up_pearl').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.esi_tweet').mouseover(function(){

			$('.pop-up_pearl_tweet').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.esi_tweet').mouseleave(function(){

			$('.pop-up_pearl_tweet').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.esi_insta').mouseover(function(){

			$('.pop-up_pearl_insta').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.esi_insta').mouseleave(function(){

			$('.pop-up_pearl_insta').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		//Carl mouseover

		$('.carl_face').mouseover(function(){

			$('.pop-up_pearl').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.carl_face ').mouseleave(function(){

			$('.pop-up_pearl').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.carl_tweet').mouseover(function(){

			$('.pop-up_pearl_tweet').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.carl_tweet').mouseleave(function(){

			$('.pop-up_pearl_tweet').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.carl_insta').mouseover(function(){

			$('.pop-up_pearl_insta').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.carl_insta').mouseleave(function(){

			$('.pop-up_pearl_insta').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		//Ekow mouseover

		$('.ekow_face').mouseover(function(){

			$('.pop-up_pearl').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.ekow_face ').mouseleave(function(){

			$('.pop-up_pearl').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.ekow_tweet').mouseover(function(){

			$('.pop-up_pearl_tweet').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.ekow_tweet').mouseleave(function(){

			$('.pop-up_pearl_tweet').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.ekow_insta').mouseover(function(){

			$('.pop-up_pearl_insta').css({

				'visibility':'visible',
				'transform':'scale(1)'


			})
		});

		$('.ekow_insta').mouseleave(function(){

			$('.pop-up_pearl_insta').css({


				'visibility':'hidden',
				'transform':'scale(0)'


			})
		});

		$('.menu1').click(function(){
			$('.banner_dark1').toggleClass('show');
		})

		$('.menu1').click(function(){
			$('nav ul li ').each(function(i){

				setTimeout(function(){
					$('nav ul li').eq(i).toggleClass('menu_reveal');
				}, 150 * (i+1));
			})

		})

		






	});