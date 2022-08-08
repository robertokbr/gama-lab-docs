const main = require('../index');

describe('main', () => {
    it('should return "calling tech lead"', () => {
        expect(main()).toBe('calling tech lead');
    });
});