function createSvg(text, textColor, shape, shapeColor) {

    let svg = '<svg version="1.1" width = "300" height= "200" xmlns="http://www.w3.org/2000/svg">'; 

    switch (shape) {
        case 'circle': 
            svg += `<circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;  
        break; 

        case 'square': 
            svg += `<rect x="10" y="10" width="60" height="60" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;  
        break; 

        case 'triangle': 
            svg += `<polygon points="100,10 150,190 50,190" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`; 
        break; 

        default: 
            console.log('Invalid shape');
            return '';
    }

    svg+= '</svg>';

    return svg;
}

module.exports = { createSvg };
