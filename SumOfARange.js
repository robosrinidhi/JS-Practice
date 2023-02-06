function sum(arr){
    console.log(arr);
    let total = 0;
    for(let i in arr){
        total = total + arr[i];
    }
    return total;
}

function range(start, end, step){
    if( start < end && step < 0){
        [start, end] = [end, start]
    }
    if(step == null) step = 1;

    var array = [];
    if(step > 0){
        for(var i=start; i<= end; i+= step){
            array.push(i);
        }
    }else{
        for(var i=start; i>= end; i--){
            array.push(i);
        }
    }
    return array;
}

console.log(range(5,2, -1));