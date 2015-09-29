$(document).ready( function(){

	var element = ".scanType";
	var mHandl = new MainHandler;
	
	$(element).click(function(event){	
		var target = $(event.target);
		$(".scanType").css({
			"background-color":"#000099"
		});
		target.css({
			"background-color":"#045FB4"
		});
	})
	// опрацьовуємо клік в області raduoScanType
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
		//трансформуємо данні і виводимо в totalResult
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
	
	//малюємо обраний тип відстаней в кіконечку Range_Units
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
	
	//функція при обробці ховає меню Range_Units_Menu
	function HideUnitsMenu(){
		$("#Range_Units_Menu").slideDown("fast");
		$(window).on("mousedown", function(event){	
			$("#Range_Units_Menu").slideUp( 0 );
		}).on("scroll", function(event){	
			$("#Range_Units_Menu").slideUp( 0 );
		})
	}

	//показуємо ліміти користувачу та створюємо випадаюче меню Range_Units

	function outRangeLimits(){	
		var $Range_Units = $("#Range_Units");
		var $Range_Units_Menu;
		$Range_Units.val('');

		switch(mHandl.getScanType()){
			case "Standart":
				$("#resultRange").html("MIN: 2yd <br> MAX: 200 000 yd (100 miles)");
				//формуємо ховаємо/показуємо кнопку(меню)
				$Range_Units.click(function(event){
					$("#Range_Units_Menu").remove();
					jQuery('<ul/>', {id: 'Range_Units_Menu'}).insertAfter($Range_Units)
					.on("mousedown", function(event){	
						handlMenuUnits(event);
					});
					$Range_Units_Menu = $("#Range_Units_Menu");
					
					$Range_Units_Menu.append("<li>yard(s)</li>");
					$Range_Units_Menu.append("<hr>");
					$Range_Units_Menu.append("<li>mile(s)</li>");
					HideUnitsMenu();
				})
				break;
			case "Astro":
				$("#resultRange").html("MIN: 200,000 miles (1 LS) <br> MAX: 7 billion miles (75 AU)");
				//формуємо ховаємо/показуємо кнопку(меню)
				$Range_Units.click(function(event){
					$("#Range_Units_Menu").remove();
					jQuery('<ul/>', {id: 'Range_Units_Menu'}).insertAfter($Range_Units)
					.on("mousedown", function(event){	
						handlMenuUnits(event);
					});
					
					$Range_Units_Menu = $("#Range_Units_Menu");
					
					$Range_Units_Menu.append("<li>mile(s)</li>");
					$Range_Units_Menu.append("<hr>");
					$Range_Units_Menu.append("<li>LS(s)</li>");
					$Range_Units_Menu.append("<hr>");
					$Range_Units_Menu.append("<li>AU(s)</li>");
					HideUnitsMenu();
				})
				break;
			case "Combat":
				$("#resultRange").html("MIN: less than 100 miles (-10) <br> MAX: 50,000 miles");
				$Range_Units.val('mile');
				//формуємо ховаємо/показуємо кнопку(меню)
				$Range_Units.click(function(event){
					$("#Range_Units_Menu").remove();
					jQuery('<ul/>', {id: 'Range_Units_Menu'}).insertAfter($Range_Units)
					.on("mousedown", function(event){	
						handlMenuUnits(event);
					});
					$("#Range_Units_Menu").append("<li>mile(s)</li>");
					HideUnitsMenu();
				})
				break;
		}
	}
});

























