function calc(array) {
    let result=[];
    for (let arr of array) {
        if(arr<0){
            result.unshift(arr);
        }else{
            result.push(arr);
        }
    }
    for (let res of result) {
        console.log(res);
    }
}

calc([3, -2, 0, -1]);