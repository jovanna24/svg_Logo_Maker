# SVG Logo Generator

## Table of Contents 
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description <a name="description"></a>
    A command-line application that takes in user input to generate and save a logo as an SVG file. This application allows users in need of a logo to customize one on their own, without the need of a graphic designer. The user can choose from 3 designated shapes for their logo, select a custom shape and text color, as well as input 3 custom characters. This application implements Inquirer, Jest, and Fs File Writer NPMs. 

## Installation <a name="installation"></a>
    To successfully run the application, the inquirer module must be installed by running the following line in your console: npm i inquirer@8.2.4. Additionally, the fs.writeFile Promise module must be installed by running the following line in your console; npm install fs-writefile-promise. Finally, Jest must be installed to test the functionality of each shape class. Jest can be installed by running the following line in your console; npm i jest.

## Usage <a name="usage"></a>
    To run the application, open the integrated terminal and begin by running the following line in the console to create a package.json file: npm init -y. Next, the inquirer, jest, and fs.writefile modules must be installed as described above. Initiate the application by running the following line: node index.js. Follow the prompts as presented and provide all necessary information to create a three-letter logo. 

## Contribution <a name="contribution"></a>
- Example SVG File: https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg 
- Inquirer documentation: https://www.npmjs.com/package/inquirer/v/8.2.4 	
- Fs.writefile documentation: https://www.npmjs.com/package/fs-writefile-promise  	
- Jest documentation: https://jestjs.io/docs/getting-started 
- SVG MDN documentation: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
- BootCampSpot Tutoring Services

## Tests <a name="tests"></a>
    Tests can be found in the "tests" folder. A test for each Shape subclass can be found and initiated by running the following line of code: npm run test.

## License <a name="license"></a>
    N/A

## Questions <a name="questions"></a>
    For any questions, please contact [jovanna24](https://github.com/jovanna24) at jovannajimenez1124@gmail.com.
