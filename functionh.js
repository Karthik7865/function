// Rotate an array by k times

// anonymous function

let array = [1,2,3,4,5];
let k = 3;

let rotateArray = function(arr, rotations){
    rotations = rotations%arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
}(array, k);

console.log(rotateArray);

// IIFE function

let array1 = [1,2,3,4,5];
let k1 = 4;

let rotateArray1 = (function(arr1, rotations1){
    rotations1 = rotations1%arr1.length;
    return arr1.slice(rotations1).concat(arr1.slice(0, rotations1));
})(array1, k1);

console.log(rotateArray1);