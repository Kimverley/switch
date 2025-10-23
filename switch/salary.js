const prompt = require('prompt-sync')();
let level = prompt("Ask the user to enter their employee level (junior, mid, senior, or lead).");
let baseSalary = parseInt(prompt("What is your base salary : "))
let bonus = 0;

switch(level) {
    case "Junior":
    (bonus = baseSalary * .05);
    (totalSalary = baseSalary + bonus)
    console.log("You are a " + level + ", your salary is "
        + bonus + ", your total is " + totalSalary);
    break;

    case "mid":
    (bonus = baseSalary * .05);
    (totalSalary = baseSalary + bonus)
    console.log("You are a " + level + ", your salary is "
        + bonus + ", your total is " + totalSalary);
    break;

        case "Junior":
    (bonus = baseSalary * .10);
    (totalSalary = baseSalary + bonus)
    console.log("You are a " + level + ", your salary is "
        + bonus + ", your total is " + totalSalary);
    break;

        case "Junior":
    (bonus = baseSalary * .15);
    (totalSalary = baseSalary + bonus)
    console.log("You are a " + level + ", your salary is "
        + bonus + ", your total is " + totalSalary);
    break;

    case "Junior":
    (bonus = baseSalary * .20);
    (totalSalary = baseSalary + bonus)
    console.log("You are a " + level + ", your salary is "
        + bonus + ", your total is " + totalSalary);
    break;
    
    default:
      console.log("Invalid");
      break;  


}



