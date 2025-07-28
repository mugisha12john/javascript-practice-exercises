/*Given a string s and a character c, return an array of integers representing the shortest distance from the current character in s to c.

Notes
All letters will be lowercase.
If the string is empty, return an empty array.
If the character is not present, return an empty array.
Examples
s = "lovecodewars"
c = "e"
result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

s = "aaaabbbb"
c = "b"
result = [4, 3, 2, 1, 0, 0, 0, 0]

s = ""
c = "b"
result = []

s = "abcde"
c = ""
result = []*/
function shortestToChar(s, c) {
  if (!s || !c || !s.includes(c)) return [];

  const chars = s.split('');
  const positions = [];

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === c) {
      positions.push(i);
    }
  }

  const result = [];
  for (let i = 0; i < chars.length; i++) {
    let minDistance = Infinity;
    for (let pos of positions) {
      const dist = Math.abs(i - pos);
      if (dist < minDistance) minDistance = dist;
    }
    result.push(minDistance);
  }

  return result;
}
console.log(shortestToChar("lovecodewars", "e"));