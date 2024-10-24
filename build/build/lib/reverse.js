import { isString, splitOnWhitespace } from './helpers.js';

export function reverse(str) {
    // Útfæra
    if (!isString(str)) return '';
    return str.split('').reverse().join('');
  }
  
  console.assert(reverse("banana") === "ananab", "snýr streng við");
  console.assert(reverse("why so serious") === "suoires os yhw", "snýr strengjum við");
  