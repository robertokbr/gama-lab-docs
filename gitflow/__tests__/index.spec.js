const main = require('../index');

// Testing the main function return
describe('main', () => {
    it('should return "calling tech lead"', () => {
        expect(main()).toBe('calling tech lead');
    });
});