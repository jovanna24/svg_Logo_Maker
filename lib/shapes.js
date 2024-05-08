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

        switch (this.shape) {
            case 'Circle': 
                await this.promptCircle(); 
                break;
            case 'Square': 
                await this.promptSquare(); 
                break;
            case 'Triangle': 
                await this.promptTriangle(); 
                break;
            default: 
                console.log('Invalid shape selected.'); 
                break;
        }
    }

    async promptCircle() {
        const userInput = await inquirer.prompt([
            {
                type: 'input', 
                name: 'radius', 
                message: 'Please enter the radius of the circle:',
            },
        ]); 
        this.radius = userInput.radius; 
        await this.createSvg();
    }

    async promptSquare(){
        const userInput = await inquirer.prompt([
            {
                type: 'input', 
                name: 'sideLength', 
                message: 'Please enter the side length of the square: ', 
            },
        ]);
        this.sideLength = userInput.sideLength; 
        await this.createSvg();
    } 

    async promptTriangle() {
        const userInput = await inquirer.prompt([
            {
                type: 'input', 
                name: 'base', 
                message: 'Please enter the base length of the triangle:',
            },
            {
                type: 'input', 
                name: 'height', 
                message: 'Please enter the height of the triangle: ',
            },
        ]);
        this.base = userInput.base; 
        this.height = userInput.height; 

    }

    async createSvg() {
        switch (this.shape) {
            case 'Circle': 
                const circleSvg = createSvg(this.text, this.textColor, 'circle', this.shapeColor, this.radius);
                await writeFile('circle_logo.svg', circleSvg); 
                console.log('Generated circle_logo.svg'); 
                break; 
            case 'Square': 
                const squareSvg = createSvg(this.text, this.textColor, 'square', this.shapeColor, this.sideLength); 
                await writeFile('square_logo.svg', squareSvg); 
                console.log('Generated square_logo.svg'); 
                break; 
            case 'Triangle': 
                const triangleSvg = createSvg(this.text, this.textColor, 'triangle', this.shapeColor, this.base, this.height); 
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