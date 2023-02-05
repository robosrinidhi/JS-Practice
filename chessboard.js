
let height = 8;
let width = 8;
let board = "";

for(var i=0;i<height;i++){
    if(i>0){ board += '\n';}
    for(var j=0;j<width;j++){
        if((i+j) % 2 == 0){
            board += ' ';
        } else{
            board+='#';
        }
    }
}

console.log(board);