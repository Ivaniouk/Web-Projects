//Universal LI builder for menus
function createLI(parentUL, text){
	var li = document.createElement("li");
	li.innerHTML = "<li><label><input type='radio' name='radio2'><span>" + text +"</span></label></li>";//text;
	li.setAttribute("class", "ActionButton");
	parentUL.appendChild(li);
}
//Universal adding onclick listeners to menus
function PuntHandleOnMenu(handle){
	var ActionButtonArray = document.getElementsByClassName("ActionButton");
	for(var i = 0; i < ActionButtonArray.length; i++){
		ActionButtonArray[i].onclick = handle;
	}
}
//FLIGHT MENU AND LISTENERS
function handleTableMenu(event){
	var descriptionDiv = document.getElementById("description");
	var text = event.target.innerHTML;
	switch(text){
		case("Tank damage"):
			descriptionDiv.innerHTML =  arr[0];
			break;
		case("Building damage"):
			descriptionDiv.innerHTML =  arr[1];
			break;
		case("Warp perils"):
			descriptionDiv.innerHTML =  arr[2];
			break;
	}
}

function buildingTablesMenu(){
	var parent = document.getElementById("menuSmall");
	var ul = document.createElement("ul");
	parent.appendChild(ul);
	
	createLI(ul, "Tank damage");
	createLI(ul, "Building damage");
	createLI(ul, "Warp perils");	
	
	PuntHandleOnMenu(handleTableMenu);
}