const fs = require("fs");
const inquirer = require("inquirer");
// const generateLogo = require("./lib/generateLogo");
const { Triangle, Square, Circle } = require("./lib/shapes");
// const { ifError } = require("assert");
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
  let svgString = "";

  svgString =
    '<svg xmlns="http://www.w3.org/2000/svg” version="1.1" width="300" height="200">';

  svgString += "<g>";

  svgString += `${data.shapes}`;

  let shapeChoice;
  if (data.shapes === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.color}"/>`;
  } else if (data.shapes === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${data.color}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${data.color}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("Generated logo.svg!");
  });
}
function promptuser() {
  inquirer.prompt(questions).then(function (data) {
    if (data.text.length > 3) {
      console.log("Must be three letters");
      promptuser();
    } else {
      var fileName = "logo.svg";
      writeToFile(fileName, data);
    }
  });
}

promptuser();
