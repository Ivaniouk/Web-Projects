document.addEventListener('DOMContentLoaded', function () {
	//var CurrentTacticalArray; //active card array
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
	if(localStorage.getObject('TacticalObjArrayLocal')){
		var CurrentTacticalArray = localStorage.getObject('TacticalObjArrayLocal');
		document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
	}
	//building players on load
	if(localStorage.getObject('LocalPlayerArray')){
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
	var CurrentTacticalArray = TacticalObjArray;
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
}
//killing arrays in storage/current
function ResetDeck(){
	//var alertItem = localStorage.getObject('TacticalObjArrayLocal');
	localStorage.removeItem("TacticalObjArrayLocal");
	localStorage.removeItem("LocalPlayerArray");
	document.getElementById("counterOfCards").innerHTML = 0;
	window.location.reload();	
	//CurrentTacticalArray = null;
}
// building a player
function AddPlayer(){
	var playerObj = { //creating new player object
		Name : document.getElementById("playerName").value,
		Key : new Date().getTime(),
		PlayerCardsArray : []
	};
	
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
//<div class='PoolCard'></div>
function BuildPlayer(playerObj){
	var newPlayerForm = document.createElement('div');
	newPlayerForm.setAttribute('class', 'PlayerForm');
	newPlayerForm.setAttribute('data-key', playerObj.Key);
	newPlayerForm.innerHTML =  "<div class='PlayerNameDisplay'>" + playerObj.Name + "</div>"
							  + "<div class='PlayerGetCard_btn'>Get Card</div>";
								var newPlayerCardPool = document.createElement('div');
								newPlayerCardPool.setAttribute('class', 'PlayerCardsPool');
								if(playerObj.PlayerCardsArray != null){
									var newPlayerCardPool = document.createElement('div');
									newPlayerCardPool.setAttribute('class', 'PlayerCardsPool');
									var newCard;
									for(var i = 0; i < playerObj.PlayerCardsArray.length; i++){
										newCard = document.createElement('div');
										newCard.setAttribute('class', 'PoolCard');
										newCard.innerHTML = playerObj.PlayerCardsArray[i].Text;
										newPlayerCardPool.appendChild(newCard);
										newCard = null;
									}
									newPlayerForm.appendChild(newPlayerCardPool);
								}
								else{
									newPlayerForm.appendChild(newPlayerCardPool);
								}
	document.getElementById("PlayersWrap").appendChild(newPlayerForm);
	var buttonArr = document.getElementsByClassName("PlayerGetCard_btn");
	for(var i = 0; i < buttonArr.length; i++){
		buttonArr[i].onclick = getCardHandle;
	}
}
//return random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//remove player form
function KillPlayerForm(playerID){
	var playerArr = document.getElementsByClassName("PlayerForm");
	for(var i = 0; i < playerArr.length; i++){
		if(playerArr[i].getAttribute('data-key') == playerID){
			playerArr[i].remove(); // remove players form from the page
		}
	}
}
//TODO
//GetCard listener
function getCardHandle(event){
	var playerObjTMP; // objec for rebuilding a player
	var CurrentTacticalArray = localStorage.getObject('TacticalObjArrayLocal'); //get base card deck fro storage
	var rand = getRandomInt(0, CurrentTacticalArray.length); //getting random int
	var pArrayTMP = localStorage.getObject('LocalPlayerArray'); // get all players from storage
	var divActiveDataKey = event.target.parentNode.getAttribute('data-key');// get key of current player
	for(var i = 0; i < pArrayTMP.length; i++){
		if(pArrayTMP[i].Key == divActiveDataKey){
			pArrayTMP[i].PlayerCardsArray.push(CurrentTacticalArray[rand]); //add new cart to active players cardArray
			localStorage.setObject('LocalPlayerArray', pArrayTMP); //renew data in players array 
			playerObjTMP = pArrayTMP[i]; // save active player object
			break;
		}
	}
	KillPlayerForm(playerObjTMP.Key); // remove old player form from the page
	BuildPlayer(playerObjTMP); // rebuld player with new card
	CurrentTacticalArray.splice(rand, 1); // remove card from base deck 
	localStorage.setObject('TacticalObjArrayLocal', CurrentTacticalArray); // renew base deck in a storage
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length; //renew card counter
	CurrentTacticalArray = null;
}








