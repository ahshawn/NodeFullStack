
//isEven
function isEven(num) {
	//return true if even
	// if (num % 2 === 0)
	// {
	// 	return true;
	// } else {
	// 	//return false if odd
	// 	return false;
	// }

	return num % 2 === 0;
}

function factorial(num) {

	//define a result variabled
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}

	return result;
	//return the result variable
}

function kebabToSnake(str) {

//replace all '-' with "_"s
var newStr =str.replace(/-/g , "_");
return newStr;
//return str
}


