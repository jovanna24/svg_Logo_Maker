// const { conditionalExpression } = require("@babel/types");

function createSvg(text, textColor, shape, shapeColor, additionalParams) {

    let svg = '<svg width = "100" height= "100">'; 

    switch (shape) {
        case 'circle': 
            const radius = additionalParams[0]; 
            svg += `<circle cx="50" cy="50" r="${radius}" fill="${shapeColor}" />`; 
            break; 
        case 'square': 
            const sideLength = additionalParams[0]; 
            svg+= `<rect x="10" y="10" width="${sideLength}" height="${sideLength}" fill="${shapeColor}" />`;

            const textX = 10 + sideLength /2; 
            const textY = 10 + sideLength /2; 
            svg+= `<text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;

            break;
        case 'triangle': 
            const base = additionalParams[0]; 
            const height = additionalParams[1];  
            console.log('Triangle base: ', base);
            console.log('Triangle height: ', height);
            svg += `<polygon points="50,${10 + height} ${50 - base / 2}, ${10} ${50 + base / 2}, ${10}" fill="${shapeColor}" />`;
            break; 
        default: 
            console.log('Invalid shape');
            return '';
    }

    svg+= '</svg>';

    return svg;
}

module.exports = { createSvg };
