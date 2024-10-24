
import { isString, splitOnWhitespace } from './helpers.js';
/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
    // Útfæra
    if (!isString(str)) return0;
    return str.split('').filter(char => CONSONANTS.includes(char)).length;
  }

  console.assert(consonants("unga bunga") === 5, 'skilar fjölda samhljóða');
  console.assert(consonants("") === 0, 'skilar fjölda samhljóða sem er 0');
  