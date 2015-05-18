function CalcResult(){
				if( ! arguments.length ) return; // EMPTY 
				var radioResult = 0;
				/*
				for( var i = 0; i < arguments.length ; i++ ){
					var eRadio = document.getElementsByName( arguments[i] );
					if ( eRadio.length ){
						for( var j = 0; j < eRadio.length ; j++ ){
							if(eRadio[j].checked){
								radioResult += (+eRadio[j].value);
							}
						}
					}
				}*/
				radioResult = +($("input:radio:checked").val());
				//radioResult+= +($("input[name='check']:checked").val());
				
/*
				var SizeMod = +$('#SizeMod').val();
				var TimeSpent = +$('#TimeSpent').val();
				var SensLVL = +$('#SensLVL').val();
	*/			
				$('#total').html(+radioResult);
				
}
//$("input:radio:checked");
//$("input[name='check']:checked")
//$("input:radio:checked, input[name='check']:checked");
//$("input[type='checkbox']:checked").val( function(idx,val){ console.log( "idx="+idx +"   val="+ val +"\n" ) } )
//

/*
// выделить все чекбоксы
$("input[type=checkbox]").prop('checked', true);

// отменить выделение всех чекбоксов
$("input[type=checkbox]").prop('checked', false); //checkbox
$("input[type=radio]").prop('checked', false); //radio
// или
$("input[type=checkbox]").removeAttr('checked');
*/