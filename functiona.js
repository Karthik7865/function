// print Odd numbers in an array

// anonymous function

var arr = [1,2,3,4,5,6,7]
var Odd = function(){
    for (let i = 0; i <arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
();

// IIFE function:   

(function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})([1,2,3,4,5,6,7]);


// Arrow function;

let OddNumbers = () => {
    for(i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
OddNumbers()