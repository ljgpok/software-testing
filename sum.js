/**
 * Sums two numbers
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 */

function sum(augend, addend) {
  if (!(typeof augend === 'number') || !(typeof addend === 'number')) {
    throw new TypeError('Only for numbers >:(');
  } else {
    return augend + addend;
  }
}

module.exports = sum;
