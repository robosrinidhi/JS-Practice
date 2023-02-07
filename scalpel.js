async function locateScalpel(nest) {
    // Your code here.
    let current = nest.name;
    for(;;){
        let next = await anyStorage(nest, current, 'scalpel');
      if(next == current) return current;
      current = next;
    }
  }
  
  function locateScalpel2(nest) {
    // Your code here.
    function loop(current){
        return anyStorage(next, current, 'scalpel').then(next => {
          if(next == current) return loop(next);
      });
    }
    return loop(nest.name);
  }
  
  locateScalpel(bigOak).then(console.log);
  // → Butcher Shop