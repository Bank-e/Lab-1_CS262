// test/arrayMatchers.test.js
describe('Array Matcher Examples', () => {
    // Equality check using toEqual
    it('should check that two arrays are equal', () => {
        const actual = [1, 2, 3];
        const expected = [1, 2, 3];
        expect(actual).toEqual(expected);
    });

    // Containment check using toContain
    it('should check that an array contains a specific element', () => {
        const fruits = ['apple', 'banana', 'orange'];
        expect(fruits).toContain('banana');
    });

    // Length check using toHaveLength
    it('should check that the array has the correct length', () => {
        const colors = ['red', 'green', 'blue'];
        expect(colors).toHaveLength(3);
    });

    // Check using arrayContaining to match a subset of elements
    it('should check that an array contains a subset of elements', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(numbers).toEqual(expect.arrayContaining([2, 4]));
    });

    // Combining matchers to check properties of array elements
    it('should verify the type of each element in an array', () => {
        const mixed = [1, 'apple', true];
        expect(typeof mixed[0]).toBe('number');
        expect(typeof mixed[1]).toBe('string');
        expect(typeof mixed[2]).toBe('boolean');
    });
});
