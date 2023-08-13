// capitalize.test.js
const capitalize = require('../src/capitalize');

test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
