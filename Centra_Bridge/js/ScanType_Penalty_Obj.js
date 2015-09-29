 function MainHandler() {
	var scanType;
	//збереження обрани відстаней
	this.saveScan = function(event){
		 scanType = event.target.attributes.value.value;
		//scanType = $("#raduoScanType input:checked").attr("value");
	}
	//повернення робочих відстаней
	this.getScanType = function(){
		return scanType;
	}
	//повертає множник
	this.GetRangeMult = function(user_Range_Number){
		if(user_Range_Number == "k(s)")
			return 1000;
		else if(user_Range_Number == "mln(s)")
			return 1000000;
		else if(user_Range_Number == "bil(s)")
			return 1000000000;
		else
			return 1;
	}
	//переводить астро значення в милі
	this.GetMilesFromAstro = function(user_Range, user_Range_Unit){
		if(user_Range_Unit == "LS"){
			return (+user_Range * 200000);
		}
		else if(user_Range_Unit == "AU"){
			return (+user_Range * 100000000);
		}
	}
	
	//переводимо милі в ярди
	this.GetYardsFromMiles = function(user_Range){
		return (+user_Range * 1760);
	}
	
	//рахує значення з полів через цикл
	this.CalcResultCycle = function(arr){
		var Result = 0;
		for(var i = 0; i < arr.length; i++){
			Result += (+arr[i].value);
		}
		return Result;
	}
	
	//функція яка біжить по аарею і визначає підходящий варіант
	this.CalcPenalty = function(arr, user_Range){
		for(var i = 1; i < arr.length; i++){
			if((user_Range > arr[i - 1].range && user_Range < arr[i].range)){
				return arr[i - 1].penalty;
			}
			else if(user_Range == arr[0].range){
				return arr[0].penalty;
			}
			else if(user_Range == arr[i].range){
				return arr[i].penalty;
			}
		}
	}
	//аррей для стандартних відстаней
	this.GetStandartPenalty = function(user_Range){
		var obj0 = {range:2, penalty:0};
		var obj1 = { range: 3, penalty: -1};
		var obj2 = { range: 5, penalty: -2};
		var obj3 = { range: 7, penalty: -3};
		var obj4 = { range: 10, penalty: -4};
		var obj5 = { range: 15, penalty: -5};
		var obj6 = { range: 20, penalty: -6};
		var obj7 = { range: 30, penalty: -7};
		var obj8 = { range: 50, penalty: -8};
		var obj9 = { range: 70, penalty: -9};
		var obj10 = { range: 100, penalty: -10};
		var obj11 = { range: 150, penalty: -11};
		var obj12 = { range: 200, penalty: -12};
		var obj13 = { range: 300, penalty: -13};
		var obj14 = { range: 500, penalty: -14};
		var obj15 = { range: 700, penalty: -15};
		var obj16 = { range: 1000, penalty: -16};
		var obj17 = { range: 1500, penalty: -17};
		var obj18 = { range: 2000, penalty: -18};
		var obj19 = { range: 3000, penalty: -19};
		var obj20 = { range: 5000, penalty: -20};
		var obj21 = { range: 7000, penalty: -21};
		var obj22 = { range: 10000, penalty: -22};
		var obj23 = { range: 15000, penalty: -23};
		var obj24 = { range: 20000, penalty: -24};
		var obj25 = { range: 30000, penalty: -25};
		var obj26 = { range: 50000, penalty: -26};
		var obj27 = { range: 70000, penalty: -27};
		var obj28 = { range: 100000, penalty: -28};
		var obj29 = { range: 150000, penalty: -29};
		var obj30 = { range: 200000, penalty: -30};
		
		var arr = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12,
				   obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, obj23, obj24,
				   obj25, obj26, obj27, obj28, obj29, obj30];
				   
		return this.CalcPenalty(arr, user_Range);
	}
	//аррей для астро відстаней
	this.GetAstroPenalty = function(user_Range){
		var obj0 = { range: 200000, penalty: -50};
		var obj1 = { range: 1000000, penalty: -54};
		var obj2 = { range: 10000000, penalty: -60};
		var obj3 = { range: 100000000, penalty: -66};
		var obj4 = { range: 1000000000, penalty: -72};
		var obj5 = { range: 7000000000, penalty: -75};
		
		var arr = [obj0, obj1, obj2, obj3, obj4, obj5];
		
		return this.CalcPenalty(arr, user_Range);
	}
	//аррей для комбат відстаней
	this.GetCombatPenalty = function(user_Range){
		if(user_Range < 100){
			return -10;
		}
		else{
			var obj0 = { range: 100, penalty: -30};
			var obj1 = { range: 500, penalty: -34};
			var obj2 = { range: 2500, penalty: -38};
			var obj3 = { range: 10000, penalty: -42};
			var obj4 = { range: 50000, penalty: -46};
			
			var arr = [obj0, obj1, obj2, obj3, obj4];
			
			return this.CalcPenalty(arr, user_Range);
		}
	}
 } //MainHandler