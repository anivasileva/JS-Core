function print(arr){
    let element=arr.pop();

    console.log(arr.filter((e,i)=>i==0 || i%element==0).join('\n'));

}