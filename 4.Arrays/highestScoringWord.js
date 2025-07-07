/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/
function high(x){
  let arr = x.toString().split(' ')
  let arr_sum = []
  for(let word of arr){
    let sum = 0
    for(let letter of word){
      sum +=  letter.toUpperCase().charCodeAt(letter) - 64
    }
   arr_sum.push(sum)
  }
  
  let maxElement = arr_sum.reduce((acc,cur)=> acc > cur ? acc : cur)
  let maxIndex = arr_sum.indexOf(maxElement)
  return arr[maxIndex]
}
console.log(high('man i need a taxi up to ubud'))