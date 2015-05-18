window.onload = function(){	
	var menu = document.getElementsByTagName("span");;
	for(var i = 0; i < menu.length; i++){
		menu[i].onclick = mainMenuHandle;
	}
	buildingFlightMenu();
}

function mainMenuHandle(event){
	var menu = document.getElementById("menuSmall").children[0];
	if(menu){
		menu.parentNode.removeChild(menu);
	}
	document.getElementById("description").innerHTML = "";
	var text = event.target.innerHTML;
	switch(text){
		case("Void Piloting"):
			buildingFlightMenu();
			break;
		case("Void Actions"):
			buildingVoidActionsMenu();
			break;
		case("Void Travel"):
			break;
		case("Fenomena"):
			break;
	}
}







/*********************************************************************/

//" &#8217;
// - &#45; 


























