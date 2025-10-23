const prompt = require('prompt-sync')();
let movie = prompt("Type movie rating to figure out guideline(G, PG, PG-13, R, NC-17): ");
let guideline = "";


switch (movie) {
    case "G":
      guideline = "General Audiences. All ages admitted.";
      break;
    case "PG":
      guideline = "Parental Guidance Suggested. Some material may not be suitable for children.";
      break;
    case "PG-13":
      guideline = "Parents Strongly Cautioned. Some material may be inappropriate for children under 13.";
      break;
    case "R":
      guideline = "Restricted. Under 17 requires accompanying parent or adult guardian.";
      break;
    case "NC-17":
      guideline = "No one 17 and under admitted.";
      break;
    default:
      guideline = "Invalid rating.";
  }
console.log(guideline)