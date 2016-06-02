function TreeNode(val, left, right) {
	this.left = left || null;
	this.right = right || null;
	this.data = val || null;
}

function buildTree() {
	
	var n1 = new TreeNode(13);
	var n2 = new TreeNode(18);
	var n3 = new TreeNode(4);
	var n4 = new TreeNode(2);
	var n5 = new TreeNode(19);
	var n6 = new TreeNode(100);
	var n7 = new TreeNode(6, n5, n6);
	var n8 = new TreeNode(7, n4, n7);
	var n9 = new TreeNode(3, n1, n2);
	var n10 = new TreeNode(5, n9, n3);
	var root = new TreeNode(1, n10, n8);
	return root;
}

var root = buildTree();

///////////////////////////////////////////////////////////////////
//Preorder
///////////////////////////////////////////////////////////////////

//Recursive
function preOrder(root){
	if (!root){
		return;
	}
	console.log(root.data);
	preOrder(root.left);
	preOrder(root.right);
}

console.log("******************Preorder recursive*********");
preOrder(root);
console.log("*********************************************");


//Iterative
function PreOrderIterator(root){
	this.stack = [root];
}

PreOrderIterator.prototype = {

	constructor: PreOrderIterator,

	hasNext: function(){
		return this.stack.length!==0;
	},

	next: function(){
		if (!this.hasNext()) {  
       		throw new Error("All nodes have been visited!");  
     	}  
		var nxt = this.stack.pop();
		if (nxt ){
			if (nxt.right){
				this.stack.push(nxt.right);
			}
			if (nxt.left){
				this.stack.push(nxt.left);
			}
			
		}
		return nxt;
	}
}

console.log("******************Preorder iterative*********");
var it = new PreOrderIterator(root);
while(it.hasNext()){
	console.log(it.next().data);
}
console.log("*********************************************");

///////////////////////////////////////////////////////////////////
//Inorder
///////////////////////////////////////////////////////////////////

//Recursive
function inOrder(root){
	if (!root){
		return;
	}
	inOrder(root.left);
	console.log(root.data);
	inOrder(root.right);
}

console.log("******************Inorder recursive*********");
inOrder(root);
console.log("*********************************************");


//Iterative
function InOrderIterator(root){
	this.root = root;
	this.stack = [];
	this.pushLeftChildren(root);
}

InOrderIterator.prototype = {
	constructor: InOrderIterator,

	pushLeftChildren: function(root){
		var curr = root;
		while (curr){
			this.stack.push(curr);
			curr = curr.left;
		}

	},

	hasNext: function() {
		return (this.stack.length!=0)

	},

	next: function() {
		var elt = this.stack.pop();
		this.pushLeftChildren(elt.right);
		return elt;

	}
}

console.log("******************Inorder iterative*********");
var it = new InOrderIterator(root);
while(it.hasNext()){
	console.log(it.next().data);
}
console.log("*********************************************");


///////////////////////////////////////////////////////////////////
//Postorder
///////////////////////////////////////////////////////////////////

//Recursive
function postOrder(root){
	if (!root){
		return;
	}
	postOrder(root.left);
	postOrder(root.right);
	console.log(root.data);
}

console.log("******************Postorder recursive*********");
postOrder(root);
console.log("*********************************************");

//Iterative
function PostOrderIterator(root){
	this.root = root;
	this.stack = [];
	this.findNextLeaf(root);
}

PostOrderIterator.prototype = {
	constructor: PostOrderIterator,

	findNextLeaf: function(root){
		var curr = root;
		while (curr){
			this.stack.push(curr);
			if (curr.left){
				curr = curr.left;
			}
			else{
				curr = curr.right;
			}
		}
	},

	hasNext: function() {
		return (this.stack.length!=0)

	},

	next: function() {
		var elt = this.stack.pop();
		if (this.stack.length!=0){
			var top = this.stack[this.stack.length-1];
			if (top.left == elt){
				this.findNextLeaf(top.right);
			}
		}
		return elt;
	}
}

console.log("******************Postorder iterative*********");
var it = new PostOrderIterator(root);
while(it.hasNext()){
	console.log(it.next().data);
}
console.log("*********************************************");

