// Dirty code
function findEvenNumbers(numbers) {
//   var evenNumbers = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;


// we can use high-order function like filter
return numbers.filter(num => num%2 ===0)
}
console.log(findEvenNumbers([2,3,4,5,6,1]))