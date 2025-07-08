// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

//8¹ + 9²=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

function digPow(n, p){
  if(n > 0 && p > 0){
  let arr = n.toString().split('').map(i=>parseInt(i))
  let arrPower = arr.map((a,i)=> a**(p+i))
  let sum = arrPower.reduce((acc,cur)=> acc + cur)
  return sum % n === 0 ? sum / n : -1;
  } else{
    return "number must be positive"
  }
}

