/*
    Task 5:
        Create a Rectangle class. Perform the following tasks:
            1. Add an area method to Rectangle's prototype.
            2. Create a Square class that satisfies the following:
                • It is a subclass of Rectangle.
                • It contains a constructor and no other methods.
                • It can use the Rectangle class' area method to print the area of a Square object.
*/

class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
}

Rectangle.prototype.area = function() {
    return 2 * (this.sideA + this.sideB);
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

let sq = new Square(15);

console.log(sq.area());