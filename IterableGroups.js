// Your code here (and the code from the previous exercise)
class GroupIterator{
	constructor(group){
    	this.x = 0;
      	this.group = group.group;
    }
  
  	next(){
    	if(this.x === this.group.length) return {done:true};
      	let value = this.group[this.x];
      this.x++;
      return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function(){
	return new GroupIterator(this);
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c