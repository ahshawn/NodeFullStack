isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a", "b", "c"]);
isUniform(["a","a","a"]);

function isUniform (array) {
	var first = array[0];
	for (i = 0; i < array.length; i++) {
		var currentValue = array[i];
		if (currentValue !== first ){
			return false;
		}
	}
	return true;

}