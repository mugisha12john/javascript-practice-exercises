function calculateAverage(numbers) {
//   var sum = 0;
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count++;
//   }
//   var average = sum / count;
//   return average;

// first we can use Higher-order f() to calculate the sum
// If we are going to use variable we can use let to create variable

return numbers.reduce((a,b)=> a+b,0) /numbers.length
}
console.log(calculateAverage([2,3,1,4,5]))