import chai from 'chai';
import upperFirst from '../src/upperFirst.js';
const expect = chai.expect;

describe('UpperFirst', () => {
  it('converts the first character of `string` to upper case', () => {
    const result = upperFirst('fred');
    expect(result).to.equal('Fred');
  });
  it('converts the first character of `string` to upper case', () => {
    const result = upperFirst('FRED');
    expect(result).to.equal('FRED');
  });
  it('converts the first character of `string` to upper case', () => {
    const result = upperFirst('fRED');
    expect(result).to.equal('FRED');
  });
  it('converts the first character of `string` to upper case', () => {
    const result = upperFirst('fred');
    expect(result).to.not.equal('fred');
  });
  it('converts the first character of `string` to upper case', () => {
    const result = upperFirst('fred');
    expect(result).to.not.equal('fred');
  });
  it('converts the first character of `string` to upper case', () => {
    const result = upperFirst('fred');
    expect(result).to.not.equal('fred');
  });
});

