import { isString, splitOnWhitespace } from './helpers.js';

export function longest(str) {
    // Útfæra
  
    if (!isString(str)) return '';
    const words = splitOnWhitespace(str);
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
  }


  console.assert(longest("hello my guy") === "hello", "longest: skilar 'hello' fyrir 'hello my guy");
  console.assert(longest("a b") === "a", "ef strengir eru jafnlangir þá velur longest fyrsta streng");
  console.assert(longest("") === "", "ef tómt þá skilar tómt");