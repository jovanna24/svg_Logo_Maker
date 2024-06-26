const { Circle } = require('../lib/shapes.js')

describe('Circle', () => {
    test('should throw error if render() is called', () =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});
