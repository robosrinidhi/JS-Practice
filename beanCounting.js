function countBs(str){
    let count = 0;
    for(let s of str.split('')){
        if(s ==='B'){
            count += 1;
        }
    }
    return count;
}

function countChars(str, key){
    let count = 0;
       
    for(let s of str.split('')){
        if(s === key){
            count += 1
        }
    }
    return count;
}

console.log(countChars('BKCBKLNMSMMSM', 'M'));