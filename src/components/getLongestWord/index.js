/**
 * @description
 * return longest word in text
 * @param {string} text text
 * @returns {string} longest word
 * @example
 * import getLongestWord from '@bit/joshk.jotils.get-longest-word'
 * export default getLongestWord('abc abcd abcde') // => abcde
 */
export default function getLongestWord(text) {
  const arrayOfWords = text.split(" ");
  let longestWord = "";
  arrayOfWords.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
