/*Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).

Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:

find([3,6,9,12],12) = 5.*/
function find(arr, n) {
  let result = []
  function combination(index,currentValue,candidate){
      if (candidate.length > arr.length) return
    if(currentValue<0) return 
    if(currentValue === 0){
      result.push([...candidate])
    }
    for(let i=index;i<arr.length;i++){
      candidate.push(arr[i])
      combination(i, currentValue - arr[i],candidate)
      candidate.pop()
    }
    
  }
  combination(0,n,[])
  return result
}
console.log(find([3,6,9,12],12)) //5 as the length
console.log(find([1,2,3],10))
// console.log(find([1,2,3],7))