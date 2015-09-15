//Global variable
var myApp = angular.module('myApp',[]);
//service
myApp.factory('UserService', function() {
	return {
		name : 'One'
	};
});

function RuleListCtrl($scope, UserService){
	//$scope.rules = simple;
	//alert(UserService.name);
	switch(UserService.name){
		case 'One':
			$scope.rules = simple;
			break;
		case 'Two':
			$scope.rules = Complicated;
			break;
		case 'Three':
			$scope.rules = difficult;
			break;
		case 'Four':
			$scope.rules = difficult;
			break;
	}
	//$scope.loadData();
	//$scope.$apply();
}


function MainMenuCtrl($scope, UserService){
	$scope.btnMainArr = ['One', 'Two', 'Three', 'Four'];
	
	$scope.showBtnName = function(btnName){
		UserService.name = btnName;
		alert(UserService.name);
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

	
	