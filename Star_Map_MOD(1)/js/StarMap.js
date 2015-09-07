$(document).ready( function(){
	
	$("#MainTableMap").click(function(event){	
		
		var sCase = event.target.parentNode.id;
		switch(sCase){
			case "A_One":
				$("#CentralPlanetFrame").attr("src", "PlanetFrames/Gallery(A_ONE)/PlanetGal.html");
				$("#CentralPlanetFrame").css("height", "600px");
				$("#closePlanet").css("height", "70px");
			break; 
			case "D_One":
				alert("D_One");
			break;
		}
	})
	
	
	$("#closePlanet").click(function(event){
		$("#CentralPlanetFrame").css("height", "0");
		$("#closePlanet").css("height", "0");
	})
})

function handler(event){
			var element = event.target.nextElementSibling; //знаходимо табличку
			var ParentID = element.parentNode.id; //знаходимо материнський айді
			var ParentElement = document.getElementById(ParentID); // знаходимо материнський дівіжн по айді
			
			if(ParentElement.offsetTop > 500){
				element.style.bottom="0";
			}
			else{
				element.style.top="0";
			}
			
			if(ParentElement.offsetLeft < 800){
				element.style.left="50px";
			}
			else{
				element.style.right="50px";
			}
			
			if(event.type == "mouseover"){
				element.style.height = "auto";
				element.parentElement.style.zIndex = "999";
			} 
			else if(event.type == "mouseout"){
				element.style.height = "0";
				element.parentElement.style.zIndex = "auto";
			}			
		}
		

		
		
		
		
		
		
		