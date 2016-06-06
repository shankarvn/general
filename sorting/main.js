//Merge sort

var arr =  [10,2,9,3,8,4,7,5,6];

function merge(arr1, arr2){
	var result = [];
	var il = 0;
	var ir = 0;
	while (il<(arr1.length) && ir<(arr2.length)){
		if (arr1[il] < arr2[ir]){
			result.push(arr1[il++])
		}
		else{
			result.push(arr2[ir++])
		}
	}
	return result.concat(arr1.slice(il)).concat(arr2.slice(ir));
}

function mergeSort(arr) {
	if (arr.length < 2){
		return arr;
	}
	var mid = Math.floor(arr.length / 2)
	var left = arr.slice(0, mid);
	var right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
	
}

console.log("**********Merge sort****");
console.log(mergeSort(arr));

//Quick fucking sort

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}


// first call
console.log("**********Quick sort****");
console.log(quickSort(arr, 0, arr.length - 1));