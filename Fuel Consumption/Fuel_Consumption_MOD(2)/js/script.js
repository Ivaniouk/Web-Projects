function EscapeFuel(){
	var EvelocityStr = document.getElementById("Evelocity");
	var Evelocity = (EvelocityStr.value).replace(",", "."); //ловимо коми ≥ переводимо в крапки
	fuelBreakOrbit.innerHTML = parseFloat(Evelocity * 30) / 100;
	fuelLowOrbit.innerHTML = parseFloat((Evelocity * 80) / 100).toFixed(1);
}
			
function TotalCalc(){
	var deltaVstr = document.getElementById("DeltaV");
	var DeltaV = (deltaVstr.value).replace(",", ".");
	var AccelerationGstr = document.getElementById("AccelerationG");
	var AccelerationG = (AccelerationGstr.value).replace(",", ".");
	var DistanceTotalstr= document.getElementById("DistanceTotal");
	var DistanceTotal = (DistanceTotalstr.value).replace(",", ".");
				
		//Time to Accelerate
		var accTime = parseFloat((DeltaV * 0.0455) /AccelerationG).toFixed(1);
		if(accTime > 24){
			AccTimeOut.innerHTML = parseFloat(accTime / 24).toFixed(2) + " day(s)";
			AccTimeTotalOut.innerHTML = parseFloat((accTime * 2) / 24).toFixed(2) + " day(s)";
		}
		else{
			AccTimeOut.innerHTML = accTime + " hours";
			AccTimeTotalOut.innerHTML = (accTime * 2) + " hours";
		}
		//Traveled during Boost
		var travelBoost = parseFloat( (Math.pow(accTime, 2)) * AccelerationG * 0.00042).toFixed(4);
		TraveledBoostOut.innerHTML = travelBoost;
		//Cruise Time
		var CruiseTime = parseFloat(((DistanceTotal - travelBoost) * 1.076 / DeltaV ) * 1000).toFixed(2);
		CruiseTimeOut.innerHTML = CruiseTime;
		
		if((accTime * 2) < 24){
			var PercentTime = parseFloat(((accTime * 2) * 100) / 24);
			var Days = parseFloat((1 * PercentTime) / 100).toFixed(2);
			var TotalTimeSpent = ((+CruiseTime) + (+Days)).toFixed(2);
			TotalTimeOut.innerHTML = TotalTimeSpent;
		}
		else{
			var Days = parseFloat(accTime * 2) / 24;
			var TotalTimeSpent = ((+CruiseTime) + (+Days)).toFixed(2);
			TotalTimeOut.innerHTML = TotalTimeSpent;
		}
		//Total Fuel Spent
		TotalFuelOut.innerHTML = (DeltaV * 2);
}
			
function Reset(){
	var deltaVstr = document.getElementById("DeltaV");
	deltaVstr.value = "";
	var AccelerationGstr = document.getElementById("AccelerationG");
	AccelerationGstr.value = "";
	var DistanceTotalstr= document.getElementById("DistanceTotal");
	DistanceTotalstr.value = "";
	
	AccTimeOut.innerHTML = "";
	AccTimeTotalOut.innerHTML = "";
	TraveledBoostOut.innerHTML = "";
	CruiseTimeOut.innerHTML = "";
	TotalTimeOut.innerHTML = "";
	TotalFuelOut.innerHTML = "";
	
	localStorage.Delta_V = "";
	localStorage.Acceleration_G = "";
	localStorage.Distance_Total = "";
	localStorage.E_Velocity = "";
}
			
function ResetPlanet(){
	Evelocity.value = "";
	fuelLowOrbit.innerHTML = "";
	fuelBreakOrbit.innerHTML = "";
}
			
function save(){
	var deltaVstr = document.getElementById("DeltaV");
	var AccelerationGstr = document.getElementById("AccelerationG");
	var DistanceTotalstr = document.getElementById("DistanceTotal");			
	var EvelocityStr = document.getElementById("Evelocity");
	
	localStorage.Delta_V = deltaVstr.value;
	localStorage.Acceleration_G = AccelerationGstr.value;
	localStorage.Distance_Total = DistanceTotalstr.value;
	localStorage.E_Velocity = EvelocityStr.value;
}
			
function Back() {
	if(window.localStorage && localStorage.Delta_V){
		document.getElementById("DeltaV").value = localStorage.Delta_V;
		document.getElementById("AccelerationG").value = localStorage.Acceleration_G;
		document.getElementById("DistanceTotal").value = localStorage.Distance_Total;
		document.getElementById("Evelocity").value = localStorage.E_Velocity;
	}
}

function Check(event){
	var element = event.target;
	//var reg = /[a-zA-ZА-Яа-яІіЇїёЁ]/; 
	var reg = /^[\d]+([.,])?([\d]+)?$/; // http://regex101.com/
	//var reg = /^[\d]+([.,][\d]+)?$/m; // http://regex101.com/
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