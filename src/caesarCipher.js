// caesarCipher.js
function caesarCipher(str, shift) {
    const shiftChar = (char, shift) => {
      const code = char.charCodeAt(0);
      if (char.match(/[a-z]/)) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else if (char.match(/[A-Z]/)) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      return char;
    };
  
    return str.split('').map(char => shiftChar(char, shift)).join('');
  }
  
  module.exports = caesarCipher;
  