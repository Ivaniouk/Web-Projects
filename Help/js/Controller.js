var myApp = angular.module('myApp',[]);






/** TESTING LANG OBJECT WITH PROMISE************************************************/


myApp.controller('LangObjControl', ['$scope', '$q', function($scope, $q) {
	var lang = document.documentElement.lang;
	switch(lang) {
		case "en":
			$scope.lang = langObjENG;
		break;
		case "ru":
			$scope.lang = langObjRU;
		break;
	}
	
	function deferredTimer() {
	  var deferred = $q.defer();

	  setTimeout(function() {
		if (1) {
		  deferred.resolve({ message: "This is great!" });
		} else {
		  deferred.reject({ message: "Really bad" });
		}
	  }, 1000);

	  return deferred.promise;
	}
	
	$scope.startDeferredTimer = function() {
	  deferredTimer().then(
		function(result) {
			console.log(result);
		},
		function(result) {
			console.log(result);
		}
	  );
	};
	
}]);

var langObjRU = {
	"Add work place" : "Добавить место работы",
	"Get work value" : "Получить значение полей",
	"Promise test" : "Тест Промиса",
	"Promise returning test" : "Возврат промиса",
	"Angular Promise" : "Ангуляр промис"
};

var langObjENG = {
	"Add work place" : "Add work place",
	"Get work value" : "Get work value",
	"Promise test" : "Promise test",
	"Promise returning test" : "Promise returning test",
	"Angular Promise" : "Angular Promise"
};


