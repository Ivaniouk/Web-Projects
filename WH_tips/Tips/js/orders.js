//VOID ACTION MENU AND LISTENERS
function handleOrdersMenu(event){
	var descriptionDiv = document.getElementById("description");
	var text = event.target.innerHTML;
	
	switch(text){
		case("Standard"):
			//alert("here");
			descriptionDiv.innerHTML = ordersArr[0];
			break;
		case("Senior"):
			descriptionDiv.innerHTML =  ordersArr[1];
			break;
	}
}

function buildingVoidActionsMenu(){
	var parent = document.getElementById("menuSmall");
	var ul = document.createElement("ul");
	parent.appendChild(ul);
	
	createLI(ul, "Standard");
	createLI(ul, "Senior");
	
	PuntHandleOnMenu(handleOrdersMenu);
}