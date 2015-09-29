$(document).ready( function(){
	$("#planetMenu .MenuButton").click(function(event){
		var menu = event.target.attributes.number.value;
		
		switch(menu){
			case "1":
				$("#centralFrame").attr ("src", "planetHTML/1.html" );
				break;
			case "2":
				$("#centralFrame").attr ("src", "planetHTML/2.html" );
				break;
			case "3":
				$("#centralFrame").attr ("src", "planetHTML/3.html" );
				break;
			case "4":
				$("#centralFrame").attr ("src", "planetHTML/4.html" );
				break;
			case "5":
				$("#centralFrame").attr ("src", "planetHTML/5.html" );
				break;
		}
	});
});

























