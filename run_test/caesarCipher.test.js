// caesarCipher.test.js
const caesarCipher = require('../src/caesarCipher');

test('shifts characters in a string', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
