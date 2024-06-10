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
function writeFile(fileName, data){
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Generated logo.svg", fileName))};


async function init() {
    const userInput = await inquirer.prompt(questions);

    var userText = "";
    if (userInput.text.length >0 || userInput.text.length < 4) {
        userText = userInput.text;
    } else {
        console.log("Invalid text entry, enter in only 1-3 characters!");
        return;
    };
userShape = userInput.shape;
console.log(userShape, "has been chosen");
userShapeColor = userInput.sColor;
console.log(userShapeColor, "has been chosen");
userText
userTextColor = userInput.tColor;
console.log(userTextColor, "has been chosen");











    .then((data) => {
        const SVG = generateShape(data);
        const fileName = `${data.text.toLowerCase().split(' ').join('_')}.svg`;
        fs.writeFile(fileName, SVG, (err) => err ? console.log(err) : console.log("Success! your new logo has been created", fileName));
    });
};
// Function call to initialize app
init();