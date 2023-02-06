let arr = ['A','B','C'];

reverseArray = (arr) =>{
    return arr.reverse();
}

reverseArrayInPlace = (arr) =>{
    for(let i=0;i<Math.floor(arr.length/2);i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));