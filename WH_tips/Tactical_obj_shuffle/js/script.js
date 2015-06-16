//killing arrays in storage/current
function ResetPlayerArray(){
	localStorage.removeItem("LocalPlayerArray");
	window.location.reload();	
}
// building a player
function AddPlayer(){
	var newBaseCardDeck = TacticalObjArray;
	newBaseCardDeck.shuffle();
	var playerObj = new Player(document.getElementById("playerName").value, newBaseCardDeck);
	if(!localStorage.getObject('LocalPlayerArray')){//if no local copy - create one
		localStorage.setObject('LocalPlayerArray', []);
	}
	//changing local Player array and saving new player 
	var playerArrayTMP = localStorage.getObject('LocalPlayerArray');	//
	playerArrayTMP.push(playerObj);												//Add player to local storage
	localStorage.setObject('LocalPlayerArray', playerArrayTMP);					//
	localStorage.setObject('localPlayerPosition', playerArrayTMP.length - 1); 	// save number of players for positioning them on page
	SetPlayerWrapPosition(localStorage.getObject('LocalPlayerArray').length);   //change size of player wrapper for positioning
	BuildPlayer(playerObj)//building player form
	HideAddPlayerForm();
}
///////Player class///////
function Player(Name, newBaseArray){
	this.Name = Name;
	this.Key = new Date().getTime();
	this.PlayerCardsArray = [];
	this.BaseCardDeck = newBaseArray;
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
			break;
		}
	}
	CadrClickEvent.parentNode.removeChild(CadrClickEvent);//remove chosen card form
	HideRequestCardForm();
}
//GetCard Button listener - getting new card
function getCardButtonHandle(event){
	var playerObjTMP; // object for rebuilding a player
	var pArrayTMP = localStorage.getObject('LocalPlayerArray'); // get all players from storage
	var divActiveDataKey = event.target.parentNode.getAttribute('data-key');// get key of current player
	for(var i = 0; i < pArrayTMP.length; i++){
		if(pArrayTMP[i].Key == divActiveDataKey){	
			pArrayTMP[i].PlayerCardsArray.push(pArrayTMP[i].BaseCardDeck[0]); //add new cart to active players cardArray
			var CurrentCard = pArrayTMP[i].BaseCardDeck[0]; //saving chosen card
			pArrayTMP[i].BaseCardDeck.shift(); //killing first card
			localStorage.setObject('LocalPlayerArray', pArrayTMP); //renew data in players array 
			playerObjTMP = pArrayTMP[i]; // save active player object
			break;
		}
	}
	AppendNewCardToPlayerPool(playerObjTMP.Key, BuildingCardNODE(CurrentCard));// form card NODE and append to player form
}
///////////////////////////////////
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


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



