/*Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

In Roman numerals:

1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI*/
function solution(number) {
  const romanMap = [
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],      
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],      
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],       
    ["","M","MM","MMM"]                                        
  ];
  const digits = number.toString().split('').reverse(); 
  let result = '';
  for (let i = digits.length - 1; i >= 0; i--) {
    result += romanMap[i][parseInt(digits[i])];
  }
  return result;
}456 = 400+50+6

console.log(solution(1990)); // MCMXC
console.log(solution(2008)); // MMVIII
console.log(solution(510));  // DX
