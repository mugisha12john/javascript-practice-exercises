/*You are given a string containing only uppercase letters. 
Your task is to implement a function called compressString that compresses the string by counting the consecutive 
occurrences of each letter and returning a new compressed string.

The compressed string should consist of each letter followed by its count.
 If a letter appears only once consecutively, you should include the count.
*/
function compressString(string){
  let obj = string.split('').reduce((acc,cur)=>{
    acc[cur] = (acc[cur] || 0)+1
    return acc
  },{})
  
  let arr = Object.entries(obj).reduce((acc,[k,v])=>acc+k+v,"")
  return arr
}
console.log(compressString("AAAABBBCCDAA"))