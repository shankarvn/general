
//

function MinHeap(size){
	this.store = [];
	this.end = 0;
	this.capacity = size;
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



MinHeap.prototype.minHeapify = function(pos){
    if (!this.isLeaf(pos))
    { 
        if ( this.getValue(pos) > this.getValue(this.getLeft(pos))  || this.getValue(pos) > this.getValue(this.getRight(pos)))
        {
            if (this.getValue(this.getLeft(pos))  < this.getValue(this.getRight(pos)))
            {
                this.swap(pos, this.getLeft(pos));
                this.minHeapify(this.getLeft(pos));
            }else
            {
                this.swap(pos, this.getRight(pos));
                this.minHeapify(this.getRight(pos));
            }
        }
    }
}

MinHeap.prototype.insert = function(value){
	if (this.end<this.capacity){
		this.store.push(value);
		this.trickleUp(this.end);
		this.end++;
	}
	else{
		if (value>this.store[0]){
			this.store[0] = value;
			this.minHeapify(0);
		}
	}
	
}


MinHeap.prototype.print = function(root)
{
	console.log("*******************HEAP STATE*******************");
	var evenStack = [];
	var oddStack = [0];
	while (oddStack.length || evenStack.length){
		while (oddStack.length>0){
			var pop = oddStack.pop();
			console.log(this.getValue(pop));
			var right = this.getRight(pop);
			var left = this.getLeft(pop);
			if (right<this.end){
				evenStack.push(this.getRight(pop));
			}
			if (left<this.end){
				evenStack.push(this.getLeft(pop));
			}
		}
		while (evenStack.length>0){
			var pop = evenStack.pop();
			console.log(this.getValue(pop));
			var right = this.getRight(pop);
			var left = this.getLeft(pop);
			if (right<this.end){
				oddStack.push(this.getRight(pop));
			}
			if (left<this.end){
				oddStack.push(this.getLeft(pop));
			}
		}
	}
	console.log("***********************************************");
}

MinHeap.prototype.constructor = MinHeap;

//Driver program
var k = 5;
var minHeap = new MinHeap(k);
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (text) {
	console.log('received data:', text);
	dealWithStreamEntry(+text); 
});


function dealWithStreamEntry(num){
	minHeap.insert(num);
	minHeap.print();
}