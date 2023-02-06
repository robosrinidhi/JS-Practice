function arrayToList([...arr], n=0){
    return (n<arr.length) ? 
        {value:arr[n], rest: arrayToList(arr, n+1)}: 
        null;
}

function listToArray({...list}, arr=[]){
    arr.push(list.value);
    return (list.rest != null)?
        listToArray(list.rest, arr):
        arr;
}
function nth(list, nr) {
    if (nr == 0) {
    return list.value
  } else {
    return nth(list.rest, nr-1)
  }
}
function prepend(el, list) {
    return {value: el, rest: list};
}