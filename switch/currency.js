const prompt = require('prompt-sync')();

let usd = parseInt(prompt("What is the amount in USD: "));
let currency = prompt("What is the target currency (EUR, GBP, JPY, AUD).")

switch (currency){
    case "EUR":
        (convertedAmount = usd * 0.93);
    console.log("Your converted amount is " + convertedAmount);
    break;

    case "GBP":
        (convertedAmount = usd * 0.80);
    console.log("Your converted amount is " + convertedAmount);
    break;

    case "JPY":
        (convertedAmount = usd * 150.20);
    console.log("Your converted amount is " + convertedAmount);
    break;

        case "AUD":
        (convertedAmount = usd * 1.52);
    console.log("Your converted amount is " + convertedAmount);
    break;
    default:
      console.log("Invalid");
      break;  

}