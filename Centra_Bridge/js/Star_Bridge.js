$(document).ready( function(){

	var element = ".MenuButtonMain";
		
	$(element).click(function(event){	
		var target = $(event.target);
		$(".MenuButtonMain").css({
			"background-color":"",
			"border-top": "0",
			"border-bottom": "0",
			"margin":"-3px 0 0 0"
		});
		target.css({
			"background-color":"#151515",
			"border-top": "3px solid white",
			"border-bottom": "3px solid white",
			"margin":"-3px 0 0 0"
		});
	})

	//{"background-color":"yellow","font-size":"200%"}
	$("#HeaderMenu li").click(function(event){
		var menu = event.target.innerText;
		
		switch(menu){
			case "MAIN":
				//$("#CentralMainFrame").css("height", "0");
				//$("#CentralMainFrame").attr("src", "");
				$("#CentralMainFrame").css("height", "0");
				$("#AllFuel").css("display", "none");
				$("#MainTable").css("display", "none");
				break;
			case "FUEL":
				$("#CentralMainFrame").css("height", "0");
				$("#MainTable").css("display", "none");
				$("#AllFuel").css("display", "block");
				break;
			case "SCAN":
				$("#CentralMainFrame").css("height", "0");
				$("#MainTable").css("display", "block");
				$("#AllFuel").css("display", "none");
				break;
			case "MAP":
				$("#CentralMainFrame").css("height", "700px");
				$("#CentralMainFrame").attr("src", "IFrames/Star_Map_MOD(1)/StarMap.html");
				$("#MainTable").css("display", "none");
				$("#AllFuel").css("display", "none");
				/*$("#CentralMainFrame").css("box-shadow", "4px -4px 137px 5px rgba(0,153,255,0.96)");*/
				//$("#CentralMainFrame").css("box-shadow", "none");
				break;
		}
	
	});
	
	
	
});