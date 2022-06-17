function Pizza () {
    this.Size = 0;
    this.basePrice = 0;
    this.toppings = 0;
    this.sumPrice = 0;
}

Pizza.prototype.BasePrice = function(price) {
    this.basePrice += 5;
}


Pizza.prototype.Toppings = function (a,b,c) {
    if (c !== undefined) {
        this.toppings = this.toppings;
    } if (a !== undefined && b !== undefined) {
        this.toppings += 6;
    } else if (a !== undefined && b === undefined) {
        this.toppings += 4;
    } else if (a === undefined && b !== undefined) {
        this.toppings += 3;
    }   
}

Pizza.prototype.SizeCalc = function(size) {
    if (size === 'small') {
    this.Size += 3;
    } else if (size === 'large') {
        this.Size += 6;
    }
}

Pizza.prototype.finalPrice = function(size) {
    this.sumPrice += this.basePrice + this.toppings + this.Size;
}

$(document).ready(function() {
  $('form#pizzaBuilder').submit(function(event) {
    event.preventDefault();
    let testPizza = new Pizza(0,0,0);
    const sizeInput = $("input:radio[name=size]:checked").val();
    const pep = $("input:checkbox[name=pep]:checked").val();
    const veg = $("input:checkbox[name=veg]:checked").val();
    const plain = $("input:checkbox[name=plain]:checked").val();
    
    testPizza.BasePrice();
    testPizza.SizeCalc(sizeInput);
    testPizza.Toppings(pep,veg,plain);
    testPizza.finalPrice();
    $('form#pizzaBuilder')[0].reset();
    console.log(testPizza.sumPrice);
})
});