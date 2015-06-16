//hiding AddPlayer dialogue form
function HideAddPlayerForm(){
	document.getElementById('addNewPlayer_form').style.display = "none";
	document.getElementById('playerName').value = "";
}
//position main player wrapper 
function SetPlayerWrapPosition(newWidth){
	document.getElementById('PlayersWrap').style.width = (newWidth * 285) + 'px'; //285 player form width
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
	div.style.top = (window.innerHeight / 2) - 190 + "px"; //190 half of form width
	div.style.left = (window.innerWidth / 2) - 190 + "px";
}
//Show RequestCardForm
function HideRequestCardForm(){
	document.getElementById('RequestCard_form').style.display = "none";
	localStorage.removeItem("EventLocal");
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
	newPlayerForm.style.left = (localStorage.getObject('localPlayerPosition')) * 285 + 'px'; //position player blocks 285 player form width
	document.getElementById("PlayersWrap").appendChild(newPlayerForm);	
	var buttonArr = document.getElementsByClassName("PlayerGetCard_btn");//adding listener to GET CARD button
	for(var i = 0; i < buttonArr.length; i++){
		buttonArr[i].onclick = getCardButtonHandle;
	}
}
//Append new card to player form
function AppendNewCardToPlayerPool(playerID, card){
	FindAndreturnPlayerForm(playerID).children[2].appendChild(card);
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
