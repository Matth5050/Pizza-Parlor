// Business Logic

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



// UI Logic

function displayText(price) {
    const sizeInput = $("input:radio[name=size]:checked").val();
    const pep = $("input:checkbox[name=pep]:checked").val();
    const veg = $("input:checkbox[name=veg]:checked").val();
    const plain = $("input:checkbox[name=plain]:checked").val();
    if (plain !== undefined) {
        $('#outputText').text(sizeInput + ' ' + plain + ' ' + 'for ' + price + '$')
    } else if (pep !== undefined && veg !== undefined) {
        $('#outputText').text(sizeInput + ' '  + pep + ' and' + ' ' + veg + ' for ' + price + '$');
    } else if (pep !== undefined && veg === undefined) {
        $('#outputText').text(sizeInput + ' '  + pep  + ' for ' + price + '$');
    } else if (pep === undefined && veg !== undefined) {
        $('#outputText').text(sizeInput + ' '  + veg + ' for ' + price + '$');
    }   
}

$(document).ready(function() {
    $('#count').change(function() {
        const pieCount = $("#count").val();
        if (pieCount === '1') {
            $('.order-containers2').hide();
            $('.order-containers3').hide();
        } else if (pieCount === '2') {
            $('.order-containers2').show();
        } else if (pieCount === '3') {
            $('.order-containers2').show();
            $('.order-containers3').show();
        }
    })

    function multiPizza(count) {
        let Pizza1 = new Pizza(0,0,0);
        let Pizza2 = new Pizza(0,0,0);
        let Pizza3 = new Pizza(0,0,0);
        const sizeInput = $("input:radio[name=size]:checked").val();
        const sizeInput2 = $("input:radio[name=size2]:checked").val();
        const sizeInput3 = $("input:radio[name=size3]:checked").val();
        const pep = $("input:checkbox[name=pep]:checked").val();
        const veg = $("input:checkbox[name=veg]:checked").val();
        const plain = $("input:checkbox[name=plain]:checked").val();
        if (count === '1') {
            Pizza1.BasePrice();
            Pizza1.SizeCalc(sizeInput);
            Pizza1.Toppings(pep,veg,plain);
            Pizza1.finalPrice();
            displayText(Pizza1.sumPrice);
            $('form#pizzaBuilder')[0].reset(); 
        } else if (count === '2') {
            Pizza1.BasePrice();
            Pizza1.SizeCalc(sizeInput);
            Pizza1.Toppings(pep,veg,plain);
            Pizza1.finalPrice(); 
            Pizza2.BasePrice();
            Pizza2.SizeCalc(sizeInput2);
            Pizza2.Toppings(pep,veg,plain);
            Pizza2.finalPrice();
            displayText(Pizza1.sumPrice + Pizza2.sumPrice);
            $('form#pizzaBuilder')[0].reset();
        } else if (count === '3') {
            Pizza1.BasePrice();
            Pizza1.SizeCalc(sizeInput);
            Pizza1.Toppings(pep,veg,plain);
            Pizza1.finalPrice();
            Pizza2.BasePrice();
            Pizza2.SizeCalc(sizeInput2);
            Pizza2.Toppings(pep,veg,plain);
            Pizza2.finalPrice();
            Pizza3.BasePrice();
            Pizza3.SizeCalc(sizeInput3);
            Pizza3.Toppings(pep,veg,plain);
            Pizza3.finalPrice();
            displayText(Pizza1.sumPrice + Pizza2.sumPrice + Pizza3.sumPrice)
            $('form#pizzaBuilder')[0].reset(); 
        }
    }

  $('form#pizzaBuilder').submit(function(event) {
    event.preventDefault();
    // const pieCount = $("#count").val();
    multiPizza($("#count").val());
    // testPizza.BasePrice();
    // testPizza.SizeCalc(sizeInput);
    // testPizza.Toppings(pep,veg,plain);
    // testPizza.finalPrice();
    // displayText(testPizza.sumPrice);
    // $('form#pizzaBuilder')[0].reset();
})
});


