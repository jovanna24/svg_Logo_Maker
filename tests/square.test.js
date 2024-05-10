const { Square } = require('../lib/shapes.js')

describe('Square', () => {
    test('should throw error if render() is called', () =>{
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="60" height="60" fill="blue"/>');
    });
});

