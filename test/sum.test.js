const sum = require('../src/sum');

// Grouping test cases for the sum function
describe('sum function', () => {
    // Test for adding two positive numbers
    it('should add two positive numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // Test for adding two negative numbers
    it('should add two negative numbers correctly', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    // Test for adding a positive and a negative number
    it('should add a positive and a negative number correctly', () => {
        expect(sum(5, -3)).toBe(2);
    });
});
