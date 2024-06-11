const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require('./lib/shapes');
const fs = require('fs');

class SVG{
    constructor(){
        this.userShape = ''
        this.uText = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.selectedShape}
        ${this.uText}</svg>`
    }
    textColor(text, tColor,){
        this.uText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text}">${tColor}</text>`
    }
    selectedShape(shape){
        this.selectedShape = shape.render()
    }
    sColor(sColor){
        this.sColor = sColor.render();
}

// make svg element, then insert text then insert shape, text and shape both have color

}
const questions = [
    {
        type: 'list',
        message: 'Choose logo shape.',
        name: 'shape',
        choices: ["triangle", "circle", "square",]
    },
    {
        type: 'input',
        message: 'Enter shape color.',
        name: 'sColor',
    },
    {
        type: 'input',
        message: 'Enter logo text color.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter logo text.',
        name: 'tColor',
    },
];
// Function that writes file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Generated logo.svg", fileName))};



async function init() {
    var StringSvg = " ";
    var svg_file = "logo.svg";

    const userInput = await inquirer.prompt(questions);

    var userText = " ";
    if (userInput.text.length >0 || userInput.text.length < 4) {
        userText = userInput.text;
    } else {
        console.log("Invalid text entry, enter in only 1-3 characters!");
        return;
    };


console.log("User text: [" + userText + "]");
userTextColor = userInput.tColor;
console.log("User text's color: = ["+ userTextColor +"]");
selectedShape = userInput.shape;
console.log("User entered shape: = [" + selectedShape + "]");
userShapeColor = userInput.sColor;
console.log("User shape's color: = [" + userShapeColor + "]"); 

let userShape;

	if (selectedShape === "Triangle" || selectedShape === "triangle") {
		userShape = new Triangle();
		console.log("User selected the triangle shape.");
	} else if (selectedShape === "Circle"|| selectedShape === "circle") {
		userShape = new Circle();
		console.log("User selected the circle shape.");
	} else if (selectedShape === "Square" || selectedShape === "square") {
		userShape = new Square();
		console.log("User selected the square shape.");
	} else {
		console.log("Invalid shape!");
		return;
	}
	userShape.sColor(userShapeColor);


	// Creates new Svg instance and adds shape/text elements
	var svg = new SVG();
	svg.textColor(userText, userTextColor);
	svg.selectedShape(userShape);
	StringSvg = svg.render();
	

	writeToFile(svg_file, StringSvg);

};
// Function call to initialize app
init();