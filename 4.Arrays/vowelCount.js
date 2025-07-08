function getCount(str) {
  let arr = str.toString().split('')
  let vowel = ['a','e','u','i','o']
  let getVowel = arr.filter(i=> vowel.includes(i.toLowerCase())).join('')
  return getVowel.length
}
console.log(getCount("mugisha"))