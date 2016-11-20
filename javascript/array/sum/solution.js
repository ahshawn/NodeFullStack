function sumArray (arr) {
	var total = 0;
	arr.forEach( function(element) {
		total += element;
	});
	return total;
}

function max(arr){
	var max = arr[0];
	for (i =1; i<arr.length; i++) {
		if (arr[i] > max)
		{
			max = arr[i];
		}
	}
	return max;
}