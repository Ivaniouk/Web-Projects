document.addEventListener('DOMContentLoaded', function () { // канонічний JS варіант навішування лисенера на сторінку 
	
	//я так зрозумів шо тобі треба в квері стайлі це написать того тут починається квері
	function appendWork() {
		CreateWork();
		CreateWork();
	}
	//декларативно вішаємо на кнопку з класом jq_add_new_work онклік івент - експресія зло
	//$(".jq_add_new_work").on('click', appendWork);
	var AddWork_BTN = document.getElementsByClassName("jq_add_new_work");
	AddWork_BTN[0].addEventListener("click", appendWork, false);
	//декларативно вішаємо на кнопку з класом jq_get_work_value онклік івент
	//$(".jq_get_work_value").on('click', GetValuesWork);
	var GetWorkValue_BTN = document.getElementsByClassName("jq_get_work_value");
	GetWorkValue_BTN[0].addEventListener("click", GetValuesWork, false);
	
	//Simple promise ON CLICK
	//var jq_promise_BTN = document.getElementsByClassName("jq_promise");
	//jq_promise_BTN[0].addEventListener("click", PromiseWrapper, false);
	
	//Return promise ON CLICK
	var jq_promise_return_BTN = document.getElementsByClassName("jq_promise_retrn");
	jq_promise_return_BTN[0].addEventListener("click", ReturnPromiseWrapper, false);
	//jq_promise_return_BTN[0].addEventListener("click", ReturnPromise().then(Done, NotDone), false);
	
	
});