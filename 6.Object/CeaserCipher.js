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
  // normalize shift so 26 = 0, 52 = 0, etc.
  this.shift = shift % 26;
};

CaesarCipher.prototype.encode = function (plainText) {
  if (this.shift < 0) return;

  let alphabetic = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
    8: "I",
    9: "J",
    10: "K",
    11: "L",
    12: "M",
    13: "N",
    14: "O",
    15: "P",
    16: "Q",
    17: "R",
    18: "S",
    19: "T",
    20: "U",
    21: "V",
    22: "W",
    23: "X",
    24: "Y",
    25: "Z",
  };
  let alphabeticReverse = Object.fromEntries(
    Object.entries(alphabetic).map(([k, v]) => [v, Number(k)])
  );

  const plain = plainText.toUpperCase().split("");
  let output = [];

  for (let t of plain) {
    if (alphabeticReverse[t] !== undefined) {
      let b = (alphabeticReverse[t] + this.shift) % 26;
      output.push(alphabetic[b]);
    } else {
      // Keep spaces, punctuation, and digits
      output.push(t);
    }
  }
  return output.join("");
};

CaesarCipher.prototype.decode = function (cipherText) {
  if (this.shift < 0) return;

  let alphabetic = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
    8: "I",
    9: "J",
    10: "K",
    11: "L",
    12: "M",
    13: "N",
    14: "O",
    15: "P",
    16: "Q",
    17: "R",
    18: "S",
    19: "T",
    20: "U",
    21: "V",
    22: "W",
    23: "X",
    24: "Y",
    25: "Z",
  };
  let alphabeticReverse = Object.fromEntries(
    Object.entries(alphabetic).map(([k, v]) => [v, Number(k)])
  );

  const cipher = cipherText.toUpperCase().split("");
  let output = [];

  for (let t of cipher) {
    if (alphabeticReverse[t] !== undefined) {
      let b = (alphabeticReverse[t] - this.shift + 26) % 26;
      output.push(alphabetic[b]);
    } else {
      output.push(t);
    }
  }
  return output.join("");
};

// ✅ Tests
var c1 = new CaesarCipher(5);
console.log(c1.encode("NY'X F XMNKY HNUMJW!!")); // => NY'X F XMNKY HNUMJW!!
console.log(c1.decode("NY'X F XMNKY HNUMJW!!")); // same output

var c2 = new CaesarCipher(13);
console.log(c2.encode("MPGS6")); // => MPGS6
console.log(c2.decode("MPGS6")); // => MPGS6

var c3 = new CaesarCipher(26);
console.log(c3.encode("JVJO")); // => JVJO
console.log(c3.decode("JVJO")); // => JVJO

// Test it
var d = new CaesarCipher(5);
console.log(d.encode("elie")); // IPMI
console.log(d.decode("BFKKQJX")); //  returns 'WAFFLES'
console.log(d.encode("Codewars")); //returns 'HTIJBFWX'
