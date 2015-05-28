document.addEventListener('DOMContentLoaded', function () {
	//local card click event
	var CadrClickEvent;
	//player position 
	GetNewDeck_btn.onclick = CreateNewDeck;//forming new deck
	clearAll_btn.onclick = ResetDeck;//clearing the deck
	addNewPlayer_btn.onclick = AddPlayerFormPosition;//show add player dialogue form
		CancelAddingPlayer_btn.onclick = HideAddPlayerForm;//hide and clear addPlayer dialogue
	AddPlayer_btn.onclick = AddPlayer;//Add player listener
	DeleteCard_btn.onclick = DeleteCard;//Delete card 
	CancelDeleteCard_btn.onclick = HideRequestCardForm; //cancel card delete request 
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
			localStorage.setObject('localPlayerPosition', i);
			BuildPlayer(playerArrTMP[i]);
		}
		SetPlayerWrapPosition(localStorage.getObject('LocalPlayerArray').length);
	}
});
//hiding AddPlayer dialogue form
function HideAddPlayerForm(){
	document.getElementById('addNewPlayer_form').style.display = "none";
	document.getElementById('playerName').value = "";
}
//position main player wrapper 
function SetPlayerWrapPosition(newWidth){
	document.getElementById('PlayersWrap').style.width = (newWidth * 285) + 'px';
}
//positioning AddPlayer form in a screen centre
function AddPlayerFormPosition(){
	var AddPlayerForm = document.getElementById('addNewPlayer_form');
	AddPlayerForm.style.display = "block";
	AddPlayerForm.style.top = (window.innerHeight / 2) - 190 + "px";
	AddPlayerForm.style.left = (window.innerWidth / 2) - 190 + "px";
}
//Show RequestCardForm
function HideRequestCardForm(){
	document.getElementById('RequestCard_form').style.display = "none";
	localStorage.removeItem("EventLocal");
}
//position Card delete form Show card description
function CardDeletePositionForm(cardID){
	var RequestCardForm = document.getElementById('RequestCard_form');
	var cardArrTMP = TacticalObjArray;
	for(var i = 0; i < cardArrTMP.length; i++){
		if(cardArrTMP[i].Position == cardID){
			RequestCardForm.children[0].innerHTML = cardArrTMP[i].Description;
			break;
		}
	}
	RequestCardForm.style.display = "block";
	RequestCardForm.style.top = (window.innerHeight / 2) - 190 + "px";
	RequestCardForm.style.left = (window.innerWidth / 2) - 190 + "px";
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
	localStorage.setObject('localPlayerPosition', playerArrayTMP.length - 1); // player position on page
	SetPlayerWrapPosition(localStorage.getObject('LocalPlayerArray').length);
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
		newPlayerCardPool.appendChild(BuildingCardNODE(playerObj.PlayerCardsArray[i]));// building a card and appending to card pool NODE
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
								if(playerObj.PlayerCardsArray != null){ // check players card pool
									newPlayerForm.appendChild(BuildPlayerCards(playerObj));
								}
								else{
									var newPlayerCardPool = document.createElement('div');
									newPlayerCardPool.setAttribute('class', 'PlayerCardsPool');
									newPlayerForm.appendChild(newPlayerCardPool);
								}
	newPlayerForm.style.left = (localStorage.getObject('localPlayerPosition')) * 285 + 'px'; //position player blocks
	document.getElementById("PlayersWrap").appendChild(newPlayerForm);	
	var buttonArr = document.getElementsByClassName("PlayerGetCard_btn");//adding listener to GET CARD button
	for(var i = 0; i < buttonArr.length; i++){
		buttonArr[i].onclick = getCardButtonHandle;
	}
}
//return random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//find and return player form
function FindAndreturnPlayerForm(playerID){
	var playerArr = document.getElementsByClassName("PlayerForm");
	for(var i = 0; i < playerArr.length; i++){
		if(playerArr[i].getAttribute('data-key') == playerID){
			return playerArr[i] // remove players form from the page
		}
	}
}
//remove player form
//NOT IN USE
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
//Card on click listener
function CardHandle(event){
	CadrClickEvent = event.target; //save global card click
	var EventLocal = { //save event
		playerIDlocal : event.target.parentNode.parentNode.getAttribute('data-key'),
		cardIDlocal : event.target.getAttribute('data-keyCard'),
	};
	CardDeletePositionForm(EventLocal.cardIDlocal);//position dialogue window
	localStorage.setObject('EventLocal', EventLocal); //save event to storage
}
//delete chosen card from storage and kill the form
function DeleteCard(){
	var eventObject = localStorage.getObject('EventLocal'); // get saved event object from storage
	var PlayerArrayTMP = localStorage.getObject('LocalPlayerArray'); //player array from storage
	for(var i = 0; i < PlayerArrayTMP.length; i++){ //looking for active player in a Array by ID
		if(PlayerArrayTMP[i].Key == eventObject.playerIDlocal){//looking for a chosen card in a players card pool
			for(var j = 0; j < PlayerArrayTMP[i].PlayerCardsArray.length; j++){			
				if(PlayerArrayTMP[i].PlayerCardsArray[j].Position == eventObject.cardIDlocal){
					PlayerArrayTMP[i].PlayerCardsArray.splice(j, 1); // remove chosen card from players card pool
					localStorage.setObject('LocalPlayerArray', PlayerArrayTMP); // save new data in a storage
					break;
				}
			}
		}
	}
	CadrClickEvent.parentNode.removeChild(CadrClickEvent);//remove chosen card form
	HideRequestCardForm();
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






