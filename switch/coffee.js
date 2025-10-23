const prompt = require('prompt-sync')();
let coffeesize =  prompt ("Order coffee-size: ");

let price= 0;

switch(coffeesize){
    case "small":
        price=2.50;
        break;

    case "medium":
        price=3.50
        break;

    case "large":
        price=4.25
        break;
        
    case "extra large":
    price= 5.00
    break;

    default:
        price=0;
}
console.log("Coffe size "+ coffeesize);
console.log("Price $" + price)