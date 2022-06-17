function Pizza () {
    this.basePrice = 0;
    this.toppings = 0;
    this.sumPrice = 0;
}

Pizza.prototype.BasePrice = function(price) {
    this.basePrice += 5;
}

let a = true;
let b = true;

Pizza.prototype.Toppings = function (a,b) {
    if (a === true && b === true) {
        this.toppings += 6;
    } else if (a === true && b !== true) {
        this.toppings += 4;
    } else if (a !== true && b === true) {
        this.toppings += 3;
    } else {
        this.toppings = this.toppings;
    }
}

Pizza.prototype.finalPrice = function(final) {
    this.sumPrice = this.basePrice + this.toppings;
}

let testPizza = new Pizza(0,0,0);

function calc () {
testPizza.BasePrice();
testPizza.Toppings(a,b);
testPizza.finalPrice();
console.log(testPizza.sumPrice);
}

calc();

