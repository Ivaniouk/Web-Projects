function CalcResult(){
				if( ! arguments.length ) return; // EMPTY 
				var radioResult = 0;
				
				for( var i = 0; i < arguments.length ; i++ ){
					var eRadio = document.getElementsByName( arguments[i] );
					if ( eRadio.length ){
						for( var j = 0; j < eRadio.length ; j++ ){
							if(eRadio[j].checked){
								radioResult += (+eRadio[j].value);
							}
						}
					}
				}
				var SizeMod = document.getElementById("SizeMod");
				var TimeSpent = document.getElementById("TimeSpent");
				var SensLVL = document.getElementById("SensLVL");
				
				radioResult =  radioResult + (+SizeMod.value);
				radioResult =  radioResult + (+TimeSpent.value);
				radioResult =  radioResult + (+SensLVL.value);
				
				total.innerHTML = radioResult;
}