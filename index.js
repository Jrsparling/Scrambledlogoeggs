const inquirer = require("inquirer");
const generateShape = require('./lib/shapes.js');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        message: 'Choose logo shape.',
        name: 'shape',
        choices: ["triangle", "circle", "square",]
    },
    {
        type: 'input',
        message: 'Choose logo color.',
        name: 'color',
    },
    {
        type: 'input',
        message: 'Enter logo text.',
        name: 'text',
    },
];
// Function that receives data
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const SVG = generateShape(data);
        const fileName = `${data.text.toLowerCase().split(' ').join('_')}.svg`;
        fs.writeFile(fileName, SVG, (err) => err ? console.log(err) : console.log("Success! your new logo has been created", fileName));
    });
};
// Function call to initialize app
init();