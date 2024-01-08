// Sum of all numbers in an array

// anonymous function

let numbers = [1,2,3,4,5];
let sum = 0;

let allnumbers = function(){
    for(i=0; i<numbers.length; i++){
        sum=sum+numbers[i]
    }
    console.log(sum)
    
}
();

// IIFE function

let sum1 =0;
(function(num){
    for(i=0; i<num.length; i++){
        sum1=sum1+num[i]
    
    }
    console.log(sum1);
})([1,2,3,4,5])

// Arrow function

let arr = [1,2,3,4,5]
let sum2 = 0;

let num1 = () => {
    for(i=0; i<arr.length; i++){
        sum2=sum2+arr[i];
    }
    console.log(sum);
}
num1();