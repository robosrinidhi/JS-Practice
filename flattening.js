let arr = [
    [1,2],
    3,
    [
        4,5,[
            6,7,8
        ]
    ],
    9,10
]

//Using Recursion
function flattenArray(arr, depth = 1){
    let output = [];
    arr.forEach((item)=>{
        if(Array.isArray(item) && depth > 0){
            output.push(...flattenArray(item, depth - 1));
        }
        else output.push(item);
    })
    return output;
}

//Using reduce
function flatArray(inputArr){
    let result = inputArr.reduce((acc, curVal)=>{
        return acc.concat(curVal);
    });
    return result;
}

console.log(flatArray(arr));