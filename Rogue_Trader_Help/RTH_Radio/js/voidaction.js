//VOID ACTION MENU AND LISTENERS
function handleVoidManuver(event){
	var descriptionDiv = document.getElementById("description");
	var text = event.target.innerHTML;
	
	switch(text){
		case("Active Augury"):
			descriptionDiv.innerHTML =  arr[6];
			break;
		case("Aid the machine spirit"):
			descriptionDiv.innerHTML =  arr[7];
			break;
		case("Disinformation"):
			descriptionDiv.innerHTML =  arr[8];
			break;
		case("Emergency Repairs"):
			descriptionDiv.innerHTML =  arr[9];
			break;
		case("Flank Speed"):
			descriptionDiv.innerHTML =  arr[10];
			break;
		case("Focused Augury"):
			descriptionDiv.innerHTML =  arr[11];
			break;
		case("Hail the Enemy"):
			descriptionDiv.innerHTML =  arr[12];
			break;
		case("Hit and Run"):
			descriptionDiv.innerHTML =  arr[13];
			break;
		case("Hold Fast!"):
			descriptionDiv.innerHTML =  arr[14];
			break;
		case("Jam Communications"):
			descriptionDiv.innerHTML =  arr[15];
			break;
		case("Lock on Target"):
			descriptionDiv.innerHTML =  arr[16];
			break;
		case("Prepare to Repel Borders!"):
			descriptionDiv.innerHTML =  arr[17];
			break;
		case("Put Your Backs Into It!"):
			descriptionDiv.innerHTML =  arr[18];
			break;
		case("Triage"):
			descriptionDiv.innerHTML =  arr[19];
			break;
	}
}

function buildingVoidActionsMenu(){
	var parent = document.getElementById("menuSmall");
	var ul = document.createElement("ul");
	parent.appendChild(ul);
	
	createLI(ul, "Active Augury");
	createLI(ul, "Aid the machine spirit");
	createLI(ul, "Disinformation");
	createLI(ul, "Emergency Repairs");
	createLI(ul, "Focused Augury");
	createLI(ul, "Hail the Enemy");
	createLI(ul, "Hit and Run");
	createLI(ul, "Hold Fast!");
	createLI(ul, "Jam Communications");
	createLI(ul, "Lock on Target");
	createLI(ul, "Prepare to Repel Borders!");
	createLI(ul, "Put Your Backs Into It!");
	createLI(ul, "Triage");
	
	PuntHandleOnMenu(handleVoidManuver);
}