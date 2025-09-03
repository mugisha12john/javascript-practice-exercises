/*Create a function that takes a string and separates it into a sequence of letters.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

Examples:

sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);*/
function sepStr(str) {
  const words = str.split(' ').map(word => word.split(''));
  const maxLength = Math.max(...words.map(word => word.length));

  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const row = words.map(word => word[i] ?? '');
    result.push(row);
  }

  return result;
}
console.log(sepStr("The Mountain is the powerhouse of the cell"));