import { isString, splitOnWhitespace } from './helpers.js';

export function palindrome(str) {
    // Útfæra
    if (!isString(str)) return false;
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  

console.assert(palindrome("bababa") === false, "reverse: skilar false fyrir 'bababa'");
console.assert(palindrome("allir grilla") === true, "reverse: skilar true fyrir 'allir grilla' þrátt fyrir bilið");
