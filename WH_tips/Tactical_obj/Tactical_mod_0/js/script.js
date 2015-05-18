document.addEventListener('DOMContentLoaded', function () {
	var CurrentTacticalArray; //active card array
	GetNewDeck_btn.onclick = CreateNewDeck;//forming new deck
	clearAll_btn.onclick = ResetDeck;//clearing the deck
	addNewPlayer_btn.onclick = AddPlayerFormPosition;//show add player dialogue form
		CancelAddingPlayer_btn.onclick = HideAddPlayerForm;//hide and clear addPlayer dialogue
	AddPlayer_btn.onclick = AddPlayer;
	//set object function for storage
	Storage.prototype.setObject = function(key, value) {
		this.setItem(key, JSON.stringify(value));
	}
	//get object function for storage
	Storage.prototype.getObject = function(key) {
		var value = this.getItem(key);
		return value && JSON.parse(value);
	}
	//beck up active array if it exists in a storage
	if(localStorage.TacticalObjArrayLocal){
		CurrentTacticalArray = localStorage.getObject('TacticalObjArrayLocal');
		document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
	}
	if(localStorage.LocalPlayerArray){
		var playerArrTMP = localStorage.getObject('LocalPlayerArray');
		for(var i = 0; i < playerArrTMP.length; i++){
			BuildPlayer(playerArrTMP[i]);
		}
	}

});
//hiding AddPlayer dialogue form
function HideAddPlayerForm(){
	document.getElementById('addNewPlayer_form').style.display = "none";
	document.getElementById('playerName').value = "";
}
//positioning AddPlayer form in a screen centre
function AddPlayerFormPosition(event){
	var AddPlayerForm = document.getElementById('addNewPlayer_form');
	AddPlayerForm.style.display = "block";
	AddPlayerForm.style.top = (window.innerHeight / 2) - 190 + "px";
	AddPlayerForm.style.left = (window.innerWidth / 2) - 190 + "px";
}

//localStorage.setItem('testObject', JSON.stringify(testObject));
//setting new deck in storage
function CreateNewDeck(){
	localStorage.setObject('TacticalObjArrayLocal', TacticalObjArray);
	CurrentTacticalArray = TacticalObjArray;
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
}
//killing arrays in storage/current
function ResetDeck(){
	//var alertItem = localStorage.getObject('TacticalObjArrayLocal');
	localStorage.removeItem("TacticalObjArrayLocal");
	localStorage.removeItem("LocalPlayerArray");
	document.getElementById("counterOfCards").innerHTML = 0;
	window.location.reload();
	
	CurrentTacticalArray = null;
}
// building a player
function AddPlayer(){
	var playerObj = { //creating new player object
		Name : document.getElementById("playerName").value,
		Key : new Date().getTime(),
		PlayerCardsArray : []
	};
	localStorage.getObject('LocalPlayerArray');
	if(!localStorage.getObject('LocalPlayerArray')){//if no local copy - create one
		var pArray = new Array();
		localStorage.setObject('LocalPlayerArray', pArray);
	}
	//changing local Player array and saving new player 
	var playerArrayTMP = localStorage.getObject('LocalPlayerArray', pArray);
	playerArrayTMP.push(playerObj);
	localStorage.setObject('LocalPlayerArray', playerArrayTMP);
	BuildPlayer(playerObj)//building player form
	HideAddPlayerForm();
	playerArrayTMP = null;
	playerObj = null;
}
//building player form
function BuildPlayer(playerObj){
	var newPlayerForm = document.createElement('div');
	newPlayerForm.setAttribute('class', 'PlayerForm');
	newPlayerForm.setAttribute('data-key', playerObj.Key);
	newPlayerForm.innerHTML =  "<div class='PlayerNameDisplay'>" + playerObj.Name + "</div>"
							  + "<div class='PlayerGetCard_btn'>Get Card</div>"
							  + "<div class='PlayerCardsPool'></div>"
							  + "</div>";
	document.getElementById("PlayersWrap").appendChild(newPlayerForm);
}










