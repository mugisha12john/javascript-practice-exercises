/*You are given an array of numbers. Your task is to implement a function called arrayStats that returns an 
object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }*/

function arrayStats(arr){
    if(Array.isArray(arr)){
      const min = arr.sort((a,b)=> a-b)[0]
      const max = arr.sort((a,b)=> b-a)[0]
      const sum = arr.reduce((acc,curr) => acc+curr)
      const average = sum / (arr.length+1)
      return {sum,average,min,max}
    }else{
        return "it's not an array"
    }
}
console.log(arrayStats([1,2,3,4,5,6,7,8,9,10]))
