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

//"<li><label><input type='radio' name='radio1' checked><span>" + text +"</span></label></li>"

//FLIGHT MENU AND LISTENERS
function handleFlightMenu(event){
	var descriptionDiv = document.getElementById("description");
	var text = event.target.innerHTML;
	switch(text){
		case("Adjust bearing"):
			descriptionDiv.innerHTML =  arr[0];
			break;
		case("Adjust speed"):
			descriptionDiv.innerHTML =  arr[1];
			break;
		case("Adjust speed and bearing"):
			descriptionDiv.innerHTML =  arr[2];
			break;
		case("Come to new heading"):
			descriptionDiv.innerHTML =  arr[3];
			break;
		case("Disengage"):
			descriptionDiv.innerHTML =  arr[4];
			break;
		case("Evasive Manoeuvres"):
			descriptionDiv.innerHTML =  arr[5];
			break;
	}
}

function buildingFlightMenu(){
	var parent = document.getElementById("menuSmall");
	var ul = document.createElement("ul");
	parent.appendChild(ul);
	
	createLI(ul, "Adjust bearing");
	createLI(ul, "Adjust speed");
	createLI(ul, "Adjust speed and bearing");
	createLI(ul, "Come to new heading");
	createLI(ul, "Disengage");
	createLI(ul, "Evasive Manoeuvres");
	
	PuntHandleOnMenu(handleFlightMenu);
}