function addOrRemove(command){
let count=0;
let numbers=[];
    for (let i = 0; i < command.length; i++) {
        count++;
        if(command[i]=='add'){
            numbers.push(count);
        }else{
            numbers.pop();
        }
    }
    if(numbers.length<=0){
        console.log('Empty');
    }else {
        console.log(numbers.join('\n'));
    }
}

addOrRemove(['add','add','add','add'

]);
