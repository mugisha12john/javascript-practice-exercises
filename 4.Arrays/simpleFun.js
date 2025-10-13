/*ou're given a sentence, where each word has different length. Swap the longest word with the shortest one, the 2nd shortest word with the 2nd longest one, and so on.

Note that the resulting sentence should be correct, i.e. it should be capitalized and all words but the first one should contain only lowercase letters (except the word "I").

Input/Output
[input] string sentence
A non-empty string of English letters and whitespace characters.
The words are separated by a single space character and there are no leading or trailing spaces.
[output] a string
Correct sentence with words replaced. It should be capitalized and all words but the first one should contain only lowercase letters (except the word "I").

Examples
For sentence = "I am the best", the output should be "Best the am I"
The word "I" and word "best" exchanged their positions; The word "am" and word "the" exchanged their positions.
For sentence = "I am better than him", the output should be "Better than I am him"
The word "I" and word "better" exchanged their positions; The word "am" and word "than" exchanged their positions; The middle length word "him" remain in its original position.
*/

function replaceWords(sentence) {
  let original = sentence.split(' ')
  let sortAsc = [...original].sort((a, b) => a.length - b.length)
  let sortDesc = [...original].sort((a, b) => b.length - a.length)
  let pairs = []
  for (let i = 0; i < Math.floor(original.length / 2); i++) {
    pairs.push([sortAsc[i], sortDesc[i]])
  }
  let swapped = []
  
  for (let w of original) {
    let newWord = w  
    for (let [a, b] of pairs) {
      if (w === a) newWord = b
      else if (w === b) newWord = a
    }
    swapped.push(newWord)
  }
  swapped = swapped.map((word) => (word.toLowerCase() === 'i' ? 'I' : word.toLowerCase()))
  swapped[0] = swapped[0].charAt(0).toUpperCase() + swapped[0].slice(1)

  return swapped.join(' ')
}
let sentence = "I am better than him"
let s = "I am the best"
console.log(replaceWords(sentence))
console.log(replaceWords(s))