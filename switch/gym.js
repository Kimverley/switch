const prompt = require('prompt-sync')();

let plan = prompt("What is your plan type (monthly, quarterly, semi-annual, annual) : ");
let monthlyRate = parseInt(prompt("Ask for monthly rate : "));

originalcost = 0;

    switch(plan){
        case "monthly":
            (originalcost = 1 * monthlyRate)
            (discountAmount = originalcost * (0/100))
            (finalCost = originalcost - discountAmount)
             console.log("Your " + plan + " will cost " + originalcost + " the discount will be " + discountAmount + ". Your total will be" + finalCost);
             break;

             case "quarterly":
            (originalcost = 3 * monthlyRate)
            (discountAmount = originalcost * (0.05/100))
            (finalCost = originalcost - discountAmount)
             console.log("Your " + plan + " will cost " + originalcost + " the discount will be " + discountAmount + ". Your total will be" + finalCost);
             break;

             case "semi-annual":
            (originalcost = 6 * monthlyRate)
            (discountAmount = originalcost * (0.10/100))
            (finalCost = originalcost - discountAmount)
             console.log("Your " + plan + " will cost " + originalcost + " the discount will be " + discountAmount + ". Your total will be" + finalCost);
             break;

             case "monthly":
            (originalcost = 12 * monthlyRate)
            (discountAmount = originalcost * (0.20/100))
            (finalCost = originalcost - discountAmount)
             console.log("Your " + plan + " will cost " + originalcost + " the discount will be " + discountAmount + ". Your total will be" + finalCost);
             break;

            default:
      console.log("Invalid");
      break;   

    }