$(document).ready( function(){

	//оброблювач натискання Range_Number, малює в віконечку обраний текст
	function handlMenuRangeNumber(event){
		switch($(event.target).text()){
			case "none":
				$("#Range_Number").val('');
				break;
			case "k(s)":
				$("#Range_Number").val('k(s)');
				break;
			case "mln(s)":
				$("#Range_Number").val('mln(s)');
				break;
			case "bil(s)":
				$("#Range_Number").val('bil(s)');
				break;
		}
	}
	//формуємо ховаємо/показуємо кнопку(меню) Range_Number
	$("#Range_Number").click(function(event){
		jQuery('<ul/>', {id: 'contextMenu'}).insertAfter('#Range_Number')
		.on("mousedown", function(event){	
			handlMenuRangeNumber(event);
		});
		
		$("#contextMenu").append("<li value=''>none</li>");
		$("#contextMenu").append("<hr>");
		$("#contextMenu").append("<li value='thousand'>k(s)</li>");
		$("#contextMenu").append("<hr>");
		$("#contextMenu").append("<li value='million'>mln(s)</li>");
		$("#contextMenu").append("<hr>");
		$("#contextMenu").append("<li value='billion'>bil(s)</li>");
	
		$("#contextMenu").slideDown("fast");
		
		$(window).on("mousedown", function(event){	
				$("#contextMenu").slideUp( 0 );
		})
		.on("scroll", function(event){	
				$("#contextMenu").slideUp( 0 );
		})
	})
	
	

})





























