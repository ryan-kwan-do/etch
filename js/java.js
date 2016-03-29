$(document).ready( function() {
	var startLoad = function() {
			var $i=0;
	
	while($i < 4 * 4) {	
	$('.wrapper').append("<div class='grid'></div>");
	$i++;	
	}
	var $n = 0;
	while($n < 4) {
		$('.lil_wrapper').append("<tr><td><div class='lil_grid'></div></td><td><div class='lil_grid'></div></td><td><div class='lil_grid'></div></td><td><div class='lil_grid'></div></td></tr>");
		$n++;
	}
	}
	var hoverEffect = function() {
		$('.grid').on('mouseenter', function () {
		$(this).addClass('highlight');
	});	
	}
	startLoad();
	hoverEffect();
	

	/*if you want to make the squares lose their highlight:
	$('.grid').on('mouseleave', function() {
		$(this).removeClass('highlight');
	});*/
	$('button').on('click', function() {
		$('.wrapper').empty();
		/*newBlocks is working properly */
		var newBlocks = +$('#enterInfo').val();
		/*var newHeight = $('grid').css({'height':($('.wrapper').height()+'px'}); */
		var $n = 0;
		
		while($n < (newBlocks * newBlocks)) {	
	$('.wrapper').append("<div class='grid'></div>");
	$n++;	
	}
	$('.grid').css('width', '' + $('.wrapper').height()/newBlocks +'px');
	$('.grid').css('height', ''+ $('.wrapper').height()/newBlocks +'px');
	hoverEffect();
	return false;

	
	});
		
	
	
});