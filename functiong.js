// Remove duplicates from an array

// anonymous function

let array = [1,2,3,2,4,5,1];

let uniqueArray = function(arr){
    return arr.filter(function(value, index, self){
        return self.indexOf(value) === index;
    });
}(array);

console.log(uniqueArray);

// IIFE function
    
let array1 = [1,2,3,2,4,5,1];

let uniqueArray1 = (function(arr1){
    return arr1.filter(function(value, index, self){
        return self.indexOf(value) === index;
    });
})(array1);
console.log(uniqueArray1);

