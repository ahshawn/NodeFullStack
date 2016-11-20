printReverse([1,2,3,4]);
printReverse(["a","b","c","d"]);
function printReverse (array) {

	for(i = array.length; i >= 0; i--) {
		console.log(array[i]);
	}
}