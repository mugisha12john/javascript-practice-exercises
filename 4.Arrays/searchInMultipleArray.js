/*Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

['a','b',['c','d',['e']]] , 'e' --> true
['a','b',['c','d',['e']]] , 'a' --> true
['a','b',['c','d',['e']]] , 'f' --> false*/
function locate(arr,a) {
  return arr.flat(Infinity).includes(a)
}
console.log(locate(['a','b',['c','d',['e']]],'a'));