// Return all the palindromes in an array

// anonymous function

let words = ["level", "hello", "radar", "world", "madam"];
let palindromes = words.filter(function(word){
    return word ===
    word.split('').reverse().join('');
});
console.log(palindromes);

// IIFE function

let words1 = ["level", "hello", "radar", "world", "madam"];

let palindromes1 = (function(){
    return words1.filter(function(word1){
        return word1 ===
        word1.split('').reverse().join('');
    });
})();
console.log(palindromes1);

// Arrow function

let words2 = ["level", "hello", "radar", "world", "madam"];

let palindromes2 = words2.filter(word2 => word2 === word2.split('').reverse().join('') );
console.log(palindromes2);

