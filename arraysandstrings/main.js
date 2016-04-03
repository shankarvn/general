function areCharsUnique(str){
	var map = {};
	for (var i=0;i<str.length;i++){
		var eachChar = str[i];
		var count=1;
		if (count = map[eachChar]){
			count++;
		}
		else{
			map[eachChar] = 1;
		}
		if (count > 1){
			return false;
		}
	}
	return true;
}

/**
Assumes that the string contains only lower case characters
*/
function areCharsUniqueUsingBitVector(str){
	var checker = 0;
	for (var i=0;i<str.length;i++){
		var eachChar = str[i];
		var dist = eachChar.charCodeAt() - 'a'.charCodeAt();
		if (checker & (1<<dist)){
			return false;
		}
		checker = checker | (1<<dist);
	}
	return true;
}

var testStr1 = "abca";
console.log(areCharsUnique(testStr1));
console.log(areCharsUniqueUsingBitVector(testStr1));

var testStr2 = "abc";
console.log(areCharsUnique(testStr2));
console.log(areCharsUniqueUsingBitVector(testStr2));