'use strict';
/**
	JQuery MODE
*/
/*
//білдимо та апендимо поля доя Work
function CreateWork() {
	//створюємо форм груп
	var $customFormGroup = $('<div></div>');
	$customFormGroup.attr("class", "form-group");
	//створюємо лейбл
	var $labelOne = $('<label></label>');
	$labelOne.attr("class", "col-sm-2 control-label");
	$labelOne.html("<?= __('work.place') . '&nbsp;ru' ?>");//вставляємо через innerHTML ПХПешну бяку
	//створюємо обгортку навколо інпута (div)
	var $inputWrapOne = $('<div></div>');
	$inputWrapOne.attr("class", "col-sm-3");
	$inputWrapOne.append('<input type="text" date-name="_work_place[?][ru]" name="_work_place[?][ru]" />'); //варіант без innerHTML (кажуть шо так тру)
	//створюємо другий лейбл
	var $labelTwo = $('<label></label>');
	$labelTwo.attr("class", "col-sm-2 control-label");
	$labelTwo.html("<?= __('expirience.work.place') . '&nbsp;ru' ?>");//вставляємо через innerHTML ПХПешну бяку
	//створюємо обгортку навколо другого інпута (div)
	var $inputWrapTwo = $('<div></div>');
	$inputWrapTwo.attr("class", "col-sm-3");
	$inputWrapTwo.append('<input type="text" date-name="_work_expirience[?][ru]" name="_work_expirience[?][ru]" />'); //варіант без innerHTML (кажуть шо так тру)
	
	//додаємо до материнського елемента все шо ми настворювали
	$customFormGroup.append($labelOne);
	$customFormGroup.append($inputWrapOne);
	$customFormGroup.append($labelTwo);
	$customFormGroup.append($inputWrapTwo);
	console.log($customFormGroup);
	//ідемо в DOM і приєднуємо наш новий елемент
	$(".add_work_form").append($customFormGroup);
}*/
/*
//збирає всі значення з полів у add_work_form
function GetValuesWork() {
	var inputValues = [];
	$(".add_work_form :input").each(function() {
		if($(this).val() != ""){
			console.log($(this).val());
			inputValues.push($(this).val());
		}
	});
	//відправляє пост
	//$.post("URL тут", JSON.stringify(inputValues));
}*/



/**
	JS MODE
*/
/*Get all input fields inside div*/
//document.getElementById('mydiv').getElementsByTagName('input')
/*
var elem = document.getElementsByClassName("add_work_form");
elem[0].getElementsByTagName('input')[0].value
*/


//білдимо та апендимо поля доя Work
function CreateWork() {
	var customFormGroupOne = document.createElement("div");
	customFormGroupOne.setAttribute("class", "form-group");
	
	var labelOne = document.createElement("label");
	labelOne.setAttribute("class", "col-sm-2 control-label");
	labelOne.innerHTML = "<?= __('work.place') . '&nbsp;ru' ?>";
	
	var inputWrapOne = document.createElement("div");
	inputWrapOne.setAttribute("class", "col-sm-3");
	inputWrapOne.innerHTML = '<input type="text" date-name="_work_place[?][ru]" name="_work_place[?][ru]" />';
	
	customFormGroupOne.appendChild(labelOne);
	customFormGroupOne.appendChild(inputWrapOne);
	
	var customFormGroupTwo = document.createElement("div");
	customFormGroupTwo.setAttribute("class", "form-group");
	
	var labelTwo = document.createElement("label");
	labelTwo.setAttribute("class", "col-sm-2 control-label");
	labelTwo.innerHTML = "<?= __('expirience.work.place') . '&nbsp;ru' ?>";
	
	var inputWrapTwo = document.createElement("div");
	inputWrapTwo.setAttribute("class", "col-sm-3");
	inputWrapTwo.innerHTML = '<input type="text" date-name="_work_expirience[?][ru]" name="_work_expirience[?][ru]" />';
	
	customFormGroupTwo.appendChild(labelTwo);
	customFormGroupTwo.appendChild(inputWrapTwo);
	
	var elem = document.getElementsByClassName("add_work_form");
	 
	elem[0].appendChild(customFormGroupOne);
	elem[0].appendChild(customFormGroupTwo);
}


//збирає всі значення з полів у add_work_form
function GetValuesWork() {
	var inputValues = [];
	var elem = document.getElementsByClassName("add_work_form");
	var inputArr = elem[0].getElementsByTagName('input');
		
	for(var i = 0; i < inputArr.length; i++) {
		inputValues.push(inputArr[i].value);
	}
	
	console.log(inputValues);
}

/***********************************PROMISE*********************************************/
/** 
	WORKING PROMISE (ON CLICK)
*/
/*
function Done(result) {
	console.log(result); // "Worked!"
}

function NotDone(err) {
	console.log(err.message); // Error: "It broke"
}

function PromiseWrapper() {
	var promise = new Promise(function(resolve, reject) {
		var x = 0;
		setTimeout(function() {
			//resolve("result");
			//reject(new Error("время вышло!"));
			x = 1;
			if (x == 1) {
				resolve("result");
			} else {
				reject(new Error("время вышло!"));
			}
		}, 3000);
	});
	
	promise.then(Done, NotDone);
}
*/

/** RETURN NEW PROMISE AND WRAPPER************************************************/

function Done(result) {
	console.log(result); // "Worked!"
}

function NotDone(err) {
	console.log(err.message); // Error: "It broke"
}

function ReturnPromise() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("result");
		}, 3000);
	});
}

//We can use wrapper (or not)
function ReturnPromiseWrapper() {
	ReturnPromise().then(Done, NotDone);
}




















