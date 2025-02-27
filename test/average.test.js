const average = require('../src/average');  // Adjust the path if needed

describe('average function tests', () => {

    it('should calculate the correct average for valid inputs', () => {  //wrong
        const arr = [1, 2, 3, 4, 5, -999];
        expect(average(arr, 0, 10)).toEqual({  
            total: { valid: 5, input: 5 }, average: 3 // (1+2+3+4+5) / 5 = 3
        }); 
    });

    it('should return -999 if no valid values are within the range', () => {
        const arr = [11, 12, 13, -999];
        const result = average(arr, 0, 10);
        expect(result.average).toBe(-999);  // No values within range 0-10
    });

    it('should handle empty arrays correctly', () => {
        const arr = [-999];
        const result = average(arr, 0, 10);
        expect(result.average).toBe(-999);  // No valid values
    });

    it('should count valid inputs correctly', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -999];
        const result = average(arr, 0, 10);
        expect(result.total.valid).toBe(10);  // All numbers from 1 to 10 are valid
    });

    it('should stop processing if -999 is encountered before reaching 100 inputs', () => {
        const arr = [1, 2, 3, -999, 4, 5, 6];
        const result = average(arr, 0, 10);
        expect(result.total.input).toBe(4);  // The loop stops at -999, so only 4 elements are processed
    });

    it('should stop processing if 100 inputs are reached before -999', () => {
        const arr = Array(100).fill(5).concat(-999);
        const result = average(arr, 0, 10);
        expect(result.total.input).toBe(100);  // Only 100 inputs are processed even though -999 appears after
    });
});
