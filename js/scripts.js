function Pizza () {
    this.Size = 0;
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

let small = '1';
let large = '0';

Pizza.prototype.finalPrice = function(size) {
    let input = size
    if (input === '1') {
    this.Size += 3;
    } else if (input === '0') {
        this.Size += 6;
    }
}

Pizza.prototype.finalPrice = function(size) {
    this.sumPrice += this.basePrice + this.toppings + this.smallSize;
}

let testPizza = new Pizza(0,0,0);

function calc () {
testPizza.BasePrice();
testPizza.Toppings(a,b);
testPizza.finalPrice('0');
console.log(testPizza.sumPrice);
}

calc();

