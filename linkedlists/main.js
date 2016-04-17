//**********************************************************

function Node(){
	this.next = null
	this.data = 0;
}


function buildList(arr){
	var head = new Node();
	head.data = arr[0];
	var prev = head;
	for (var i=1;i<arr.length;i++){
		var curr = new Node();
		curr.next = null;
		curr.data = arr[i];
		prev.next = curr;
		prev = curr;
	}
	return head;
}

function printList(head){
	var curr = head;
	while (curr ){
		console.log(curr.data);
		curr = curr.next;
	}
}

var head = buildList([5,6,5,7,6,9,5,5]);
printList(head);

function removeDupes(head){
	var ptr1 = head;
	var ptr2 = head;
	
	while (ptr1){
		while(ptr2){
			var prev = ptr2;
			var curr = ptr2.next;
			if (curr && ptr1 && (ptr1.data == curr.data)){
				prev.next = curr.next;
				curr = curr.next;
				ptr2 = prev;
			}
			else{
				ptr2 = ptr2.next;
			}
			
		} 
		ptr1 = ptr1 && ptr1.next;
		ptr2 = ptr1 && ptr1.next;
	} 
	
}

console.log("Removing dupes");
removeDupes(head);
printList(head);


//**********************************************************


var head2 = buildList([5,6,5,7,6,9,5,5,17]);

function kthToLast(head, k){

	var ptr1 = head;
	var ptr2 = head;

	var i=0;
	while((i<k) && ptr2){
		ptr2 = ptr2.next;
		i++;
	}

	while(ptr2){
		ptr1 = ptr1.next;
		ptr2 = ptr2.next;
	}

	return ptr1 && ptr1.data;
}

console.log("***************************************")
var head2 = buildList([5,6,5,7,6,9,5,5,17]);
console.log(kthToLast(head2, 1))

//*********************************************************