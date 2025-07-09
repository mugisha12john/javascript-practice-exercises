/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in 
the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/
function countBits(n) {
  // take positive input
  // convert into binary representation
  // count number of ones and return it
  if(n > 0){
    let binary = n.toString(2).split('').map(num => parseInt(num))
    let count= binary.reduce((acc,cur)=>{
      acc[cur] = (acc[cur] || 0 ) + 1
      return acc
    },{})
    return count['1']
  }
  else{
    return 0;
  }
}
console.log(countBits(1234))