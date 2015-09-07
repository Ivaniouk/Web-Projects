$(document).ready( function(){

	var element = ".scanType";
	//оброблювач натискання Range_Number
	function handlMenuRangeNumber(event){
		switch($(event.target).text()){
			case "none":
				$("#Range_Number").val('');
				break;
			case "k(s)":
				$("#Range_Number").val('k(s)');
				break;
			case "mln(s)":
				$("#Range_Number").val('mln(s)');
				break;
			case "bil(s)":
				$("#Range_Number").val('bil(s)');
				break;
		}
	}
	//формуємо ховаємо/показуємо кнопку(меню) Range_Number
	$("#Range_Number").click(function(event){
		jQuery('<ul/>', {id: 'contextMenu'}).insertAfter('#Range_Number')
		.on("mousedown", function(event){	
			handlMenuRangeNumber(event);
		});
		
		$("#contextMenu").append("<li value=''>none</li>");
		$("#contextMenu").append("<hr>");
		$("#contextMenu").append("<li value='thousand'>k(s)</li>");
		$("#contextMenu").append("<hr>");
		$("#contextMenu").append("<li value='million'>mln(s)</li>");
		$("#contextMenu").append("<hr>");
		$("#contextMenu").append("<li value='billion'>bil(s)</li>");
	
		$("#contextMenu").slideDown("fast");
		$(window).on("mousedown", function(event){	
				$("#contextMenu").slideUp( 0 );
		})
	})
	
		
	$(element).click(function(event){	
		var target = $(event.target);
		$(".scanType").css({
			"background-color":"#000099"
		});
		target.css({
			"background-color":"#045FB4"
		});
	})

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
	
	var mHandl = new MainHandler;
	
	function handlMenuUnits(event){
		switch($(event.target).text()){
			case "yard(s)":
				$("#Range_Units").val('yard');
				break;
			case "mile(s)":
				$("#Range_Units").val('mile');
				break;
			case "LS(s)":
				$("#Range_Units").val('LS');
				break;
			case "AU(s)":
				$("#Range_Units").val('AU');
				break;
		}
	}

	//показуємо ліміти користувачу
	function outRangeLimits(){	
		$("#Range_Units").val('');
		switch(mHandl.getScanType()){
			case "Standart":
				$("#resultRange").html("MIN: 2yd <br> MAX: 200 000 yd (100 miles)");
				//формуємо ховаємо/показуємо кнопку(меню)
				$("#Range_Units").click(function(event){
					$("#Range_Units_Menu").remove();
					jQuery('<ul/>', {id: 'Range_Units_Menu'}).insertAfter('#Range_Units')
					.on("mousedown", function(event){	
						handlMenuUnits(event);
					});
					$("#Range_Units_Menu").append("<li>yard(s)</li>");
					$("#Range_Units_Menu").append("<hr>");
					$("#Range_Units_Menu").append("<li>mile(s)</li>");
					
					$("#Range_Units_Menu").slideDown("fast");
					$(window).on("mousedown", function(event){	
							$("#Range_Units_Menu").slideUp( 0 );
					})
				})
				break;
			case "Astro":
				$("#resultRange").html("MIN: 200,000 miles (1 LS) <br> MAX: 7 billion miles (75 AU)");
				//формуємо ховаємо/показуємо кнопку(меню)
				$("#Range_Units").click(function(event){
					$("#Range_Units_Menu").remove();
					jQuery('<ul/>', {id: 'Range_Units_Menu'}).insertAfter('#Range_Units')
					.on("mousedown", function(event){	
						handlMenuUnits(event);
					});
					
					$("#Range_Units_Menu").append("<li>mile(s)</li>");
					$("#Range_Units_Menu").append("<hr>");
					$("#Range_Units_Menu").append("<li>LS(s)</li>");
					$("#Range_Units_Menu").append("<hr>");
					$("#Range_Units_Menu").append("<li>AU(s)</li>");
				
					$("#Range_Units_Menu").slideDown("fast");
					$(window).on("mousedown", function(event){	
							$("#Range_Units_Menu").slideUp( 0 );
					})
				})
				break;
			case "Combat":
				$("#resultRange").html("MIN: less than 100 miles (-10) <br> MAX: 50,000 miles");
				$("#Range_Units").val('mile');
				//формуємо ховаємо/показуємо кнопку(меню)
				$("#Range_Units").click(function(event){
					$("#Range_Units_Menu").remove();
					jQuery('<ul/>', {id: 'Range_Units_Menu'}).insertAfter('#Range_Units')
					.on("mousedown", function(event){	
						handlMenuUnits(event);
					});
					$("#Range_Units_Menu").append("<li>mile(s)</li>");
					
					$("#Range_Units_Menu").slideDown("fast");
					$(window).on("mousedown", function(event){	
							$("#Range_Units_Menu").slideUp( 0 );
					})
					
				})
				break;
		}
	}
	
	
	
	$("#raduoScanType .scanType").click(function(event){
		mHandl.saveScan(event);
		outRangeLimits();
	})
	//$("input:checked").attr("value")// збкрігаємо вибрані чекбокси
	//маніпуляціями з ввееденими данними
	$("#Calc_Button").click(function(){
		var penalty;
		var totalResult = 0;
		var user_Range = $("#Range_Value").val().replace(",", ".");
		var user_Range_Display = user_Range; //змінна для виводу введеного юзером
		var user_Range_Number = $("#Range_Number").val();
		var user_Range_Unit = $("#Range_Units").val();
		//alert(user_Range_Unit);
		
		var rangeMult = mHandl.GetRangeMult(user_Range_Number);
		//alert(typeof(rangeMult));
		
		//визначаємо штраф по відстані
		switch(mHandl.getScanType()){
			case "Standart":
					if(user_Range_Unit == "mile"){ 
						user_Range = mHandl.GetYardsFromMiles(user_Range); //transfer to yards
					}
					user_Range = (rangeMult * user_Range); //multiplier
					penalty = mHandl.GetStandartPenalty(user_Range);
					//alert("standart " + penalty);
				break;
			case "Astro":
					if(user_Range_Unit != "mile"){
						user_Range = mHandl.GetMilesFromAstro(user_Range, user_Range_Unit);
					}
					user_Range = (rangeMult * user_Range);
					penalty = mHandl.GetAstroPenalty(user_Range);
				break;
			case "Combat":
					user_Range = (rangeMult * user_Range);
					penalty = mHandl.GetCombatPenalty(user_Range);
				break;
		}
				
		var arrRadio =  $("input:checked");//воно вернуло аррей
		var arrShipModifier = $(".shipData input");
		
		totalResult = (+(mHandl.CalcResultCycle(arrRadio)) + (+mHandl.CalcResultCycle(arrShipModifier)));
		totalResult += (+penalty);
		
		
		
		$("#resultRange").html(user_Range_Display + " " + user_Range_Number + " " + user_Range_Unit + "(s) " + "[" + penalty + "]");
		$("#TOTAL_RESULT").html(totalResult);
	});
	
	//clear
	$("#Reset_Button").click(function(){
		$('#MainTable input:not([type=button])').val('').css("background-color","white");
		$("#Range_Number").val('');
		$("#Range_Units").val('');
		$("input[type=checkbox]").prop('checked', false);
		$("input[type=radio]").prop('checked', false);
		$('#TOTAL_RESULT').html('');
		outRangeLimits();
	})
	//$('#totalFuelTime input:not([type=button])').val('').css("background-color","white");
	//input check
	$("#MainTable input:not([type=button])").on('input', function(){
		var element = event.target;
		var reg = /^[\d]+([.,])?([\d]+)?$/; // http://regex101.com/
		var flag = reg.test(element.value);	
		if (flag == false){
			element.style.backgroundColor = "LightPink";
		}
		else {
			element.style.backgroundColor = "MediumSeaGreen";	
		}
	
		if(element.value == ""){
			element.style.backgroundColor = "White";
		}
	})
});

























