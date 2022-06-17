// function Pizza () {
//     this.Size = 0;
//     this.basePrice = 0;
//     this.toppings = 0;
//     this.sumPrice = 0;
// }

// Pizza.prototype.BasePrice = function(price) {
//     this.basePrice += 5;
// }

// let a = false;
// let b = true;

// Pizza.prototype.Toppings = function (a,b) {
//     if (a === true && b === true) {
//         this.toppings += 6;
//     } else if (a === true && b !== true) {
//         this.toppings += 4;
//     } else if (a !== true && b === true) {
//         this.toppings += 3;
//     } else {
//         this.toppings = this.toppings;
//     }
// }

// let small = '1';
// let large = '0';

// Pizza.prototype.SizeCalc = function(size) {
//     let input = size
//     if (input === 'small') {
//     this.Size += 3;
//     } else if (input === 'large') {
//         this.Size += 6;
//     }
// }

// Pizza.prototype.finalPrice = function(size) {
//     this.sumPrice += this.basePrice + this.toppings + this.Size;
// }

// // let testPizza = new Pizza(0,0,0);

// function calc () {
// testPizza.BasePrice();
// testPizza.Toppings(a,b);
// testPizza.SizeCalc();
// testPizza.finalPrice();
// console.log(testPizza.sumPrice);
// }

let test = $("input:checkbox[name=size]:checked").each(function() {
    const workTransportationMode = $(this).val();
    return workTransportationMode;
})




$(document).ready(function() {
  $('form#pizzaBuilder').submit(function(event) {
    event.preventDefault();
    // const sizeInput = $("input:radio[name=size]:checked").val();
    let listArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
        const w = $(this).val();
        listArray.push(w);
    })
console.log(listArray)
})
})
    // const toppingInput = $("input:checkbox[name=toppings]:checked").val();

    


    // console.log(sizeInput);
    // console.log(test);
