//

function MinHeap(size){
	this.store = [];
	this.end = 0;
}

MinHeap.prototype.print = function()
{
	var evenStack = [];
	var oddStack = [0];
	while (oddStack.length || evenStack.length){
		while (oddStack.length>0){
			var pop = oddStack.pop();
			console.log(this.getValue(pop));
			evenStack.push(this.getRight(pop));
			evenStack.push(this.getLeft(pop));
		}
		while (evenStack.length>0){
			var pop = evenStack.pop();
			console.log(this.getValue(pop));
			oddStack.push(this.getRight(pop));
			oddStack.push(this.getLeft(pop));
		}
	}
}

MinHeap.prototype.getLeft = function(pos){
	return 2*pos+1;
}

MinHeap.prototype.getRight = function(pos){
	return 2*pos+2;
}

MinHeap.prototype.getParent = function(pos){
	if (pos==0){
		return 0;
	}
	else{
		return Math.floor((pos-1)/2);
	}
	
}

MinHeap.prototype.trickleUp = function(pos){
	var currIndex = pos;
	var parIndex = this.getParent(pos);
	var curr = this.store[currIndex];
	var parent = this.store[parIndex];
	if (curr < parent){
		this.store[currIndex] = parent;
		this.store[parIndex] = curr;
		this.trickleUp(parIndex);
	}
}

MinHeap.prototype.swap = function(sPos, dPos){
	var source = this.store[sPos];
	var dest = this.store[dPos];
	this.store[sPos] = dest;
	this.store[dPos] = source;
}

MinHeap.prototype.getValue = function(pos){
	return this.store[pos];
}

MinHeap.prototype.isLeaf = function(pos) {
    return (pos >=  (Math.floor(this.end / 2))  &&  pos <= this.end)
}

MinHeap.prototype.trickleDown = function(pos){
	var leftIndex = this.getLeft(pos);
	var rightIndex = this.getRight(pos);
	var left = this.getValue(leftIndex);
	var right = this.getValue(rightIndex);
	var start = this.getValue(pos);
	if (!this.isLeaf(pos)){
		if (start>left || start>right){
			if (left>right){
				this.swap(right, pos);
				this.trickleDown(rightIndex);
			}
			else{
				this.swap(left, pos);
				this.trickleDown(leftIndex);
			}
		}
	}
}

MinHeap.prototype.insert = function(value){
	this.store.push(value);
	this.trickleUp(this.end);
	this.end++;
}

MinHeap.prototype.popMinimum = function(){
	var pop = this.store[0];
	this.store[0] = this.store[this.end];
	this.store[this.end] = undefined;
	this.trickleDown(0);
	return pop;
}

MinHeap.prototype.constructor = MinHeap;

var minHeap = new MinHeap(15);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(17);
minHeap.insert(10);
minHeap.insert(84);
minHeap.insert(19);
minHeap.insert(6);
minHeap.insert(22);
minHeap.insert(9);
minHeap.print(0);



