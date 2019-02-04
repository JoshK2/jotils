/**
 * @description
 * function that retrun random color
 * @returns {string} hex color 
 * @example
 * import getRandomColor from '@bit/joshk.jotils.get-random-color'
 * export default getRandomColor() // => #A384E7
 */
export default function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}