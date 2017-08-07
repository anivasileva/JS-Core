function firstAndLast(array) {
    let k=array.shift(); //взима и трие първия елемент
    console.log(array.slice(0,k).join(' '));
    console.log(array.slice(array.length-k,array.length).join(' '));
    console.log(array);
}

firstAndLast([2,7,8,9]);