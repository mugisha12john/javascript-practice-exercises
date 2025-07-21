/*You are given an array of numbers. Your task is to implement a function called oddSquareRoots that
filters out the even numbers from the array and maps the remaining odd numbers to their square roots.
oddSquaresRoots([9, 12, 36, 49, 81]); // should return [3, 7, 9]
oddSquaresRoots([1, 10, 20, 25, 30]); // should return [1, 5]*/

const numbers= [9, 12, 36, 49, 81]
const odd= numbers.filter(num=> num%2 !== 0)
const squareRoot = odd.map(num=> Math.sqrt(num))
console.log(squareRoot)