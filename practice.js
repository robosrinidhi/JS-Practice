function speak(line){
    console.log(`The ${this.type} Rabit says ${line}`)
}

let whiteRabit = {type:'white', speak};
let brownRabit = {type:'brown', speak};

whiteRabit.speak('Hello world');