$(document).ready(function(){
	$("body").scroll(function(){
		if ($(this).scrollTop() > 1){  
			$('.menu').addClass("active");
			$('.kirpich__link').addClass("active__link");
		}
		else{
			$('.menu').removeClass("active");
			$('.kirpich__link').removeClass("active__link");
		}
	});
});
