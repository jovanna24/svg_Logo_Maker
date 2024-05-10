const inquirer = require('inquirer'); 
const {join} = require ('path'); 
const {writeFile} = require('fs/promises');
const {Triangle, Circle, Square} = require ('./shapes.js');


class SVG {
    constructor() {
        this.text = ''; 
        this.textColor = ''; 
        this.shapeColor= '';
        this.shape= '';
    }

   async run () { 
    await this.getUserInput(); 
    await this.createSvg();
   }
    async getUserInput() {
        const userInput = await inquirer.prompt ([ 
            {
                type: 'input', 
                name: 'text', 
                message: 'Please enter three characters', 
            }, 
            {
                type: 'input', 
                name: 'textColor', 
                message: 'Please provide the desired text color of your logo or the appropriate hexadecimal code.',
            },  
            {
                type: 'input', 
                name: 'shapeColor', 
                message: 'Please enter the desired shape color or the appropriate hexadecimal code.'
            },
            {
                type: 'list', 
                name: 'shape', 
                message: 'Please select the desired shape of your logo.', 
                choices: ['Circle', 'Square', 'Triangle'],
            }, 
        ]); 

        this.text = userInput.text; 
        this.textColor = userInput.textColor; 
        this.shapeColor = userInput.shapeColor; 
        this.shape= userInput.shape;
    }

    async createSvg() {

        let newShape;  

        switch (this.shape) {
                case 'Circle': 
                 newShape = new Circle (this.shapeColor)

                    break; 
                case 'Square': 
                 newShape = new Square (this.shapeColor)

                    break; 
                case 'Triangle': 
                 newShape = new Triangle (this.shapeColor)

                    break; 
                default: 
                    console.log('Invalid shape selected.'); 
                    break;
            }
        const template = `
        <svg version="1.1" width = "300" height= "200" xmlns="http://www.w3.org/2000/svg">
        ${newShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
         await writeFile(`./output/${this.shape}_logo.svg`, template); 

        // 
    }

}

module.exports = SVG;