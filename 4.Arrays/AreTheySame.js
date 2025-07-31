/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:*/

function comp(array1, array2){
  if(array1.length === 0 || array1 === null || array2.length === 0 || array2 === null){
    return []
  }
    if(array1.length === 0  || array2.length === 0 ){
    return true
  }
  let doubleArray1 = array1.map(num => num*num).sort((a,b)=>a-b)
  let arr2 = array2.sort((a,b) => a-b)
  if(doubleArray1.length  === arr2.length){
    
  
    let search = arr2.every(num=> doubleArray1.includes(num))
    return search
  }
}
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1,a2))