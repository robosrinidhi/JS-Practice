function every(array, test) {
    // Your code here.
    trackInequality = [];
    for(let item of array){
        if(!test(item)){
          trackInequality.push(true);
      }
    }
    if(trackInequality.length > 0) {
        return false;
    } else {
        return true;
    }
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true