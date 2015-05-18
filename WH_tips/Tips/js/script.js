window.onload = function(){	
	var menu = document.getElementsByTagName("span");;
	for(var i = 0; i < menu.length; i++){
		menu[i].onclick = mainMenuHandle;
	}
	buildingTablesMenu();
}

function mainMenuHandle(event){
	var menu = document.getElementById("menuSmall").children[0];
	if(menu){
		menu.parentNode.removeChild(menu);
	}
	document.getElementById("description").innerHTML = "";
	var text = event.target.innerHTML;
	switch(text){
		case("Tables"):
			buildingTablesMenu();
			break;
		case("IG Orders"):
			buildingVoidActionsMenu();
			break;
	}
}







/*********************************************************************/

//apostrophe &#8217;
// - &#45; 
//" &#34;


























