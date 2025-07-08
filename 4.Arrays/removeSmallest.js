function removeSmallest(numbers) {
  if (numbers.length === 0) return [];

  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);

  return numbers.filter((_, i) => i !== index);
}
console.log(removeSmallest([5, 3, 2, 1, 4]));
// function removeSmallest(numbers) {
//   if (numbers.length === 0) return [];

//   let min = Math.min(...numbers); // get smallest number
//   let indexOfMin = numbers.indexOf(min); // find index of first occurrence
//   return numbers.filter((_, index) => index !== indexOfMin); // remove it
// }