import { isString, splitOnWhitespace } from './helpers.js';

export function shortest(str) {
    // Útfæra
    if (!isString(str)) return '';
    const words = splitOnWhitespace(str);
    return words.reduce((shortest, current) => current.length < shortest.length ? current : shortest, words[0] || '');
  }

  console.assert(shortest("ganana sohs ahs") === "ahs", "skilar stysta streng");
  console.assert(shortest("a b") === "a", "skilar fyrsta ef allt er jafn langt");
  console.assert(shortest("") === "", "ef tómt þá skilar tómt");