/*Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value*/




// my approach i used

// function nthSmallest(arrays, n) {
//   let arr =[]
//   for(num of arrays){
//   for(numbers of num){
//     arr.push(numbers)
//   }
//   }
//   let output= arr.sort((a,b)=> a-b)
//   return output[n-1]
// }
// console.log(nthSmallest([[1,5], [2], [4,8,9]], 4))

// solve this by using rest parameter

function nthSmallest(...arrays) {
    let n = arrays.pop(); // get remove last you can use also slice(0,-1),
    let all = arrays.flat().sort((a, b) => a - b); //flat join sub array into one arrays and then sort it
    return all[n - 1]; //remove -1 because index start from 0
}
console.log(nthSmallest([1,5], [2], [4,8,9], 4))