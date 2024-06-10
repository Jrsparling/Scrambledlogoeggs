const inquirer = require("inquirer");
const {triangle, circle, square} = require('./lib/shapes');
const fs = require('fs');

class SVG{
    constructor(){
        this.shape = ''
        this.text = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
    textColor(tColor, text){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${tColor}">${text}</text>`
    }
    generateShape(shape){
        this.generateShape = shape.render()
    };
};
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
        message: 'Enter logo text only uses 1-3 characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter text color.',
        name: 'tColor',
    },
];
// Function that writes file
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Generated logo.svg", fileName));


async function init() {
    const userInput = await inquirer.prompt(questions);

    var userText = "";
    if (userInput.text.length >0 || userInput.text.length < 4) {
        userText = userInput.text;
    } else {
        console.log("Invalid text entry, enter in only 1-3 characters!");
        return;
    };

userShape = userInput["shape"];
console.log("User entered shape: = [" + userShape + "]");
userShapeColor = userInput.sColor;
console.log("User shape's color: = [" + userShapeColor + "]");
console.log("User text: [" + userText + "]");
userTextColor = userInput.tColor;
console.log("User text's color: = ["+ userTextColor +"]");

let userShape;
	if (userShape.toLowerCase() === "triangle") {
		userShape = new triangle();
		console.log("User selected the triangle shape.");
	} else if (userShape.toLowerCase() === "circle") {
		userShape = new circle();
		console.log("User selected the circle shape.");
	} else if (userShape.toLowerCase() === "square") {
		userShape = new square();
		console.log("User selected the square shape.");
	} else {
		console.log("Invalid shape!");
		return;
	}
	userShape.sColor(userShapeColor);

	// Creates new Svg instance and adds shape/text elements
	var svg = new Svg();
	svg.tColor(userText, userTextColor);
	svg.userShape(userShape);
	let svgString = svg.render();
	
	writeToFile(svg_file, svgString);

};
// Function call to initialize app
init();