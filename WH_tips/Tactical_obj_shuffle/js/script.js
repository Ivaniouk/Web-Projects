
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
	DifferentFormPositioning(AddPlayerForm);
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
	DifferentFormPositioning(RequestCardForm);
}
//position form
function DifferentFormPositioning(div){
	div.style.display = "block";
	div.style.top = (window.innerHeight / 2) - 190 + "px";
	div.style.left = (window.innerWidth / 2) - 190 + "px";
}
//Show RequestCardForm
function HideRequestCardForm(){
	document.getElementById('RequestCard_form').style.display = "none";
	localStorage.removeItem("EventLocal");
}
//setting new deck in storage
function CreateNewDeck(){
	var CurrentTacticalArray = TacticalObjArray;
	CurrentTacticalArray.shuffle();
	localStorage.setObject('TacticalObjArrayLocal', TacticalObjArray);
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
	var playerObj = new Player(document.getElementById("playerName").value);
	if(!localStorage.getObject('LocalPlayerArray')){//if no local copy - create one
		var pArray = new Array();
		localStorage.setObject('LocalPlayerArray', pArray);
	}
	//changing local Player array and saving new player 
	var playerArrayTMP = localStorage.getObject('LocalPlayerArray', pArray);	//
	playerArrayTMP.push(playerObj);												//Add player to local storage
	localStorage.setObject('LocalPlayerArray', playerArrayTMP);					//
	localStorage.setObject('localPlayerPosition', playerArrayTMP.length - 1); 	// save number of players for positioning them on page
	SetPlayerWrapPosition(localStorage.getObject('LocalPlayerArray').length);   //change size of player wrapper for positioning
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
								else{ //players card pool not empty
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
//find and return player form
function FindAndreturnPlayerForm(playerID){
	var playerArr = document.getElementsByClassName("PlayerForm");
	for(var i = 0; i < playerArr.length; i++){
		if(playerArr[i].getAttribute('data-key') == playerID){
			return playerArr[i] // remove players form from the page
		}
	}
}
//NOT IN USE
//return random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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
	FindAndreturnPlayerForm(playerID).children[2].appendChild(card);
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
		if(PlayerArrayTMP[i].Key == eventObject.playerIDlocal){// we found active player
			//PlayerArrayTMP[i].deleteCard(eventObject.cardIDlocal);
			PlayerArrayTMP[i].alerting();
			localStorage.setObject('LocalPlayerArray', PlayerArrayTMP); // save new data in a storage
			break;
		}
	}
	CadrClickEvent.parentNode.removeChild(CadrClickEvent);//remove chosen card form
	HideRequestCardForm();
}
//GetCard Button listener - getting new card
function getCardButtonHandle(event){
	var playerObjTMP; // object for rebuilding a player
	var CurrentTacticalArray = localStorage.getObject('TacticalObjArrayLocal'); //get base card deck from storage
	var pArrayTMP = localStorage.getObject('LocalPlayerArray'); // get all players from storage
	var divActiveDataKey = event.target.parentNode.getAttribute('data-key');// get key of current player
	
	for(var i = 0; i < pArrayTMP.length; i++){
		if(pArrayTMP[i].Key == divActiveDataKey){
			pArrayTMP[i].PlayerCardsArray.push(CurrentTacticalArray[0]); //add new cart to active players cardArray
			var CurrentCard = CurrentTacticalArray[0]; //saving chosen card
			localStorage.setObject('LocalPlayerArray', pArrayTMP); //renew data in players array 
			playerObjTMP = pArrayTMP[i]; // save active player object
			break;
		}
	}
	AppendNewCardToPlayerPool(playerObjTMP.Key, BuildingCardNODE(CurrentCard));// form card NODE and append to player form
	CurrentTacticalArray.shift(); //killing first card
	localStorage.setObject('TacticalObjArrayLocal', CurrentTacticalArray); // renew base deck in a storage
	document.getElementById("counterOfCards").innerHTML = CurrentTacticalArray.length; //renew card counter
}
//////////////////////////////////////////////Player class???//////
function Player(Name){
	this.Name = Name;
	this.Key = new Date().getTime();
	this.PlayerCardsArray = [];
	this.BaseCardDeck = [];
	
	this.alerting = function(){
		alert(1);
	} 
}
/*
Player.prototype.alerting = function(){
	alert(1);
}*/
Player.prototype.deleteCard = function(cardIDlocal){
	for(var i = 0; i < this.PlayerCardsArray.length; i++){
		if(this.PlayerCardsArray[i].Position == cardIDlocal){
			this.PlayerCardsArray.splice(i, 1);
			break;
		}
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



