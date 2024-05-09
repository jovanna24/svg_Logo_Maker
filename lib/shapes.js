const inquirer = require('inquirer'); 
const {join} = require ('path'); 
const {writeFile} = require('fs/promises');
const {createSvg} = require('./svg');


class Shape {
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
        switch (this.shape) {
            case 'Circle': 
                const circleSvg = createSvg(this.text, this.textColor, 'circle', this.shapeColor);
                await writeFile('circle_logo.svg', circleSvg); 
                console.log('Generated circle_logo.svg'); 
                break; 
            case 'Square': 
                const squareSvg = createSvg(this.text, this.textColor, 'square', this.shapeColor); 
                await writeFile('square_logo.svg', squareSvg); 
                console.log('Generated square_logo.svg'); 
                break; 
            case 'Triangle': 
                const triangleSvg = createSvg(this.text, this.textColor, 'triangle', this.shapeColor); 
                await writeFile('triangle_logo.svg', triangleSvg); 
                console.log('Generated triangle_logo.svg'); 
                break; 
            default: 
                console.log('Invalid shape selected.'); 
                break;
        }
    }

}

module.exports = Shape;