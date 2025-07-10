/*The main idea is to count all the occurring characters in a string. If you have a string like aba, 
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/


function count(string) {
  if(string.length === 0){
    return {}
  }
  else{
    return string.split('').reduce((acc,cur)=>{
      acc[cur] = (acc[cur] || 0)+1
      return acc
    },{})
  }
}
console.log(count('mugisha'))