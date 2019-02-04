/**
 * @description
 * calculate percentage of value inside another value
 * @param {number} partialValue 
 * @param {number} totalValue 
 * @returns {number} percentage
 * @example
 * import percentageCalculator from '@bit/joshk.jotils.percentage-calculator'
 * export default percentageCalculator(50, 100) // => 50
 */
export default function percentageCalculator(partialValue, totalValue) {
    return (partialValue / totalValue) * 100;
}