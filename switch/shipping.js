const prompt = require('prompt-sync')();
let zone = prompt("Enter your shipping zone (local, regional, national, or international)");
let lb = parseInt(prompt("Enter the package weight in pounds(lb) : "))

price = 0;

switch(zone){
    case "local":
    price=2.50;
    (totalcost = lb * price)
    console.log("Your shipping zone is " + zone + " will make " + price + " per " + lb + ", which makes your total cost being " + totalcost)
    break;

    case "regional":
    price=3.50;
    (totalcost = lb * price)
    console.log("Your shipping zone is " + zone + " will make " + price + " per " + lb + ", which makes your total cost being " + totalcost)
    break;

    case "naional":
    price=5.00;
    (totalcost = lb * price)
    console.log("Your shipping zone is " + zone + " will make " + price + " per " + lb + ", which makes your total cost being " + totalcost)
    break;

    case "international":
    price=10.00;
    (totalcost = lb * price)
    console.log("Your shipping zone is " + zone + " will make " + price + " per " + lb + ", which makes your total cost being " + totalcost)
    break;

    default:
      console.log("Invalid");
      break;  

}

 