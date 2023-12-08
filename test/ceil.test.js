import chai from 'chai';
import ceil from '../src/ceil.js';
const expect = chai.expect;

describe('Round the Rating Up', () => {
  it('rounds up the rating value with precision 2', () => {
    const result = ceil(4.004, 2);
    expect(result).to.equal(4.01);
  });

  it('rounds up a whole number with precision 0', () => {
    const result = ceil(6.004, 0);
    expect(result).to.equal(7);
  });

  it('rounds up to the nearest hundred with precision -2', () => {
    const result = ceil(6040, -2);
    expect(result).to.equal(6100);
  });

  it('handles rounding up a negative number', () => {
    const result = ceil(-3.005, 2);
    expect(result).to.equal(-3);
  });

  it('handles rounding up to a whole number with precision 0', () => {
    const result = ceil(8.999, 0);
    expect(result).to.equal(9);
  });

  it('handles rounding up with precision greater than the number of decimal places', () => {
    const result = ceil(5.123, 5);
    expect(result).to.equal(5.123);
  });
});
