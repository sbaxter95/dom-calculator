document.addEventListener('DOMContentLoaded', function(event){
//Setting up variables
var display = document.getElementsByClassName('display');
display[0].value = '0';

var number = '';
var newNumber = '';
var operator = '';

//Add click events to buttons
var numButtons = document.querySelectorAll('.number');
for (var i = 0; i < numButtons.length; i++) {
	numButtons[i].addEventListener('click', function(event){
		console.log('clicked');
		//number variable becomes equal to the value of the button clicked
		number = this.value;
		console.log(number);
		//display text equals number
		display[0].value = number;
	});
}

//Add click events to operator buttons
var opButtons = document.querySelectorAll('.operator');
for (var i = 0; i < opButtons.length; i++) {
	opButtons[i].addEventListener('click', function(event){
		console.log('clicked');
		//operator variable becomes equal to the value of the button clicked
		operator = this.value;
		console.log(operator);
		//When any operator button is clicked, newNumber becomes equal to the value of number, whilst number is cleared 
		newNumber = number;
		number = '';
		//display text equals number
		display[0].value = operator;
	});
}

//display shows 0
display.value = '0';

//Add click listener for clear button
var clearbtn = document.querySelector('.clear');
clearbtn.addEventListener('click', function(event){
		console.log('clear');
		//number variable cleared to an empty string
		number = '';

		//newnumber cleared to an empty string
		newNumber = '';

		//display set to 0
		display[0].value = '0';
	});

//Add click listener for equals button
var equalsbtn = document.querySelector('.eq');
equalsbtn.addEventListener('click', function(event){
	console.log('equals');
	//Check what operator was pressed
	if (operator === "+") {
		number = parseInt(number) + parseInt(newNumber);
	} else if (operator === "-") {
		number = parseInt(number) - parseInt(newNumber);
	} else if (operator === '*') {
		number = parseInt(number) * parseInt(newNumber);
	} else {
		number = parseInt(number) / parseInt(newNumber);
	}
	console.log(number);
});



//Convert number variables to strings

//Perform the calculation

//Convert answer to string to be outputted
});