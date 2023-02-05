for(let i=1;i<=100;i++){
    (i%5 == 0 && i%3 == 0)? console.log('fizzbuzz'):
    (i % 3 == 0)?console.log('Fizz'):
    (i%5 == 0)?console.log('Buzz'):
    console.log(i);
}