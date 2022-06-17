function Pizza () {
    this.basePrice = 0;
}

Pizza.prototype.getPrice = function() {
    this.basePrice += 5
}

let cheesePizza = new Pizza(0);

cheesePizza.getPrice();
console.log(cheesePizza);

