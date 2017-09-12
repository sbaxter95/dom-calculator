document.addEventListener('DOMContentLoaded', function(event){
//Setting up variables
var display = document.querySelector('.display').value = '0';

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
		display.value = number;
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
		display.value = operator;
	});
}



//display shows 0

//Add click listener for clear button

//number variable cleared to an empty string

//newnumber cleared to an empty string

//display set to 0
});