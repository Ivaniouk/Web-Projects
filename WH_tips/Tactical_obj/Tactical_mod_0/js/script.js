document.addEventListener('DOMContentLoaded', function () {
	var CurrentTacticalArray;
	GetNewDeck_btn.onclick = CreateNewDeck;//forming new deck
	clearAll_btn.onclick = ResetDeck;//clearing the deck
	addNewPlayer_btn.onclick = AddPlayerFormPosition;//show add player dialogue form
		CancelAddingPlayer_btn.onclick = HideAddPlayerForm;//hide and clear addPlayer dialogue
	AddPlayer_btn.onclick = AddPlayerForm;
	Storage.prototype.setObject = function(key, value) {
		this.setItem(key, JSON.stringify(value));
	}

	Storage.prototype.getObject = function(key) {
		var value = this.getItem(key);
		return value && JSON.parse(value);
	}
	
	
	if(localStorage.TacticalObjArrayLocal){
		CurrentTacticalArray = localStorage.getObject('TacticalObjArrayLocal');
		document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
	}

});

function HideAddPlayerForm(){
	document.getElementById('addNewPlayer_form').style.display = "none";
	document.getElementById('playerName').value = "";
}

function AddPlayerFormPosition(event){
	var AddPlayerForm = document.getElementById('addNewPlayer_form');
	AddPlayerForm.style.display = "block";
	AddPlayerForm.style.top = (window.innerHeight / 2) - 190 + "px";
	AddPlayerForm.style.left = (window.innerWidth / 2) - 190 + "px";
}

//localStorage.setItem('testObject', JSON.stringify(testObject));
function CreateNewDeck(){
	localStorage.setObject('TacticalObjArrayLocal', TacticalObjArray);
	CurrentTacticalArray = TacticalObjArray;
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
}

function ResetDeck(){
	//var alertItem = localStorage.getObject('TacticalObjArrayLocal');
	localStorage.removeItem("TacticalObjArrayLocal");
	document.getElementById("counterOfCards").innerHTML = 0;
}

function AddPlayerForm(){
	var newPlayerForm = document.createElement('div');
	newPlayerForm.setAttribute('class', 'PlayerForm');
	newPlayerForm.innerHTML =  "<div class='PlayerNameDisplay'></div>"
							  + "<div class='PlayerGetCard_btn'>Get Card</div>"
							  + "<div class='PlayerCardsPool'></div>"
							  + "</div>";
	document.getElementById("PlayersWrap").appendChild(newPlayerForm);
	HideAddPlayerForm();
}











