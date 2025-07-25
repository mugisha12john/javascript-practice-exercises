/*You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]*/
function sortArray(array) {
    if(array.length === 0){
      return []
    }
  let oddSort = array.filter(num=> num%2 !== 0).sort((a,b)=>a-b)
  let evenSort = array.filter(num=> num%2 === 0).sort((a,b)=>b-a)
  
  let oddIndex = 0;
  let evenIndex = 0;

  return array.map(num => {
    if (num % 2 !== 0) {
      return oddSort[oddIndex++];
    } else {
      return evenSort[evenIndex++];
    }
  });
}
console.log(sortArray([5, 3, 2, 8, 1, 4] ))