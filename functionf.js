// Return median of two sorted arrays of the same size

// anonymous function

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let medianSortedArrays = function(arr1, arr2){
    const mergedArray = [...arr1, ...arr2].sort((a,b) => (a-b))
    const length = mergedArray.length;
    if(length%2===0){
        const middle1 = mergedArray[length/2-1];
        const middle2 = mergedArray[length/2];
        return(middle1 + middle2)/2;
    }else{
        return mergedArray[Math.floor(length/2)];
    }
};
console.log(medianSortedArrays(arr1, arr2));

// IIFE function

let medianSortedArrays1 = (function(arr3, arr4){
    const mergedArray1 = [...arr3, ...arr4].sort((a,b) => (a-b));
    const length = mergedArray1.length;
    if(length%2===0){
        const middle3 = mergedArray1[length/2-1];
        const middle4 = mergedArray1[length/2];
        return (middle3 + middle4)/2;
    }else{
        return mergedArray1[Math.floor(length/2)];
    }
})([1,2,3], [4,5,6]);

console.log(medianSortedArrays1);