function handler(event){
			var element = event.target.nextElementSibling; //знаходимо табличку
			var ParentID = element.parentNode.id; //знаходимо материнський айді
			var ParentElement = document.getElementById(ParentID); // знаходимо материнський дівіжн по айді
			
			if(ParentElement.offsetTop > 500){
				element.style.bottom="0";
			}
			else{
				element.style.top="0";
			}
			
			if(ParentElement.offsetLeft < 800){
				element.style.left="50px";
			}
			else{
				element.style.right="50px";
			}
			
			if(event.type == "mouseover"){
				element.style.height = "auto";
				element.parentElement.style.zIndex = "999";
			} 
			else if(event.type == "mouseout"){
				element.style.height = "0";
				element.parentElement.style.zIndex = "auto";
			}			
		}