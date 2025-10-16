/*Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.

Notes
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string*/


//first approach

function stringExpansion(s) {
  let multiplier = 1; 
  let result = '';

  for (let element of s) {
    if (!isNaN(element)) {
      multiplier = parseInt(element); 
    } else {
      result += element.repeat(multiplier);
    }
  }

  return result;
}
console.log(stringExpansion('4D2f3e712y'));
console.log(stringExpansion('7m3j4ik2a'))
console.log(stringExpansion('5919nf3u'))


//second approach but this work only for single digit numbers with single string
function stringExpansion(s) {
  let arr = s.split('');
  let checkType = arr.map(element => (isNaN(element) ? element : parseInt(element)));
  let pairs = [];

  for (let i = 0; i < checkType.length - 1; i++) {
    if (typeof checkType[i] === 'number' && typeof checkType[i + 1] === 'string') {
      pairs.push([checkType[i], checkType[i + 1]]);
    }
  }
  let output =''
  for(let x=0;x<pairs.length;x++){
    let repeat = pairs[x][1].repeat(pairs[x][0])
     output+=repeat
  }
  return output
}

console.log(stringExpansion('4D2f3e712y'));
console.log(stringExpansion('7m3j4ik2a'))
console.log(stringExpansion('5919nf3u'))