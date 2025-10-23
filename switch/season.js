const prompt = require('prompt-sync')();
let season = prompt("Type any month to figure out season: ");

switch (season) {
   case "December":
   case "January":
   case "February":
      console.log("Winter");
      break;
   
    case "March":
    case "April":
    case "May":
      console.log("Spring");
      break;

    case "June":
    case "July":
    case "August":
    console.log("Summer");
        break;

    case "September":
    case "October":
    case "November":
     console.log("Fall");
      break; 
 
   default: 
      other;
}
