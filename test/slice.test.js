import chai from 'chai';
import slice from '../src/slice.js';
const expect = chai.expect;

describe('Slice', () => {
  it('returns the slice of an array from the specified start index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 2);
    expect(result).to.deep.equal([3, 4, 5]);
  });

  it('returns the slice of an array with start and end indices', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 1, 4);
    expect(result).to.deep.equal([2, 3, 4]);
  });

  it('returns an empty array if the start index is greater than the array length', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 10);
    expect(result).to.deep.equal([]);
  });

  it('handles negative start index as an offset from the end of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, -3);
    expect(result).to.deep.equal([3, 4, 5]);
  });

  it('handles negative end index as an offset from the end of the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 1, -2);
    expect(result).to.deep.equal([2, 3]);
  });

  it('returns an empty array if start index is greater than end index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 3, 2);
    expect(result).to.deep.equal([]);
  });

  it('returns a slice with a positive start index and negative end index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = slice(array, 1, -1);
    expect(result).to.deep.equal([2, 3, 4]);
  });

  it('returns an empty array if the input array is empty', () => {
    const array = [];
    const result = slice(array, 1, 4);
    expect(result).to.deep.equal([]);
  });
});
