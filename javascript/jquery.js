$(document).ready(function(){
	$('.photo').hover(function(){
		$('.photo').toggleClass('photo-hover');
	})

	$('.photo').click(function(){
		$('#no-main').fadeToggle(500, function(){$('#no-mail');});
	});

});

