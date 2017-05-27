function convert([a,b,c]){
    if(a>b && a>c){
        console.log(a);
    }else if(b>a && b>c){
        console.log(b);
    }else console.log(c);
    //Math.max(a,b,c);
}

convert([5,2,7]);