import { isString, splitOnWhitespace } from './helpers.js';

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');


export function vowels(str) {
    // Útfæra
    if (!isString(str)) return 0;
    return str.split('').filter(char => VOWELS.includes(char)).length;
  }

  console.assert(vowels("unga bunga") === 4, 'skilar fjölda sérhljóða');
  console.assert(vowels("") === 0, 'skilar fjölda sérhljóða sen er 0');