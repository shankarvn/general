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

//*********************************************************

function reverseStr(str){
	var revStr = "";
	for (var i=str.length-1;i>=0;i--){
		revStr += str[i];
	}
	return revStr;
}

var testStr3 = "afdasdkahsdkahd";
console.log(reverseStr(testStr3));

//*********************************************************

function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

function isStringPermutationOfAnother(s1, s2){
	var s1Arr = s1.split("");
	var s2Arr = s2.split("");

	var s1sorted = Array.prototype.sort.call(s1Arr, case_insensitive_comp).join("");
	var s2sorted = Array.prototype.sort.call(s2Arr, case_insensitive_comp).join("");

	return (s1sorted == s2sorted);

}

console.log(isStringPermutationOfAnother("abcf","fbca"))
console.log(isStringPermutationOfAnother("abcdf","fbca"))

//*********************************************************



function stringReplace(str){
	var strArr = str.split("");
	var strArrRep = strArr.map(function(each) { if (each == " ") { return "%20" } else {return each} });
	return strArrRep.join("");
}

console.log(stringReplace("abc   "));

//*********************************************************

function compressString(str){
	var prevChar = str[0];
	var count = 1;
	var compressedStr = "";
	for (var i=1;i<str.length;i++){
		var nextChar = str[i];
		if (nextChar == prevChar){
			count++;
			if (i==str.length-1){
				compressedStr+=prevChar+count;
			}
		}
		else{
			compressedStr+=prevChar+count;
			prevChar = nextChar;
			count = 1;
		}
	}
	if (compressedStr.length > str.length){
		return str;
	}
	else{
		return compressedStr;
	}
}

console.log(compressString("aaabbbcdeff"));
console.log(compressString("aabccccccccaaa"));

//*********************************************************

function zeroSpecificRowAndColumn(matrix,i,j){
	var nRows = matrix.length;
	var nCols = matrix[0].length;
	for (var k=0;k<nRows;k++){
		matrix[k][j] = 0;
	}
	for (var l=0;l<nCols;l++){
		matrix[i][l] = 0;
	}


}

function zeroRowsAndColumns(matrix){
	var nRows = matrix.length;
	var nCols = matrix[0].length;
	var toBeZeroed = [];
	for (var i=0;i<nRows;i++){
		for (var j=0;j<nCols;j++){
			var val = matrix[i][j];
			if (val == 0){
				toBeZeroed.push({rowIndex:i, colIndex:j})
			}				
		}
	}
	toBeZeroed.forEach(function(each){
		zeroSpecificRowAndColumn(matrix, each.rowIndex, each.colIndex);
	});
	return matrix;

}

a = [[1,2,3],[2,3,4],[5,6,0],[7,8,9]];
console.log(zeroRowsAndColumns(a));



