function MainMenuCtrl($scope){
	$scope.btnMainArr = ['One', 'Two', 'Three', 'Four'];
	$scope.rules = simple;
	$scope.mainButtonName = '';
	
	$scope.changeRulesView = function(btnName){
		$scope.mainButtonName = btnName;
		switch($scope.mainButtonName){
			case 'One':
				$scope.rules = simple;
				break;
			case 'Two':
				$scope.rules = Complicated;
				break;
			case 'Three':
				$scope.rules = moderate;
				break;
			case 'Four':
				$scope.rules = difficult;
				break;
		}
	}
}

//data arrays
var simple = [
	{"name": "One Simple",
	 "description": "This is a first Simple rule"},
	{"name": "Two Simple",
	 "description": "This is a second Simple rule"}, 
	{"name": "Three Simple",
	"description": "This is a third Simple rule"},
	{"name": "Four Simple",
	"description": "This is a fourth Simple rule"},
	{"name": "Five Simple",
	"description": "This is a fifth Simple rule"},
	{"name": "Six Simple",
	"description": "This is a sixth Simple rule"}
	];
	
var Complicated = [
	{"name": "One Complicated",
	 "description": "This is a first Complicated rule"},
	{"name": "Two Complicated",
	 "description": "This is a second Simple rule"}, 
	{"name": "Three Complicated",
	"description": "This is a third Complicated rule"},
	{"name": "Four Complicated",
	"description": "This is a fourth Complicated rule"},
	{"name": "Five Complicated",
	"description": "This is a fifth Complicated rule"},
	{"name": "Six Complicated",
	"description": "This is a sixth Complicated rule"}
	];
	
var difficult = [
	{"name": "One difficult",
	 "description": "This is a first difficult rule"},
	{"name": "Two difficult",
	 "description": "This is a second Simple rule"}, 
	{"name": "Three difficult",
	"description": "This is a third difficult rule"},
	{"name": "Four difficult",
	"description": "This is a fourth difficult rule"},
	{"name": "Five difficult",
	"description": "This is a fifth difficult rule"},
	{"name": "Six difficult",
	"description": "This is a sixth difficult rule"}
	];
	
var moderate = [
	{"name": "One moderate",
	 "description": "This is a first moderate rule"},
	{"name": "Two moderate",
	 "description": "This is a second Simple rule"}, 
	{"name": "Three moderate",
	"description": "This is a third moderate rule"},
	{"name": "Four moderate",
	"description": "This is a fourth moderate rule"},
	{"name": "Five moderate",
	"description": "This is a fifth difficult rule"},
	{"name": "Six moderate",
	"description": "This is a sixth moderate rule"}
	];

	
	