//

function Shape(){

	this.move = function() {
		console.log("Base: Shape moved");
	}

}

Shape.prototype = {};
Shape.prototype.constructor = Shape;


Shape.prototype.getArea = function() {
	console.log("Base::getArea");
}

Shape.prototype.getPerimeter = function() {
	console.log("Base::getPerimeter");
}

Shape.prototype.displayString = function() {
	console.log("Base::Shape's displayString called");
}


function Circle(radius){
	Shape.apply(this, Array.prototype.slice.call(arguments));
	this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function() {
	return Math.PI * this.radius * this.radius;
}

Circle.prototype.getPerimeter = function() {
	return 2 * Math.PI * this.radius;
}

Circle.prototype.displayString = function() {
	Shape.prototype.displayString.apply(this, Array.prototype.slice.call(arguments));
	console.log("Derived::Circle's displayString called");
}




var circ = new Circle(3);
console.log(circ.getPerimeter());
console.log(circ.getArea());
circ.displayString();
circ.move();
