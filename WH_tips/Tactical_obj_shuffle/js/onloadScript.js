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