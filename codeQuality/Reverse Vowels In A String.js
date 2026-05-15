// In this kata, your goal is to write a function which will reverse the vowels in a string.
// Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!
function reverseVowels(str) {
  //   const vowel = ["a", "e", "u", "i", "o", "A", "I", "O", "E", "U"];
  //   const reversed = str
  //     .split("")
  //     .reverse()
  //     .filter((letter) => vowel.includes(letter));

  //   let index = 0;
  //   return str
  //     .split("")
  //     .map((letter, i) => {
  //       if (vowel.includes(letter)) {
  //         const word = reversed[index];
  //         index = index + 1;
  //         return word;
  //       }
  //       return letter;
  //     })
  //     .join("");

  //refactor my code by applying code quality rules
    const vowels = "aeuioAUIOE";
    const reversed = [...str]
        .filter((letter) => vowels.includes(letter))
        .reverse();
    let index = 0;
    return [...str]
        .map((char) => {
        return vowels.includes(char) ? reversed[index++] : char;
        })
        .join("");
}
console.log(reverseVowels("Hello!"));
console.log(reverseVowels("Reverse Vowels In A String"));
