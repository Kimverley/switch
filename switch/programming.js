const prompt = require('prompt-sync')();
let name = prompt("Type file extension(.js, .py, .java, .cpp, .html): ");
let file = "";

switch (name) {
    case ".js":
      file = "Javascript";
      break;

       case ".py":
      file = "Python";
      break;

       case ".java":
      file = "Java";
      break;

       case ".cpp":
      file = "C++";
      break;

       case ".html":
      file = "HyperText Markup Language";
      break;


    default:
      file = "Invalid name.";
  }
console.log(file);