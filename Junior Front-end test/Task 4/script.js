/*
    Task 4:
        Create a Polygon class that has the following properties:
            1. A constructor that takes an array of integer values describing the lengths of the
                polygon's sides.
            2. A perimeter() method that returns the polygon's perimeter.
*/

class Polygon {

    constructor(perimeterArray) {
        this.perimeterArray = perimeterArray;
    }

    polygonPerimeter() {
        let checkNumbers = !this.perimeterArray.some(isNaN);
        let result = 0;

        if (checkNumbers) {
            this.perimeterArray.forEach(element => {
                result += element;
            });
        } else {
            result = 'Some element is not a number! Please pass only numbers.';
        }

        return result;
    }
}

let poly = new Polygon([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(poly.polygonPerimeter());