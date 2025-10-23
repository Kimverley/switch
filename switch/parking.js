const prompt = require('prompt-sync')();

let vehicle = prompt("What is your vehicle type (motorcycle, car, suv, truck) : ");
let parking = parseInt("How long will it be parked? ");

price = 0;

switch (vehicle) {
    case "motorcyle":
    price = 2;
    (total = parking * price)
    console
    break;

    case "car":
    price = 3;
    break;
    case "suv":
    price = 4;
    break;
    case "truck":
    price = 5;
    break;
    
    default:
      console.log("Invalid");
      break; 

}
    if (parking > 5) {
        total += 10.0; 

    }

  console.log("Your " + vehicle + " will be charged " + total + " for " + parking + "hours")