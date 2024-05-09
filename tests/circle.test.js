const { createSvg } = require('../lib/svg.js')

describe('Triangle', () => {
    test('should throw error if render() is called', () =>{
        const triangle = new Triangle (); 
        const err = new Error ('Child class must implement a render() method.')
        expect(triangle.render).toThrow(err);
    });
});
