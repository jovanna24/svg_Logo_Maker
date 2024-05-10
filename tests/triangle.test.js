const { Triangle } = require('../lib/shapes.js')

describe('Triangle', () => {
    test('should throw error if render() is called', () =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,10 290,190 10,190" fill="blue" />');
    });
});
