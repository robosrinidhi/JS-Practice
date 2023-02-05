function minimum(a, b){
    min = a;
    (a-b > b-a)?min = b:min = a;
    return min;

}

console.log(minimum(51,-101));