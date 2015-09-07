$(document).ready( function(){

	jQuery('<div/>', {id: 'A_Two'}).append('body')
		.css({
		"position-color":"#absolute",
		"top":"75px",
		"left":"75px"
		});
	
	$("#A_Two").append("<img class='starImgGold' src='img/Star.png' onmouseover='handler(event)' onmouseout='handler(event)' alt='ErrorOne' title='A_One'/>");
		

})