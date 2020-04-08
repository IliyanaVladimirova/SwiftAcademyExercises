
// Задача 1:
function logBikes(bikes) {
    bikes.forEach(bike =>
        console.log("Bike's name: " + bike.name +
            " Bike's price: " + bike.price));
}

// задача 2
function logBikes(bikes) {
    var filtered = bikes.filter(bike => bike.price <= 300);
    filtered.forEach(bike => console.log("Bike's name: " + bike.name + " Bike's price: " + bike.price));
}


//бонус
function filterByPrice(bikes, minPrice, maxPrice) {
    var filtered = bikes.filter(bike => bike.price >= minPrice && bike.price <= maxPrice);
    return filtered;
}
///////////////////////////////////////////////////////////////
//задача 1

class Person {
    constructor(gender, height) {
        this.gender = gender;
        this.height = height;
    }
}

var iliyana = new Person("female", 159);
var tomas = new Person("male", 190);

var people = [iliyana, tomas];


Person.prototype.toHTML = function () {
    var html = "<ul>" + "<li>" + "Gender: " + this.gender + "</li>" +
        "<li>" + "Gender: " + this.height + "</li>" + "</ul>";
    return html;
}
people.forEach(person => document.write(person.toHTML()));

// задача 2

function quantity(shoppingCart) {
    var quantitySum = 0;
    shoppingCart.forEach(item =>
        quantitySum += item.quantity);
    return quantitySum;
}

function veganQuantity(shoppingCart) {
    var quantitySum = 0;
    shoppingCart.forEach(function (item) {
        if (item.type === "fruit" || item.type === "vegetable") {
            quantitySum += item.quantity;
        }
    });
    return quantitySum;
}