$(document).ready( function(){
	
	$("#Calc_Button").click(function(){
		
		var user_Range = $("#Range_Value").val().replace(",", ".");
		var user_Range_Number = $("#Range_Number").val();
		var user_Range_Unit = $("#Range_Units").val();
		//alert(user_Range_Unit);
		$("#resultRange").html(user_Range + " " + user_Range_Number + " " + user_Range_Unit + "(s)");
		
		
		
	});
	
	//range clear
	$("#Reset_Button").click(function(){
		$('#Range_Value').val('').css("background-color","white");
		$("#Range_Number").val('');
		$("#Range_Units").val('');
		$('#resultRange').html('');
		
	})
	
	//input check
	$("#Range_Value").on('input', function(){
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

























