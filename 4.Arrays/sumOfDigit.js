/*Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6*/
function digitalRoot(n) {
  while (n > 9) {
    n = n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);
  }
  return n;
}
console.log(digitalRoot(19))