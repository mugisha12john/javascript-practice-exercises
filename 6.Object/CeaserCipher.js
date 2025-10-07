/*
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

var CaesarCipher = function (shift) {
  this.shift = shift;
};

CaesarCipher.prototype.encode = function (plainText) {
  if (this.shift < 0 || this.shift > 25) return;

  let alphabetic = {
    0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H',
    8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P',
    16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X',
    24: 'Y', 25: 'Z'
  };

  let alphabeticReverse = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7,
    'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15,
    'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23,
    'Y': 24, 'Z': 25
  };

  const plain = plainText.toUpperCase().split('');
  let arr = [];
  let output = [];

  for (let t of plain) {
    if (alphabeticReverse[t] !== undefined) {
      let b = alphabeticReverse[t] + this.shift;
      let x = b % 26; 
      arr.push(x);
    }
  }

  for (let l of arr) {
    output.push(alphabetic[l]);
  }

  return output.join('');
};

CaesarCipher.prototype.decode = function (cipherText) {
  if (this.shift < 0 || this.shift > 25) return;

  let alphabetic = {
    0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H',
    8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P',
    16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X',
    24: 'Y', 25: 'Z'
  };

  let alphabeticReverse = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7,
    'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15,
    'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23,
    'Y': 24, 'Z': 25
  };

  const plain = cipherText.toUpperCase().split('');
  let arr = [];
  let output = [];

  for (let t of plain) {
    if (alphabeticReverse[t] !== undefined) {
      let b = alphabeticReverse[t] - this.shift;
      let x = (b + 26) % 26;
      arr.push(x);
    }
  }

  for (let l of arr) {
    output.push(alphabetic[l]);
  }

  return output.join('');
};

// Test it
var c = new CaesarCipher(5);
console.log(c.encode('elie')); // IPMI
console.log(c.decode('BFKKQJX')); var CaesarCipher = function (shift) {
  this.shift = shift;
};

CaesarCipher.prototype.encode = function (plainText) {
  if (this.shift < 0 || this.shift > 25) return;

  let alphabetic = {
    0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H',
    8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P',
    16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X',
    24: 'Y', 25: 'Z'
  };

  let alphabeticReverse = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7,
    'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15,
    'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23,
    'Y': 24, 'Z': 25
  };

  const plain = plainText.toUpperCase().split('');
  let arr = [];
  let output = [];

  for (let t of plain) {
    if (alphabeticReverse[t] !== undefined) {
      let b = alphabeticReverse[t] + this.shift;
      let x = b % 26; 
      arr.push(x);
    }
  }

  for (let l of arr) {
    output.push(alphabetic[l]);
  }

  return output.join('');
};

CaesarCipher.prototype.decode = function (cipherText) {
  if (this.shift < 0 || this.shift > 25) return;

  let alphabetic = {
    0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H',
    8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P',
    16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X',
    24: 'Y', 25: 'Z'
  };

  let alphabeticReverse = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7,
    'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15,
    'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23,
    'Y': 24, 'Z': 25
  };

  const plain = cipherText.toUpperCase().split('');
  let arr = [];
  let output = [];

  for (let t of plain) {
    if (alphabeticReverse[t] !== undefined) {
      let b = alphabeticReverse[t] - this.shift;
      let x = (b + 26) % 26;
      arr.push(x);
    }
  }

  for (let l of arr) {
    output.push(alphabetic[l]);
  }

  return output.join('');
};

// Test it
var c = new CaesarCipher(5);
console.log(c.encode('elie')); // IPMI
console.log(c.decode('BFKKQJX')); //  returns 'WAFFLES'
console.log(c.encode('Codewars')) //returns 'HTIJBFWX'

