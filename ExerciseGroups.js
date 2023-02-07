class Group {
    // Your code here.
    constructor(){
        this.group = [];
    }
    
    add(value){
        if(!this.has(value)){
          this.group.push(value);
            return this;
      }
    }
    
    delete(value){
        if(this.has(value)){
          this.group = this.group.filter(x => x !== value);
            return this;
      }
    }
    
    has(value){
        return this.group.includes(value);
    }
    
    static from(iterObject){
      let group = new Group;
        for(let value of iterObject){
          group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false