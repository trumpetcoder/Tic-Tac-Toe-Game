// linked app.js


var clickCount = 0;


$('td').click(function() {
	
	if ($(this).html() == "") {
		if ((clickCount % 2) == 0) {
			$(this).html('X').css({'color': 'blue', 'background': 'pink'});
			// insert winner logic couldn't get the || to work
			

			if($('#upLeft').html() == 'X' && $('#upMid').html() == 'X' && $('#upRight').html() == 'X')  {
				alert ('Winner is Player 1');
			}	
			if(($('#upLeft').html() == 'X' && $('#midLeft').html() == 'X' && $('#botLeft').html() == 'X')){
				alert ('Winner Player 1');
			}
			if(($('#upLeft').html() == 'X' && $('#mid').html() == 'X' && $('#botRight').html() == 'X')){
				alert ('Winner Player 1');
			}
			if(($('#upMid').html() == 'X' && $('#mid').html() == 'X' && $('#botMid').html() == 'X')){
				alert ('Winner Player 1');
			}
			if(($('#upRight').html() == 'X' && $('#midRight').html() == 'X' && $('#botRight').html() == 'X')){
				alert ('Winner Player 1');
			}
			if(($('#midLeft').html() == 'X' && $('#mid').html() == 'X' && $('#midRight').html() == 'X')){
				alert ('Winner Player 1');
			}
			if(($('#botLeft').html() == 'X' && $('#botMid').html() == 'X' && $('#botRight').html() == 'X')){
				alert ('Winner Player 1');
			}
			if(($('#botLeft').html() == 'X' && $('#mid').html() == 'X' && $('#upRight').html() == 'X')){
				alert ('Winner Player 1');
			}
				clickCount ++;
		
		} else {
			$(this).html('O').css({'color': 'black', 'background': 'yellow'});
			// insert winner logic couldn't get the || to work
				
			if($('#upLeft').html() == 'O' && $('#upMid').html() == 'O' && $('#upRight').html() == 'O')  {
				alert ('Winner is Player 2');
			}	
			if(($('#upLeft').html() == 'O' && $('#midLeft').html() == 'O' && $('#botLeft').html() == 'O')){
				alert ('Winner Player 2');
			}
			if(($('#upLeft').html() == 'O' && $('#mid').html() == 'O' && $('#botRight').html() == 'O')){
				alert ('Winner Player 2');
			}
			if(($('#upMid').html() == 'O' && $('#mid').html() == 'O' && $('#botMid').html() == 'O')){
				alert ('Winner Player 2');
			}
			if(($('#upRight').html() == 'O' && $('#midRight').html() == 'O' && $('#botRight').html() == 'O')){
				alert ('Winner Player 2');
			}
			if(($('#midLeft').html() == 'O' && $('#mid').html() == 'O' && $('#midRight').html() == 'O')){
				alert ('Winner Player 2');
			}
			if(($('#botLeft').html() == 'O' && $('#botMid').html() == 'O' && $('#botRight').html() == 'O')){
				alert ('Winner Player 2');
			}
			if(($('#botLeft').html() == 'O' && $('#mid').html() == 'O' && $('#upRight').html() == 'O')){
				alert ('Winner Player 2');
			}

				clickCount ++;
			

			}	
		}
});



$('#reset').click(function() {
   	$('.cell').html("").css('background', 'white');
   	clickCount = 0;
});
