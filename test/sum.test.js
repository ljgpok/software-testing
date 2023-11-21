var chai = require('chai');
var sum = require('../sum.js');
const expect = chai.expect;

describe('Sum', () => {
  it('adds positive numbers', () => {
    const result = sum(3, 4);
    expect(result).to.equal(7);
  });

  it('handles negative numbers', () => {
    const result = sum(-2, 5);
    expect(result).to.equal(3);
  });

  it('handles zero as an addend', () => {
    const result = sum(10, 0);
    expect(result).to.equal(10);
  });

  it('handles floating-point numbers', () => {
    const result = sum(1.5, 2.5);
    expect(result).to.equal(4);
  });

  it('throws TypeError for non-numeric augend', () => {
    expect(() => sum('a', 2)).to.throw(TypeError, 'Only for numbers >:(');
  });

  it('throws TypeError for non-numeric addend', () => {
    expect(() => sum(5, 'b')).to.throw(TypeError, 'Only for numbers >:(');
  });

  it('handles large numbers', () => {
    const result = sum(Number.MAX_SAFE_INTEGER, 1);
    expect(result).to.equal(Number.MAX_SAFE_INTEGER + 1);
  });
});
