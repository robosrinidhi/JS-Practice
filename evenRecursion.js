// function isEven(num){
//     return num % 2 == 0;
// }
// let n = 11;
// console.log(`The number ${n} is`, isEven(n)?'Even': 'odd');

function recursiveEvenNumber(n){
    if(n == 0){
        return true;
    }
    else if(n == 1){
        return false;
    }
    else if(n > 0){
        return recursiveEvenNumber(n - 2);
    }
    else {
        return recursiveEvenNumber(-n);
    }
}

console.log(recursiveEvenNumber(-11));