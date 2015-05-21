document.addEventListener('DOMContentLoaded', function () {
	//TODO: FIX CSS
	GetNewDeck_btn.onclick = CreateNewDeck;//forming new deck
	clearAll_btn.onclick = ResetDeck;//clearing the deck
	addNewPlayer_btn.onclick = AddPlayerFormPosition;//show add player dialogue form
		CancelAddingPlayer_btn.onclick = HideAddPlayerForm;//hide and clear addPlayer dialogue
	AddPlayer_btn.onclick = AddPlayer;//Add player listener
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
//setting new deck in storage
function CreateNewDeck(){
	localStorage.setObject('TacticalObjArrayLocal', TacticalObjArray);
	var CurrentTacticalArray = TacticalObjArray;
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length;
}
//killing arrays in storage/current
function ResetDeck(){
	localStorage.removeItem("TacticalObjArrayLocal");
	localStorage.removeItem("LocalPlayerArray");
	document.getElementById("counterOfCards").innerHTML = 0;
	window.location.reload();	
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
	var playerArrayTMP = localStorage.getObject('LocalPlayerArray', pArray);//
	playerArrayTMP.push(playerObj);											//Add player to local storage
	localStorage.setObject('LocalPlayerArray', playerArrayTMP);				//
	BuildPlayer(playerObj)//building player form
	HideAddPlayerForm();
}
//building a card NODE
function BuildingCardNODE(card){
	var newCard = document.createElement('div');
	newCard.setAttribute('class', 'PoolCard');
	newCard.setAttribute('data-keyCard', card.Position);
	newCard.innerHTML = card.Text;
	newCard.onclick = CardHandle;
	return newCard;
}
//building player card pool NODE
function BuildPlayerCards(playerObj){
	var newPlayerCardPool = document.createElement('div');
	newPlayerCardPool.setAttribute('class', 'PlayerCardsPool');
	var newCard;
	for(var i = 0; i < playerObj.PlayerCardsArray.length; i++){
		newPlayerCardPool.appendChild(BuildingCardNODE(playerObj.PlayerCardsArray[i]));
	}
	return newPlayerCardPool;
}
//building player form
function BuildPlayer(playerObj){
	var newPlayerForm = document.createElement('div');
	newPlayerForm.setAttribute('class', 'PlayerForm');
	newPlayerForm.setAttribute('data-key', playerObj.Key);
	newPlayerForm.innerHTML =  "<div class='PlayerNameDisplay'>" + playerObj.Name + "</div>"
							  + "<div class='PlayerGetCard_btn'>Get Card</div>";
								if(playerObj.PlayerCardsArray != null){ // check 
									newPlayerForm.appendChild(BuildPlayerCards(playerObj));
								}
								else{
									var newPlayerCardPool = document.createElement('div');
									newPlayerCardPool.setAttribute('class', 'PlayerCardsPool');
									newPlayerForm.appendChild(newPlayerCardPool);
								}
	document.getElementById("PlayersWrap").appendChild(newPlayerForm);
	var buttonArr = document.getElementsByClassName("PlayerGetCard_btn");
	for(var i = 0; i < buttonArr.length; i++){
		buttonArr[i].onclick = getCardButtonHandle;
	}
}
//return random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//find and return player
function FindAndreturnPlayerForm(playerID){
	var playerArr = document.getElementsByClassName("PlayerForm");
	for(var i = 0; i < playerArr.length; i++){
		if(playerArr[i].getAttribute('data-key') == playerID){
			return playerArr[i] // remove players form from the page
		}
	}
}
//remove player form
function KillPlayerForm(playerID){
	var form = FindAndreturnPlayerForm(playerID);
	if(form){ 
		form.remove();
	}
}
//Append new card to player form
function AppendNewCardToPlayerPool(playerID, card){
	FindAndreturnPlayerForm(playerID).children[2].appendChild(card); //remove();
}
//Card listener
//delete chose card
function CardHandle(event){
	var PlayerArrayTMP = localStorage.getObject('LocalPlayerArray');
	var playerID = event.target.parentNode.parentNode.getAttribute('data-key');
	var cardID = event.target.getAttribute('data-keyCard');
	for(var i = 0; i < PlayerArrayTMP.length; i++){
		if(PlayerArrayTMP[i].Key == playerID){
			for(var j = 0; j < PlayerArrayTMP[i].PlayerCardsArray.length; j++){			
				if(PlayerArrayTMP[i].PlayerCardsArray[j].Position == cardID){
					PlayerArrayTMP[i].PlayerCardsArray.splice(j, 1);
					localStorage.setObject('LocalPlayerArray', PlayerArrayTMP);
					break;
				}
			}
		}
	}
	event.target.parentNode.removeChild(event.target);
}
//GetCard Button listener
function getCardButtonHandle(event){
	var playerObjTMP; // object for rebuilding a player
	var CurrentTacticalArray = localStorage.getObject('TacticalObjArrayLocal'); //get base card deck fro storage
	var rand = getRandomInt(0, CurrentTacticalArray.length); //getting random int
	var pArrayTMP = localStorage.getObject('LocalPlayerArray'); // get all players from storage
	var divActiveDataKey = event.target.parentNode.getAttribute('data-key');// get key of current player
	for(var i = 0; i < pArrayTMP.length; i++){
		if(pArrayTMP[i].Key == divActiveDataKey){
			pArrayTMP[i].PlayerCardsArray.push(CurrentTacticalArray[rand]); //add new cart to active players cardArray
			var CurrentCard = CurrentTacticalArray[rand]; //saving chosen card
			localStorage.setObject('LocalPlayerArray', pArrayTMP); //renew data in players array 
			playerObjTMP = pArrayTMP[i]; // save active player object
			break;
		}
	}
	AppendNewCardToPlayerPool(playerObjTMP.Key, BuildingCardNODE(CurrentCard));// form card NODE and append to player form
	CurrentTacticalArray.splice(rand, 1); // remove card from base deck 
	localStorage.setObject('TacticalObjArrayLocal', CurrentTacticalArray); // renew base deck in a storage
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length; //renew card counter
}






