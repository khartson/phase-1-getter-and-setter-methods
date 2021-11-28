// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    // get/set diameter
    set diameter(diameter) {
        this.radius = diameter / 2; 
    }
    get diameter() {
        return this.radius * 2; 
    }

    // get/set circumference
    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI); 
    }
    get circumference() {
        return this.radius * 2 * Math.PI; 
    }

    // get/set area 
    set area(area) {
        this.radius = Math.sqrt(area/Math.PI)
    }
    get area() {
        return this.radius * this.radius * Math.PI
    }
}

let a = new Circle(2); 
console.log(a.circumfrence);