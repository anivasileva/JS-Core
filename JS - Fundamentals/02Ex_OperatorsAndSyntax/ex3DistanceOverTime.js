function calc([firstSpeed,secondSpeed,time]){
    let first=firstSpeed*time/3600*1000;
    let second=secondSpeed*time/3600*1000;
    let result=Math.abs(first-second);
    console.log(result);
}