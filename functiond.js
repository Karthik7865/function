// Return all the prime numbers in an array

// anonymous function

let numbers = [1,2,3,4,5,6,7,8,9,10];

let primeNumbers = numbers.filter(function(num){
    if(num<2){
        return false;
    }
    for(i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
});
console.log(primeNumbers);

// IIFE function

let numbers1 = [1,2,3,4,5,6,7,8,9,10]
let primeNumbers1 = (function(){
    return numbers1.filter(function(num1){
        if(num1<2){
            return false;
        }
        for(i=2; i<num1; i++){
            if(num1%i===0){
                return false;
            }
        }
        return true;
    })
})();
console.log(primeNumbers1);

// Arrow function

let numbers2 = [1,2,3,4,5,6,7,8,9,10];
let primeNumbers2 = numbers2.filter(num2 => {
    if(num2<2){
        return false;
    }
    for(i=2; i<num2; i++){
        if(num2%i===0){
            return false;
        }
    }
    return true;
});
console.log(primeNumbers2);