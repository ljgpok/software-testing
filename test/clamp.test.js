import chai from 'chai';
import clamp from '../src/clamp.js';
const expect = chai.expect;

describe('Clamp', () => {
    it('does not modify values between the bounds', () => {
        const result = clamp(9, 1, 12);
        expect(result).to.equal(9)
    });
    it('clamps too low values to the lower bound', () => {
        const result = clamp(2, 5, 12);
        expect(result).to.equal(5)
    });
    it('clamps too high values to the upper bound', () => {
        const result = clamp(100, 5, 12);
        expect(result).to.equal(12)
    });
    it('handles float values', () => {
        const result = clamp(5.2, 9.41, 12.1231);
        expect(result).to.equal(9.41)
    });
    it('handles negative values', () => {
        const result = clamp(-3, -23, -5);
        expect(result).to.equal(-3);
    });
    it('handles extremely large numbers', () => {
        const result = clamp(Number.MAX_SAFE_INTEGER, 2, 10);
        expect(result).to.equal(10);
    });
    it('sends an RangeError when the lower and upper bound are switched', () => {
        expect(() => clamp(9, 12, 5)).to.throw(RangeError, 'The bounds are not acceptable.');
    });
    it('sends a TypeError when you try to clamp something that is not a number', () => {
        expect(() => clamp('c', 'a', 'd')).to.throw(TypeError, 'Only for numbers >:(');
    });
});