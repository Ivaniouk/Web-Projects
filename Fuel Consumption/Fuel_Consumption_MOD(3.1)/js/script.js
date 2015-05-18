function EscapeFuel(){
	var Evelocity = $('#Evelocity').val().replace(",", ".");
	$('#fuelBreakOrbit').html(parseFloat(Evelocity * 30) / 100);
	$('#fuelLowOrbit').html(parseFloat((Evelocity * 80) / 100).toFixed(1));
}

function TotalCalc(){
	var DeltaV = $('#DeltaV').val().replace(",", ".");
	var AccelerationG = $('#AccelerationG').val().replace(",", ".");
	var DistanceTotal = $('#DistanceTotal').val().replace(",", ".");
		//Time to Accelerate
		var accTime = parseFloat((DeltaV * 0.0455) /AccelerationG).toFixed(1);
		if(accTime > 24){
			$('#AccTimeOut').html(parseFloat(accTime / 24).toFixed(2) + " day(s)");
			$('#AccTimeTotalOut').html(parseFloat((accTime * 2) / 24).toFixed(2) + " day(s)");
		}
		else{
			$('#AccTimeOut').html(accTime + " hours");
			$('#AccTimeTotalOut').html((accTime * 2) + " hours");
		}
		//Traveled during Boost	
		var travelBoost = parseFloat(((Math.pow(accTime, 2)) * AccelerationG * 0.00042)*2).toFixed(4);
		$('#TraveledBoostOut').html(travelBoost);
		//Cruise Time
		var CruiseTime = parseFloat(((DistanceTotal - travelBoost) * 1.076 / DeltaV ) * 1000).toFixed(2);
		$('#CruiseTimeOut').html(CruiseTime);
		if((accTime * 2) < 24){
			var PercentTime = parseFloat(((accTime * 2) * 100) / 24);
			var Days = parseFloat((1 * PercentTime) / 100).toFixed(2);
			var TotalTimeSpent = ((+CruiseTime) + (+Days)).toFixed(2);
			$('#TotalTimeOut').html(TotalTimeSpent);
		}
		else{
			var Days = parseFloat(accTime * 2) / 24;
			var TotalTimeSpent = ((+CruiseTime) + (+Days)).toFixed(2);
			$('#TotalTimeOut').html(TotalTimeSpent);
		}
		//Total Fuel Spent
		$('#TotalFuelOut').html(DeltaV * 2);
}
		
function Reset(){
	$('#totalFuelTime input:not([type=button])').val('').css("background-color","white");
	$('#totalFuelTime .output').html('');
	
	localStorage.Delta_V = "";
	localStorage.Acceleration_G = "";
	localStorage.Distance_Total = "";
	localStorage.E_Velocity = "";
}
			
function ResetPlanet(){
	$('#Evelocity').val('').css("background-color","white");
	$('#planetFuel .output').html('');
}

function save(){
	localStorage.Delta_V = $('#DeltaV').val();
	localStorage.Acceleration_G = $('#AccelerationG').val();
	localStorage.Distance_Total = $('#DistanceTotal').val();
	localStorage.E_Velocity = $('#Evelocity').val();
}

function Back(){
	if(window.localStorage && localStorage.Delta_V){
		$('#DeltaV').val(localStorage.Delta_V);
		$('#AccelerationG').val(localStorage.Acceleration_G);
		$('#DistanceTotal').val(localStorage.Distance_Total);
		$('#Evelocity').val(localStorage.E_Velocity);
	}
}

function Check(event){
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
}























