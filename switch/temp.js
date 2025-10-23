const prompt = require('prompt-sync')();

let temp = parseInt(prompt("Enter the temperature value:"));

let conversion = prompt("Enter conversion type (C2F or F2C):");


let result;

switch (conversion) {
    case "C2F":
        result = (temp * 9 / 5) + 32;
        console.log(temp + "°C is " + result.toFixed(2) + "°F");
        break;

    case "F2C":
        result = (temp - 32) * 5 / 9;
        console.log(temp + "°F is " + result.toFixed(2) + "°C");
        break;

    default:
        console.log("Invalid");
}