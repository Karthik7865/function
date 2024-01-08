// convert all the strings to title caps in a string array

// anonymous function

var strArray = ["guvi"];
var titleCaseArray = strArray.map(function(str){
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
})
console.log(titleCaseArray)

// IIFE function

var titleCaseArr = (function(arr){
    return arr.map(function(str){
        return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
    })
})(strArray);
console.log(titleCaseArr);

// Arrow function

var titleCaseArra = strArray.map(str => str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());
console.log(titleCaseArra);