document.addEventListener('DOMContentLoaded', function () {
	//local card click event
	var CadrClickEvent;
	//player position 
	clearAll_btn.onclick = ResetPlayerArray;//clearing the deck
	AddPlayer_btn.onclick = AddPlayer;//Add player listener
		addNewPlayer_btn.onclick = AddPlayerFormPosition;//show add player dialogue form
		CancelAddingPlayer_btn.onclick = HideAddPlayerForm;//hide and clear addPlayer dialogue
	
	DeleteCard_btn.onclick = DeleteCard;//Delete card 
	CancelDeleteCard_btn.onclick = HideRequestCardForm; //cancel card delete request 
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