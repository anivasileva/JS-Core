function rotate(arr){
    let times=arr.pop();
    times=times % arr.length;
    for (let i = 0; i < times; i++) {
        let element=arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}
rotate([1,2,3,4,2]);