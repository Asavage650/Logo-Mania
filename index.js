const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./JS library/generateLogo");
const questions = [
  {
    type: "list",
    message: "What shape would you like the logo to be?",
    name: "shapes",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    message: "What color should the shape be?",
    name: "color",
  },
  {
    type: "input",
    message: "Please type 3 charaters for the logo",
    name: "text",
  },
  {
    type: "input",
    message: "What color should the text be?",
    name: "textColor",
  },
];

function writeToFile(fileName, data) {
  const content = generateLogo(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("Generated logo.svg!");
  });
}
function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = "logo.svg";
    writeToFile(fileName, data);
  });
}
init();
