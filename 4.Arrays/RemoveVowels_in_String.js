
// remove vowel in string ex person you will return prsn

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = str
  .split('')
  .filter(char => !vowels.includes(char.toLowerCase()))
  .join('');

  return result;
}